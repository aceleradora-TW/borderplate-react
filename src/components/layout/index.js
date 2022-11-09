import { Outlet } from 'react-router-dom'
import { Logout } from '../logout'
import { BackButton } from '../buttons/backButton'
import { NavBar } from './style'
import { GreetingText } from '../greetingText'
export const Layout = () => {
  return (
    <>
      <NavBar>
        <GreetingText />
        <BackButton />
        <Logout />
      </NavBar>
      <Outlet />
    </>
  )
}
