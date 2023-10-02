import { ListService, Service } from '@/types/services/models';

export const getServices = async (page?: number, per_page?: number): Promise<ListService[]> => {
  const url = new URL('http://46.101.221.8/services');

  if (page && per_page) {
    url.searchParams.append('page', page.toString());
    url.searchParams.append('per_page', per_page.toString());
  }

  const res = await fetch(url, {
    next: { revalidate: 600 },
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    }
  });

  if (!res.ok) {
    return [];
  }

  return res.json().then(data => data?.items);
};

export const getServiceById = async (id: number): Promise<Service | undefined> => {
  const url = new URL('http://46.101.221.8/service-by-id');
  url.searchParams.append('service_id', id?.toString() ?? '');

  const res = await fetch(url, {
    next: { revalidate: 600 },
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    }
  });

  if (!res.ok) {
    return undefined;
  }

  return res.json();
};

const servicesService = {
  getServices,
  getServiceById
};

export default servicesService;
