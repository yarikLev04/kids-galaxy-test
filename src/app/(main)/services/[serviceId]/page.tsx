export default function Service({ params }: { params: { serviceId: string }}) {
  return (
    <div>
      {params.serviceId}
    </div>
  );
};