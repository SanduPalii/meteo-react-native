import axios from 'axios';
import { Address, Coordinates, HomeProps } from '../modules/type';

export class MeteoAPI {
  static async fetchWeatherByCoords(coords: Coordinates) {
    const response = await axios.get(
      `https://api.open-meteo.com/v1/forecast?latitude=${coords.lat}&longitude=${coords.lng}&daily=weathercode,temperature_2m_max,sunrise,sunset,windspeed_10m_max&timezone=auto&current_weather=true`
    );
    return response.data;
  }

  static async fetchCityByCoords(coords: Coordinates) {
    const response = await axios.get(
      `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${coords.lat}&lon=${coords.lng}`
    );
    const { address }: Address = response.data;
    return address.city || address.village || address.town;
  }

  static async fetchCoordsByCity(city: HomeProps) {
    try {
      const response = await axios.get(
        `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&language=en&format=json`
      );
      const { latitude: lat, longitude: lng }: { latitude: number; longitude: number } =
        response.data.results[0];
      return { lat, lng };
    } catch (err) {
      throw 'Invalid city name!!!';
    }
  }
}

export default MeteoAPI;
