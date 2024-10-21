export interface Coordinates {
  lat: number;
  lng: number;
}

export interface Address {
  address: {
    city: string;
    village: string;
    town?: any;
  };
}

export interface HomeProps {
  city: any;
  weather: any;
}

export interface WeatherData {
  temperature: number;
  description: string;
}

export interface MeteoAdvancedData {
  sunrise: string;
  sunset: string;
  windspeed: number;
}
