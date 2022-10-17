import React, { useContext } from 'react'
import Link from "next/link"

import AuthContext from "../../store/authContext"

export default function Navbar() {
    const {user} = useContext(AuthContext)
    console.log("User Info :",user);
    return (
        <div>
            <header className="text-gray-700 body-font border-b border-gray-200">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" href="/">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                        </svg>
                        <span className="ml-3 text-xl">Pct</span>
                    </a>
                    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                        <a className="mr-5 hover:text-gray-900">Anasayfa</a>
                        <Link href="/tasks">
                        <a className="mr-5 hover:text-gray-900">Egzersizler</a>

                        </Link>
                        <a className="mr-5 hover:text-gray-900">About</a>
                    </nav>
                         

                         {
                            user ?
                             <button>Çıkış Yap</button>
                             :

                             <div>
                      
                             <Link href="/register">
                                 <a className="inline-flex mr-2 items-center bg-gray-200 border-0 py-1 px-3 focus:outline-none hover:bg-gray-300 rounded text-base mt-4 md:mt-0">Üye Ol
         
                                 </a>
                             </Link>
         
                             <Link href="/login">
         
                                 <a className="inline-flex mr-2 items-center bg-gray-200 border-0 py-1 px-3 focus:outline-none hover:bg-gray-300 rounded text-base mt-4 md:mt-0">Giriş Yap
         
                                 </a>
                             </Link>
                             </div>
                         
                         }
                   
                 
                    
                  

                    
            
                </div>
            </header>
        </div>
    )
}
