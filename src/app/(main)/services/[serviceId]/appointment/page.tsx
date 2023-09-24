
export default function ServiceAppointment({ params }: { params: { serviceId: string }}) {
  return (
    <div>
      appointment
      {params.serviceId}
    </div>
  );
};