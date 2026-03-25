import React from 'react';
import { Activity, Camera, TrendingUp, ShieldCheck, ArrowRight, Github } from 'lucide-react';
import ScanSimulator from '@/components/ScanSimulator';
import LongevityCalculator from '@/components/LongevityCalculator';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-blue-500/30">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 px-8 py-6 flex justify-between items-center backdrop-blur-md bg-black/50 border-b border-white/5">
        <div className="flex items-center gap-2 font-black text-xl tracking-tighter">
          <Activity className="text-blue-500 w-8 h-8" />
          BEYOND<span className="text-blue-500">BMI</span>
        </div>
        <div className="flex items-center gap-8 text-sm font-medium text-neutral-400">
          <a href="#" className="hover:text-white transition-colors">Science</a>
          <a href="#" className="hover:text-white transition-colors">Longevity</a>
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <button className="px-5 py-2 bg-white text-black rounded-full font-bold text-xs hover:bg-neutral-200 transition-all">
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-48 pb-32 px-8 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <div className="space-y-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold tracking-widest uppercase">
            <ShieldCheck className="w-3 h-3" />
            Clinical Grade Accuracy
          </div>
          <h1 className="text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9]">
            BMI IS <span className="text-neutral-500">OBSOLETE.</span><br />
            TRACK <span className="text-blue-500">MORPHOLOGY.</span>
          </h1>
          <p className="text-xl text-neutral-400 max-w-lg leading-relaxed">
            Stop letting a 19th-century formula define your health. BeyondBMI uses 3D morphological analysis to track muscle quality, fat distribution, and longevity risk with DEXA-comparable accuracy.
          </p>
          <div className="flex items-center gap-6">
            <button className="px-8 py-4 bg-blue-600 rounded-full font-bold text-lg hover:bg-blue-700 transition-all flex items-center gap-2 shadow-[0_0_30px_rgba(37,99,235,0.4)]">
              Start Your First Scan
              <ArrowRight className="w-5 h-5" />
            </button>
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-black bg-neutral-800" />
              ))}
              <div className="w-10 h-10 rounded-full border-2 border-black bg-neutral-900 flex items-center justify-center text-[10px] font-bold">
                +2.4k
              </div>
            </div>
            <p className="text-xs text-neutral-500 font-medium">
              Join 2,400+ athletes tracking<br />Non-Scale Victories.
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-24 bg-blue-500/10 blur-[120px] rounded-full" />
          <ScanSimulator />
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-32 px-8 bg-neutral-950/50 border-y border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="order-2 lg:order-1">
            <LongevityCalculator />
          </div>
          <div className="order-1 lg:order-2 space-y-8">
            <h2 className="text-5xl font-black tracking-tighter leading-none">
              THE <span className="text-blue-500">LONGEVITY</span><br />CALCULATOR.
            </h2>
            <p className="text-lg text-neutral-400 leading-relaxed">
              Our proprietary algorithm combines waist-to-height ratio, limb symmetry, and muscle-to-fat distribution to predict metabolic health and longevity risk.
            </p>
            <ul className="space-y-4">
              {[
                "DEXA-comparable body fat estimation",
                "Waist-to-hip (WHR) risk analysis",
                "Visceral fat distribution tracking",
                "Muscle-to-fat ratio (MFR) scoring"
              ].map(item => (
                <li key={item} className="flex items-center gap-3 text-neutral-300 font-medium">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                    <ShieldCheck className="w-3 h-3" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-24 px-8 border-t border-white/5 bg-black">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex items-center gap-2 font-black text-2xl tracking-tighter">
            <Activity className="text-blue-500 w-8 h-8" />
            BEYOND<span className="text-blue-500">BMI</span>
          </div>
          <p className="text-neutral-500 text-sm font-medium">
            © 2026 BeyondBMI Labs. Built on Raspberry Pi Zero 2 W by PicoClaw.
          </p>
          <div className="flex items-center gap-6">
            <a href="https://github.com/bhaweshverma50/beyond-bmi-poc" target="_blank" className="text-neutral-400 hover:text-white transition-colors">
              <Github className="w-6 h-6" />
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
