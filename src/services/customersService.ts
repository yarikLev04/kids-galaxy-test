import { Appointment } from '@/types/customers/models';
import { PagedResponse } from '@/types/pagedResponse';
import axiosInstance from '@/utils/axiosInterceptors';

export const getAppointments = async (page: number, per_page: number, searchQuery?: string): Promise<PagedResponse<Appointment>> => {
  const response = await axiosInstance.get<PagedResponse<Appointment>>('appointments', {
    params: { page, per_page, query: searchQuery ?? '' }
  });

  const data: PagedResponse<Appointment> = {
    items: response.data.items ?? [],
    page: response.data.page,
    total_pages: response.data.total_pages
  };

  return data;
};

const customersService = { getAppointments };

export default customersService;
