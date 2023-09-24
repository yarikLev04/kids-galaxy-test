import MainLayoutWrapper from '@/components/MainLayout/MainLayoutWrapper';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <MainLayoutWrapper>
      {children}
    </MainLayoutWrapper>
  );
}
