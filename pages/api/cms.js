import axios from 'axios'

const http = axios.create({
  baseURL: process.env.CMS_API_HOST,
  auth:    {
    username: process.env.CMS_API_USER,
    password: process.env.CMS_API_PASSWORD,
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

export async function getPage(id) {
  try {
    const response = await http.get(`page/${id}`)

    return response.data
  } catch (error) {
    return error
  }
}

export async function getPageContentByUrl(url = '/') {
  try {
    const response = await http.get('pages/')
    const pages    = response.data;
    const page     = pages.find(item => item.url === url)

    return await getPage(page.id)
  } catch (error) {
    return error
  }
}

export async function subcribeToNewsletter(email) {
  try {
    const response = await http.post('newsletter/', {
      email,
    })

    return response
  } catch (error) {
    return error
  }
}