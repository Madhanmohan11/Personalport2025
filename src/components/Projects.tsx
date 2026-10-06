import { motion } from 'framer-motion';
import { ExternalLink, Layers } from 'lucide-react';
import { Badge } from './ui/badge';

// Import project images
import healthyBitesImg from '../assets/Startup.png';
import zyrixinfra from '../assets/zyrixinfra.jpeg';
import Villa from '../assets/Villa.png';
import ecommerceImg from '../assets/intern-pho.png';
import spectrumSchoolImg from '../assets/spct.png';
import zeloImg from '../assets/Zelo.png';

const Projects = () => {
  const projects = [
    {
      id: 0,
      title: 'Zyrix Infra',
      subtitle: 'UK Solar Energy Company Website',
      description:
        'A professional website for a UK-based solar energy company built with the MERN stack, showcasing their high-fidelity engineering services and solar solutions.',
      image: zyrixinfra,
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
      liveUrl: 'https://www.zyrixinfra.com/',
      category: 'Client Project',
      color: 'from-green-500/20 to-emerald-500/10',
      accent: 'bg-green-500',
    },
    {
      id: 1,
      title: 'Spectrum Matriculation Higher Secondary School',
  subtitle: 'Modern School Website & Admission Portal',
  description:
    'Developed a modern, responsive school website for Spectrum Matriculation Higher Secondary School with admission information, academic calendar, events, campus highlights, contact forms, and email communication using EmailJS.',
  image: spectrumSchoolImg,
  technologies: [
    'React.js',
    'JavaScript',
    'Tailwind CSS',
    'EmailJS',
    'Responsive Design'
  ],
  liveUrl: 'https://spectrummathss.com',
  category: 'Client Project',
  color: 'from-blue-500/20 to-indigo-500/10',
  accent: 'bg-blue-500',
    },
    {
      id: 2,
      title: 'ZELO',
  subtitle: 'Personal Life Management Application',
  description:
    'Developed ZELO, a mobile-first personal life management application that helps users organize and track expenses, tasks, reminders, notes, goals, calendar events, food, workouts, water intake, and sleep from a single platform. Built with React.js and Supabase with secure authentication, PostgreSQL database, Row Level Security, profile management, and customizable modules.',
  image: zeloImg,
  technologies: [
    'React.js',
    'JavaScript',
    'Tailwind CSS',
    'Supabase',
    'PostgreSQL',
    'Supabase Auth',
    'RLS',
    'Responsive Design'
  ],
  liveUrl: 'https://zelo-main.pages.dev/login',
  category: 'Personal Product',
  color: 'from-emerald-500/20 to-teal-500/10',
  accent: 'bg-emerald-500',
    },
    {
      id: 3,
      title: 'Madras Villa',
      subtitle: 'Resort Booking Website',
      description:
        'A fully responsive resort website with a photo-rich gallery, real-time booking form, customer testimonials, and a contact section with location details.',
      image: Villa,
      technologies: ['React.js', 'Tailwind CSS', 'Firebase', 'React Router'],
      liveUrl: 'https://madrasvilla.netlify.app/',
      category: 'React + Firebase',
      color: 'from-purple-500/20 to-pink-500/10',
      accent: 'bg-purple-500',
    },
    {
      id: 4,
      title: 'Uni Britind Global',
      subtitle: 'Study Abroad Guidance Platform',
      description:
        'Developed during my internship at UNI BRITIND GLOBAL UK — a platform helping students plan and navigate higher education abroad.',
      image: ecommerceImg,
      technologies: ['React.js', 'JavaScript', 'Firebase', 'Tailwind CSS'],
      liveUrl: 'https://unibritend.vercel.app/',
      category: 'Internship Project',
      color: 'from-rose-500/20 to-red-500/10',
      accent: 'bg-rose-500',
    },
    {
  id: 5,
  title: 'Healthy Bites',
      subtitle: 'Food Ordering Platform',
      description:
        'A web app for a food startup promoting healthy meals, featuring WhatsApp ordering integration, an admin dashboard, and Excel export for order management.',
      image: healthyBitesImg,
      technologies: ['React.js', 'Tailwind CSS', 'WhatsApp API', 'SheetJS', 'Netlify'],
      liveUrl: 'https://storied-rugelach-febbd7.netlify.app/',
      category: 'Web Application',
      color: 'from-orange-500/20 to-yellow-500/10',
      accent: 'bg-orange-500',
    },
  ];

  const sortedProjects = [...projects].sort((a, b) => a.id - b.id);

  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-6">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
            <Layers size={14} />
            My Work
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6 rounded-full" />
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            A curated showcase of real-world applications I have built, from SaaS platforms to client websites.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {sortedProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-2xl overflow-hidden border border-white/10 bg-card/60 backdrop-blur-sm hover:border-primary/40 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/10 flex flex-col"
            >
              {/* Gradient top accent */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${project.color.replace('/20', '').replace('/10', '')} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              {/* Image with overlay */}
              <div className="relative overflow-hidden h-48 flex-shrink-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Dark overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                {/* Category badge top right */}
                <div className="absolute top-3 right-3">
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-black/50 backdrop-blur-sm text-white border border-white/20">
                    {project.category}
                  </span>
                </div>

                {/* Live Demo button slides up on hover */}
                {project.liveUrl !== '#' && (
                  <div className="absolute bottom-4 left-0 right-0 flex justify-center translate-y-12 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-400">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary text-black font-semibold text-sm hover:bg-primary/90 transition-colors duration-200 shadow-lg shadow-primary/30"
                    >
                      <ExternalLink size={14} />
                      Visit Live Site
                    </a>
                  </div>
                )}
              </div>

              {/* Card Content */}
              <div className="p-5 flex flex-col flex-1">
                {/* Title & Subtitle */}
                <div className="mb-3">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 mb-1">
                    {project.title}
                  </h3>
                  <p className="text-sm text-primary/70 font-medium">{project.subtitle}</p>
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                  {project.technologies.map((tech, i) => (
                    <Badge
                      key={i}
                      variant="outline"
                      className="text-xs px-2 py-0.5 border-primary/20 text-muted-foreground hover:border-primary hover:text-primary transition-colors duration-200 bg-primary/5"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Bottom CTA strip for no-link projects */}
              {project.liveUrl === '#' && (
                <div className="px-5 pb-4">
                  <span className="text-xs text-muted-foreground/60 italic">
                    🔒 Private / Internal Project
                  </span>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
