import React from 'react';

interface Props {
  className?: string;
}

const ProfilePage: React.FC<Props> = ({ className }) => {
  return <div className={className}>ProfilePage</div>;
};
export default ProfilePage;
