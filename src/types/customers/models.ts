export type Appointment = {
  appo_id: number;
  service_id: number;
  name: string;
  phone: string;
  people_amount: number;
  message: string;
  date: Date;
  time: string;
};

export type CreateAppointment = Omit<Appointment, 'appo_id'>;
