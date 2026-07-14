"use client";

import { useEffect, useState } from 'react';

interface LoadingScreenProps {
    onComplete: () => void;
}

const terminalLogs: string[] = [
    "Connecting to secure server core...",
    "Establishing secure handshake protocol... [SUCCESS]",
    "Bypassing internal firewall layers...",
    "Injecting package: 'birthday_surprise.pkg'...",
    "Extracting secret payload files...",
    "Decrypting assets: core_memories.dat...",
    "CRITICAL OVERRIDE: Detecting unauthorized pastel injection...",
    "Reconfiguring layout engine to Bubblegum Bliss mode...",
    "System successfully overridden. Enjoy the view! ✨"
];

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
    const [currentLogs, setCurrentLogs] = useState<string[]>([]);
    const [currentIndex, setCurrentIndex] = useState<number>(0);

useEffect(() => {
    if (currentIndex < terminalLogs.length) {
        const delay = setTimeout(() => {
            setCurrentLogs((prev) => [...prev, terminalLogs[currentIndex]]);
            setCurrentIndex(currentIndex + 1);
        }, 600);
        return () => clearTimeout(delay);
    } else {
        const finalDelay = setTimeout(() => {
            onComplete();
        }, 1200);
        return () => clearTimeout(finalDelay);
    }
}, [currentIndex, onComplete]);

return (
    <div className="min-h-screen bg-slate-950 text-[#CED1F8] font-mono p-6 flex flex-col justify-end md:justify-start md:pt-24 max-w-2xl mx-auto space-y-2">
        <div className="text-xs text-[#A7ABDE]/40 mb-4 border-b border-slate-900 pb-2 flex justify-between tracking-widest">
            <span>CORE_DECRYPTION_LOGS</span>
            <span className="animate-pulse">PROCESSING...</span>
        </div>

        {currentLogs.map((log, index) => (
            <div key={index} className="text-xs md:text-sm tracking-wide transition-all duration-300">
            <span className="text-[#A7ABDE] mr-2">&gt;</span>
            {log}
        </div>
        ))}

        {currentIndex < terminalLogs.length && (
            <div className="w-2 h-4 bg-[#CED1F8] animate-pulse inline-block mt-1"></div>
        )}
    </div>
    );
}