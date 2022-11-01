import { useLoaderData } from 'react-router-dom'
import { IDog } from '../models'

export default () => {
  const dog = useLoaderData() as IDog
  return (
    <div>
      <h1>Dog: {dog.name}</h1>
      <p>{dog.age} years old</p>
    </div>
  )
}
