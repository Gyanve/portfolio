import { motion } from 'framer-motion'
import { Code, Palette, Smartphone, Zap } from 'lucide-react'

const About = () => {
  const skills = [
    { icon: Code, title: 'Frontend Development', description: 'React js, JavaScript' },
    { icon: Smartphone, title: 'Responsive Design', description: 'Mobile-first, Cross-browser compatibility' },
    { icon: Zap, title: 'Performance', description: 'Optimization, Core Web Vitals, AI Intergration' },
    { icon: Palette, title: 'Communication', description: 'Team Collabaration,Task management' }

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
    <section id="about" className="py-20 bg-white/50 dark:bg-dark-800/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-dark-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-700 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Photo and Description */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Photo Placeholder */}
            <div className="relative">
              <div className="w-80 h-80 mx-auto rounded-2xl glass-card overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900 dark:to-primary-800 flex items-center justify-center">
                  <div className="text-6xl font-bold text-primary-600 dark:text-primary-400">
                   <p>Coding!</p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center">
                <span className="text-white text-sm">✨</span>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-4 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              <p>
                I'm a passionate Frontend Developer with over 2 years of experience creating 
                beautiful, functional, and user-friendly web applications. I love turning 
                complex problems into simple, elegant solutions.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, contributing 
                to open-source projects, or sharing knowledge with the developer community. 
                I believe in continuous learning and staying up-to-date with the latest trends 
                in web development.
              </p>
              <p>
                My goal is to create digital experiences that not only look great but also 
                provide real value to users. I'm always excited to work on new projects and 
                collaborate with amazing teams.
              </p>
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.h3
              variants={itemVariants}
              className="text-2xl font-bold text-dark-900 dark:text-white mb-8"
            >
              What I Do
            </motion.h3>
            
            <div className="grid gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  className="glass-card p-6 rounded-xl hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-lg bg-primary-100 dark:bg-primary-900/30">
                      <skill.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-dark-900 dark:text-white mb-2">
                        {skill.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        {skill.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 gap-4 pt-6"
            >
              <div className="text-center p-4 glass-card rounded-xl">
                <div className="text-3xl font-bold gradient-text">Developement</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Projects Completed</div>
              </div>
              <div className="text-center p-4 glass-card rounded-xl">
                <div className="text-3xl font-bold gradient-text">2</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
