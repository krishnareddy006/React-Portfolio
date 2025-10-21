import { ArrowRight, ExternalLink, Github, ChevronLeft, ChevronRight, Eye, X } from "lucide-react";
import { useState } from "react";

// Recipe Hub Images
import DevaDarshanHome from "../assets/project_logo/DevaDarshanHome.png";
import DevaDarshanAdmin from "../assets/project_logo/ DevaDarshanAdmin.png";
import DevaDarshanAdminRecord from "../assets/project_logo/DevaDarshanAdminRecord.png";
import DevaDarshanPooja from "../assets/project_logo/DevaDarshanPooja.png";
import DevaDarshanAccommodation from "../assets/project_logo/DevaDarshanAccommodation.png";
import DevaDarshanDarshan from "../assets/project_logo/DevaDarshanDarshan.png";
import DevaDarshanDonation from "../assets/project_logo/DevaDarshanDonation.png";
import DevaDarshanPayment from "../assets/project_logo/DevaDarshanPayment.png";

import recipeHomePage from "../assets/project_logo/recipeHomePage.png";
import recipeSearch from "../assets/project_logo/recipeSearch.png";
import recipeViewRecipe from "../assets/project_logo/recipeViewRecipe.png";
import recipeMyRecipePage from "../assets/project_logo/recipeMyRecipePage.png";
import recipeFavPage from "../assets/project_logo/recipeFavPage.png";

// NoteFlow Images
import noteFlowMainPage from "../assets/project_logo/NoteFlowMainPage.png";
import noteFlowEntry from "../assets/project_logo/NoteFlowEntry.png";
import noteFlowNotes from "../assets/project_logo/NoteFlowNotes.png";
import noteFlowDelete from "../assets/project_logo/NoteFlowDelete.png";

// BookByte Images
import bookByteHomePage from "../assets/project_logo/bookByteHomePage.png";
import bookByteFilter from "../assets/project_logo/bookByteFilter.png";
import bookByteCards from "../assets/project_logo/bookByteCards.png";
import bookByteViewPage from "../assets/project_logo/bookByteViewPage.png";
import bookByteEditPage from "../assets/project_logo/bookByteEditPage.png";

// Global Country Explorer Images
import globalHomePage from "../assets/project_logo/globalHomePage.png";
import globalSearch from "../assets/project_logo/globalSearch.png";
import globalView from "../assets/project_logo/globalView.png";
import globalFooter from "../assets/project_logo/globalFooter.png";

// DevBlog Images
import devBlogHomePage from "../assets/project_logo/devBlogHomePage.png";
import devBlogViewPost from "../assets/project_logo/devBlogViewPost.png";
import devBlogCreate from "../assets/project_logo/devBlogCreate.png";

// The Que Club Images
import snookerHomePage from "../assets/project_logo/snookerHomePage.png";
import snookerMembership from "../assets/project_logo/snookerMembership.png";
import snookerBooking from "../assets/project_logo/snookerBooking.png";
import snookerTournament from "../assets/project_logo/snookerTournament.png";
import snookerCoaching from "../assets/project_logo/snookerCoaching.png";

const projects = [
  {
    id: 1,
    title: "Deva Darshan",
    description: "A full-stack temple management platform that digitizes operations with online bookings, donation tracking, pooja scheduling, and admin tools for real-time monitoring.",
    detailedDescription: "Deva Darshan is a comprehensive full-stack temple management system that digitally transforms and streamlines religious institution operations while enhancing devotee experiences. It provides an end-to-end platform for managing temple activities such as darshan bookings, accommodation reservations, donations, poojas, events, and community memberships. The system includes an integrated Admin Panel that allows administrators to efficiently manage all operations, including the approval of accommodation and membership requests, with automated email notifications sent to users upon confirmation for seamless communication and an improved overall experience.",
    images: [
      DevaDarshanHome,
      DevaDarshanAdmin,
      DevaDarshanAdminRecord,
      DevaDarshanPooja,
      DevaDarshanAccommodation,
      DevaDarshanDarshan,
      DevaDarshanDonation,
      DevaDarshanPayment
    ],
    tags: ["TypeScript", "React", "Node.js", "MongoDB Atlas", "Express", "REST APIs"],
    demoUrl: "https://deva-darshan.vercel.app/",
    githubUrl: "https://github.com/krishnareddy006/DevaDarshan-Temple-Management-System",
  },
  {
    id: 1,
    title: "Recipe Hub",
    description: "Full-stack recipe management application with CRUD operations, user authentication, and advanced filtering. Includes image uploads and real-time search for an interactive experience.",
    detailedDescription: "Recipe Hub delivers a comprehensive recipe management platform with complete CRUD functionality. Users can add recipes with image uploads, edit existing entries, and organize favorites through an intuitive interface. Advanced filtering enables search by name, diet type, cuisine, and country. The application features JWT authentication, Cloudinary integration for image management, and responsive design with smooth animations.",
    images: [
      recipeHomePage,
      recipeSearch, 
      recipeViewRecipe,
      recipeMyRecipePage,
      recipeFavPage
    ],
    tags: ["React", "Node.js", "MongoDB Atlas", "Express", "JWT", "Cloudinary"],
    demoUrl: "https://recipe-hub-gamma-seven.vercel.app/",
    githubUrl: "https://github.com/krishnareddy006/Recipe-Hub",
  },
  {
    id: 2,
    title: "BookByte",
    description: "Personal reading companion combining external book metadata with user reviews and ratings. Features smart search, dynamic cover displays, and a tailored reading experience.",
    detailedDescription: "BookByte serves as a comprehensive reading tracker that integrates the Open Library API to fetch detailed book information. The platform allows users to search for titles, view metadata, and add personal ratings and reviews with dynamic cover image support. Built with Express.js and EJS templating, it leverages PostgreSQL for persistent storage and includes automatic table setup with sample data for smooth onboarding.",
    images: [
      bookByteHomePage,
      bookByteFilter,
      bookByteCards,
      bookByteViewPage,
      bookByteEditPage
    ],
    tags: ["Node.js", "Express.js", "PostgreSQL", "EJS", "REST APIs", "Bootstrap", "CSS"],
    demoUrl: "https://bookbyte-9k6z.onrender.com/",
    githubUrl: "https://github.com/krishnareddy006/BookByte",
  },
  {
    id: 3,
    title: "Global Country Explorer",
    description: "Interactive country information platform using REST Countries API. Provides comprehensive country data, intelligent search, and a modern modal interface.",
    detailedDescription: "Global Country Explorer delivers detailed country information through an intuitive and responsive interface. It supports smart searches by country name, capital, or region, with intelligent partial matching, and presents comprehensive data on demographics, geography, languages, and currencies. The platform features modern glassmorphism design, smooth animations, and interactive modal overlays for an enhanced user experience.",
    images: [
      globalHomePage,
      globalSearch,
      globalView,
      globalFooter
    ],
    tags: ["Node.js", "Express.js", "EJS", "Bootstrap", "REST Countries API", "JavaScript", "CSS", ],
    demoUrl: "https://global-country-explorer.onrender.com/",
    githubUrl: "https://github.com/krishnareddy006/Global-Country-Explorer",
  },
  {
    id: 4,
    title: "NoteFlow",
    description: "Modern note-taking web application built with React and Material UI. Features real-time note creation, and persistent local storage with optimized Vite build.",
    detailedDescription: "NoteFlow is a React-based note-taking application that demonstrates core React principles such as hooks, props, and state management. It provides real-time note creation and organization with a clean Material UI design and Vite optimization for fast builds. While the application delivers efficient performance and persistent local storage.",
    images: [
      noteFlowMainPage,
      noteFlowEntry,
      noteFlowNotes,
      noteFlowDelete
    ],
    tags: ["React", "Material UI", "Vercel", "Vite"],
    demoUrl: "https://note-flow-navy.vercel.app/",
    githubUrl: "https://github.com/krishnareddy006/NoteFlow",
  },
  {
    id: 5,
    title: "DevBlog",
    description: "Simple blog platform built with Node.js and EJS templating. Enables post creation, publishing, and viewing with clean responsive design and server-side rendering.",
    detailedDescription: "DevBlog is a lightweight blogging platform developed as part of my learning journey in full-stack web development. Built with Node.js, Express, and EJS templating, it demonstrates server-side rendering, dynamic content management, and responsive design. The platform enables post creation, publishing, and viewing, providing a clean and functional interface ideal for sharing knowledge and practicing core web development concepts.",
    images: [
      devBlogHomePage,
      devBlogViewPost,
      devBlogCreate
    ],
    tags: ["Node.js", "Express.js", "EJS", "Bootstrap",],
    demoUrl: "https://devblog-aut1.onrender.com/",
    githubUrl: "https://github.com/krishnareddy006/DevBlog",
  },
  {
    id: 6,
    title: "The Que Club",
    description: "Snooker club management website with booking and membership registration. Built with HTML, CSS, and JavaScript featuring interactive UI and responsive design.",
    detailedDescription: "The Que Club is a frontend-focused snooker club platform designed using Figma for UI/UX planning. It enables users to browse club facilities, simulate booking time slots, and explore membership registration flows. Features include responsive layouts, smooth JavaScript interactions, and modern CSS styling for a polished, professional appearance, demonstrating strong frontend development skills.", 
    images: [
      snookerHomePage,
      snookerMembership,
      snookerBooking,
      snookerTournament,
      snookerCoaching
    ],
    tags: ["HTML", "CSS", "JavaScript", "Figma" ],
    demoUrl: "https://the-que-club.netlify.app/",
    githubUrl: "https://github.com/krishnareddy006/Snooker-Club",
  },
];

export const ProjectsSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState({});
  const [selectedProject, setSelectedProject] = useState(null);
  const [modalImageIndex, setModalImageIndex] = useState(0);

  // Image navigation for project cards
  const nextImage = (projectId) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [projectId]: ((prev[projectId] || 0) + 1) % projects.find(p => p.id === projectId).images.length
    }));
  };

  const prevImage = (projectId) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [projectId]: ((prev[projectId] || 0) - 1 + projects.find(p => p.id === projectId).images.length) % projects.find(p => p.id === projectId).images.length
    }));
  };

  // Modal handlers
  const handleReadMore = (projectId) => {
    const project = projects.find(p => p.id === projectId);
    setSelectedProject(project);
    setModalImageIndex(0);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
    setModalImageIndex(0);
  };

  const nextModalImage = () => {
    setModalImageIndex((prev) => (prev + 1) % selectedProject.images.length);
  };

  const prevModalImage = () => {
    setModalImageIndex((prev) => (prev - 1 + selectedProject.images.length) % selectedProject.images.length);
  };

  return (
    <section id="projects" className="py-30 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        {/* Section Description */}
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects, demonstrating modern web development practices, intuitive user experiences, and scalable, high-performance applications.
        </p>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              {/* Project Image Carousel */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.images[currentImageIndex[project.id] || 0]}
                  alt={`${project.title} screenshot`}
                  className="w-full h-full object-cover"
                />
                
                {/* Image Navigation */}
                <button
                  onClick={() => prevImage(project.id)}
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-1 transition-all duration-200"
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  onClick={() => nextImage(project.id)}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-1 transition-all duration-200"
                >
                  <ChevronRight size={16} />
                </button>

                {/* Image Indicators */}
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
                  {project.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(prev => ({ ...prev, [project.id]: index }))}
                      className={`h-1 rounded-full transition-all duration-200 ${
                        (currentImageIndex[project.id] || 0) === index 
                          ? 'w-8 bg-primary' 
                          : 'w-4 bg-white/50 hover:bg-white/70'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Project Details */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 text-justify leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Action Buttons - Consolidated */}
                <div className="flex justify-center">
                  <button
                    onClick={() => handleReadMore(project.id)}
                    className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-300 text-sm font-medium"
                  >
                    <Eye size={16} />
                    View Project
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/krishnareddy006"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="bg-card border border-border rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto relative animate-in fade-in-0 zoom-in-95 duration-200">
            
            {/* Modal Close Button */}
            <div className="flex justify-end p-4 sticky top-0 bg-card z-10">
              <button
                onClick={handleCloseModal}
                className="text-foreground hover:text-primary text-2xl font-bold transition-colors duration-200 p-2 rounded-full hover:bg-secondary"
              >
                <X size={20} />
              </button>
            </div>

            <div className="flex flex-col">
              {/* Modal Image Carousel */}
              <div className="relative w-full flex justify-center bg-card px-6 pb-4">
                <div className="relative max-w-2xl w-full">
                  <img
                    src={selectedProject.images[modalImageIndex]}
                    alt={`${selectedProject.title} screenshot ${modalImageIndex + 1}`}
                    className="w-full object-contain rounded-lg shadow-lg border border-border"
                  />
                  
                  {selectedProject.images.length > 1 && (
                    <>
                      <button
                        onClick={prevModalImage}
                        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-all duration-200"
                      >
                        <ChevronLeft size={20} />
                      </button>
                      <button
                        onClick={nextModalImage}
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-all duration-200"
                      >
                        <ChevronRight size={20} />
                      </button>

                      {/* Modal Image Indicators */}
                      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
                        {selectedProject.images.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setModalImageIndex(index)}
                            className={`h-1 rounded-full transition-all duration-200 ${
                              modalImageIndex === index 
                                ? 'w-8 bg-primary' 
                                : 'w-4 bg-white/50 hover:bg-white/70'
                            }`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </div>
              
              {/* Modal Project Details */}
              <div className="p-6 lg:p-8">
                <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                  {selectedProject.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 text-sm lg:text-base leading-relaxed text-justify">
                  {selectedProject.detailedDescription}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Modal Action Buttons */}
                <div className="flex gap-4 justify-center">
                  <a
                    href={selectedProject.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-300"
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </a>
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors duration-300"
                  >
                    <Github size={18} />
                    View Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

