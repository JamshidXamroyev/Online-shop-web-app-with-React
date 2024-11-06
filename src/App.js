import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {Main, FilterProduct} from './component'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main /> }/>
          <Route path='/filter/:type' element={<FilterProduct /> }/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App