export interface IVacancy {
  address: string;
  avatar: string;
  benefits: IAdditional[];
  created_at: string;
  description: string;
  email: string;
  employment_type: IAdditional[];
  id: number;
  location: { id: number; lat: number; long: number };
  company_name: string;
  department_name: string;
  phone: string;
  pictures: string[];
  salary: string;
  title: string;
  updated_at?: string;
  is_in_favorites: boolean;
  rating: number;
  name: string;
  favorites_id: number;
}

export interface IAdditional {
  id: number;
  name: string;
}
