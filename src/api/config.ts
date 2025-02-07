export const API_CONFIG = {
  BASE_URL: "https://api.openweathermap.org/data/2.5",
  GEOCODING: "http://api.openweathermap.org/geo/1.0",
  API_KEY: import.meta.env.VITE_OPENWEATHER_KEY,
  DEFAULT_PARAMS: {
    units: "imperial",
    appid: import.meta.env.VITE_OPENWEATHER_KEY,
  },
};
