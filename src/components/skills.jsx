import { motion } from 'framer-motion';
import { skills } from '../assets/assets';


const Skills = () => {
  return (
    <motion.div
        initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            viewport={{ once: false,amount :0.5 }}
                id='skills'
                className='py-20 bg-dark-100'
           >
            <div className='container mx-auto px-6'>
                <h2 className='text-3xl font-bold text-center max-w-2xl mx-auto mb-4'>
                    my
                    <span className='text-purple'> skills</span>
                    </h2>
                        <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16 text-xl'>
                            Here are some of the technologies and tools I work with.</p>
                            <div className='grid grid-cols-1 md:grid-cols-2
                             lg:grid-cols-3 gap-8 max-w-5xl mx-auto'>
                                {skills.map((skill, index) => {
                                    const Icon = skill.icon;
                                    return (
                                        <div key={index} className='bg-dark-200 rounded-lg p-6 
                                        hover:-translate-y-2 transition-transform duration-300 
                                        cursor-pointer'>
                                            <div className='flex items-center gap-4 mb-4'>
                                                <Icon className='w-12 h-12' />
                                                <h3 className='text-lg font-medium'>{skill.title}</h3>
                                            </div>
                                            <p className='text-gray-400 mb-4'>{skill.description}</p>
                                            <div>
                                                {skill.tags.map((tech) => (
                                                    <span key={tech} className='inline-block bg-purple 
                                                    text-white text-xs px-2 py-1 rounded-full mr-2 mb-2'>
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    );
                                })}

                            </div>
            </div>
    </motion.div>
    
  );
}

export default Skills;
