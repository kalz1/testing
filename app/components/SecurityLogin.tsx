"use client";

import { useState } from 'react';

interface SecurityLoginProps {
    onLoginSuccess: () => void;
}

export default function SecurityLogin({ onLoginSuccess }: SecurityLoginProps) {
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string>('');

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (password.toLowerCase() === 'love' || password === '1234') {
        setError('');
        onLoginSuccess();
    } else {
        setError('ACCESS DENIED: Invalid Decryption Key.');
    }
};

return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4 font-mono relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)]"></div>
      
    <div className="max-w-md w-full bg-slate-900/80 border border-[#A7ABDE]/30 rounded-xl p-6 backdrop-blur-md shadow-[0_0_40px_rgba(167,171,222,0.1)] relative z-10">
        <div className="flex items-center space-x-2 text-[#CED1F8] mb-4 border-b border-slate-800 pb-3">
            <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse"></div>
            <span className="text-xs uppercase tracking-widest font-bold text-[#A7ABDE]">
                Central Security Gateway
            </span>
        </div>

        <div className="space-y-4">
            <p className="text-xs text-[#CED1F8]/70 leading-relaxed">
                [PERINGATAN] Enkripsi jaringan mendeteksi percobaan masuk. Masukkan kunci dekripsi protokol untuk memverifikasi identitas Anda.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4 pt-2">
            <div>
                <label className="block text-xs uppercase tracking-wider text-[#A7ABDE] mb-2">
                    Security Passphrase
                </label>
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••"
                className="w-full bg-slate-950 border border-slate-800 focus:border-[#CED1F8] text-[#CED1F8] rounded-lg px-3 py-2 text-sm outline-none transition duration-200 tracking-widest focus:shadow-[0_0_15px_rgba(206,209,248,0.15)]"
            />
            </div>

            {error && (
                <p className="text-red-400 text-xs tracking-wide animate-pulse">
                    ⚠ {error}
            </p>
            )}

            <button
                type="submit"
                className="w-full bg-[#A7ABDE] hover:bg-[#A7ABDE]/90 text-slate-950 font-bold py-2.5 px-4 rounded-lg text-xs uppercase tracking-widest transition duration-200 active:scale-[0.98]"
            >
                Initialize Handshake
            </button>
        </form>
        </div>
    </div>
    </div>
);
}