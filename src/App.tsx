import React, { useCallback, useState } from 'react';
import { SplashScreen } from './components/SplashScreen';
import { setWindowMode, type WindowMode } from './windowModes';

import "./App.css"
import { LoginView } from './components/LoginView';
import { DashboardView } from './components/DashboardView';
// Cuando existan, importa aquí tus pantallas reales:
// import { LoginScreen } from './LoginScreen';
// import { MainLayout } from './MainLayout';

const App: React.FC = () => {
  const [screen, setScreen] = useState<WindowMode>('splash');

  // Primero se prepara la ventana y luego se muestra la pantalla nueva.
  const goTo = useCallback(async (next: WindowMode) => {
    await setWindowMode(next);
    setScreen(next);
  }, []);

  if (screen === 'splash') {
    // Más adelante: comprobar la sesión de Supabase y decidir
    // entre 'login' y 'main' según corresponda.
    return <SplashScreen onFinishLoading={() => goTo('login')} />;
  }

  if (screen === 'login') {
    return <LoginView onLoginSuccess={() => goTo('main')} />;
  }

  return  <DashboardView />;
};

export default App;