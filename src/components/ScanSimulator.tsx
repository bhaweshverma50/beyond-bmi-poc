"use client";
import React, { useState, useEffect, useRef } from 'react';
import { Camera, RefreshCcw, CheckCircle } from 'lucide-react';
import gsap from 'gsap';

export default function ScanSimulator() {
  const [scanning, setScanning] = useState(false);
  const [complete, setComplete] = useState(false);
  const [progress, setProgress] = useState(0);
  const scanLineRef = useRef(null);

  const startScan = () => {
    setScanning(true);
    setComplete(false);
    setProgress(0);

    gsap.fromTo(scanLineRef.current, 
      { top: '0%' }, 
      { 
        top: '100%', 
        duration: 2.5, 
        repeat: 2, 
        ease: 'power1.inOut',
        onComplete: () => {
          setScanning(false);
          setComplete(true);
        }
      }
    );

    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1.5;
      });
    }, 100);
  };

  return (
    <div className="relative w-full max-w-md mx-auto aspect-[3/4] bg-neutral-900 rounded-2xl overflow-hidden border border-neutral-800 shadow-2xl">
      {/* Simulation Viewport */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        {scanning ? (
          <>
            <div className="relative w-48 h-80 border-2 border-blue-500/30 rounded-full flex items-center justify-center overflow-hidden">
              {/* Silhouette Placeholder */}
              <div className="w-32 h-64 bg-blue-500/20 rounded-full blur-xl animate-pulse" />
              {/* Scan Line */}
              <div 
                ref={scanLineRef}
                className="absolute left-0 right-0 h-1 bg-blue-400 shadow-[0_0_15px_rgba(96,165,250,0.8)] z-10"
              />
            </div>
            <div className="mt-8 text-blue-400 font-mono text-sm">
              SCANNING MORPHOLOGY... {Math.round(progress)}%
            </div>
          </>
        ) : complete ? (
          <div className="flex flex-col items-center text-emerald-400">
            <CheckCircle className="w-16 h-16 mb-4 animate-bounce" />
            <span className="font-bold text-xl">SCAN COMPLETE</span>
            <p className="text-neutral-400 text-sm mt-2">DEXA-Comparable Accuracy: 98.4%</p>
            <button 
              onClick={() => setComplete(false)}
              className="mt-8 px-6 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-sm hover:bg-emerald-500/20 transition-all"
            >
              View Analysis
            </button>
          </div>
        ) : (
          <div className="flex flex-col items-center text-neutral-500">
            <Camera className="w-16 h-16 mb-4 opacity-20" />
            <p className="text-center px-8 text-sm">Align your body within the frame for a 3D morphological scan.</p>
            <button 
              onClick={startScan}
              className="mt-8 px-8 py-3 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-700 transition-all flex items-center gap-2"
            >
              <RefreshCcw className="w-4 h-4" />
              Start 3D Scan
            </button>
          </div>
        )}
      </div>

      {/* Decorative HUD Elements */}
      <div className="absolute top-4 left-4 font-mono text-[10px] text-blue-500/50">
        SYS_ID: BV-2026-X1<br />
        LAT: 19.0760 N<br />
        LNG: 72.8777 E
      </div>
      <div className="absolute bottom-4 right-4 font-mono text-[10px] text-blue-500/50">
        BEYOND_BMI_V1.0
      </div>
    </div>
  );
}
