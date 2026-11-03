import React, { useState, useEffect } from 'react';
import { fetchPortfolio } from './lib/api';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HeroSection } from './components/sections/HeroSection';
import { AboutSection } from './components/sections/AboutSection';
import { FocusAreasSection } from './components/sections/FocusAreasSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { ExperienceSection } from './components/sections/ExperienceSection';
import { EducationSection } from './components/sections/EducationSection';
import { SkillsSection } from './components/sections/SkillsSection';
import { CertificationsSection } from './components/sections/CertificationsSection';
import { ContactSection } from './components/sections/ContactSection';
import { Terminal, Wifi, WifiOff } from 'lucide-react';

export default function App() {
  const [portfolio, setPortfolio] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isLive, setIsLive] = useState(false);

  useEffect(() => {
    let isMounted = true;

    async function loadData() {
      try {
        const result = await fetchPortfolio();
        if (isMounted) {
          setPortfolio(result.data);
          setIsLive(result.isLive);
        }
      } catch (err) {
        console.error('Portfolio initial load error:', err);
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    loadData();
    return () => {
      isMounted = false;
    };
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0B1020] text-slate-200 flex flex-col items-center justify-center p-4">
        <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-cyan-400 mb-4 animate-pulse">
          <Terminal className="w-6 h-6" />
        </div>
        <p className="font-mono text-sm text-cyan-400">Loading portfolio data...</p>
      </div>
    );
  }

  const {
    profile = {},
    projects = [],
    experience = [],
    education = [],
    skills = {},
    certifications = {},
  } = portfolio || {};

  return (
    <div className="min-h-screen bg-[#0B1020] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Navigation */}
      <Navbar profile={profile} />

      {/* Main Content Sections */}
      <main>
        <HeroSection profile={profile} />
        <AboutSection profile={profile} />
        <FocusAreasSection focusAreas={profile?.focusAreas} />
        <ProjectsSection projects={projects} />
        <ExperienceSection experience={experience} />
        <EducationSection education={education} />
        <SkillsSection skills={skills} />
        <CertificationsSection certifications={certifications} />
        <ContactSection profile={profile} />
      </main>

      {/* Footer */}
      <Footer profile={profile} />
    </div>
  );
}
