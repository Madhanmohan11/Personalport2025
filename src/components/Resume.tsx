import { motion } from 'framer-motion';
import { Download, Calendar, MapPin, Award } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';

const Resume = () => {
  const experience = [
    {
      title: 'Web Developer Intern',
      company: 'Uni Britind Global Pvt Ltd (Ernestwell Business Solutions)',
      location: 'Remote',
      period: 'Nov 2024 – Feb 2025',
      achievements: [
        'Developed and maintained frontend and backend features for full-stack applications.',
        'Designed responsive UI using React.js, aligning with modern accessibility and UX principles.',
        'Implemented React Router and reusable components with hooks like useState and useEffect.',
        'Worked in Agile sprints, contributed to code reviews, and resolved bugs collaboratively.'
      ]
    },
    {
      title: 'Software Engineering Job Simulation (Virtual Internship)',
      company: 'Accenture (via Forage)',
      location: 'Remote',
      period: 'Jun 2024 – Aug 2024',
      achievements: [
        'Completed a simulated internship focused on practical software engineering tasks.',
        'Gained hands-on experience in architecture, security, programming, testing, and agile workflows.',
        'Delivered projects with professional-level documentation and task management.',
        'Demonstrated teamwork, attention to detail, and commitment to quality.'
      ]
    }
  ];

  const education = [
    {
      degree: 'Bachelor of Information Technology',
      school: 'Vels Institute of Science, Technology and Advanced Studies',
      location: 'Chennai',
      period: '2020 – 2024',
      gpa: 'N/A',
      relevant: ['Web Development', 'Software Engineering', 'Database Systems', 'Java Programming']
    }
  ];

  const certifications = [
    {
      name: 'SQL and Relational Databases 101',
      issuer: 'IBM Developer Skills Network',
      date: '2021',
      credentialId: 'N/A'
    },
    {
      name: 'Fundamentals of JavaScript',
      issuer: 'IBM Developer Skills Network',
      date: '2022',
      credentialId: 'N/A'
    },
    {
      name: 'Create Table & Load Data in MySQL using phpMyAdmin',
      issuer: 'IBM Developer Skills Network',
      date: '2022',
      credentialId: 'N/A'
    },
    {
      name: 'Software Engineering Job Simulation',
      issuer: 'Accenture Nordics on Forage',
      date: '2024',
      credentialId: 'N/A'
    }
  ];

  return (
    <section id="resume" className="py-20 bg-background">
      <div className="w-full px-4 sm:px-6 lg:px-8 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Resume
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            My professional experience, education, and certifications
          </p>
          <Button
            size="lg"
            className="px-8 hover-glow"
            onClick={() => {
              const link = document.createElement('a');
              link.href = '/src/assets/Resume_MM.pdf';
              link.download = 'Madhan_Resume.pdf';
              link.click();
            }}
          >
            <Download className="mr-2" size={20} />
            Download Resume
          </Button>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Experience */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold mb-8 text-foreground flex items-center">
              <Calendar className="mr-3 text-primary" size={28} />
              Professional Experience
            </h3>
            <div className="space-y-8">
              {experience.map((job, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="hover-lift dark-card hover:neon-glow transition-all duration-500">
                    <CardHeader>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                        <CardTitle className="text-xl text-foreground">
                          {job.title}
                        </CardTitle>
                        <Badge variant="outline" className="w-fit">
                          {job.period}
                        </Badge>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center text-muted-foreground">
                        <span className="font-semibold text-primary">{job.company}</span>
                        <span className="hidden sm:inline mx-2">•</span>
                        <span className="flex items-center">
                          <MapPin size={14} className="mr-1" />
                          {job.location}
                        </span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {job.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start">
                            <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <span className="text-muted-foreground">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education & Certifications */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Education */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-foreground flex items-center">
                <Award className="mr-3 text-primary" size={24} />
                Education
              </h3>
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <Card className="hover-lift dark-card hover:neon-glow transition-all duration-500">
                    <CardContent className="p-6">
                      <h4 className="text-lg font-semibold text-foreground mb-2">
                        {edu.degree}
                      </h4>
                      <p className="text-primary font-medium mb-1">{edu.school}</p>
                      <div className="flex items-center text-sm text-muted-foreground mb-3">
                        <MapPin size={12} className="mr-1" />
                        {edu.location} • {edu.period}
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm font-medium text-foreground">Relevant Coursework:</p>
                        <div className="flex flex-wrap gap-1">
                          {edu.relevant.map((course, courseIndex) => (
                            <Badge key={courseIndex} variant="outline" className="text-xs">
                              {course}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-foreground">
                Certifications
              </h3>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  >
                    <Card className="hover-lift dark-card hover:neon-glow transition-all duration-500">
                      <CardContent className="p-4">
                        <h4 className="font-semibold text-foreground mb-1">
                          {cert.name}
                        </h4>
                        <p className="text-primary text-sm mb-1">{cert.issuer}</p>
                        <div className="flex justify-between items-center text-xs text-muted-foreground">
                          <span>{cert.date}</span>
                          <span>{cert.credentialId !== 'N/A' ? `ID: ${cert.credentialId}` : ''}</span>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
