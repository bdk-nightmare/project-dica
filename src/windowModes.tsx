import { getCurrentWindow, LogicalSize } from "@tauri-apps/api/window";

export type WindowMode = "splash" | "login" | "main";

interface ModeConfig {
  decorations: boolean; // barra de título
  resizable: boolean;
  width: number;
  height: number;
  minWidth?: number;
  minHeight?: number;
}
const isTauriApp = (): boolean =>
  typeof window !== "undefined" && "__TAURI_INTERNALS__" in window;

const MODES: Record<WindowMode, ModeConfig> = {
  // Sin barra de título, tamaño fijo (coincide con la tarjeta del splash)
  splash: { decorations: false, resizable: false, width: 680, height: 400 },

  // Con barra de título, tamaño fijo
  login: { decorations: true, resizable: false, width: 400, height: 600 },

  // Con barra de título y redimensionable
  main: {
    decorations: true,
    resizable: true,
    width: 1280,
    height: 800,
    minWidth: 1024,
    minHeight: 680,
  },
};

export async function setWindowMode(mode: WindowMode): Promise<void> {
  if (!isTauriApp()) return; // en el navegador no hay ventana que ajustar
  const win = getCurrentWindow();
  const cfg = MODES[mode];

  await win.hide();

  // Limpiar límites anteriores para que no bloqueen el nuevo tamaño.
  await win.setMinSize(null);
  await win.setMaxSize(null);

  // Algunas plataformas (sobre todo Linux) no aplican setSize en ventanas
  // no redimensionables, así que se habilita temporalmente.
  await win.setResizable(true);
  await win.setDecorations(cfg.decorations);
  await win.setSize(new LogicalSize(cfg.width, cfg.height));

  if (cfg.minWidth && cfg.minHeight) {
    await win.setMinSize(new LogicalSize(cfg.minWidth, cfg.minHeight));
  }

  await win.setResizable(cfg.resizable);
  await win.center();

  await win.show();
  await win.setFocus();
}
