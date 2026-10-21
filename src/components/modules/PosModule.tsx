import React from 'react';
import { Barcode, Plus, Trash2 } from 'lucide-react';

export const PosModule: React.FC = () => {
  return (
    <div className="w-full flex-1 grid grid-cols-12 gap-5 min-h-0">
      <div className="col-span-8 bg-[#141210]/90 border border-stone-800/90 rounded-2xl p-5 flex flex-col gap-4 shadow-md">
        <div className="flex gap-3">
          <div className="relative flex-1">
            <Barcode className="w-5 h-5 text-amber-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Escanear código de barras o buscar producto por nombre (F3)..."
              autoFocus
              className="w-full pl-11 pr-4 py-3 rounded-xl bg-[#0f0e0d] border border-stone-700/80 text-sm text-white placeholder-stone-500 focus:outline-none focus:border-amber-400"
            />
          </div>
          <button className="px-4 py-3 rounded-xl bg-stone-800 hover:bg-stone-700 text-xs font-bold text-amber-300 cursor-pointer">
            Categorías
          </button>
        </div>

        <div className="grid grid-cols-3 gap-3.5 overflow-y-auto pr-1">
          {[
            { sku: 'CAN-001', name: 'Canasta Plástica Reforzada Grande', price: '$18.50', stock: '140 uds.' },
            { sku: 'CAN-002', name: 'Canasta Calada Multiuso Mediana', price: '$12.00', stock: '85 uds.' },
            { sku: 'CAN-003', name: 'Cesto Organizador Industrial', price: '$24.00', stock: '42 uds.' },
            { sku: 'CAN-004', name: 'Jaba Cosechera Apilable 35Kg', price: '$32.00', stock: '64 uds.' },
            { sku: 'CAN-005', name: 'Contenedor Plástico con Tapa', price: '$19.90', stock: '53 uds.' },
            { sku: 'CAN-006', name: 'Pack x12 Canastas Mercado', price: '$125.00', stock: '19 packs' },
          ].map((prod) => (
            <div
              key={prod.sku}
              className="p-4 rounded-xl bg-[#0f0e0d] border border-stone-800 hover:border-amber-500/50 transition-all cursor-pointer flex flex-col justify-between group"
            >
              <div>
                <div className="flex justify-between items-center text-[10px] font-mono text-stone-500 mb-1">
                  <span>{prod.sku}</span>
                  <span className="text-emerald-400">{prod.stock}</span>
                </div>
                <h4 className="text-xs font-bold text-white group-hover:text-amber-300 transition-colors">
                  {prod.name}
                </h4>
              </div>
              <div className="flex items-center justify-between mt-4 pt-2 border-t border-stone-800/70">
                <span className="text-base font-black text-white">{prod.price}</span>
                <span className="p-1.5 rounded-lg bg-amber-500/15 text-amber-400">
                  <Plus className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="col-span-4 bg-[#141210]/90 border border-stone-800/90 rounded-2xl p-5 flex flex-col justify-between shadow-xl">
        <div>
          <div className="flex items-center justify-between pb-3 border-b border-stone-800">
            <div>
              <h3 className="text-sm font-extrabold text-white">Ticket de Venta #00492</h3>
              <span className="text-xs text-stone-400">Cliente: Público General</span>
            </div>
            <button className="p-2 rounded-lg text-rose-400 hover:bg-rose-500/10 cursor-pointer">
              <Trash2 className="w-4 h-4" />
            </button>
          </div>

          <div className="space-y-2.5 my-4">
            <div className="flex justify-between items-center p-2.5 rounded-xl bg-[#0f0e0d] border border-stone-800 text-xs">
              <div>
                <span className="font-bold text-white block">2x Canasta Plástica Grande</span>
                <span className="text-stone-500">$18.50 c/u</span>
              </div>
              <span className="font-extrabold text-white">$37.00</span>
            </div>
            <div className="flex justify-between items-center p-2.5 rounded-xl bg-[#0f0e0d] border border-stone-800 text-xs">
              <div>
                <span className="font-bold text-white block">1x Jaba Cosechera Apilable</span>
                <span className="text-stone-500">$32.00 c/u</span>
              </div>
              <span className="font-extrabold text-white">$32.00</span>
            </div>
          </div>
        </div>

        <div className="space-y-3 pt-4 border-t border-stone-800">
          <div className="flex justify-between text-xs text-stone-400">
            <span>Subtotal</span>
            <span>$69.00</span>
          </div>
          <div className="flex justify-between text-xl font-black text-white">
            <span>Total a Cobrar</span>
            <span className="text-emerald-400">$69.00</span>
          </div>
          <button className="w-full py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 text-stone-950 font-black text-sm cursor-pointer shadow-lg">
            PROCESAR PAGO (ESPACIO)
          </button>
        </div>
      </div>
    </div>
  );
};