export const baseUrl = "https://spotdy.herokuapp.com"

export const token = window.localStorage.getItem("token")

export const axiosConfig = {
    headers: {
      auth: token
    }
  }