import Image from 'next/image';
import { TeamMember } from '../../data/team';

interface MemberCardProps {
  member: TeamMember;
}

const MemberCard = ({ member }: MemberCardProps) => {
  return (
    <div className="member-card">
      <div className="aspect-square relative w-full overflow-hidden">
        <Image
          src={member.image}
          alt={member.name}
          fill
          style={{ objectFit: 'contain' }}
          className="rounded-t-lg"
        />
      </div>
      <div className="p-6 text-center">
        <h3 className="text-xl font-bold">{member.name}</h3>
        <p className="text-purple-600 dark:text-purple-400 mb-3">{member.role}</p>
        <p className="text-gray-600 dark:text-gray-300">{member.bio}</p>
      </div>
    </div>
  );
};

export default MemberCard;