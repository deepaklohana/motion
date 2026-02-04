import React, { useRef, useState } from 'react';
import { motion, useMotionValueEvent, useScroll } from 'motion/react';
import { GoRocket, GoDeviceCameraVideo, GoZap, GoShieldCheck, GoSync } from 'react-icons/go';
import { HiSparkles } from 'react-icons/hi';
import { MdPalette } from 'react-icons/md';
import Card from './assets/components/common/Card';
const App = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end","end start"]
  });
  const backgrounds = [
    '#e63946',
    '#f1faee',
    '#a8dadc',
    '#457b9d',
    '#1d3557',
    
    
  ];
  const [background, setBackground] = useState(backgrounds[0]);
  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const index = Math.min(
      backgrounds.length - 1,
      Math.floor(latest * backgrounds.length)
    );
    setBackground(backgrounds[index]);
  });
  const features = [
    {
      icon: <GoRocket className="h-8 w-8 text-neutral-200" />,
      title: 'Generate ultra realistic image in seconds',
      description:
        'With our state of the art AI, you can generate ultra realistic image in no time at all',
      content: (
        <div>
          <img
            src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            width={500}
            height={500}
            className="rounded-lg"
          />
        </div>
      ),
    },

    {
      icon: <HiSparkles className="h-8 w-8 text-neutral-200" />,
      title: 'AI-powered creative prompts',
      description: 'Get smart, high-quality prompts tailored to your ideas for faster creativity.',
      content: (
        <div>
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=500&q=80"
            alt=""
            width={500}
            height={500}
            className="rounded-lg"
          />
        </div>
      ),
    },

    {
      icon: <GoDeviceCameraVideo className="h-8 w-8 text-neutral-200" />,
      title: 'High-resolution outputs',
      description: 'Generate images in stunning high resolution suitable for professional use.',
      content: (
        <div>
          <img
            src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=500&q=80"
            alt=""
            width={500}
            height={500}
            className="rounded-lg"
          />
        </div>
      ),
    },

    {
      icon: <GoZap className="h-8 w-8 text-neutral-200" />,
      title: 'Lightning-fast generation',
      description: 'Experience blazing fast image generation with optimized AI models.',
      content: (
        <div>
          <img
            src="https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=500&q=80"
            alt=""
            width={500}
            height={500}
            className="rounded-lg"
          />
        </div>
      ),
    },

    {
      icon: <MdPalette className="h-8 w-8 text-neutral-200" />,
      title: 'Multiple artistic styles',
      description: 'Choose from a wide range of artistic styles to match your vision.',
      content: (
        <div>
          <img
            src="https://images.unsplash.com/photo-1534081333815-ae5019106622?auto=format&fit=crop&w=500&q=80"
            alt=""
            width={500}
            height={500}
            className="rounded-lg"
          />
        </div>
      ),
    },

    {
      icon: <GoShieldCheck className="h-8 w-8 text-neutral-200" />,
      title: 'Commercial usage rights',
      description: 'Use your generated images freely for commercial and business projects.',
      content: (
        <div>
          <img
            src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=500&q=80"
            alt=""
            width={500}
            height={500}
            className="rounded-lg"
          />
        </div>
      ),
    },

    {
      icon: <GoSync className="h-8 w-8 text-neutral-200" />,
      title: 'Seamless regeneration & edits',
      description: 'Refine, regenerate, and iterate images until they perfectly match your idea.',
      content: (
        <div>
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=500&q=80"
            alt=""
            width={500}
            height={500}
            className="rounded-lg"
          />
        </div>
      ),
    },
  ];
 
  return (
    <motion.div animate={{background}} transition={{duration:0.75, ease:'easeInOut'}} ref={containerRef}  className="flex min-h-screen items-center justify-center bg-neutral-900">
      <div  className="flex flex-col gap-10 max-w-4xl mx-auto py-40">
        {features.map((feature, idx) => (
        <Card key={idx} feature={feature}/>
        ))}
      </div>
    </motion.div>
  );
};

export default App;
