import { motion } from 'framer-motion';
import ProjectCard from './projectCard';
import { projects } from '../assets/assets';
import { FaArrowRight } from 'react-icons/fa';

   const Projects = () => {
   return (
     <motion.div
          initial={{opacity:0, y:50}}
        whileInView={{opacity:1, y:0}}
              transition={{duration: 1, ease: 'easeOut'}}
              viewport={{once: false,amount :0.2 }}
             id="projects"
             className="py-20 bg-dark-200"
             >
              <div className='container mx-auto px-4 sm:px-6'>
          <h2 className="text-3xl font-bold text-center mb-4">My 
                      <span className='text-purple'>Projects</span>
                </h2>
                <p className='text-gray-400 text-center max-w-2xl mx-auto mb-10 text-lg'>
                  A selection of my recent work</p>
                  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
                   gap-6 md:gap-8 max-w-6xl mx-auto'>
                    {/* projects */}
                    {
                      projects.map((project,index)=>(
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
                   <div className="text-center mt-12 ">
                    <a href="#" className="inline-flex items-center 
                    px-6 py-3   font-medium border border-purple rounded-lg
                    text-white hover:bg-purple/20 transition duration-300">
                      <span >View More Projects
                      </span>
                      <FaArrowRight className='ml-2' />
                    </a>
                   </div>
                </div>   
               </motion.div>   
   )
   }   
    export default Projects;















































//          <div className="container mx-auto px-6">
//              <h2 className="text-2xl font-bold text-white mb-4 
//              text-center">My <span className='text-purple'>Projects</span></h2>
//             <p className='text-gray-400 text-center max-w-2xl mx-auto mb-10 text-lg'>
//                  A selection of my recent work</p>
//                 <div className="grid grid-cols-1 
//                 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
//                        {/* ⁡⁢⁢⁢projects ⁡*/}
//             {
//                 projects.map((project, index)=>(
//                   <ProjectCard 
//                         key={index}
//                         title={project.title}
//                         description={project.description}
//                         image={project.image}
//                         tech={project.tech}
//                     />
//                 ))
//             }
//            </div>

//         </div>
//     </motion.div>
//   );    
// }

//   export default Projects;
