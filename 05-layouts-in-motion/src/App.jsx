import React, { useEffect, useRef, useState } from 'react';
import { motion

 } from 'motion/react';
import { delay } from 'motion';
const cards = [
    {
      description: 'Lana Del Rey',
      title: 'Summertime Sadness',
      src: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee',
      ctaText: 'Play',
      ctaLink: 'www.facebook.com',
      content: () => {
        return (
          <p>
            A haunting blend of nostalgia and longing, “Summertime Sadness” captures the beauty of
            fleeting moments and the ache that lingers beneath sun-soaked memories.
            <br />
            <br />
            Lana Del Rey’s dreamy vocals and melancholic tone turn summer love into something
            timeless and fragile. Each note feels like a memory slowly fading into the night.
          </p>
        );
      },
    },

    {
      description: 'Lana Del Rey',
      title: 'Young and Beautiful',
      src: 'https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d',
      ctaText: 'Play',
      ctaLink: 'www.facebook.com',
      content: () => {
        return (
          <p>
            “Young and Beautiful” reflects on love, fear, and the passage of time.
            <br />
            <br />
            With cinematic melodies, Lana questions whether love remains when youth fades. The song
            feels intimate, romantic, and deeply vulnerable.
          </p>
        );
      },
    },

    {
      description: 'Lana Del Rey',
      title: 'Born to Die',
      src: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9',
      ctaText: 'Play',
      ctaLink: 'www.facebook.com',
      content: () => {
        return (
          <p>
            “Born to Die” dives into reckless love and emotional intensity.
            <br />
            <br />
            Lana blends beauty with darkness, creating a dramatic and powerful soundscape. It’s
            about loving deeply, even when it feels dangerous.
          </p>
        );
      },
    },

    {
      description: 'Lana Del Rey',
      title: 'Video Games',
      src: 'https://images.unsplash.com/photo-1519681393784-d120267933ba',
      ctaText: 'Play',
      ctaLink: 'www.facebook.com',
      content: () => {
        return (
          <p>
            “Video Games” is a quiet confession of devotion and love.
            <br />
            <br />
            Lana’s soft vocals create a sense of honesty and warmth. The song feels personal,
            simple, and emotionally raw.
          </p>
        );
      },
    },

    {
      description: 'Lana Del Rey',
      title: 'Ride',
      src: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429',
      ctaText: 'Play',
      ctaLink: 'www.facebook.com',
      content: () => {
        return (
          <p>
            “Ride” explores freedom, loneliness, and self-discovery.
            <br />
            <br />
            It captures the feeling of being lost while still moving forward. A powerful journey
            told through emotion and atmosphere.
          </p>
        );
      },
    },
  ];
  
  
  
const App = () => {
  const [current,setCurrent]=useState(null)
  
  return (
    
    <div className="min-h-screen bg-gray-100 py-10 relative ">
        {current && (<motion.div initial={{opacity:0}} animate={{opacity:1}} onClick={() => setCurrent(null)} className='bg-black/50 fixed z-10 h-full w-full inset-0 backdrop-blur-sm'></motion.div>)
        }
      {current && (<motion.div  layoutId={`card-${current.title}`}  className='h-[500px] fixed inset-0 z-20 m-auto bg-white  w-72 rounded-2xl overflow-hidden border border-neutral-200 p-4'>
        <motion.img layoutId={`card-img-${current.title}`} src={current.src} alt={current.title} className='w-full aspect-square rounded-xl'/>
        <div className='flex flex-col justify-between items-start'>
          <div className='flex items-start py-4 justify-between gap-2 w-full'>
            <div className='flex flex-col items-start gap-2'>
              <motion.h2 layoutId={`card-title-${current.title}`} className='font-bold text-xs tracking-tight text-black'>
                {current.title}
              </motion.h2>
              <motion.p layoutId={`card-description-${current.title}`} className='text-[10px] text-neutral-500'>{current.description}</motion.p>
            </div>
            <motion.a layoutId={`card-ctaText-${current.title}`} href={current.ctaLink}  className='px-2 py-1 bg-green-500 rounded-full text-white text-xs'>{current.ctaText}</motion.a>
          </div>
        </div>
        <motion.div initial={{opacity:0,filter:'blur(10px)'}} animate={{filter:'blur(0px)',opacity:1}} transition={{delay:0.25}}
        className='h-36 [mask-iamge:linear-gradient(to_top,transparent_20%,black_80%)] pb-20 overflow-auto text-[10px] text-neutral-500'>
          {current.content()}
        </motion.div>
      </motion.div>)}
      <div className="mx-auto flex max-w-lg flex-col gap-10">
        {cards.map((card) => (
          <motion.button
          layoutId={`card-${card.title}`}
          onClick={()=>setCurrent(card)}
          key={card.title} 
          className="flex cursor-pointer justify-between items-center bg-white border border-neutral-200 rounded-lg p-4">
            <div className="flex items-center gap-4">
              <motion.img layoutId={`card-iamge-${card.title}`} src={card.src} alt={card.title} className="aspect-square h-14 rounded-lg" />
              <div className='gap-2 flex items-start flex-col'>
                <motion.h2 layoutId={`card-title-${card.title}`} className='font-bold text-xs tracking-tight text-black'>{card.title}</motion.h2>
                <motion.p layoutId={`card-description-${card.title}`} className='text-[10px] text-neutral-500'>{card.description}</motion.p>
              </div>
            </div>
            <motion.div layoutId={`card-ctaText-${card.title}`} className='px-2 py-1 bg-green-500 rounded-full text-white text-xs'>{card.ctaText}</motion.div>
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default App;
