import React, { useEffect, useState } from 'react';

const ScrollUpButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when scrolled down 300px
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // This makes the scroll smooth
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <button onClick={scrollToTop} className="scroll-up-button">
          <i className="fa fa-angle-double-up"></i>
        </button>
      )}
    </>
  );
};

export default ScrollUpButton;
