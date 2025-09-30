import { Globe, Smartphone, Database } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-30 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Full-Stack Web Developer | MERN & PERN Specialist
            </h3>

            <p className="text-muted-foreground text-justify">
              Full-stack developer with expertise in the JavaScript ecosystem, specializing in React.js frontend 
              and Node.js/Express.js backend. I build enterprise-grade web applications with seamless MongoDB and PostgreSQL 
              integration, delivering scalable, high-performance solutions.
            </p>

            <p className="text-muted-foreground text-justify">
              Skilled in modern UI/UX design, TypeScript, and advanced CSS frameworks, combined with robust API development 
              and database optimization. I deliver responsive, secure applications that enhance user engagement and drive business growth.
            </p>


            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a 
                href="#contact" 
                className="px-6 py-2 rounded-full bg-primary text-primary-foreground font-medium transition-all duration-300 hover:shadow-[0_0_10px_rgba(139,92,246,0.5)] active:scale-95"
              >
                Get In Touch
              </a>

              <a
                href="/Saikam_Krishna_Reddy_Web_Development_Resume.pdf"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
             <div className="gradient-border p-6 card-hover">
               <div className="flex items-start gap-4">
                 <div className="p-3 rounded-full bg-primary/10">
                   <Globe className="h-6 w-6 text-primary" />
                 </div>
                 <div className="text-left">
                   <h4 className="font-semibold text-lg">Web Dev</h4>
                   <p className="text-muted-foreground">
                     Build full-stack apps with React, Node.js and databases for business solutions.
                   </p>
                 </div>
               </div>
             </div>
            
             <div className="gradient-border p-6 card-hover">
               <div className="flex items-start gap-4">
                 <div className="p-3 rounded-full bg-primary/10">
                   <Smartphone className="h-6 w-6 text-primary" />
                 </div>
                 <div className="text-left">
                   <h4 className="font-semibold text-lg">Responsive UI</h4>
                   <p className="text-muted-foreground">
                     Create mobile-first interfaces that work seamlessly across all devices.
                   </p>
                 </div>
               </div>
             </div>
            
             <div className="gradient-border p-6 card-hover">
               <div className="flex items-start gap-4">
                 <div className="p-3 rounded-full bg-primary/10">
                   <Database className="h-6 w-6 text-primary" />
                 </div>
                 <div className="text-left">
                   <h4 className="font-semibold text-lg">API Design</h4>
                   <p className="text-muted-foreground">
                     Develop RESTful APIs and database schemas for scalable applications.
                   </p>
                 </div>
               </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};
