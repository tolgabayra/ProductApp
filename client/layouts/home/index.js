import React from 'react'
import Navbar from '../../components/home/Navbar'

export default function Index({ children }) {
  return (
    <div>
        <Navbar />
        <main>
            {children}
        </main>
    </div>
  )
}
