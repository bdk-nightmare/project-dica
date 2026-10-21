// Example for src/components/modules/PackingModule.tsx
import React from 'react';
import { Boxes } from 'lucide-react';

export const NotesModule: React.FC = () => {
  return (
    <div className="w-full flex-1 bg-[#141210]/90 border border-stone-800/90 rounded-2xl p-6 flex flex-col justify-between shadow-md">
      <div className="flex items-center justify-between border-b border-stone-800 pb-4">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-amber-500/15 text-amber-400 border border-amber-500/30">
            <Boxes className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-sm font-bold text-white">Órdenes de Empaque Activas</h2>
            <p className="text-xs text-stone-400">Verificación de bultos y generación de etiquetas</p>
          </div>
        </div>
        <button className="px-4 py-2 rounded-xl bg-amber-500 text-stone-950 font-extrabold text-xs cursor-pointer">
          + Nueva Orden de Packing
        </button>
      </div>

      <div className="my-auto text-center text-xs text-stone-400">
        Módulo independiente de Packing cargado desde <code>src/components/modules/PackingModule.tsx</code>
      </div>
    </div>
  );
};