import React, { useState } from 'react';
import { Lock, User, ArrowRight, ShieldAlert, CheckCircle2 } from 'lucide-react';

interface LoginViewProps {
  onLoginSuccess: (username: string) => void;
}

export const LoginView: React.FC<LoginViewProps> = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState<string>('Alexander');
  const [password, setPassword] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isAuthenticating, setIsAuthenticating] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!username.trim() || !password.trim()) {
      setErrorMessage('Por favor, ingrese su usuario de operador y su clave de seguridad.');
      return;
    }

    setIsAuthenticating(true);
    setTimeout(() => {
      setIsAuthenticating(false);
      onLoginSuccess(username);
    }, 500);
  };

  return (
    <div
      className="w-full h-full flex flex-col justify-between p-8 text-stone-100 font-sans select-none relative overflow-hidden bg-[#0f0e0d]"
      style={{
        backgroundImage: `
          radial-gradient(circle at 10% 15%, rgba(245, 158, 11, 0.08) 0%, transparent 45%),
          radial-gradient(circle at 90% 85%, rgba(16, 185, 129, 0.07) 0%, transparent 45%),
          radial-gradient(circle at 50% 50%, rgba(28, 25, 23, 1) 100%)
        `,
        backgroundColor: '#0f0e0d',
      }}
    >
      {/* Identidad de Marca */}
      <div className="flex flex-col items-center text-center mt-2 z-10">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 via-orange-500 to-amber-600 flex items-center justify-center font-black text-xl text-stone-950 shadow-lg shadow-amber-500/20 mb-3 border border-amber-400/30">
          D
        </div>
        <h1 className="text-2xl font-extrabold text-white tracking-tight">
          Proyecto DICA
        </h1>
        <p className="text-xs text-stone-400 mt-1">
          Inicie sesión para acceder al sistema POS y ERP
        </p>
      </div>

      {/* Alerta de Error */}
      {errorMessage && (
        <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-center gap-2.5 text-xs text-rose-400 z-10">
          <ShieldAlert className="w-4 h-4 shrink-0 text-rose-400" />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* Formulario de Credenciales */}
      <form onSubmit={handleSubmit} className="space-y-4 z-10 my-auto">
        <div>
          <label className="block text-xs font-semibold text-stone-300 mb-1.5">
            Usuario Operador
          </label>
          <div className="relative">
            <User className="w-4 h-4 text-stone-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Ingrese su usuario"
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#141210] border border-stone-800 text-sm text-white placeholder-stone-600 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-stone-300 mb-1.5">
            Clave de Seguridad / Contraseña
          </label>
          <div className="relative">
            <Lock className="w-4 h-4 text-stone-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              autoFocus
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#141210] border border-stone-800 text-sm text-white placeholder-stone-600 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all"
            />
          </div>
        </div>

        <div className="flex items-center justify-between text-xs pt-1">
          <label className="flex items-center gap-2 text-stone-400 cursor-pointer">
            <input
              type="checkbox"
              defaultChecked
              className="rounded border-stone-800 bg-stone-900 text-amber-500 focus:ring-0"
            />
            <span>Recordarme</span>
          </label>
          <span className="text-amber-400 hover:underline cursor-pointer">
            Restablecer clave
          </span>
        </div>

        <button
          type="submit"
          disabled={isAuthenticating}
          className="w-full mt-2 py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-400 hover:to-teal-300 text-stone-950 font-black text-sm tracking-wide shadow-[0_0_25px_-5px_rgba(16,185,129,0.4)] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
        >
          <span>{isAuthenticating ? 'VERIFICANDO...' : 'INGRESAR'}</span>
          <ArrowRight className="w-4 h-4 stroke-[2.5]" />
        </button>
      </form>

      {/* Estado del Servidor Inferior */}
      <div className="pt-4 border-t border-stone-800/80 flex items-center justify-between text-[11px] text-stone-400 z-10">
        <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
          <CheckCircle2 className="w-3.5 h-3.5" /> Servidor Conectado
        </span>
        <span className="font-mono">Terminal #01</span>
      </div>
    </div>
  );
};