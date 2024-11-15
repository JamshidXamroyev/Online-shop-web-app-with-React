import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {Main, FilterProduct, SingleProduct, Login} from './component'
import { useSelector } from 'react-redux'

const App = () => {
  const {authUser} = useSelector(state => state.auth.user)
  const {user} = useSelector(state => state.auth)
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ authUser ? <Main /> : <Login/> }/>
          <Route path='/filter/:type' element={<FilterProduct /> }/>
          <Route path='/filter/:type/:id' element={<SingleProduct /> }/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App