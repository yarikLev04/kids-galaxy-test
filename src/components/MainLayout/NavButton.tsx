'use client';

import { Button } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { ReactNode } from 'react';

export interface NavButtonProps {
  children: ReactNode;
  href: string;
}

const NavButton = ({ children, href }: NavButtonProps) => {
  const router = useRouter();

  return (
    <Button
      size={'small'}
      color={'secondary'}
      variant={'text'}
      onClick={() => {
        router.prefetch(href);
        router.push(href, { scroll: true });
      }}
    >
      {children}
    </Button>
  );
};

export default NavButton;
