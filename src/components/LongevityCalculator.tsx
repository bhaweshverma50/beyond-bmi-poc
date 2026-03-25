"use client";
import React, { useState } from 'react';
import { Activity, ShieldCheck, TrendingUp, HelpCircle } from 'lucide-react';

export default function LongevityCalculator() {
  const [waist, setWaist] = useState(32);
  const [hip, setHip] = useState(38);
  const [height, setHeight] = useState(70); // in inches
  const [muscleMass, setMuscleMass] = useState(40); // %

  const whr = (waist / hip).toFixed(2);
  const longevityScore = Math.round(100 - (Math.abs(0.45 - (waist / height)) * 100) + (muscleMass / 2));

  return (
    <div className="w-full max-w-xl mx-auto p-8 bg-neutral-900 rounded-3xl border border-neutral-800 shadow-2xl">
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-2xl font-bold flex items-center gap-2">
          <Activity className="text-blue-500" />
          Longevity Score
        </h3>
        <div className="px-4 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-xs font-mono">
          BETA_ALGO_V2
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Controls */}
        <div className="space-y-6">
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <label className="text-neutral-400">Waist Circumference</label>
              <span className="text-white font-mono">{waist} in</span>
            </div>
            <input 
              type="range" min="20" max="60" value={waist} 
              onChange={(e) => setWaist(parseInt(e.target.value))}
              className="w-full h-1 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
            />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <label className="text-neutral-400">Hip Circumference</label>
              <span className="text-white font-mono">{hip} in</span>
            </div>
            <input 
              type="range" min="20" max="60" value={hip} 
              onChange={(e) => setHip(parseInt(e.target.value))}
              className="w-full h-1 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
            />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <label className="text-neutral-400">Muscle Mass Ratio</label>
              <span className="text-white font-mono">{muscleMass}%</span>
            </div>
            <input 
              type="range" min="10" max="70" value={muscleMass} 
              onChange={(e) => setMuscleMass(parseInt(e.target.value))}
              className="w-full h-1 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-accent"
            />
          </div>
        </div>

        {/* Results */}
        <div className="flex flex-col items-center justify-center bg-neutral-800/50 rounded-2xl p-6 border border-neutral-700/50">
          <div className="relative w-32 h-32 flex items-center justify-center">
            <svg className="w-full h-full -rotate-90">
              <circle 
                cx="64" cy="64" r="60" 
                fill="none" stroke="currentColor" 
                strokeWidth="8" className="text-neutral-800"
              />
              <circle 
                cx="64" cy="64" r="60" 
                fill="none" stroke="currentColor" 
                strokeWidth="8" strokeDasharray="377" 
                strokeDashoffset={377 - (377 * longevityScore / 100)}
                className="text-blue-500 transition-all duration-1000 ease-out"
              />
            </svg>
            <div className="absolute flex flex-col items-center">
              <span className="text-4xl font-black">{longevityScore}</span>
              <span className="text-[10px] text-neutral-500 uppercase tracking-widest">Score</span>
            </div>
          </div>
          
          <div className="mt-6 grid grid-cols-2 gap-4 w-full">
            <div className="text-center">
              <div className="text-[10px] text-neutral-500 uppercase">WHR Ratio</div>
              <div className="text-lg font-mono text-emerald-400">{whr}</div>
            </div>
            <div className="text-center">
              <div className="text-[10px] text-neutral-500 uppercase">Risk Level</div>
              <div className="text-lg font-mono text-blue-400">{longevityScore > 85 ? 'Low' : 'Moderate'}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 p-4 bg-blue-500/5 rounded-xl flex gap-3 border border-blue-500/10">
        <ShieldCheck className="w-5 h-5 text-blue-500 flex-shrink-0" />
        <p className="text-xs text-neutral-400 leading-relaxed">
          Your Longevity Score is derived from your waist-to-height ratio (WHtR) and muscle-to-fat distribution, which are clinically shown to be better predictors of metabolic health than BMI.
        </p>
      </div>
    </div>
  );
}
