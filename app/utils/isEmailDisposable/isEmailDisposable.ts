import axios from 'axios'

const DISPOSABLE_EMAIL_CHECKER_URL = 'https://open.kickbox.com/v1/disposable/'

export default async function isEmailDisposable(email: string):Promise<boolean> {
  // шлём с помощью axios запрос на DISPOSABLE_EMAIL_CHECKER_URL с url
  // и возвращаем response.disposable
  const {data} = await axios.get(`${DISPOSABLE_EMAIL_CHECKER_URL}${email}`)
  return data.disposable
}

