import request from 'superagent'
import { IDog } from './models'

const serverURL = 'http://localhost:3000/api/v1'

// *** EXAMPLE ***
export async function getDog(): Promise<IDog> {
  await new Promise((r) =>
    setTimeout(() => {
      r(null)
    }, 2000)
  )
  return { name: 'pickle', age: 2 }
}
// ***   ***   ***
