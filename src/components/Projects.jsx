import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Codex View',
      description: 'An edu-tech platform for students to learn tech skills',
      image: '📚',
      tech: ['JavaScript', 'React', 'Bootstrap CSS'],
      featured: true
    },
    {
      id: 2,
      title: 'Daawat Restaurant App',
      description: 'A restaurant menu website of a local restaurant in Saharanpur',
      image: '🍔',
      tech: ['React', 'JavaScript', 'Tailwind CSS'],
      featured: true
    },
    {
      id: 4,
      title: 'Portfolio Website',
      description:
        'A modern, responsive portfolio of my work created using Js & React js also tried vibe coding.',
      image: '💼',
      tech: ['React', 'Tailwind CSS', 'Framer Motion', 'Vite'],
      featured: false
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-950"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-dark-900 dark:text-white mb-4">
            My Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-700 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and
            passion for creating amazing web experiences.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className={`relative glass-card rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 ${
                project.featured ? 'ring-2 ring-primary-500/50' : ''
              }`}
            >
              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-4 right-4 z-10">
                  <div className="flex items-center space-x-1 bg-primary-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                    <Star className="w-3 h-3 fill-current" />
                    <span>Featured</span>
                  </div>
                </div>
              )}

              {/* Project Image */}
              <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center text-6xl">
                {project.image}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-dark-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-xs rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
