export type Appointment = {
  appo_id: number;
  service_id: number;
  name: string;
  phone: string;
  people_amount: number;
  message: string;
  date: Date | null;
  time: string;
};

export type AppointmentFormState = Omit<Appointment, 'appo_id' | 'service_id'>;

export type CreateAppointment = Omit<Appointment, 'appo_id'>;
