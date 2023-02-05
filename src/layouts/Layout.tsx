import React from 'react'
import { Header } from '../components/header/Header'
import { Outlet } from 'react-router-dom'

interface LayoutProps {}

export const Layout: React.FC<LayoutProps> = () => {
    return (
        <div>
            <Header />
            <div>
                <Outlet />
            </div>
        </div>
    )
}
