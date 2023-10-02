import { Appointment, CreateAppointment } from '@/types/appointment/models';
import { PagedResponse } from '@/types/pagedResponse';
import axiosInstance from '@/utils/axiosInterceptors';

export const getAppointments = async (page: number, per_page: number, searchQuery?: string): Promise<PagedResponse<Appointment>> => {
  const response = await axiosInstance.get<PagedResponse<Appointment>>('appointments', {
    params: { page, per_page, query: searchQuery ?? '' }
  });

  return {
    items: response.data.items ?? [],
    page: response.data.page,
    total_pages: response.data.total_pages
  };
};

export const createAppointment = async (model: CreateAppointment): Promise<void> => {
  const response = await axiosInstance.post<void>('appointment', { ...model });
};

export const deleteAppointment = async (id: number): Promise<void> => {
  const response = await axiosInstance.delete<void>('appointment', { data: id });
};

const appointmentsService = { getAppointments, createAppointment, deleteAppointment };

export default appointmentsService;
