import { get } from "../helpers/request";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export function getMoviesByTitle(title: string) {
  return get(`${BASE_URL}/?title=${title}`);
}