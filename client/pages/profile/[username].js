import Router, { useRouter } from 'next/router'
import React, { useContext } from 'react'
import MainLayout from "../../layouts/home/index"
import AuthContext from '../../store/authContext'




export default function Profile() {
    const { user } = useContext(AuthContext)
    const router = useRouter()
    if(user){
        router.push("/login")
    }
    return(
        <div>

         <h1 className="text-3xl font-black mb-10">
        Hoş Geldin, {localStorage.getItem("email")}
        </h1>

        </div>
    )
}


Profile.getLayout = function getLayout(page) {
    return (
        <MainLayout>
            {page}
        </MainLayout>
    )
}


