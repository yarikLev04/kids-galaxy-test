import MainLayoutWrapper from '@/components/MainLayout/MainLayoutWrapper';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return <MainLayoutWrapper>{children}</MainLayoutWrapper>;
}
