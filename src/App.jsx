import { Login } from './pages/login/Login'
import { Registration } from './pages/registration/Registration';
import { Main } from './pages/main/Main';
import { Route, Routes, HashRouter } from 'react-router-dom'
import { useSelector } from 'react-redux'
import './App.scss'


function App() {

  const isAuth = useSelector(state => state.user.isAuth)
  //const token = useSelector(state => state.user.token)

  return (
    <div className="app">
      <HashRouter>
        {!isAuth ?
          <Routes>
            <Route path='/' element={<Login />}></Route>
            <Route path='/registration' element={<Registration />}></Route>
          </Routes>
          :
          <Routes>
            <Route path='/' element={<Main />}></Route>
          </Routes>
        }
      </HashRouter>
    </div>
  )
}

export default App;
