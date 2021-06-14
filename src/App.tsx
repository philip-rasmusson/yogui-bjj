import { Routes } from './routes/Routes'
import { Navbar } from './components/navigation/Navbar'
import './shared/global/css/Global.css'

export const App = () => {
  return (
    <Routes>
      <Navbar />
    </Routes>
  )
}

