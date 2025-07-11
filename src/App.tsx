import { Route, Routes } from 'react-router'
import type { ReactNode } from 'react'
import MainLayout from './pages/MainLayout'
import Landing from './pages/Landing'

function App(): ReactNode {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <MainLayout>
            <Landing />
          </MainLayout>
        }
      />
    </Routes>
  )
}

export default App
