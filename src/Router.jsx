import React from 'react'
import HomePages from './pages/HomePages'
import { BrowserRouter,Route,Routes } from 'react-router-dom'

export default function Router() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePages />} />
                </Routes>
            </BrowserRouter>

        </div>
    )
}
