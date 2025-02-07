import React from 'react'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'

interface MainLayoutProps {
    children: React.ReactNode
  }

  const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    return (
    <div className="min-h-screen flex flex-col">
        <Header />
          <div className="container mx-auto max-w-sm md:max-w-3xl lg:max-w-5xl xl:max-w-7xl">
            <main className="py-6 md:py-10 lg:py-12">
              {children}
            </main>
          </div>
        <Footer />
    </div>
    )
  }
  
  export default MainLayout
