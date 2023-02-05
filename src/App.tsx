import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HeaderChat from './components/ChatHeader'
import { Layout } from './layouts/Layout'
import { About } from './pages/about/About'
import { Contacts } from './pages/contacts/Contacts'
import { Home } from './pages/home/Home'

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route path="" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contacts" element={<Contacts />} />
            </Route>
        </Routes>
    )
}

export default App
