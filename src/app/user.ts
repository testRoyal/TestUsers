export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    address: addressInfo[];
    phone:string;
    website:string;
    company:string;
  }

  export interface addressInfo {
    street: string;
    suite: string;
    city: string;
    zipcode:string;
    geo: geoInfo[];
  }
  export interface geoInfo{
      lat: string;
      lng: string;
  }