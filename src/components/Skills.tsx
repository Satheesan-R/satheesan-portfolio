import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Languages",
    skills: ["C", "C++", "JavaScript", "Python", "PHP" ,"TypeScript"],
  },
  {
    title: "Frontend",
    skills: ["React", "HTML5", "CSS3" ,"Tailwind CSS", ],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express","Rest APIs","JWT Authentication"],
  },
  {
    title: "Databases",
    skills: ["MySQL", "MongoDB" ,"PostgreSQL" ,"Supabase"],
  },
  {
    title: "Tools",
    skills: ["GitHub", "Docker" ,"VS Code" ,"Postman","Figma"],
  },
];

const Skills = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-center">
            My <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-12 mx-auto" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {skillCategories.map((cat, i) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card rounded-2xl p-6 hover:border-primary/30 transition-colors group"
              >
                <h3 className="font-heading text-lg font-semibold mb-4 text-primary">
                  {cat.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-sm rounded-lg bg-secondary text-secondary-foreground font-medium group-hover:bg-primary/10 group-hover:text-primary transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
