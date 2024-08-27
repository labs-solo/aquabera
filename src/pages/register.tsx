import React, { useEffect } from 'react';

const Register = () => {
  useEffect(() => {
    window.location.href = 'https://docs.google.com/forms/d/e/1FAIpQLSeVKToHTP1AjIbyE3TglLcQLuPGM5jgArkvQN-jNs1KL5Wfrw/viewform';
  }, []);

  return null; // Optionally, return a loading spinner or message here
};

export default Register;

