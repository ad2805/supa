import { Outlet } from 'react-router-dom'
import './App.css'
import Breadcrumbs from './components/Breadcrumb/Breadcrumb'
import { LoginPage } from './layouts/login-page/LoginPage'
import MainPage from './layouts/main-page/MainPage'

function App () {
  return (
    <Outlet />
  )
}

export default App
