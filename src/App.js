import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import Services from './pages/Services'
import Portfolio from './pages/Portfolio'
import AboutUs from './pages/AboutUs'
import Blog from './pages/Blog'
import ContactUs from './pages/ContactUs'
import NotFound404 from './pages/NotFound404'

function App() {
    return (
        <Layout>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/services' element={<Services />} />
                <Route path='/portfolio' element={<Portfolio />} />
                <Route path='/about-us' element={<AboutUs />} />
                <Route path='/blog' element={<Blog />} />
                <Route path='/contact-us' element={<ContactUs />} />
                <Route path='*' element={<NotFound404 />} />
            </Routes>
        </Layout>
    )
}

export default App
