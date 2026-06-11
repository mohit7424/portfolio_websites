import { motion } from 'framer-motion';
import ProjectCard from './projectCard';
import { projects } from '../assets/assets';

const Projects = () => {
  return (
    <motion.div
         initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: false,amount :0.5 }}
            id="projects"
            className="py-20 bg-dark-100">
         <div className="container mx-auto px-6">
             <h2 className="text-2xl font-bold text-white mb-4 
             text-center">My <span className='text-purple'>Projects</span></h2>
            <p className='text-gray-400 text-center max-w-2xl mx-auto mb-10 text-lg'>
                 A selection of my recent work</p>
                <div className="grid grid-cols-1 
                md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                       {/* ⁡⁢⁢⁢projects ⁡*/}
            {
                projects.map((project, index)=>(
                  <ProjectCard 
                        key={index}
                        title={project.title}
                        description={project.description}
                        image={project.image}
                        tech={project.tech}
                    />
                ))
            }
           </div>

        </div>
    </motion.div>
  );    
}

  export default Projects;
