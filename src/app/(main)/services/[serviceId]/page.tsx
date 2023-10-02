import notFound from '@/app/not-found';
import servicesService from '@/services/servicesService';
import { Grid } from '@mui/material';

type Params = {
  serviceId: number;
};

type ServicePageProps = {
  params: Params;
};

export const dynamic = 'force-dynamic';

export async function generateStaticParams() {
  const services = await servicesService.getServices();

  return services.map(s => ({ serviceId: s.service_id.toString() }));
}

export default async function ServicePage({ params }: ServicePageProps) {
  const service = await servicesService.getServiceById(params.serviceId);

  if (!service) {
    return notFound();
  }

  return <Grid container py={{ xs: 4, md: 14, lg: 17 }} px={{ xs: 4, md: 10, lg: 20 }}></Grid>;
}
