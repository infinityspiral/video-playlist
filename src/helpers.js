import axios from "axios";

export const POSTS_URL = '/posts.json';

export const fetchData = url => {
  return axios.get(url)
}
