import { Outlet, useNavigation, Link } from 'react-router-dom'

export default () => {
  const nav = useNavigation()
  return (
    <>
      <h1>Application home</h1>
      <Link to="/dog">dog</Link>
      {nav.state === 'loading' ? 'Loading...' : ''}
      <Outlet />
    </>
  )
}
