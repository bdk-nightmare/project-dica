import React, { useState } from 'react';
import {
  ArrowUpRight,
  Receipt,
  ShoppingCart,
  Boxes,
  BoxSelect,
  Wallet,
  FileText,
  Sparkles
} from 'lucide-react';
import { ModuleId } from '../../types/navigation';

interface OverviewModuleProps {
  onNavigate: (moduleId: ModuleId) => void;
}

const kpiMetrics = [
  {
    id: 'daily-sales',
    title: 'Ventas del Día',
    value: '$12,450.00',
    changeText: '▲ +12.5% vs ayer',
    isTrendingUp: true,
    subtitle: '42 transacciones en la última hora',
  },
  {
    id: 'average-ticket',
    title: 'Ticket Promedio',
    value: '$84.12',
    changeText: '▼ -3.2% vs ayer',
    isTrendingUp: false,
    subtitle: 'Meta objetivo: $88.00',
  },
  {
    id: 'daily-orders',
    title: 'Operaciones Hoy',
    value: '148',
    changeText: '▲ +8.4% vs ayer',
    isTrendingUp: true,
    subtitle: '98.6% efectividad de despacho',
  },
];

const recentTransactions = [
  {
    id: 'NV-9041',
    time: '10:42 AM',
    customerName: 'Arthur Pendelton',
    operationType: 'Nota de Venta',
    paymentMethod: 'Tarjeta •••• 4821',
    itemsCount: 6,
    amount: '$1,450.00',
    status: 'Completado' as const,
  },
  {
    id: 'PK-9040',
    time: '10:15 AM',
    customerName: 'Distribuidora Central',
    operationType: 'Orden de Packing',
    paymentMethod: 'Transferencia',
    itemsCount: 24,
    amount: '$320.00',
    status: 'Pendiente' as const,
  },
  {
    id: 'CJ-9039',
    time: '09:50 AM',
    customerName: 'Elena Rostova',
    operationType: 'Ingreso Caja',
    paymentMethod: 'Efectivo Ventanilla',
    itemsCount: 1,
    amount: '$89.50',
    status: 'Anulado' as const,
  },
];

export const OverviewModule: React.FC<OverviewModuleProps> = ({ onNavigate }) => {
  const [activeRange, setActiveRange] = useState<'Día' | 'Semana' | 'Mes'>('Día');

  return (
    <div className="w-full flex-1 grid grid-cols-12 gap-5 min-h-0">
      {/* Left 8 Cols */}
      <div className="col-span-8 flex flex-col gap-5">
        <div className="grid grid-cols-3 gap-4 shrink-0">
          {kpiMetrics.map((metric) => (
            <div
              key={metric.id}
              className="bg-[#141210]/90 border border-stone-800/90 rounded-2xl p-5 flex flex-col justify-between shadow-md"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wider text-stone-400">
                  {metric.title}
                </span>
                <ArrowUpRight className="w-4 h-4 text-stone-500" />
              </div>
              <div className="text-3xl font-black text-white my-2 tracking-tight">
                {metric.value}
              </div>
              <div className="flex flex-col gap-1.5">
                {/* Bottom text is green if going up and red if going down */}
                <div
                  className={`inline-flex items-center self-start px-2.5 py-0.5 rounded-md text-xs font-bold border ${
                    metric.isTrendingUp
                      ? 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30'
                      : 'bg-rose-500/15 text-rose-400 border-rose-500/30'
                  }`}
                >
                  <span>{metric.changeText}</span>
                </div>
                <span className="text-[11px] text-stone-500">{metric.subtitle}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-[#141210]/90 border border-stone-800/90 rounded-2xl p-5 shadow-md flex flex-col justify-between shrink-0">
          <div className="flex justify-between items-center mb-2">
            <div>
              <h2 className="text-base font-bold text-white">Ritmo de Ventas e Ingresos</h2>
              <p className="text-xs text-stone-400">Velocidad de transacciones en el turno actual</p>
            </div>
            <div className="flex bg-[#0f0e0d] p-1 rounded-xl border border-stone-800 text-xs">
              {(['Día', 'Semana', 'Mes'] as const).map((period) => (
                <button
                  key={period}
                  onClick={() => setActiveRange(period)}
                  className={`px-3 py-1 rounded-lg font-semibold transition-all cursor-pointer ${
                    activeRange === period
                      ? 'bg-stone-800 text-amber-300 shadow-sm'
                      : 'text-stone-400 hover:text-white'
                  }`}
                >
                  {period}
                </button>
              ))}
            </div>
          </div>

          <div className="w-full h-36 relative pt-2">
            <svg className="w-full h-full overflow-visible" viewBox="0 0 700 140" preserveAspectRatio="none">
              <defs>
                <linearGradient id="warmArea" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#141210" stopOpacity="0.0" />
                </linearGradient>
                <linearGradient id="warmLine" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#34d399" />
                  <stop offset="100%" stopColor="#f59e0b" />
                </linearGradient>
              </defs>
              <line x1="0" y1="30" x2="700" y2="30" stroke="#292524" strokeDasharray="4 4" />
              <line x1="0" y1="75" x2="700" y2="75" stroke="#292524" strokeDasharray="4 4" />
              <line x1="0" y1="120" x2="700" y2="120" stroke="#292524" strokeDasharray="4 4" />
              <path
                d="M 10 120 Q 90 60, 150 72 T 270 50 T 390 75 T 500 25 T 620 45 T 690 15 L 690 130 L 10 130 Z"
                fill="url(#warmArea)"
              />
              <path
                d="M 10 120 Q 90 60, 150 72 T 270 50 T 390 75 T 500 25 T 620 45 T 690 15"
                fill="none"
                stroke="url(#warmLine)"
                strokeWidth="3.5"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>

        <div className="flex-1 bg-[#141210]/90 border border-stone-800/90 rounded-2xl p-5 shadow-md flex flex-col justify-between">
          <div className="flex items-center justify-between mb-3">
            <div>
              <h2 className="text-base font-bold text-white">Últimos Movimientos Operativos</h2>
              <p className="text-xs text-stone-400">Ventas, notas de despacho y movimientos de caja</p>
            </div>
            <button
              onClick={() => onNavigate('notes')}
              className="text-xs text-amber-400 hover:underline cursor-pointer font-semibold"
            >
              Ver historial completo →
            </button>
          </div>

          <div className="space-y-2.5 my-auto">
            {recentTransactions.map((trx) => (
              <div
                key={trx.id}
                className="flex items-center justify-between p-3 rounded-xl bg-[#0f0e0d] border border-stone-800/80 hover:border-stone-700 transition-colors"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-stone-800/80 flex items-center justify-center text-amber-400">
                    <Receipt className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-white">{trx.customerName}</span>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-stone-800 text-stone-300 font-semibold">
                        {trx.operationType}
                      </span>
                      <span className="text-[11px] font-mono text-stone-500">{trx.id}</span>
                    </div>
                    <span className="text-xs text-stone-400">
                      {trx.time} • {trx.paymentMethod} • {trx.itemsCount} uds.
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <span className="text-sm font-extrabold text-white">{trx.amount}</span>
                  <span
                    className={`px-3 py-1 rounded-lg text-xs font-bold border ${
                      trx.status === 'Completado'
                        ? 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30'
                        : trx.status === 'Pendiente'
                        ? 'bg-amber-500/15 text-amber-300 border-amber-500/30'
                        : 'bg-rose-500/15 text-rose-400 border-rose-500/30'
                    }`}
                  >
                    {trx.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right 4 Cols */}
      <div className="col-span-4 flex flex-col gap-5">
        <div className="bg-gradient-to-b from-[#1b1916] to-[#141210] border border-stone-700/80 rounded-2xl p-6 shadow-xl shrink-0">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block mb-1">
            Acceso Directo
          </span>
          <h2 className="text-xl font-extrabold text-white mb-4">Centro de Operaciones</h2>

          <button
            onClick={() => onNavigate('pos')}
            className="w-full py-4 px-5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-400 hover:to-teal-300 text-stone-950 font-black text-sm tracking-wide shadow-[0_10px_25px_-5px_rgba(16,185,129,0.4)] transition-all cursor-pointer flex items-center justify-between mb-3.5"
          >
            <span className="flex items-center gap-2">
              <ShoppingCart className="w-4 h-4 stroke-[2.5]" />
              <span>NUEVA VENTA</span>
            </span>
            <span className="px-2 py-0.5 rounded bg-stone-950/20 text-stone-950 font-mono text-xs font-bold">
              F12
            </span>
          </button>

          <div className="grid grid-cols-2 gap-2.5">
            <button
              onClick={() => onNavigate('packing')}
              className="p-3.5 rounded-xl bg-[#0f0e0d] hover:bg-stone-800/80 border border-stone-800 text-left transition-colors cursor-pointer"
            >
              <Boxes className="w-4 h-4 text-amber-400 mb-1.5" />
              <span className="text-xs font-bold text-white block">Packing</span>
              <span className="text-[10px] text-stone-500">Empaque pedidos</span>
            </button>

            <button
              onClick={() => onNavigate('unpacking')}
              className="p-3.5 rounded-xl bg-[#0f0e0d] hover:bg-stone-800/80 border border-stone-800 text-left transition-colors cursor-pointer"
            >
              <BoxSelect className="w-4 h-4 text-emerald-400 mb-1.5" />
              <span className="text-xs font-bold text-white block">Unpacking</span>
              <span className="text-[10px] text-stone-500">Recepción mercadería</span>
            </button>

            <button
              onClick={() => onNavigate('cash')}
              className="p-3.5 rounded-xl bg-[#0f0e0d] hover:bg-stone-800/80 border border-stone-800 text-left transition-colors cursor-pointer"
            >
              <Wallet className="w-4 h-4 text-amber-400 mb-1.5" />
              <span className="text-xs font-bold text-white block">Flujo de Caja</span>
              <span className="text-[10px] text-stone-500">Entradas y salidas</span>
            </button>

            <button
              onClick={() => onNavigate('notes')}
              className="p-3.5 rounded-xl bg-[#0f0e0d] hover:bg-stone-800/80 border border-stone-800 text-left transition-colors cursor-pointer"
            >
              <FileText className="w-4 h-4 text-emerald-400 mb-1.5" />
              <span className="text-xs font-bold text-white block">Emitir Nota</span>
              <span className="text-[10px] text-stone-500">Compra / Venta</span>
            </button>
          </div>
        </div>

        <div className="flex-1 bg-[#141210]/90 border border-stone-800/90 rounded-2xl p-6 shadow-md flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2.5">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" /> Meta Diaria de Turno
              </span>
              <span className="text-sm font-black text-white">82%</span>
            </div>
            <div className="w-full h-2.5 bg-[#0f0e0d] rounded-full overflow-hidden p-0.5 border border-stone-800">
              <div className="w-[82%] h-full bg-gradient-to-r from-emerald-500 to-amber-400 rounded-full" />
            </div>
            <p className="text-xs text-stone-300 mt-3 leading-relaxed">
              Excelente ritmo operativo. Faltan <strong className="text-amber-300">$2,150.00</strong> para alcanzar el objetivo del turno.
            </p>
          </div>

          <div className="space-y-2.5 pt-4 border-t border-stone-800/80 text-xs">
            <div className="flex items-center justify-between">
              <span className="text-stone-400">Efectivo en Caja #01</span>
              <span className="font-mono font-bold text-emerald-400">$3,420.00</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-stone-400">Salidas / Gastos Hoy</span>
              <span className="font-mono font-bold text-rose-400">-$185.00</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};