import React from "react";
import konigtronicsLogo from "../assets/company_logo/konigtronics.png";
import compsoftLogo from "../assets/company_logo/compsoft.png";

const experiences = [
  {
    id: 1,
    role: "Data Scientist Intern",
    company: "Konigtronics Private Limited",
    date: "February 2025 - May 2025",
    desc: "Gained hands-on experience in data preprocessing, visualization, and machine learning model development, focusing on building practical solutions from raw datasets. Learned to interpret data trends, optimize models, and create interactive interfaces for end-users.",
    skills: ["Python", "Machine Learning", "Pandas", "Matplotlib", "Scikit-learn", "Flask", "Seaborn", "Data Analysis", "Data Cleaning", "Data Visualization", "Excel"],
    img: konigtronicsLogo
  },
  {
    id: 2,
    role: "Web Development Intern",
    company: "Compsoft Technologies",
    date: "May 2023 - June 2023",
    desc: "Worked on designing and developing responsive web applications, translating UI/UX designs into functional websites with modern front-end technologies. Collaborated on version control and ensured cross-browser compatibility and clean code practices.",
    skills: ["HTML", "CSS", "JavaScript", "Figma", "Bootstrap", "Responsive Design", "UI/UX Implementation"],
    img: compsoftLogo
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-30 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-primary">Experience</span>
          </h2>
          
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Internships and hands-on projects that have shaped my development skills and provided practical experience in full-stack web development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map((experience) => (
            <div
              key={experience.id}
              className="bg-card border border-border rounded-lg p-6 card-hover shadow-sm"
            >
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-background border border-border rounded-md overflow-hidden">
                  <img
                    src={experience.img}
                    alt={`${experience.company} logo`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="text-center mb-4">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {experience.role}
                </h3>
                <p className="text-sm text-muted-foreground mb-1">
                  {experience.company}
                </p>
                <p className="text-xs text-primary font-medium">
                  {experience.date}
                </p>
              </div>

              <p className="text-muted-foreground text-sm mb-4 leading-relaxed text-justify">
                {experience.desc}
              </p>
              
              <div className="text-center">
                <h5 className="font-medium text-foreground mb-3 text-sm">Skills:</h5>
                <div className="flex flex-wrap gap-2 justify-center">
                  {experience.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
