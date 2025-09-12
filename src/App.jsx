import { Route, Routes } from 'react-router-dom'
import './App.css'
import { NavBar } from './components/NavBar'
import { HomePage } from './pages/HomePage'

export const App = () => {
  return (
    <>
      <div>
        <NavBar />
      </div>

      <main>
        <Routes>
          <Route path="/" element = {<HomePage /> }/>
        </Routes>
      </main>
      
    </>
  )
}