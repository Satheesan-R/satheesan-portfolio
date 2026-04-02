import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Trophy } from "lucide-react";

const experiences = [
  {
    icon: Award,
    title: "Super Senior Prefect",
    description:
      "Led the student body with distinction, organizing school-wide events, mentoring junior students, and serving as a bridge between students and administration. Demonstrated exceptional leadership and communication skills.",
  },
  {
    icon: Trophy,
    title: "Chess Captain",
    description:
      "Captained the school chess team in inter-school tournaments. Developed strategic thinking, discipline, and the ability to perform under pressure — skills that translate directly into problem-solving in software development.",
  },
];

const Experience = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-center">
            Experience & <span className="text-gradient">Leadership</span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-12 mx-auto" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="glass-card rounded-2xl p-6 hover:border-primary/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <exp.icon size={22} className="text-primary" />
                </div>
                <h3 className="font-heading text-xl font-semibold mb-3">
                  {exp.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {exp.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
