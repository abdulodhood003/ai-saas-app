import React from 'react'
import { assets } from '../assets/assets'
import { motion} from "motion/react"

const Description = () => {
  return (
    <motion.div  className='flex flex-col items-center justify-center my-24 p-6 md:px-28'
     initial={{opacity:0.2, y:100}}
    transition={{duration:1}}
    whileInView={{opacity:1, y:0}}
    viewport={{once: true}}
    
    >
        <h1 className='text-3xl sm:text-4xl font-semibold mb-2'>Create AI Images</h1>
        <p className='text-gray-500 mb-8'>Turn your imaginations into visuals</p>
        <div className='flex flex-col gap-5 md:gap-14 md:flex-row items-center'>
            <img src={assets.sample_img_1} alt="sample images"  className='w-80 xl:w-96 rounded-lg '/>
            <div>
                <h2 className='text-3xl font-medium max-w-lg mb-4'>Introducing the AI-Powered Text to Image Generator</h2>
                <p className='text-gray-600 mb-4'>Unleash your creativity with our AI-Powered Text to Image Generator.
                                     Transform simple text prompts into stunning, lifelike visuals in moments.
                                      Experience the perfect blend of imagination and technology.</p>
                  <p className='text-gray-600'>Bring your ideas to life with the power of AI-driven image creation.
                                         Turn words into beautiful, high-quality artwork effortlessly.
                                            Ideal for creators, designers, and innovators seeking visual inspiration.</p>
                
            </div>
        </div>
    </motion.div>
  )
}

export default Description