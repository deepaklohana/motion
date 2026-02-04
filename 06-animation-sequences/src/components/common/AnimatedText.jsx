import { stagger, useAnimate } from 'motion/react'
import React, { useEffect } from 'react'
import { motion } from 'motion/react'

const AnimatedText = () => {
    const [scope,animate]=useAnimate()
    const text="Welcome to f*** C***. The first rule of F*** C*** is that you don't talk F*** C***. The second rule of F*** C*** is that you don't talk F*** C***. "

    useEffect(()=>{
        startAnimate()
    },[])
    const startAnimate=()=>{
      animate('span',{opacity:1,filter:'blur(0px)',y:0},{duration:1,ease:'easeInOut',delay:stagger(0.02)})
    }
  return (
    <div ref={scope}
    className='text-white max-w-4xl mx-auto font-bold text-4xl'>
        {/* <motion.span style={{opacity:0}} className='inline-block'>{text}</motion.span> */}
        {text.split('').map((word,index)=>(
          <motion.span style={{
            opacity:0,filter:'blur(10px)',y:5
          }}
          key={word+index}
          className='inline-block'>
            {word === ' ' ? '\u00A0' : word}
            {/* {word} */}
          </motion.span>
        ))}
    </div>
  )
}

export default AnimatedText
