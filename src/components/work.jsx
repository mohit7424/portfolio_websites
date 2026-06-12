import React from 'react';
import { motion } from 'framer-motion';
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
                     {/* <div className="max-w-3xl mx-auto">
                        <div className="space-y-12">
                            {
                         workData.map((data, index)=>(
                                <div key={index} className="relative p1-12 before:content-[''] 
                                before:absolute before:inset-0 before:left-1/2 before:-translate-x-1/2 
                                before:w-1 before:bg-gray-600">
                                ) 
                            }
                        </div>
                     </div> */}
                     
                </div>
    </motion.div>

  );
}

export default Work;
