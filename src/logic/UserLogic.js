import { API_URL } from '../Constants'
import { fetchURL } from '../utils/ResponseHandler'

export const fetchUser = (username) => fetchURL(`${API_URL}/users/${username}`)

export const fetchUserRepos = (username) =>
  fetchURL(`${API_URL}/users/${username}/repos`)
