import React from 'react';
import { motion } from 'framer-motion';
import { workData } from '../assets/assets';
const Work = () => {
  return (
    <motion.div
          initial={{opacity:0, y:50}}
        whileInView={{opacity:1, y:0}}
              transition={{duration: 1, ease: 'easeOut'}}
              viewport={{once: false,amount :0.2 }}
             id="work"
             className="py-20 bg-dark-200"
             >
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-4">Work 
                     <span className="text-purple"> Experience</span></h2>
                     <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16'>
                     My professional journey so Far</p>
                     <div className="max-w-3xl mx-auto">
                        <div className="space-y-12">
                            {
                                workData.map((data, index)=>(
                                <div key={index} className="relative p1-12 before:content-[''] 
                                before:absolute  before:left-0 before:top-0  
                                before:w-[2px] before:h-full  before:bg-purple-600 cursor-pointer
                                 hover:tanslate-y-2 transition-all  duration-300">
                                 {/* timeLine items */}
                                 <div className='absolute left-[-0.5rem' top-0 w-6 h-6 rounded-full   bg-purple>
                                 </div>
                                 {/* box */}
                                 <div className='bg-dark-300 rounded-2xl p-6 '>
                                  <div className='flex justify-between items-starts mb-2'>
                                    <h3 className='text-xl font-semibold'>{data.role}</h3>
                                    <span className='px-3 py-1 bg-purple/20 rounded-full 
                                    text-xs md:text-sm'>{data.duration}</span>
                                    </div>
                                    <p text-grey-400 mb-2>{data.company}</p>
                                     <p className='text-grey-300'>{data.description}</p>
                                 </div>
                                  </div>
                                ))
                            }
                        </div>
                     </div>
                     
                </div>
    </motion.div>
  );
}
export default Work;
