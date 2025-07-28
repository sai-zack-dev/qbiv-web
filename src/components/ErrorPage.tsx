import React, { useState, useEffect, type JSX } from "react";
import {
  BarChart3,
  Database,
  TrendingUp,
  PieChart,
  Activity,
  Home,
} from "lucide-react";

interface FloatingElement {
  id: number;
  icon: React.ComponentType<{ size?: number }>;
  x: number;
  y: number;
  delay: number;
  duration: number;
}

export default function ErrorPage(): JSX.Element {
  const [floatingElements, setFloatingElements] = useState<FloatingElement[]>(
    []
  );
  const [glitchText, setGlitchText] = useState<string>("404");

  useEffect(() => {
    // Create floating chart elements
    const elements: FloatingElement[] = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      icon: [BarChart3, Database, TrendingUp, PieChart, Activity][i % 5],
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 2,
      duration: 3 + Math.random() * 2,
    }));
    setFloatingElements(elements);

    // Glitch effect for 404 text
    const glitchChars: string[] = ['4', '0', '4', '?', '#', '@', '&', '1', '2', '3'];
    let glitchInterval: NodeJS.Timeout;

    const startGlitch = (): void => {
      let count = 0;
      glitchInterval = setInterval(() => {
        if (count < 6) {
          setGlitchText(
            glitchChars[Math.floor(Math.random() * glitchChars.length)] +
              glitchChars[Math.floor(Math.random() * glitchChars.length)] +
              glitchChars[Math.floor(Math.random() * glitchChars.length)]
          );
          count++;
        } else {
          setGlitchText("404");
          clearInterval(glitchInterval);
          setTimeout(startGlitch, 3000);
        }
      }, 100);
    };

    setTimeout(startGlitch, 2000);

    return () => clearInterval(glitchInterval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-100 relative overflow-hidden">
      {/* Floating Background Elements */}
      {floatingElements.map((element) => {
        const IconComponent = element.icon;
        return (
          <div
            key={element.id}
            className="absolute opacity-50 text-blue-400"
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
              animation: `float ${element.duration}s ease-in-out infinite`,
              animationDelay: `${element.delay}s`,
            }}
          >
            <IconComponent size={32} />
          </div>
        );
      })}

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6">
        {/* Glitch 404 Text */}
        <div className="relative mb-8">
          <h1 className="text-8xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-br from-blue-500 via-indigo-600 to-blue-700 select-none">
            {glitchText}
          </h1>
          <div className="absolute inset-0 text-8xl md:text-9xl font-black text-blue-600 opacity-20 blur-sm">
            404
          </div>
        </div>

        {/* Error Message */}
        <div className="text-center mb-12 max-w-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Page Not Found
          </h2>
          <p className="text-gray-600 leading-relaxed">
            The page you are looking for does not exist or an error occurred.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={() => (window.location.href = "/")}
            className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-indigo-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            <div className="relative flex items-center gap-2">
              <Home size={20} />
              Go back to Home
            </div>
          </button>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
      `}</style>
    </div>
  );
}
