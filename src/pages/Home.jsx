import React from "react"; 
import { StarBackground } from "../components/StarBackground";
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import { ProjectsSection } from "../components/Projectssection";
import ExperienceSection from "../components/ExperienceSection";

export const Home=()=>{
    return <div>
        
        <StarBackground />
        <Navbar />
        <main>
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ExperienceSection />
            <ProjectsSection />
            <ContactSection />
        </main>
        <Footer />

    </div>
};