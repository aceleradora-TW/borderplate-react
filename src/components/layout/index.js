import { Outlet } from 'react-router-dom'
import { Logout } from '../logout'
import { BackButton } from '../buttons/backButton'
import { NavBar } from './style'
import { Logo } from '../logo/logo'
import { GreetingText } from '../greetingText'
export const Layout = () => {
  return (
    <>
      <NavBar>
        <Logo />
        <GreetingText />
        <BackButton />
        <Logout />
      </NavBar>
      <Outlet />
    </>
  )
}
