import axios from 'axios'

const DISPOSABLE_EMAIL_CHECKER_URL = 'https://open.kickbox.com/'

export default function isEmailDisposable(email: string): boolean {
  // шлём с помощью axios запрос на DISPOSABLE_EMAIL_CHECKER_URL с url
  // и возвращаем response.disposable

  return false
}
