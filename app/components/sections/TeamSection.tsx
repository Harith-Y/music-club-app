'use client';

import AnimatedSection from '../../components/layout/AnimatedSection';
import MemberCard from '../../components/ui/MemberCard';
import TeamSlider from '../../components/ui/TeamSlider';
import { coreMembers, coordinators, crew, mentors } from '../../data/team';

interface TeamSectionProps {
  windowWidth: number;
  isClient: boolean;
}

const TeamSection = ({ windowWidth, isClient }: TeamSectionProps) => {
  return (
    <AnimatedSection id="team">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-heading">Meet Our Team</h2>
        
        {/* Core Members - First Row */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold mb-6 text-center text-purple-600 dark:text-purple-400">Core Team</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreMembers.map((member) => (
              <MemberCard key={member.id} member={member} />
            ))}
          </div>
        </div>
        
        {/* Coordinators - Second Row (Carousel) */}
        {isClient && (
          <TeamSlider title="Coordinators" members={coordinators} windowWidth={windowWidth} autoplaySpeed={3000} />
        )}
        
        {/* Crew - Third Row (Carousel) */}
        {isClient && (
          <TeamSlider title="Crew" members={crew} windowWidth={windowWidth} autoplaySpeed={4000} />
        )}
        
        {/* Mentors - Last Row */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-6 text-center text-purple-600 dark:text-purple-400">Mentors</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {mentors.map((member) => (
              <MemberCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default TeamSection;
