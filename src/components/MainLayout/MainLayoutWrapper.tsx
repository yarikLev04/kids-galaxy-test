import NavBar from '@/components/MainLayout/NavBar';
import { Box, Stack } from '@mui/material';
import { ReactNode } from 'react';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayoutWrapper = ({ children }: MainLayoutProps) => {
  return (
    <Stack>
      <NavBar />
      <Box>{children}</Box>
      <></>
    </Stack>
  );
};

export default MainLayoutWrapper;
