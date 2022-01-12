import axios from 'axios'

export const DISPOSABLE_EMAIL_CHECKER_URL = 'https://open.kickbox.com/v1/disposable/'

export default async function isEmailDisposable(email: string): Promise<boolean> {
  const {data} = await axios.get(`${DISPOSABLE_EMAIL_CHECKER_URL}${email}`)
  return data.disposable
}

