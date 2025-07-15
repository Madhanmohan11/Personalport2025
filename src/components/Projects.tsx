import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';

// Import project images
import healthyBitesImg from '../assets/Startup.png';
import Villa from '../assets/Villa.png';
import ecommerceImg from '../assets/intern-pho.png';
import taskManagerImg from '../assets/Food.png';
import weatherImg from '../assets/Weather.png';
import blogImg from '../assets/Game.png';
import Task from '../assets/Taskm.png';
import socialImg from '../assets/Mattube.png';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Healthy Bites – Food Ordering Platform',
      description:
        'A web-based application built for a food startup promoting healthy breakfast habits and fruit-rich meals. Features include WhatsApp ordering, an admin dashboard, and Excel export for managing orders.',
      image: healthyBitesImg,
      technologies: ['React.js', 'Tailwind CSS', 'WhatsApp API', 'SheetJS', 'Netlify'],
      liveUrl: 'https://storied-rugelach-febbd7.netlify.app/',
      githubUrl: 'https://github.com/YourUsername/healthy-bites',
      featured: true,
    },
   {
      id: 2,
      title: 'Madras Villa – Your Home Away From Home',
      description:
        'A fully responsive resort web application built for Madras Villa to showcase its peaceful and scenic stay experience. Features include a photo-rich gallery, real-time booking form, customer testimonials, and a contact section with location details. Designed to provide a mobile-first, relaxing user experience and help grow the resort’s online presence.',
      image: Villa,
      technologies: ['React.js', 'Tailwind CSS', 'Firebase', 'React Router', 'React Context API'],
      liveUrl: 'https://madrasvilla.netlify.app/',
      githubUrl: 'https://github.com/Madhanmohan11/unibritend',
      featured: true,
    },
    {
      id: 3,
      title: 'Study Abroad Guidance Platform',
      description: 'Developed during my internship at UNI BRITIND GLOBAL UK for planning higher education abroad.',
      image: ecommerceImg,
      technologies: ['React','Javascript', 'Firebase', 'Tailwind CSS'],
      liveUrl: 'https://unibritend.vercel.app/',
      githubUrl: 'https://github.com/Madhanmohan11/unibritend',
      featured: true,
    },
    {
      id: 4,
      title: 'Online Food Ordering App',
      description: 'My first project — a food ordering site with a responsive UI.',
      image: taskManagerImg,
      technologies: ['HTML', 'CSS', 'JAVASCRIPT'],
      liveUrl: 'https://of-delivery.netlify.app/',
      githubUrl: 'https://github.com/Madhanmohan11/Online-food-delivery',
      featured: false,
    },
    {
      id: 5,
      title: 'Live Weather App',
      description: 'A live weather app giving real-time updates using OpenWeather API.',
      image: weatherImg,
      technologies: ['HTML', 'CSS', 'JAVASCRIPT', 'OpenWeather API'],
      liveUrl: 'https://madhanweatherapp.netlify.app/',
      githubUrl: 'https://github.com/Madhanmohan11/Live-Weather-Forecast-main',
      featured: false,
    },
    {
      id: 6,
      title: 'X-O-X Tic Tac Toe Game',
      description: 'A simple multiplayer Tic Tac Toe game for fun and relaxation.',
      image: blogImg,
      technologies: ['HTML', 'CSS', 'JAVASCRIPT'],
      liveUrl: 'https://x-o-x-tic-game.netlify.app/',
      githubUrl: 'https://github.com/Madhanmohan11/Tic-Tack-Toe',
      featured: false,
    },
    {
      id: 7,
      title: 'Task Management App',
      description: 'This application is designed for task assignment and daily note-taking. It allows users to create, assign, and manage tasks efficiently.',
      image: Task,
      technologies: ['HTML', 'CSS', 'JQuery', 'JavaScript'],
      liveUrl: 'https://taskma.netlify.app/',
      githubUrl: 'https://github.com',
      featured: false,
    },
    {
      id: 8,
      title: 'Youtube Clone',
      description: 'This is a YouTube clone and  It is fully responsive, includes active video links, and features a side menu list for easy navigation. ',
      image: socialImg,
      technologies: ['HTML', 'CSS', 'JAVASCRIPT'],
      liveUrl: 'https://clone-madtube.netlify.app/',
      githubUrl: 'https://github.com',
      featured: false,
    }
  ];

  // Sort by id to ensure correct order
  const sortedProjects = [...projects].sort((a, b) => a.id - b.id);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-muted/30 to-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Projects</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and the technologies I've used to bring ideas to life
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {sortedProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className={`${project.featured ? 'lg:col-span-2' : ''}`}
            >
              <Card className="group hover-lift h-full overflow-hidden dark-card transition-all duration-500">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {project.featured && (
                    <div className="absolute top-4 left-4">
                      <Badge className="neon-glow bg-gradient-to-r from-primary to-accent text-black font-bold">
                        ⭐ Featured
                      </Badge>
                    </div>
                  )}
                </div>

                <CardContent className="p-6 bg-card/80 backdrop-blur-sm">
                  <h3 className="text-2xl font-bold mb-3 gradient-text group-hover:animate-pulse transition-all duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        whileHover={{ scale: 1.1, y: -2 }}
                      >
                        <Badge 
                          variant="outline" 
                          className="text-xs border-primary/30 hover:border-primary hover:neon-glow transition-all duration-300 bg-primary/5"
                        >
                          {tech}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>

                  <div className="flex space-x-3">
                    <Button variant="default" size="sm" asChild className="flex-1 neon-glow hover:scale-105 transition-all duration-300">
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={16} className="mr-2" />
                        Live Demo
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild className="flex-1 border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300">
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github size={16} className="mr-2" />
                        Code
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
