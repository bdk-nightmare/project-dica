import React from 'react';
import { ArrowDownLeft, ArrowUpRightSquare } from 'lucide-react';

interface CashModuleProps {
  terminalId: string;
}

export const CashModule: React.FC<CashModuleProps> = ({ terminalId }) => {
  return (
    <div className="w-full flex-1 flex flex-col gap-5">
      <div className="grid grid-cols-3 gap-5">
        <div className="bg-[#141210]/90 border border-stone-800 rounded-2xl p-5">
          <span className="text-xs text-stone-400 uppercase font-bold">Saldo Efectivo en Caja</span>
          <div className="text-3xl font-black text-emerald-400 my-2">$3,420.00</div>
          <span className="text-xs text-stone-500">Apertura de turno: $500.00</span>
        </div>
        <div className="bg-[#141210]/90 border border-stone-800 rounded-2xl p-5">
          <span className="text-xs text-stone-400 uppercase font-bold">Total Entradas (Ingresos)</span>
          <div className="text-3xl font-black text-white my-2">+$3,105.00</div>
          <span className="text-xs text-emerald-400">▲ 38 cobros registrados</span>
        </div>
        <div className="bg-[#141210]/90 border border-stone-800 rounded-2xl p-5">
          <span className="text-xs text-stone-400 uppercase font-bold">Total Salidas (Egresos)</span>
          <div className="text-3xl font-black text-rose-400 my-2">-$185.00</div>
          <span className="text-xs text-rose-400">▼ 3 pagos a proveedores / flete</span>
        </div>
      </div>

      <div className="flex-1 bg-[#141210]/90 border border-stone-800 rounded-2xl p-6 flex flex-col justify-between">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-base font-bold text-white">Registro de Movimientos de Caja</h3>
          <div className="flex gap-3">
            <button className="px-4 py-2 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-bold flex items-center gap-2 cursor-pointer">
              <ArrowDownLeft className="w-4 h-4" /> Registrar Entrada Dinero
            </button>
            <button className="px-4 py-2 rounded-xl bg-rose-500/20 border border-rose-500/40 text-rose-300 text-xs font-bold flex items-center gap-2 cursor-pointer">
              <ArrowUpRightSquare className="w-4 h-4" /> Registrar Salida Dinero
            </button>
          </div>
        </div>
        <p className="text-xs text-stone-400 my-auto text-center">
          Seleccione "Registrar Entrada" o "Registrar Salida" para afectar el saldo de la Terminal {terminalId}.
        </p>
      </div>
    </div>
  );
};