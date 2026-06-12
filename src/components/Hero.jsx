import { motion } from 'framer-motion';
import { assets } from "../assets/assets";
const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      viewport={{ once: true }}
      id='home'
      className='min-h-screen flex items-center pt-20 pb-16 bg-gradient-to-r 
    from-[#1a1a1a] via-[#2d2d2d] to-[#1a1a1a]'>
      <div className='container mx-auto px-6 flex flex-col
       md:flex-row items-center justify-between'>
        <div className='md:w-1/2 mb-10 md:mb-0'>
          <h1 className='text-4xl font-bold mb-4 md:text-6xl'>
            Hi I'm <span className='text-purple'>Mohit kumawat</span>
          </h1>
          <h2 className='text-xl md:text-3xl font-semibold mb-6 typewriter md:overflow-visible'>
            A passionate FullStack <span className='text-purple'>Developer</span>
          </h2>
          <p className='text-lg text-gray-300 mb-7 max-w-xl'>
            Passionate Full Stack Developer skilled in building responsive
            and scalable web applications using modern technologies.
          </p>
          <div className='flex space-x-4'>
            <a href="#projects" className="px-6 py-4 ml-4 bg-purple rounded-lg
         font-medium hover:bg-purple-700">
              View Projects
            </a>
            <a href="#contact" className="px-6 py-4 border border-purple 
        rounded-lg font-medium hover:bg-purple/30"> Contact me</a>
          </div>

        </div>
      {/* right side contents */}
      <div className='md:w-1/2 flex justify-center'>
        <div className="relative w-64 h-64 md:w-80 md:h-80">
          <div className="absolute inset-0 rounded-full bg-linear-to-r from-purple-500 to-pink-500 animate-pulse opacity-70" />
          <motion.img
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            src={assets.profileImg}
            alt="profile"
            className='relative z-10 w-full h-full rounded-full object-cover animate-float'
          />
        </div>
      </div>
      </div>
    </motion.div>
  );
}

export default Hero;

