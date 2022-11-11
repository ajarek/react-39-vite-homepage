import Navigation from './components/Navigation/Navigation'
import Home from './components/Home/Home'
import New from './components/New/New'
import Popular from './components/Popular/Popular'
import Trending from './components/Trending/Trending'
import Categories from './components/Categories/Categories'
import { Routes, Route } from 'react-router-dom'
function App() {
  return (
    <div className='App'>
      <Navigation />
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
        <Route
          path='/new/'
          element={<New />}
        />
        <Route
          path='/popular'
          element={<Popular />}
        />
        <Route
          path='/trending'
          element={<Trending />}
        />
       <Route
          path='/categories'
          element={<Categories />}
        />
        
      </Routes>
    </div>
  )
}

export default App
