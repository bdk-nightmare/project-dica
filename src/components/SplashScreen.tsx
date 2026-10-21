import React, { useEffect, useState } from 'react';
import { ShieldCheck, Cpu, Database, Sparkles } from 'lucide-react';

interface SplashScreenProps {
  onFinishLoading: () => void;
}

const loadingSteps = [
  'Inicializando motor Darkus Core v2.4...',
  'Cargando módulos de seguridad criptográfica...',
  'Montando caché local y almacenamiento offline...',
  'Sincronizando esquemas de base de datos remota...',
  'Preparando entorno de trabajo y espacio visual...',
];

export const SplashScreen: React.FC<SplashScreenProps> = ({ onFinishLoading }) => {
  const [progress, setProgress] = useState<number>(0);
  const [stepIndex, setStepIndex] = useState<number>(0);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(onFinishLoading, 350);
          return 100;
        }
        return prev + 1;
      });
    }, 55);

    return () => clearInterval(progressInterval);
  }, [onFinishLoading]);

  useEffect(() => {
    const calculatedStep = Math.min(
      Math.floor((progress / 100) * loadingSteps.length),
      loadingSteps.length - 1
    );
    setStepIndex(calculatedStep);
  }, [progress]);

  return (
    <div
      style={{ WebkitAppRegion: 'drag' } as React.CSSProperties}
      className="flex items-center justify-center w-full h-full flex-1 select-none relative overflow-hidden font-sans bg-[#0f0e0d]"
      style={{
        backgroundImage: `
          radial-gradient(circle at 15% 20%, rgba(245, 158, 11, 0.08) 0%, transparent 40%),
          radial-gradient(circle at 85% 80%, rgba(16, 185, 129, 0.07) 0%, transparent 45%),
          radial-gradient(circle at 50% 50%, rgba(28, 25, 23, 1) 100%)
        `,
        backgroundColor: '#0f0e0d',
        WebkitAppRegion: 'drag'
      } as React.CSSProperties}
    >
      {/* Tarjeta Estilo Adobe / Enterprise (Obsidiana Cálida) */}
      <div className="relative w-[680px] h-[400px] rounded-2xl bg-[#141210]/95 border border-stone-800 shadow-[0_25px_70px_-15px_rgba(0,0,0,0.85)] overflow-hidden flex flex-col justify-between p-9 backdrop-blur-xl">
        
        {/* Destello decorativo */}
        <div className="absolute -right-16 -top-16 w-72 h-72 rounded-full bg-gradient-to-br from-amber-500/15 via-orange-500/10 to-emerald-500/10 blur-2xl pointer-events-none" />
        
        <div className="absolute right-8 top-8 flex items-center gap-2 px-3 py-1 rounded-full bg-[#1b1916] border border-stone-800 text-[11px] font-medium text-stone-300">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>Versión 2026 • Compilación 24.1.0</span>
        </div>

        {/* Cabecera de Marca */}
        <div className="flex items-center gap-4 z-10">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-400 via-orange-500 to-amber-600 flex items-center justify-center font-black text-2xl text-stone-950 shadow-[0_0_30px_-5px_rgba(245,158,11,0.4)] border border-amber-400/30">
            D
          </div>
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-amber-400 font-bold block">
              Edición Empresarial
            </span>
            <h1 className="text-3xl font-black text-white tracking-tight">
              Proyecto DICA
            </h1>
          </div>
        </div>

        {/* Descripción Central */}
        <div className="my-auto z-10 max-w-md space-y-3">
          <p className="text-sm text-stone-300 leading-relaxed">
            Punto de venta de alto rendimiento, control de inventario en tiempo real y motor de sincronización híbrido ERP.
          </p>
          <div className="flex items-center gap-5 pt-2 text-xs text-stone-400">
            <span className="flex items-center gap-1.5">
              <Cpu className="w-4 h-4 text-amber-400" /> Acelerado por Hardware
            </span>
            <span className="flex items-center gap-1.5">
              <Database className="w-4 h-4 text-emerald-400" /> Sincronización con la nube
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-sky-400" /> IPC Encriptado
            </span>
          </div>
        </div>

        {/* Barra de Progreso Inferior */}
        <div className="space-y-2.5 z-10">
          <div className="flex justify-between items-center text-xs">
            <span className="text-stone-300 font-mono tracking-tight">
              {loadingSteps[stepIndex]}
            </span>
            <span className="text-amber-400 font-bold font-mono">{progress}%</span>
          </div>

          <div className="w-full h-1.5 bg-[#0f0e0d] rounded-full overflow-hidden border border-stone-800">
            <div
              className="h-full bg-gradient-to-r from-emerald-500 via-amber-400 to-orange-400 transition-all duration-75 ease-out shadow-[0_0_12px_rgba(245,158,11,0.5)]"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="flex justify-between items-center pt-2 text-[11px] text-stone-500">
            <span>© 2026 D-Night Corp. Todos los derechos reservados.</span>
            <span>Estación Comercial Autorizada</span>
          </div>
        </div>
      </div>
    </div>
  );
};