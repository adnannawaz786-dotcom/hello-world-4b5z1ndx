import { motion } from 'framer-motion';
import { Zap, Code, Terminal, Cpu, Wifi, Database } from 'lucide-react';

const Home = () => {
  const glitchText = "HELLO WORLD";
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const floatingIcons = [
    { Icon: Zap, delay: 0, x: 100, y: 50 },
    { Icon: Code, delay: 0.5, x: -80, y: 100 },
    { Icon: Terminal, delay: 1, x: 150, y: -30 },
    { Icon: Cpu, delay: 1.5, x: -120, y: -50 },
    { Icon: Wifi, delay: 2, x: 80, y: 120 },
    { Icon: Database, delay: 2.5, x: -150, y: 80 }
  ];

  return (
    <div className="min-h-screen bg-black overflow-hidden relative">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-cyan-900/20">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse" />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full"
            animate={{
              x: [Math.random() * window.innerWidth, Math.random() * window.innerWidth],
              y: [Math.random() * window.innerHeight, Math.random() * window.innerHeight],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: Math.random() * 10 + 5,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%'
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <motion.div
        className="relative z-10 min-h-screen flex items-center justify-center px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="text-center max-w-4xl mx-auto">
          {/* Glitch effect title */}
          <motion.div variants={itemVariants} className="relative mb-8">
            <h1 className="text-6xl md:text-8xl font-bold relative">
              <span className="absolute inset-0 text-cyan-400 animate-pulse">
                {glitchText}
              </span>
              <span className="absolute inset-0 text-purple-400 transform translate-x-1 translate-y-1 animate-pulse delay-75">
                {glitchText}
              </span>
              <span className="relative text-white mix-blend-difference">
                {glitchText}
              </span>
            </h1>
            
            {/* Neon glow effect */}
            <div className="absolute inset-0 text-6xl md:text-8xl font-bold text-cyan-400 blur-sm opacity-50 animate-pulse">
              {glitchText}
            </div>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-300 mb-12 font-mono"
          >
            <span className="text-cyan-400">&gt;</span> Welcome to the{' '}
            <span className="text-purple-400 animate-pulse">digital realm</span>
            <span className="animate-pulse">_</span>
          </motion.p>

          {/* Action button */}
          <motion.div variants={itemVariants} className="mb-16">
            <motion.button
              className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg font-mono text-black font-bold text-lg overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">INITIALIZE SYSTEM</span>
              <motion.div
                className="absolute inset-0 bg-white"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.5 }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400 blur-sm opacity-75 group-hover:opacity-100 transition-opacity" />
            </motion.button>
          </motion.div>

          {/* Status indicators */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-6 text-sm font-mono"
          >
            <div className="flex items-center gap-2 text-green-400">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span>SYSTEM ONLINE</span>
            </div>
            <div className="flex items-center gap-2 text-cyan-400">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
              <span>NEURAL LINK ACTIVE</span>
            </div>
            <div className="flex items-center gap-2 text-purple-400">
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
              <span>REALITY SYNC: 100%</span>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Floating tech icons */}
      {floatingIcons.map(({ Icon, delay, x, y }, index) => (
        <motion.div
          key={index}
          className="absolute text-cyan-400/30 hidden lg:block"
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.2, 1],
            x: [0, x * 0.5, 0],
            y: [0, y * 0.5, 0]
          }}
          transition={{
            duration: 4,
            delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            left: `${20 + (index * 15)}%`,
            top: `${30 + (index * 10)}%`
          }}
        >
          <Icon size={32} />
        </motion.div>
      ))}

      {/* Corner decorations */}
      <div className="absolute top-0 left-0 w-32 h-32">
        <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-cyan-400" />
        <div className="absolute top-2 left-2 w-4 h-4 border-t border-l border-purple-400" />
      </div>
      
      <div className="absolute top-0 right-0 w-32 h-32">
        <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-cyan-400" />
        <div className="absolute top-2 right-2 w-4 h-4 border-t border-r border-purple-400" />
      </div>
      
      <div className="absolute bottom-0 left-0 w-32 h-32">
        <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-cyan-400" />
        <div className="absolute bottom-2 left-2 w-4 h-4 border-b border-l border-purple-400" />
      </div>
      
      <div className="absolute bottom-0 right-0 w-32 h-32">
        <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-cyan-400" />
        <div className="absolute bottom-2 right-2 w-4 h-4 border-b border-r border-purple-400" />
      </div>

      {/* Scanline effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(transparent 50%, rgba(0, 255, 255, 0.02) 50%)',
          backgroundSize: '100% 4px'
        }}
        animate={{
          backgroundPosition: ['0% 0%', '0% 100%']
        }}
        transition={{
          duration: 0.1,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </div>
  );
};

export default Home;