import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const skills = [
  { name: 'React', icon: '⚛️', category: 'Frontend' },
  { name: 'Angular', icon: '🅰️', category: 'Frontend' },
  { name: 'Vue', icon: '💚', category: 'Frontend' },
  { name: 'TypeScript', icon: '📘', category: 'Language' },
  { name: 'JavaScript', icon: '🟨', category: 'Language' },
  { name: 'Node.js', icon: '🟢', category: 'Backend' },
  { name: 'NestJS', icon: '🐱', category: 'Backend' },
  { name: 'MongoDB', icon: '🍃', category: 'Database' },
  { name: 'PostgreSQL', icon: '🐘', category: 'Database' },
  { name: 'Ionic', icon: '📱', category: 'Mobile' },
  { name: 'Capacitor', icon: '⚡', category: 'Mobile' },
  { name: 'HTML/CSS', icon: '🎨', category: 'Frontend' },
  { name: 'Tailwind CSS', icon: '🌊', category: 'Frontend' },
  { name: 'Git', icon: '📦', category: 'Tools' },
  { name: 'Docker', icon: '🐳', category: 'DevOps' },
  { name: 'AWS', icon: '☁️', category: 'Cloud' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.8 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
    },
  },
};

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="section-padding bg-section-alt">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A collection of technologies I've mastered throughout my journey as a full-stack developer
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05, 
                y: -5,
                transition: { duration: 0.2 } 
              }}
              className="glass-card rounded-2xl p-6 flex flex-col items-center gap-3 cursor-pointer group"
            >
              <span className="text-4xl group-hover:scale-110 transition-transform duration-300">
                {skill.icon}
              </span>
              <span className="font-medium text-sm text-center">{skill.name}</span>
              <span className="text-xs text-muted-foreground bg-secondary px-2 py-1 rounded-full">
                {skill.category}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
