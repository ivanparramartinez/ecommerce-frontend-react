import React from 'react'
import Header from '../components/common/Header'

interface MainLayoutProps {
    children: React.ReactNode
  }

  const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    return (
      <>
        <div>
          <Header />
          <main>{children}</main>
          <footer>
            <p>&copy; 2021</p>
          </footer>
        </div>
      </>
    )
  }
  
  export default MainLayout
