export interface Vehicle {
    id: string
    name: string
    category: string
    year: number
    price: number
    image: string
    description: string
  }
  
  export interface Promotion {
    id: string
    title: string
    description: string
    validUntil: string
    image: string
  }

  export interface Slider {
    id: string
    title: string
    src: string
    target: string
  }
  
  export interface Distributor {
    id: string;
    name: string;
    location: string;
    contact: string;
  }
  
  export interface SiteInfo {
    name: string;
    about: string;
    contactEmail: string;
    phone: string;
  }
  
  export interface ApiResponseTest {
    vehicles: Vehicle[];
    distributors: Distributor[];
    promotions: Promotion[];
    slider: Slider[];
    siteInfo: SiteInfo;
    error?: string;
  }
  export interface ApiResponse<T> {
    data: T;
    error?: string;
  }
  
  
  