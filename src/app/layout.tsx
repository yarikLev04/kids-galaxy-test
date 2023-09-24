import { ReactNode } from 'react';

// Providers
import ThemeRegistry from '@/components/ThemeRegistry/ThemeRegistry';
import { AuthProvider } from '@/app/api/auth/[...nextauth]/AuthProvider';
import { options as authOptions } from '@/app/api/auth/[...nextauth]/options';
import { getServerSession } from 'next-auth';

// SEO
import type { Metadata } from 'next';
import { DM_Sans, Poppins } from 'next/font/google';

const dmSans = DM_Sans({ subsets: ['latin'], weight: ['700'] });
const poppins = Poppins({ subsets: ['latin'], weight: ['400'] });

export const metadata: Metadata = {
  title: 'Kids Galaxy',
  description: "Come visit our playful children's room to to experience the world of adventures and have a fun time together!",
  icons: {
    icon: '/favicon.ico'
  }
};

export default async function RootLayout({ children }: { children: ReactNode }) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en" style={{ scrollBehavior: 'smooth' }}>
      <body className={`${poppins.className} ${dmSans.className}}`}>
        <AuthProvider session={session}>
          <ThemeRegistry>{children}</ThemeRegistry>
        </AuthProvider>
      </body>
    </html>
  );
}
