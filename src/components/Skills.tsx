import { motion } from 'framer-motion';
import { Badge } from './ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Technologies',
      skills: [
        { name: 'HTML/CSS', level: 85 },
        { name: 'React.js', level: 80 },
        { name: 'JavaScript', level: 80 },
        { name: 'PrimeReact / Mantine', level: 70 },
      ]
    },
    {
      title: 'Backend & Database',
      skills: [
        { name: 'Node.js', level: 70 },
        { name: 'Express.js', level: 70 },
        { name: 'MongoDB', level: 65 },
        { name: 'Firebase', level: 65 },
        { name: 'REST APIs', level: 75 }
      ]
    },
    {
      title: 'Tools & Workflow',
      skills: [
        { name: 'Git/GitHub', level: 75 },
        { name: 'Postman', level: 70 },
        { name: 'Agile/Jira', level: 75 },
        { name: 'Tailwind CSS', level: 80 }
      ]
    }
  ];

  const tools = [
    'HTML5','CSS3','React.js', 'Node.js', 'Express.js', 'MongoDB', 'JavaScript', 'Tailwind CSS',
    'Firebase', 'REST APIs', 'Git', 'GitHub', 'Postman', 'Jira'
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable web applications
          </p>
        </motion.div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            >
              <Card className="h-full hover-lift dark-card hover:neon-glow transition-all duration-500">
                <CardHeader>
                  <CardTitle className="text-xl gradient-text">
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        className="space-y-2"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ 
                          duration: 0.4, 
                          delay: categoryIndex * 0.1 + skillIndex * 0.05 
                        }}
                      >
                        <div className="flex justify-between items-center">
                          <span className="text-foreground font-medium">
                            {skill.name}
                          </span>
                          <span className="text-sm text-muted-foreground">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <motion.div
                            className="h-2 rounded-full bg-gradient-to-r from-primary to-secondary"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ 
                              duration: 1, 
                              delay: categoryIndex * 0.1 + skillIndex * 0.05,
                              ease: "easeOut" 
                            }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Technology Stack */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h3 className="text-3xl font-bold mb-8 text-foreground">
            Technology Stack
          </h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {tools.map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.4, 
                  delay: index * 0.05,
                  type: "spring",
                  stiffness: 200 
                }}
                whileHover={{ scale: 1.05 }}
              >
                <Badge 
                  variant="outline" 
                  className="px-4 py-2 text-sm font-medium border-primary/20 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                >
                  {tool}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
