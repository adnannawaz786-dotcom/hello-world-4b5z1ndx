import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function App() {
  const [isGlitching, setIsGlitching] = useState(false);
  const [showPayment, setShowPayment] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState('');

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setIsGlitching(true);
      setTimeout(() => setIsGlitching(false), 200);
    }, 3000);

    return () => clearInterval(glitchInterval);
  }, []);

  const handlePayment = () => {
    setPaymentStatus('processing');
    setTimeout(() => {
      setPaymentStatus('success');
      setTimeout(() => {
        setPaymentStatus('');
        setShowPayment(false);
      }, 2000);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-black overflow-hidden relative">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-cyan-900/20">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full"
            animate={{
              x: [0, Math.random() * 200 - 100],
              y: [0, Math.random() * 200 - 100],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        {/* Main content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center space-y-8"
        >
          {/* Hello World Title */}
          <motion.h1
            className={`text-6xl md:text-8xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent ${
              isGlitching ? 'animate-pulse' : ''
            }`}
            animate={isGlitching ? { x: [0, -2, 2, 0] } : {}}
            transition={{ duration: 0.2 }}
          >
            HELLO WORLD
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-xl md:text-2xl text-cyan-300 font-mono tracking-wider"
          >
            &gt; Welcome to the future_
          </motion.p>

          {/* Neon border box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="relative p-8 border-2 border-cyan-400 bg-black/50 backdrop-blur-sm"
            style={{
              boxShadow: '0 0 20px rgba(0, 255, 255, 0.3), inset 0 0 20px rgba(0, 255, 255, 0.1)',
            }}
          >
            <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-pink-500"></div>
            <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-pink-500"></div>
            <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-pink-500"></div>
            <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-pink-500"></div>

            <p className="text-cyan-100 font-mono text-lg mb-6">
              Experience the cyberpunk revolution
            </p>

            {!showPayment ? (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowPayment(true)}
                className="px-8 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-bold uppercase tracking-wider border-2 border-transparent hover:border-cyan-400 transition-all duration-300"
                style={{
                  boxShadow: '0 0 15px rgba(147, 51, 234, 0.5)',
                }}
              >
                Access Portal
              </motion.button>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-4"
              >
                {paymentStatus === '' && (
                  <>
                    <div className="text-cyan-300 font-mono text-sm mb-4">
                      Payment Required: 0.001 BTC
                    </div>
                    <div className="flex gap-4 justify-center">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handlePayment}
                        className="px-6 py-2 bg-green-600 text-white font-bold uppercase text-sm border border-green-400"
                        style={{
                          boxShadow: '0 0 10px rgba(34, 197, 94, 0.5)',
                        }}
                      >
                        Pay Now
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setShowPayment(false)}
                        className="px-6 py-2 bg-red-600 text-white font-bold uppercase text-sm border border-red-400"
                        style={{
                          boxShadow: '0 0 10px rgba(239, 68, 68, 0.5)',
                        }}
                      >
                        Cancel
                      </motion.button>
                    </div>
                  </>
                )}

                {paymentStatus === 'processing' && (
                  <div className="text-yellow-400 font-mono text-sm">
                    <motion.div
                      animate={{ opacity: [1, 0.5, 1] }}
                      transition={{ repeat: Infinity, duration: 1 }}
                    >
                      Processing payment...
                    </motion.div>
                  </div>
                )}

                {paymentStatus === 'success' && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="text-green-400 font-mono text-sm"
                  >
                    ✓ Payment successful! Access granted.
                  </motion.div>
                )}
              </motion.div>
            )}
          </motion.div>

          {/* Footer text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="text-purple-400 font-mono text-sm"
          >
            [SYSTEM ONLINE] • [NEURAL LINK ESTABLISHED] • [READY FOR INPUT]
          </motion.div>
        </motion.div>

        {/* Scanning line effect */}
        <motion.div
          className="absolute left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-70"
          animate={{
            y: [0, window.innerHeight || 800],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      {/* Corner decorations */}
      <div className="absolute top-4 left-4 text-cyan-400 font-mono text-xs opacity-60">
        [SYS_INIT]
      </div>
      <div className="absolute top-4 right-4 text-purple-400 font-mono text-xs opacity-60">
        [CONN_SECURE]
      </div>
      <div className="absolute bottom-4 left-4 text-pink-400 font-mono text-xs opacity-60">
        [VER_2.1.0]
      </div>
      <div className="absolute bottom-4 right-4 text-cyan-400 font-mono text-xs opacity-60">
        [STATUS_OK]
      </div>
    </div>
  );
}

export default App;