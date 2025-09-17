import { motion } from 'framer-motion'
import { Calendar, MapPin, Building2 } from 'lucide-react'

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: 'Intern',
      company: 'Bepoj Technology',
      location: 'Chandigarh, India',
      period: '2022',
      type: 'Full-time', 
      description: '',
      achievements: [
        'Led development of 3 major product features used by 100k+ users',
        'Improved application performance by 40% through code optimization',
        'Mentored 5 junior developers and conducted technical interviews',
        'Implemented CI/CD pipelines reducing deployment time by 60%'
      ],
      tech: ['React', 'TypeScript', 'Next.js', 'GraphQL', 'AWS', 'Docker']
    },
    {
      id: 2,
      title: 'Frontend Developer',
      company: 'StartupXYZ',
      location: 'Remote',
      period: '2021 - 2022',
      type: 'Full-time',
      description: 'Developed responsive web applications and collaborated with design team to create intuitive user interfaces.',
      achievements: [
        'Built 10+ responsive web applications from scratch',
        'Collaborated with UX team to improve user engagement by 25%',
        'Integrated third-party APIs and payment systems',
        'Optimized bundle size resulting in 30% faster load times'
      ],
      tech: ['React', 'Vue.js', 'JavaScript', 'Sass', 'Webpack', 'REST APIs']
    },
    {
      id: 3,
      title: 'Junior Frontend Developer',
      company: 'Digital Agency Pro',
      location: 'New York, NY',
      period: '2020 - 2021',
      type: 'Full-time',
      description: 'Worked on various client projects, learning modern web development practices and contributing to team projects.',
      achievements: [
        'Developed 15+ client websites and web applications',
        'Learned modern JavaScript frameworks and build tools',
        'Collaborated with senior developers on complex features',
        'Maintained and updated legacy codebases'
      ],
      tech: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'Bootstrap', 'PHP']
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section id="experience" className="py-20 bg-white/60 dark:bg-gray-900/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-dark-900 dark:text-white mb-4">
            Work Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-700 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My professional journey in frontend development, from intern to senior developer.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-primary-700 transform md:-translate-x-0.5"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                variants={itemVariants}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary-500 rounded-full border-4 border-white dark:border-dark-800 transform md:-translate-x-2 z-10"></div>

                {/* Content */}
                <div className={`ml-16 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                }`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="glass-card p-6 rounded-xl hover:shadow-xl transition-all duration-300"
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-dark-900 dark:text-white mb-1">
                          {exp.title}
                        </h3>
                        <div className="flex items-center space-x-2 text-primary-600 dark:text-primary-400 font-medium">
                          <Building2 className="w-4 h-4" />
                          <span>{exp.company}</span>
                        </div>
                      </div>
                      <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-xs rounded-full font-medium">
                        {exp.type}
                      </span>
                    </div>

                    {/* Period and Location */}
                    <div className="flex items-center space-x-4 mb-4 text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-dark-900 dark:text-white mb-2">
                        Key Achievements:
                      </h4>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="text-sm text-gray-600 dark:text-gray-300 flex items-start">
                            <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stack */}
                    <div>
                      <h4 className="text-sm font-semibold text-dark-900 dark:text-white mb-2">
                        Technologies:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs rounded font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-3xl font-bold text-dark-900 dark:text-white text-center mb-12">
            Education
          </h3>
          
          <div className="max-w-4xl mx-auto">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="glass-card p-8 rounded-xl hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start space-x-6">
                <div className="p-4 bg-primary-100 dark:bg-primary-900/30 rounded-xl">
                  <div className="text-2xl">🎓</div>
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-dark-900 dark:text-white mb-2">
                    Bachelor of Science in Computer Science
                  </h4>
                  <div className="text-primary-600 dark:text-primary-400 font-medium mb-2">
                    University of Technology
                  </div>
                  <div className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                    2016 - 2020 • San Francisco, CA
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Focused on software engineering, web development, and human-computer interaction. 
                    Graduated with honors and completed several projects in frontend development.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
