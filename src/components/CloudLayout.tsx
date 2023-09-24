import { Stack, Link as MUILink, SxProps } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { ReactNode } from 'react';
import cloudImage from '../../public/cloud_background_1.svg';

interface CloudLayoutProps {
  children: ReactNode;
}

export function CloudLayout({ children }: CloudLayoutProps): JSX.Element {
  return (
    <Stack
      sx={{
        width: '100vw',
        height: '100vh',
        position: 'relative'
      }}
    >
      <MUILink sx={{ ml: { xs: 4, md: 10, lg: 20 }, mb: { md: 4, lg: 2 }, display: { xs: 'none', md: 'block' } }} component={Link} href="/">
        <Image src="/logo.svg" style={{ pointerEvents: 'none' }} alt="logo" width="147" height="120" quality={100} priority={true}></Image>
      </MUILink>
      <Image
        src={cloudImage}
        alt="cloud image"
        sizes="100vw"
        style={{
          position: 'absolute',
          width: '100vw',
          height: '100vh',
          objectFit: 'cover',
          zIndex: -1,
          objectPosition: '0 100px',
          pointerEvents: 'none'
        }}
      />
      {children}
    </Stack>
  );
}
