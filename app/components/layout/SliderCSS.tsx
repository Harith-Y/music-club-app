import { useEffect } from 'react';

const SliderCSS = () => {
  useEffect(() => {
    import('slick-carousel/slick/slick.css');
    import('slick-carousel/slick/slick-theme.css');
  }, []);
  
  return null;
};

export default SliderCSS;