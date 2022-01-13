import axios from 'axios'
import toastr from 'toastr'

const DEFAULT_TITLE = 'Error'
const DEFAULT_MESSAGE = 'An error occured'
const INTERNET_CONNECTION_IS_BROKEN = 'An error occured. Check your internet connection and try again.'

export default class Logger {
  static error = (e: unknown, title = DEFAULT_TITLE) => {
    if (axios.isAxiosError(e)) {
      // если возникает ошибка от axios, то она может быть двух видов:
      // e.response либо есть, либо его нет.
      // ответа от сервера нет, например тогда. когда у пользователя внезапно отключился интернет
      // до того как клиент получил ответ. Надо обработать оба сценария.

      if (e.response) {
        // мы можем достать сообщение
        // e.response.message
      } else {

      }
    } else {
      // если ошибка не axios, тогда нам надо обработать её здесь, но она тоже может быть двух видов:
      // e instanceof Error или же нет. например

      // Этот код возвращает true на строке  console.log(e instanceof Error)
      // try {
      //   throw new Error('test')
      // } catch(e) {
      //   console.log(typeof e)
      //   console.log(e instanceof Error)
      // }

      // А вот этот код возвращает false
      // try {
      //   throw 3
      // } catch(e) {
      //   console.log(typeof e) // => number
      //   console.log(e instanceof Error)
      // }
    }

    // 1. Выводим сообещение с помощью toastr
    // 2. Отправляем сообщение об ошибке в Rollbar, но только если он есть в глобальном объекте window.
    // window.Rollbar.error(message, e)
  }
}
