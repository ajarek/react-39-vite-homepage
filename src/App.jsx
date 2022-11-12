import Navigation from './components/Navigation/Navigation'
import Home from './pages/Home/Home'
import New from './pages/New/New'
import Popular from './pages/Popular/Popular'
import Opinions from './pages/Opinions/Opinions'
import Contact from './pages/Contact/Contact'
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
          path='/opinions'
          element={<Opinions />}
        />
       <Route
          path='/contact'
          element={<Contact />}
        />
        
      </Routes>
    </div>
  )
}

export default App
