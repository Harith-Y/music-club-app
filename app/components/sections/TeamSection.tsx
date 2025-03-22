'use client';

import { motion } from 'framer-motion';
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
    <AnimatedSection id="team" className="bg-gradient-to-b from-gray-800 to-gray-900 py-20">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-secondary-400">
            Meet Our Team
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            The passionate individuals who make the Music Club what it is today
          </p>
        </motion.div>
        
        {/* Core Members - First Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold mb-8 text-center text-primary-400">Core Team</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <MemberCard member={member} />
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Coordinators - Second Row (Carousel) */}
        {isClient && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-16"
          >
            <TeamSlider 
              title="Coordinators" 
              members={coordinators} 
              windowWidth={windowWidth} 
              autoplaySpeed={3000}
              titleColor="text-secondary-400"
            />
          </motion.div>
        )}
        
        {/* Crew - Third Row (Carousel) */}
        {isClient && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-16"
          >
            <TeamSlider 
              title="Crew" 
              members={crew} 
              windowWidth={windowWidth} 
              autoplaySpeed={4000}
              titleColor="text-accent-400"
            />
          </motion.div>
        )}
        
        {/* Mentors - Last Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h3 className="text-2xl font-bold mb-8 text-center text-primary-400">Mentors</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {mentors.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <MemberCard member={member} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-40 h-40 bg-primary-500/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      </div>
    </AnimatedSection>
  );
};

export default TeamSection;
