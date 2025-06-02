import { useState, useEffect } from 'react';

export default function PeachGomaLoveCard() {
  const [showHearts, setShowHearts] = useState(false);
  const [textVisible, setTextVisible] = useState(false);

  useEffect(() => {
    // Cargar el script de Tenor
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = 'https://tenor.com/embed.js';
    document.body.appendChild(script);

    // Mostrar texto después de un pequeño delay
    const textTimer = setTimeout(() => {
      setTextVisible(true);
    }, 500);

    // Animación de corazones
    const interval = setInterval(() => {
      setShowHearts(prev => !prev);
    }, 2000);

    return () => {
      clearTimeout(textTimer);
      clearInterval(interval);
      // Limpiar el script al desmontar
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-rose-100 to-orange-100 flex items-center justify-center p-4 overflow-hidden relative">
      {/* Floating hearts */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className={`absolute text-pink-300 opacity-40 transition-all duration-2000 ${
              showHearts ? 'animate-bounce scale-100' : 'scale-0'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.4}s`,
              fontSize: `${Math.random() * 20 + 15}px`
            }}
          >
            {['💕', '🧡', '💗', '🤍', '💖'][Math.floor(Math.random() * 5)]}
          </div>
        ))}
      </div>

      {/* Main card */}
      <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 max-w-lg w-full text-center transform hover:scale-105 transition-all duration-500">
        
        {/* Peach Goma GIF con embed de Tenor - MÁS PEQUEÑO */}
        <div className="mb-6 flex justify-center">
          <div 
            className="tenor-gif-embed hover:scale-105 transition-transform duration-300" 
            data-postid="274718543667126210" 
            data-share-method="host" 
            data-aspect-ratio="1.09211" 
            data-width="100%"
            style={{ maxWidth: '220px', width: '100%' }}
          >
            <a href="https://tenor.com/view/peach-goma-peach-goma-love-gif-274718543667126210">
              Peach Goma Love GIF
            </a>
          </div>
        </div>

        {/* Message */}
        <div className={`transition-all duration-1000 transform ${
          textVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <h1 className="text-4xl font-bold text-gray-800 mb-4 font-cute">
            Mi Isa eres muy,muy linda 🧡
          </h1>
          <p className="text-gray-600 text-xl font-cute leading-relaxed">
           Aunque ya sabías jasj<br/>
            
          </p>
        </div>

        {/* Decorative elements */}
        <div className="mt-8 flex justify-center gap-4 text-3xl animate-pulse">
          <span className="animate-bounce" style={{ animationDelay: '0s' }}>🧡</span>
          <span className="animate-bounce" style={{ animationDelay: '0.2s' }}>💕</span>
          <span className="animate-bounce" style={{ animationDelay: '0.4s' }}>🤍</span>
        </div>
      </div>

      <style jsx>{`
        .font-cute {
          font-family: 'Comic Sans MS', 'Chalkboard SE', 'Comic Neue', cursive, sans-serif;
          letter-spacing: 0.5px;
        }
      `}</style>
    </div>
  );
}