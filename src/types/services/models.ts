export enum ServiceTypes {
  Club = 'CLUB',
  Game = 'GAME',
  Party = 'PARTY',
  Circle = 'STUDY_GROUP'
}

export type ServiceTypesItem = {
  isSelected: boolean;
  type: ServiceTypes;
  label: string;
};

export type BaseService = {
  service_id: number;
  name: string;
  kind: ServiceTypes;
  description: string;
  short_description: string;
  prices: ServicePrices;
};

export type ListService = BaseService & { photo: ServicePhoto };

export type Service = BaseService & { photo: ServicePhoto[] };

export type ServicePhoto = {
  pfs_id: number;
  service_id: number;
  photo: string;
};

export type ServicePrices = {
  child_work_day: number;
  child_weekend: number;
  relative_work_day: number;
  relative_weekend: number;
};
