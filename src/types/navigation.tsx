export type ModuleId =
  | 'overview'
  | 'pos'
  | 'cash'
  | 'notes'
  | 'products'
  | 'packing'
  | 'unpacking'
  | 'stock'
  | 'customers'
  | 'reports'
  | 'settings';

export interface ModuleHeaderInfo {
  title: string;
  subtitle: string;
}

export const MODULE_HEADERS: Record<ModuleId, ModuleHeaderInfo> = {
  overview: {
    title: 'Panel de Control y Operaciones',
    subtitle: 'Monitoreo de flujo de caja, inventario, empaque y facturación en tiempo real.',
  },
  pos: {
    title: 'Terminal Punto de Venta (POS)',
    subtitle: 'Facturación rápida, lectura de código de barras y cobro multimoneda.',
  },
  cash: {
    title: 'Control de Caja (Entradas y Salidas)',
    subtitle: 'Registro de ingresos, egresos operativos, apertura y arqueo de turno.',
  },
  notes: {
    title: 'Notas de Compra y Venta',
    subtitle: 'Emisión, consulta y control de documentos comerciales y órdenes.',
  },
  products: {
    title: 'Catálogo y Gestión de Productos',
    subtitle: 'Administración de precios, códigos SKU, categorías y márgenes.',
  },
  packing: {
    title: 'Centro de Packing (Empaque de Pedidos)',
    subtitle: 'Preparación, verificación de bultos y etiquetado para despacho.',
  },
  unpacking: {
    title: 'Centro de Unpacking (Recepción de Mercadería)',
    subtitle: 'Desempaque de lotes de proveedores, conteo físico e ingreso a almacén.',
  },
  stock: {
    title: 'Kardex y Movimientos de Stock',
    subtitle: 'Trazabilidad de entradas, salidas, traslados internos y ajustes de inventario.',
  },
  customers: {
    title: 'Directorio de Clientes y Créditos',
    subtitle: 'Gestión de cartera de clientes, historial de compras y cuentas por cobrar.',
  },
  reports: {
    title: 'Reportes Financieros y Analítica',
    subtitle: 'Estadísticas detalladas de rentabilidad, rotación de inventario y cierres.',
  },
  settings: {
    title: 'Configuración General del Sistema',
    subtitle: 'Parámetros de impresora térmica, base de datos híbrida, impuestos y terminales.',
  },
};