import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-8" />

          <div className="space-y-5 text-muted-foreground leading-relaxed text-lg">
            <p>
              I'm a third-year Computer Science undergraduate with a strong passion for
              software development and problem-solving. I enjoy designing and building
              web applications that are not only functional but also visually appealing
              and user-friendly.
            </p>
            <p>
              My experience spans across the full stack — from crafting responsive
              frontends with React to building robust backends with Node.js and Express.
              I've worked with both SQL and NoSQL databases and I'm comfortable with
              modern development tools like Git and Docker.
            </p>
            <p>
              Beyond coding, I've honed my leadership skills as a Super Senior Prefect
              and Chess Captain, experiences that taught me teamwork, strategic thinking,
              and responsibility. I'm always eager to learn new technologies and
              contribute to impactful projects.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
