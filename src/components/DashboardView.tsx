import React, { useState, useRef, useEffect } from 'react';
import {
  LayoutGrid,
  ShoppingCart,
  Package,
  Users,
  BarChart3,
  Settings,
  Bell,
  Search,
  Clock,
  Boxes,
  Truck,
  FileText,
  DollarSign,
  BoxSelect,
  ChevronDown,
  UserCog,
  KeyRound,
  LogOut,
  X,
  Check,
  Shield,
  Mail,
  Phone,
  BadgeCheck
} from 'lucide-react';
import { ModuleId, MODULE_HEADERS } from '../types/navigation';

// Import individual module files
import { OverviewModule } from './modules/OverviewModule';
import { PosModule } from './modules/PosModule';
import { CashModule } from './modules/CashModule';
import { NotesModule } from './modules/NotesModule';
import { ProductsModule } from './modules/ProductsModule';
import { PackingModule } from './modules/PackingModule';

interface NavSection {
  title: string;
  items: {
    id: ModuleId;
    label: string;
    icon: React.ReactNode;
  }[];
}

interface UserProfile {
  fullName: string;
  role: string;
  email: string;
  phone: string;
  terminalId: string;
  status: 'En línea' | 'En pausa' | 'Arqueo de caja';
  quickPin: string;
}

interface DashboardProps {
  onLogout?: () => void;
}

const navigationSections: NavSection[] = [
  {
    title: 'OPERACIÓN DIARIA',
    items: [
      { id: 'overview', label: 'Resumen General', icon: <LayoutGrid className="w-4 h-4" /> },
      { id: 'pos', label: 'Terminal POS (Ventas)', icon: <ShoppingCart className="w-4 h-4" /> },
      { id: 'cash', label: 'Caja (Entradas / Salidas)', icon: <DollarSign className="w-4 h-4" /> },
      { id: 'notes', label: 'Notas Compra / Venta', icon: <FileText className="w-4 h-4" /> },
    ],
  },
  {
    title: 'INVENTARIO & LOGÍSTICA',
    items: [
      { id: 'products', label: 'Gestión de Productos', icon: <Package className="w-4 h-4" /> },
      { id: 'packing', label: 'Packing (Empaque)', icon: <Boxes className="w-4 h-4" /> },
      { id: 'unpacking', label: 'Unpacking (Desempaque)', icon: <BoxSelect className="w-4 h-4" /> },
      { id: 'stock', label: 'Movimientos Stock', icon: <Truck className="w-4 h-4" /> },
    ],
  },
  {
    title: 'ADMINISTRACIÓN',
    items: [
      { id: 'customers', label: 'Directorio Clientes', icon: <Users className="w-4 h-4" /> },
      { id: 'reports', label: 'Reportes y Analítica', icon: <BarChart3 className="w-4 h-4" /> },
      { id: 'settings', label: 'Configuración', icon: <Settings className="w-4 h-4" /> },
    ],
  },
];

export const DashboardView: React.FC<DashboardProps> = ({ onLogout }) => {
  const [activeNav, setActiveNav] = useState<ModuleId>('overview');

  const [userProfile, setUserProfile] = useState<UserProfile>({
    fullName: 'Alexander',
    role: 'Operador Principal',
    email: 'alexander@darkus.system',
    phone: '+51 987 654 321',
    terminalId: 'CAJA-01',
    status: 'En línea',
    quickPin: '4821',
  });

  const [isUserMenuOpen, setIsUserMenuOpen] = useState<boolean>(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState<boolean>(false);
  const [activeModalTab, setActiveModalTab] = useState<'profile' | 'security'>('profile');
  const [formData, setFormData] = useState<UserProfile>(userProfile);
  const [newPassword, setNewPassword] = useState<string>('');
  const [saveSuccess, setSaveSuccess] = useState<boolean>(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsUserMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const getInitials = (name: string): string => {
    const parts = name.trim().split(' ');
    if (parts.length >= 2) {
      return (parts[0][0] + parts[1][0]).toUpperCase();
    }
    return name.slice(0, 2).toUpperCase() || 'OP';
  };

  const openProfileModal = (tab: 'profile' | 'security') => {
    setFormData(userProfile);
    setActiveModalTab(tab);
    setIsUserMenuOpen(false);
    setIsEditModalOpen(true);
  };

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    setUserProfile(formData);
    setSaveSuccess(true);
    setTimeout(() => {
      setSaveSuccess(false);
      setIsEditModalOpen(false);
      setNewPassword('');
    }, 700);
  };

  const statusColorMap = {
    'En línea': 'text-emerald-400 bg-emerald-400',
    'En pausa': 'text-amber-400 bg-amber-400',
    'Arqueo de caja': 'text-sky-400 bg-sky-400',
  };

  // 1. Dynamic Header Title lookup
  const currentHeader = MODULE_HEADERS[activeNav];

  // 2. Dynamic Separate Component Router
  const renderActiveModule = () => {
    switch (activeNav) {
      case 'overview':
        return <OverviewModule onNavigate={setActiveNav} />;
      case 'pos':
        return <PosModule />;
      case 'cash':
        return <CashModule terminalId={userProfile.terminalId} />;
      case 'notes':
        return <NotesModule />;
      case 'products':
        return <ProductsModule />;
      case 'packing':
        return <PackingModule />;
     /* case 'unpacking':
        return <UnpackingModule />;
      case 'stock':
        return <StockModule />;
      case 'customers':
        return <CustomersModule />;
      case 'reports':
        return <ReportsModule />;
      case 'settings':
        return <SettingsModule />;*/
    }
  };

  return (
    <div className="flex w-full h-full flex-1 overflow-hidden bg-transparent text-stone-100 font-sans antialiased text-left select-none relative">
      
      {/* Left Sidebar */}
      <aside className="w-68 bg-[#141210]/95 backdrop-blur-xl border-r border-stone-800/90 flex flex-col justify-between py-5 px-4 shrink-0 z-20 overflow-y-auto">
        <div>
          <div className="flex items-center gap-3.5 px-2 mb-6">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 via-orange-500 to-amber-600 flex items-center justify-center font-black text-lg text-stone-950 shadow-[0_0_20px_rgba(245,158,11,0.35)]">
              D
            </div>
            <div>
              <span className="text-base font-extrabold tracking-tight text-white block leading-none">
                Proyecto DICA
              </span>
              <span className="text-[10px] text-amber-400 font-bold uppercase tracking-widest">
                ERP & POS System
              </span>
            </div>
          </div>

          <div className="relative mb-6 px-1">
            <Search className="w-4 h-4 text-stone-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Buscar módulo o atajo..."
              className="w-full pl-10 pr-3 py-2 rounded-xl bg-[#0f0e0d] border border-stone-800 text-xs text-stone-200 placeholder-stone-500 focus:outline-none focus:border-amber-500 transition-all"
            />
          </div>

          <div className="space-y-5">
            {navigationSections.map((section, idx) => (
              <div key={idx} className="space-y-1">
                <span className="px-2 text-[10px] font-extrabold tracking-wider text-stone-500 block mb-1.5">
                  {section.title}
                </span>
                <div className="space-y-1">
                  {section.items.map((item) => {
                    const isActive = activeNav === item.id;
                    return (
                      <button
                        key={item.id}
                        onClick={() => setActiveNav(item.id)}
                        className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                          isActive
                            ? 'bg-stone-800/90 text-amber-300 shadow-sm border border-stone-700/80 font-bold'
                            : 'text-stone-400 hover:text-stone-200 hover:bg-stone-900/60 border border-transparent'
                        }`}
                      >
                        <span className={isActive ? 'text-amber-400' : 'text-stone-500'}>
                          {item.icon}
                        </span>
                        <span>{item.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-4 mt-4 border-t border-stone-800/80 px-1">
          <div className="p-3 rounded-xl bg-[#0f0e0d] border border-stone-800 space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="text-stone-400 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-amber-400" /> Turno Activo
              </span>
              <span className="text-emerald-400 font-mono font-bold">04h 18m</span>
            </div>
            <div className="w-full h-1 bg-stone-800 rounded-full overflow-hidden">
              <div className="w-[82%] h-full bg-emerald-400" />
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 w-full min-w-0 flex flex-col p-6 overflow-y-auto z-10 gap-5">
        
        {/* Dynamic Top Header */}
        <header className="w-full flex items-center justify-between bg-[#141210]/90 backdrop-blur-xl border border-stone-800/90 rounded-2xl px-6 py-3.5 shadow-md shrink-0 relative z-30">
          <div>
            <h1 className="text-xl font-black text-white tracking-tight">
              {currentHeader.title}
            </h1>
            <p className="text-xs text-stone-400">
              {currentHeader.subtitle}
            </p>
          </div>

          <div className="flex items-center gap-4">
            <button className="relative p-2.5 rounded-xl bg-[#0f0e0d] border border-stone-800 text-stone-300 hover:text-white hover:border-stone-700 transition-colors cursor-pointer">
              <Bell className="w-4 h-4" />
              <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-emerald-400" />
            </button>

            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setIsUserMenuOpen((prev) => !prev)}
                className={`flex items-center gap-3 pl-2.5 pr-3 py-1.5 rounded-xl border transition-all cursor-pointer ${
                  isUserMenuOpen
                    ? 'bg-stone-800/90 border-amber-500/50 shadow-[0_0_15px_rgba(245,158,11,0.15)]'
                    : 'bg-[#0f0e0d] border-stone-800 hover:border-stone-700'
                }`}
              >
                <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-amber-500 to-emerald-400 p-0.5 shrink-0">
                  <div className="w-full h-full rounded-[6px] bg-stone-950 flex items-center justify-center text-xs font-extrabold text-white">
                    {getInitials(userProfile.fullName)}
                  </div>
                </div>
                <div className="text-left">
                  <span className="text-xs font-bold text-white block leading-none">
                    {userProfile.fullName}
                  </span>
                  <span className={`text-[10px] font-medium flex items-center gap-1 mt-1 ${statusColorMap[userProfile.status].split(' ')[0]}`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${statusColorMap[userProfile.status].split(' ')[1]}`} />
                    {userProfile.role}
                  </span>
                </div>
                <ChevronDown
                  className={`w-4 h-4 text-stone-400 transition-transform duration-200 ${
                    isUserMenuOpen ? 'rotate-180 text-amber-400' : ''
                  }`}
                />
              </button>

              {/* User Dropdown */}
              {isUserMenuOpen && (
                <div className="absolute right-0 mt-2.5 w-72 rounded-2xl bg-[#181614] border border-stone-700/90 shadow-[0_20px_50px_rgba(0,0,0,0.85)] p-2 z-50 backdrop-blur-xl">
                  <div className="p-3 rounded-xl bg-[#110f0e] border border-stone-800/80 mb-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-white">{userProfile.fullName}</span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/15 text-amber-300 border border-amber-500/30 font-bold">
                        {userProfile.terminalId}
                      </span>
                    </div>
                    <span className="text-[11px] text-stone-400 block mt-0.5">{userProfile.email}</span>
                  </div>

                  <div className="space-y-1">
                    <button
                      type="button"
                      onClick={() => openProfileModal('profile')}
                      className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-semibold text-stone-200 hover:bg-stone-800/80 hover:text-amber-300 transition-colors cursor-pointer"
                    >
                      <UserCog className="w-4 h-4 text-amber-400" />
                      <div className="text-left">
                        <span className="block">Editar Perfil de Usuario</span>
                        <span className="text-[10px] text-stone-400 font-normal">Nombre, cargo, correo y teléfono</span>
                      </div>
                    </button>

                    <button
                      type="button"
                      onClick={() => openProfileModal('security')}
                      className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-semibold text-stone-200 hover:bg-stone-800/80 hover:text-amber-300 transition-colors cursor-pointer"
                    >
                      <KeyRound className="w-4 h-4 text-emerald-400" />
                      <div className="text-left">
                        <span className="block">Seguridad y PIN de Caja</span>
                        <span className="text-[10px] text-stone-400 font-normal">Cambiar contraseña y PIN rápido</span>
                      </div>
                    </button>
                  </div>

                  <div className="my-1.5 border-t border-stone-800/80" />

                  <button
                    type="button"
                    onClick={() => {
                      setIsUserMenuOpen(false);
                      onLogout?.();
                    }}
                    className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-semibold text-rose-400 hover:bg-rose-500/15 transition-colors cursor-pointer"
                  >
                    <LogOut className="w-4 h-4" />
                    <span>Cerrar sesión</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* Renders the external module file selected */}
        {renderActiveModule()}
      </main>

      {/* User Edit Modal remains intact here */}
      {isEditModalOpen && (
        <div className="fixed inset-0 bg-black/75 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          {/* ... (Keep your existing modal form JSX here) ... */}
        </div>
      )}
    </div>
  );
};