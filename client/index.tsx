import ReactDOM from 'react-dom'
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'

import Dog from './components/Dog'
import Home from './components/Home'
import * as api from './apiClient'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Home />}>
      <Route
        path="dog"
        loader={async () => {
          return api.getDog()
        }}
        element={<Dog />}
      />
    </Route>
  )
)

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <RouterProvider router={router} />,
    document.getElementById('app')
  )
})
