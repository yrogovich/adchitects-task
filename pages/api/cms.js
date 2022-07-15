import axios from 'axios'

const http = axios.create({
  baseURL: 'https://adchitects-cms.herokuapp.com/',
  auth:    {
    username: 'adchitects',
    password: 'jsrulezzz',
  },
})

export async function getPages() {
  try {
    const response = await http.get('pages/')

    return response.data
  } catch (error) {
    return error
  }
}

export async function getPageInfo(id) {
  try {
    const response = await http.get('page', {
      params: {id},
    })

    return response.data
  } catch (error) {
    return error
  }
}
