import { Login } from './pages/login/Login'
import { Registration } from './pages/registration/Registration';
import { PassengerMain } from './pages/passengerMain/PassengerMain';
import { DriverMain } from './pages/driverMain/DriverMain';
import { Route, Routes, HashRouter } from 'react-router-dom'
import { useSelector } from 'react-redux'
import './App.scss'



function App() {

  const isAuth = useSelector(state => state.user.isAuth)
  //const token = useSelector(state => state.user.token)
  const user = useSelector(state => state.user.currentUser)
  const role = user.role

  return (
    <div className="app">
      <HashRouter>
        {!isAuth ?
          <Routes>
            <Route path='/' element={<Login />}></Route>
            <Route path='/registration' element={<Registration />}></Route>
          </Routes>
          :
          (role === "driver") ?
            <Routes>
              <Route path='/' element={<DriverMain />}></Route>
            </Routes>
            :
            <Routes>
              <Route path='/' element={<PassengerMain />}></Route>
            </Routes>
        }
      </HashRouter>
    </div>
  )
}

export default App;
