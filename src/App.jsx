import { Login } from './pages/login/Login'
import { Registration } from './pages/registration/Registration';
import { PassengerMain } from './pages/passengerMain/PassengerMain';
import { DriverMain } from './pages/driverMain/DriverMain';
import { Lk } from './pages/lk/Lk';
import { Route, Routes, HashRouter } from 'react-router-dom'
import { useSelector } from 'react-redux'
import './App.scss'
import { useEffect } from 'react';
import { SetAuth } from './store/userReducer';
import { store } from './store'
import { getCurrentUser } from './actions/User';


function App() {

  const isAuth = useSelector(state => state.user.isAuth)
  const user = useSelector(state => state.user.currentUser)
  const role = user.role

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      store.dispatch(SetAuth(token))
      getCurrentUser(token)
    }
  }, [isAuth])

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
              <Route path='/Lk' element={<Lk />}></Route>
            </Routes>
            :
            <Routes>
              <Route path='/' element={<PassengerMain />}></Route>
              <Route path='/Lk' element={<Lk />}></Route>
            </Routes>
        }
      </HashRouter>
    </div>
  )
}

export default App;
