import Logo from '@/components/Logo';
import { Link as MUILink, SxProps, Box } from '@mui/material';
import Link from 'next/link';
import { ReactNode } from 'react';

interface CloudLayoutProps {
  withLogo?: boolean;
  revertBackground?: boolean;
  children: ReactNode;
  sxProps?: SxProps;
}

export function CloudLayout({ withLogo = true, revertBackground = false, children, sxProps }: CloudLayoutProps): JSX.Element {
  return (
    <Box
      sx={{
        display: 'flex',
        minHeight: '100vh',
        background: `url(${!revertBackground ? '/cloud_background_1.svg' : '/cloud_background_2.svg'}) no-repeat center 15vh`,
        backgroundSize: 'cover',
        position: 'relative',
        ...sxProps
      }}
      maxWidth="xl"
    >
      <MUILink hidden={!withLogo} sx={{ position: 'absolute', left: '5vw', top: '5vh' }} component={Link} href="/">
        <Logo />
      </MUILink>
      {children}
    </Box>
  );
}
