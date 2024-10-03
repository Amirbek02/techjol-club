import React from 'react';

interface Props {
  className?: string;
}

export const AboutUs: React.FC<Props> = ({ className }) => {
  return <div className={className}>AboutUs</div>;
};
