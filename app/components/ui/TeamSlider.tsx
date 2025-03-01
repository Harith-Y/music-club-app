import dynamic from 'next/dynamic';
import { PrevArrow, NextArrow } from '../layout/SliderArrows';
import MemberCard from './MemberCard';
import { TeamMember } from '../../data/team';

// Dynamically import Slider to avoid SSR issues
const Slider = dynamic(() => import('react-slick'), { ssr: false });

interface TeamSliderProps {
  title: string;
  members: TeamMember[];
  windowWidth: number;
  autoplaySpeed?: number;
}

const TeamSlider = ({ title, members, windowWidth, autoplaySpeed = 3000 }: TeamSliderProps) => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: windowWidth < 640 ? 1 : windowWidth < 1024 ? 2 : 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div className="mt-16">
      <h3 className="text-2xl font-bold mb-6 text-center text-purple-600 dark:text-purple-400">{title}</h3>
      <div className="px-6 md:px-12">
        <Slider {...sliderSettings}>
          {members.map((member) => (
            <div key={member.id} className="px-2">
              <MemberCard member={member} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TeamSlider