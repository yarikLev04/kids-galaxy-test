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
  return <CloudLayout>{children}</CloudLayout>;
}
