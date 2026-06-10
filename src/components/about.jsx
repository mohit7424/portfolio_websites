import { motion } from 'framer-motion';
import { assets, aboutInfo } from '../assets/assets';

const About = () => {
    return (
        <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            viewport={{ once: true }}
            id='about'
            className='py-20 bg-dark-200'
        >
            <div className='container mx-auto px-6'>
                <h2 className='text-3xl font-bold text-center max-w-2xl mx-auto mb-4'>
                    About <span className='text-purple'>Me</span>
                </h2>
                <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16 text-xl'>
                    Get to know more about my background and profession.
                </p>

                <div className='flex flex-col md:flex-row items-center gap-12'>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                        viewport={{ once: true }}
                        className="w-1/2 "
                        className='relative w-64 h-64 md:w-80 md:h-80 shrink-0'
                    >

                        <div className='absolute inset-0 rounded-full bg-linear-to-r from-purple-500 to-pink-500 opacity-70 blur-2xl' />
                        <img
                            src={assets.profileImg}
                            alt='Profile'
                            className='relative z-10 w-full h-full rounded-full object-cover border-4 border-white/10'
                        />
                    </motion.div>
                    <div className='rounded-2xl p-8 md:w-1/2'>
                    <p  className="text-2xl font semibold mb-6 ">My journey</p>
                    <p  className="text-gray-400 mb-6">
                        'Im a passionate full-stack developer with 
                        over 5 years of experience creating 
                        digital solutions for businesses
                         around the world. My journey
                          started with basic HTML/CSS websites 
                          and has evolved into building complex 
                          web applications with modern frameworks.</p>
                           <p  className="text-gray-400 mb-12">When I'm not coding, you
                         can find me exploring new technologies,
                        contributing to open-source projects, or 
                        sharing my knowledge through tech blogs and
                         tutorials. I believe in continuous learning 
                         and pushing the boundaries of what's possible 
                         on the web.</p>

                    </div>
                </div>
                 <div className='flex-1 grid gap-6 md:grid-cols-3 mt-15'>
                        {aboutInfo.map((item) => {
                            const Icon = item.icon;

                            return (
                                <div key={item.title} className='rounded-2xl bg-white/5 p-6 border border-white/10 duration-300 hover:translate-y-2 cursor-pointer '>
                                    <Icon className={`text-3xl mb-4 ${item.color}`} />
                                    <h3 className='text-xl font-semibold mb-2 text-purple'>{item.title}</h3>
                                    <p className='text-gray-400'>{item.description}</p>
                                </div>
                            );
                        })}
                    </div>
            </div>
        </motion.section>
    );
};

export default About;
