import React, { useState, useEffect } from 'react';
import { useTransition, animated } from 'react-spring';
import './Profession.css'; // Import the CSS file for styling

const professions = ['Web Developer', 'Software Engineer', 'Computer Engineer'];

const Profession = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % professions.length);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const transition = useTransition(professions[index], {
    key: professions[index],
    from: { opacity: 0, position: 'absolute' },
    enter: { opacity: 1 },
    leave: { opacity: 0, position: 'absolute' },
    initial: { opacity: 1, position: 'absolute' },
  });

  return (
    <div className="profession-container">
      {transition((style, profession) => (
        <animated.div style={style}>
          <h1>{profession}</h1>
        </animated.div>
      ))}
    </div>
  );
};

export default Profession;
