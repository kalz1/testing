"use client";

import { useState } from 'react';
import SecurityLogin from './components/SecurityLogin';
import LoadingScreen from './components/LoadingScreen';
import BirthdayScreen from './components/BirthdayScreen';

type ScreenState = 'login' | 'loading' | 'birthday';

export default function Home() {
    const [screen, setScreen] = useState<ScreenState>('login');

const handleLoginSuccess = () => {
    setScreen('loading');
};

const handleLoadingComplete = () => {
    setScreen('birthday');
};

return (
    <main className="min-h-screen font-sans select-none overflow-x-hidden bg-slate-950">
        {screen === 'login' && (
            <SecurityLogin onLoginSuccess={handleLoginSuccess} />
    )}

        {screen === 'loading' && (
            <LoadingScreen onComplete={handleLoadingComplete} />
        )}

        {screen === 'birthday' && (
            <BirthdayScreen />
        )}
    </main>
);
}