import React from 'react';
import { Navbar } from './profile-navbar';
import { cn } from '@/lib/utils';
import { ProfileLeft } from './profile-left';

interface Props {
  className?: string;
}

export const Profile: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn('flex items-start justify-start', className)}>
      <div className="hidden sm:block">
        <Navbar />
      </div>
      <ProfileLeft />
    </div>
  );
};
