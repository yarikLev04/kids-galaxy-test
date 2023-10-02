'use client';

import { AppointmentForm } from '@/sections/main/ServiceSection/AppointmentForm';

type Params = {
  serviceId: number;
};

type ServiceAppointmentPageProps = {
  params: Params;
};

export default async function ServiceAppointmentPage({ params }: ServiceAppointmentPageProps) {
  return <AppointmentForm serviceId={params.serviceId} />;
}
