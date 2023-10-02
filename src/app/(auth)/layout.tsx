import { Container } from '@mui/material';
import { ReactNode } from 'react';

// Layout and Providers
import { CloudLayout } from '@/components/CloudLayout';

// SEO
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Authentication',
  description: 'Authentication page'
};

export default function AuthenticationLayout({ children }: { children: ReactNode }) {
  return (
    <CloudLayout sxProps={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <Container maxWidth={'xs'}>{children}</Container>
    </CloudLayout>
  );
}
