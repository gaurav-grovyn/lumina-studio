import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, MessageCircle, Zap, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'WhatsApp Clone',
    description: 'A cross-platform messaging app for Web, Android, and iOS using Ionic React and CometChat SDK.',
    features: [
      'Real-time VOIP calls and push notifications',
      'Reactions, threaded replies, and status updates',
      'Seamless cross-platform experience',
    ],
    tech: ['Ionic React', 'Capacitor', 'TypeScript', 'CometChat SDK'],
    icon: MessageCircle,
    gradient: 'from-green-500 to-emerald-600',
    featured: true,
  },
  {
    title: 'Capacitor Push Plugin',
    description: 'A reusable Capacitor plugin to fetch FCM, iOS device, and VoIP tokens via simple method calls.',
    features: [
      'Automated push notification handling',
      'VoIP call screen integration',
      'Published on npm for public use',
    ],
    tech: ['Capacitor', 'TypeScript', 'iOS', 'Android'],
    icon: Zap,
    gradient: 'from-blue-500 to-cyan-600',
    featured: true,
  },
  {
    title: 'Shop Easy',
    description: 'A full-stack e-commerce platform featuring role-based dashboards for Buyers and Sellers.',
    features: [
      'Google OAuth authentication',
      'Razorpay payment integration',
      'Shopping cart, reviews, and comments',
    ],
    tech: ['React.js', 'NestJS', 'MongoDB', 'Tailwind CSS'],
    icon: ShoppingCart,
    gradient: 'from-purple-500 to-pink-600',
    featured: true,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="section-padding bg-section-alt">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of my best work, from messaging apps to e-commerce platforms
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="glass-card rounded-2xl overflow-hidden group"
            >
              {/* Header with gradient */}
              <div className={`h-32 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <project.icon className="w-16 h-16 text-white/80" />
                </div>
                {project.featured && (
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-white text-xs font-medium">Featured</span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-display font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {project.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs bg-secondary px-3 py-1 rounded-full text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button size="sm" className="flex-1 bg-primary hover:bg-primary/90">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
