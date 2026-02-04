import {
  motion,
  useMotionTemplate,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from 'motion/react';
import React, { useRef, useState } from 'react';

const Card = ({ feature }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const translateContent = useSpring(useTransform(scrollYProgress, [0, 1], [200, -300]), {
    stiffness: 100,
    damping: 30,
    mass: 1,
  });

  const opacityContent = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);
  const blur = useTransform(scrollYProgress, [0.5, 1], [0, 10]);
  const scale = useTransform(scrollYProgress, [0.5, 1], [1, 0.8]);

  return (
    <motion.div ref={ref} className="grid grid-cols-1 items-center gap-20 py-40 md:grid-cols-2">
      <motion.div
        style={{
          filter: useMotionTemplate`blur(${blur}px)`,
          scale,
        }}
        className="flex flex-col gap-5"
      >
        {feature.icon}
        <h2 className="text-4xl font-bold text-white">{feature.title}</h2>
        <p className="text-lg text-neutral-400">{feature.description}</p>
      </motion.div>

      <motion.div style={{ y: translateContent, opacity: opacityContent }}>
        {feature.content}
      </motion.div>
    </motion.div>
  );
};

export default Card;
