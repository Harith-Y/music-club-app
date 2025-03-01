import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface ArrowProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const PrevArrow = ({ onClick }: ArrowProps) => {
  return (
    <button
      className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-gray-800 p-2 rounded-full shadow-md text-purple-600 hover:bg-purple-100 dark:hover:bg-purple-900 -ml-5"
      onClick={onClick}
    >
      <FaChevronLeft />
    </button>
  );
};

export const NextArrow = ({ onClick }: ArrowProps) => {
  return (
    <button
      className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-gray-800 p-2 rounded-full shadow-md text-purple-600 hover:bg-purple-100 dark:hover:bg-purple-900 -mr-5"
      onClick={onClick}
    >
      <FaChevronRight />
    </button>
  );
};