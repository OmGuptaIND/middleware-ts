import React from 'react';

interface Props {
  children: React.ReactNode;
}

const layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="bg-black h-screen text-white font-mono text-base font-normal">
      {children}
    </div>
  );
};

export default layout;
