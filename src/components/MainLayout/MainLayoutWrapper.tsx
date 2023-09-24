import NavBar from '@/components/MainLayout/NavBar';
import { Stack } from '@mui/material';
import { ReactNode } from 'react';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayoutWrapper = ({ children }: MainLayoutProps) => {
  return (
    <Stack>
      <NavBar />
      <div>{children}</div>
      <></>
    </Stack>
  );
};

export default MainLayoutWrapper;
