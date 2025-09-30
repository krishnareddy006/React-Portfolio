import { useState } from "react";
import { cn } from "@/lib/utils";

import htmlLogo from '../assets/tech_logo/html.png';
import cssLogo from '../assets/tech_logo/css.png';
import javascriptLogo from '../assets/tech_logo/javascript.png';
import reactjsLogo from '../assets/tech_logo/reactjs.png';
import tailwindcssLogo from '../assets/tech_logo/tailwindcss.png';
import bootstrapLogo from '../assets/tech_logo/bootstrap.png';
import materialuiLogo from '../assets/tech_logo/materialui.png';
import typescriptLogo from '../assets/tech_logo/typescript.png';
import figmaLogo from '../assets/tech_logo/figma.png';
import nodejsLogo from '../assets/tech_logo/nodejs.png';
import expressjsLogo from '../assets/tech_logo/express.png';
import pythonLogo from '../assets/tech_logo/python.png';
import mongodbLogo from '../assets/tech_logo/mongodb.png';
import postgreLogo from '../assets/tech_logo/postgre.png';
import mysqlLogo from '../assets/tech_logo/mysql.png';
import vercelLogo from '../assets/tech_logo/vercel.png';
import netlifyLogo from '../assets/tech_logo/netlify.png';
import gitLogo from '../assets/tech_logo/git.png';
import githubLogo from '../assets/tech_logo/github.png';
import vscodeLogo from '../assets/tech_logo/vscode.png';
import postmanLogo from '../assets/tech_logo/postman.png';
import renderLogo from '../assets/tech_logo/render.png';
import chatgptLogo from '../assets/tech_logo/ChatGPT.png';
import restapiLogo from '../assets/tech_logo/RESTAPIs.png';
import cloudinaryLogo from '../assets/tech_logo/cloudinary.png';
import neonLogo from '../assets/tech_logo/neon.png';
import ejsLogo from '../assets/tech_logo/ejs.png';

const skills = [
  // Core Skills
  { name: "React.js", logo: reactjsLogo, category: "frontend" },
  { name: "Node.js", logo: nodejsLogo, category: "backend" },
  { name: "JavaScript", logo: javascriptLogo, category: "frontend" },
  { name: "Python", logo: pythonLogo, category: "backend" },
  { name: "MongoDB", logo: mongodbLogo, category: "database" },
  { name: "Express.js", logo: expressjsLogo, category: "backend" },
  { name: "PostgreSQL", logo: postgreLogo, category: "database" },
  { name: "TypeScript", logo: typescriptLogo, category: "frontend" },
  { name: "REST APIs", logo: restapiLogo, category: "backend" }, 
  { name: "Tailwind CSS", logo: tailwindcssLogo, category: "frontend" },
  { name: "HTML", logo: htmlLogo, category: "frontend" },
  { name: "CSS", logo: cssLogo, category: "frontend" },
  { name: "MySQL", logo: mysqlLogo, category: "database" },
  { name: "Bootstrap", logo: bootstrapLogo, category: "frontend" },
  { name: "Material UI", logo: materialuiLogo, category: "frontend" },
  { name: "EJS", logo: ejsLogo, category: "backend" }, 
  { name: "Figma", logo: figmaLogo, category: "frontend" },
  
  // Cloud & Deployment
  { name: "Vercel", logo: vercelLogo, category: "cloud" },
  { name: "MongoDB Atlas", logo: mongodbLogo, category: "cloud" },
  { name: "Render", logo: renderLogo, category: "cloud" }, 
  { name: "Netlify", logo: netlifyLogo, category: "cloud" },
  { name: "Neon", logo: neonLogo, category: "cloud" }, 
  { name: "Cloudinary", logo: cloudinaryLogo, category: "cloud" }, 
  
  // Development Tools
  { name: "Git", logo: gitLogo, category: "tools" },
  { name: "GitHub", logo: githubLogo, category: "tools" },
  { name: "VS Code", logo: vscodeLogo, category: "tools" },
  { name: "Postman", logo: postmanLogo, category: "tools" },
  { name: "ChatGPT", logo: chatgptLogo, category: "tools" }, 
];

const categories = [
  { key: "all", label: "All Skills" },
  { key: "frontend", label: "Frontend" },
  { key: "backend", label: "Backend" },
  { key: "database", label: "Database" },
  { key: "cloud", label: "Cloud" },
  { key: "tools", label: "Tools" },
];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-30 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.key}
              onClick={() => setActiveCategory(category.key)}
              className={cn(
                "px-6 py-3 rounded-full transition-all duration-300 font-medium",
                activeCategory === category.key
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-card text-foreground hover:bg-secondary border border-border"
              )}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {filteredSkills.map((skill, index) => (
            <div
              key={index}
              className="bg-card p-4 rounded-lg shadow-sm card-hover border border-border/50 
                       hover:border-primary/30 transition-all duration-300 group"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-md bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  {skill.logo ? (
                    <img 
                      src={skill.logo} 
                      alt={`${skill.name} logo`}
                      className="h-5 w-5 object-contain"
                    />
                  ) : (
                    <div className="h-5 w-5 bg-primary/20 rounded-sm flex items-center justify-center">
                      <span className="text-primary text-xs font-bold">
                        {skill.name.charAt(0)}
                      </span>
                    </div>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-medium text-sm text-foreground truncate">
                    {skill.name}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
