import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt, FaPhone,FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
const Contact = () => {
  return (
      <motion.div
          initial={{opacity:0, y:50}}
            whileInView={{opacity:1, y:0}}
            transition={{duration: 1, ease: 'easeOut'}}
            viewport={{once: false,amount :0.2 }}
            id="contact"
            className="py-20 bg-dark-200"
             >
              <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-bold text-center">
                  Get In
                  <span className="text-purple">Touch</span>
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto mb-16 text-center">
                    Have a project in mind or want to collaborate? let's connect!
                  </p>
                  <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto'>
                    {/* contact form */}
                  <div>
                  <form className='space-y-6'>
                    <div>
                    <label htmlFor='name' className='block-text-grey-300 mb-2 '>Your Name</label>
                    <input type='text' className='w-full bg-dark-300 border-dark-400 
                    rounded-lg-px-4 py-3 outline-none mt-2 rounded-lg px-4 py-3 outline-none'></input>
                    </div>
                     <div>
                    <label htmlFor='email' className='block-text-grey-300 mb-2 '>Email Address</label>
                    <input type='email' className='w-full bg-dark-300 border-dark-400 
                    rounded-lg-px-4 py-3 outline-none mt-2 rounded-lg px-4 py-3 outline-none'></input>
                    </div>
                     <div>
                    <label htmlFor='message' className='block-text-grey-300 mb-2 '>Message</label>
                    <textarea type='text' className='w-full h-40 bg-dark-300 border-dark-400 
                    rounded-lg-px-4 py-3 outline-none mt-2 rounded-lg px-4 py-3 outline-none'></textarea>
                    </div>
                    <button type='submit' className='bg-purple text-white px-6 py-3 rounded-lg
                       hover:bg-purple-600 transition-colors duration-300 w-full '>Send Message</button>
                  </form>
                  </div>
                  {/* contact info */}
                  <div className='space-y-8'>
                    <div className="flex items-start">
                      <div className="text-purple text-2xl mr-4 ">
                        <FaMapMarkerAlt />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">Location</h3>
                         <p className="text-gray-400">Alwar Rajasthan</p>
                      </div>
                  </div>
                  <div className="flex items-start">
                      <div className="text-purple text-2xl mr-4 ">
                        <FaEnvelope />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">Email</h3>
                         <p className="text-gray-400">mraj69195@gmail.com</p>
                      </div>
                  </div>
                  <div className="flex items-start">
                      <div className="text-purple text-2xl mr-4 ">
                        <FaPhone />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">Phone</h3>
                         <p className="text-gray-400">+91 7424908833</p>
                      </div>
                    </div>    
                    <div className='pt-4'>
                      <h3 className="font-semibold text-lg mb-4">Follow <span className="text-purple">Me</span></h3>
                      <div className='flex space-x-4'>
                        <a href="#" className='w-12 h-12 rounded-full bg-dark-300 
                        flex items-center justify-center text-purple hover:bg-purple 
                         hover:text-white transition:duration-300'>
                          <FaGithub />
                         </a>
                               
                        <a href="#" className='w-12 h-12 rounded-full bg-dark-300 
                        flex items-center justify-center text-purple hover:bg-purple 
                         hover:text-white transition:duration-300'>
                          <FaLinkedin />
                         </a>

                        <a href="#" className='w-12 h-12 rounded-full bg-dark-300 
                        flex items-center justify-center text-blue hover:bg-blue 
                         hover:text-white transition:duration-300'>
                          <FaTwitter />
                         </a>

                        <a href="#" className='w-12 h-12 rounded-full bg-dark-300 
                        flex items-center justify-center text-pink hover:bg-pink 
                         hover:text-white transition:duration-300'>
                          <FaInstagram />
                         </a>
                      </div>

                    </div>
                  </div>
            </div>
                </div>
      </motion.div>
  );
}
export default Contact;
