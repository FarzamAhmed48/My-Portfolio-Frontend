
import { ModeToggle } from './components/mode-toggle'
import { ThemeProvider } from './components/theme-provider'
import { BrowserRouter as Router ,  Route, Routes } from 'react-router-dom'
import Footer from './pages/Footer'
import ProjectView from './pages/ProjectView'
import Home from './pages/Home'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'
function App() {

  return (
    <>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/project/:id'element={<ProjectView/>} />
        </Routes>
        <Footer/>
        <ToastContainer position='bottom-right' theme='dark'/>
      </Router>

    </ThemeProvider>
    </>
  )
}

export default App
