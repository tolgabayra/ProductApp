import Router, { useRouter } from 'next/router'
import React, { useContext, useEffect } from 'react'
import Notallow from '../../components/Notallow'
import MainLayout from "../../layouts/home/index"
import AuthContext from '../../store/authContext'
import { appAxios } from '../../utils/appAxios'






export default function Profile() {
    



    const { user } = useContext(AuthContext)
    const router = useRouter()
    console.log(user);

    useEffect(() => {
        appAxios.get(`/auth/getme/${localStorage.getItem("user_id")}`, { withCredentials: true })
        .then((res) => {
          console.log(res);
          user(true)
        })
        .catch(err=>{
            console.log(err);
        })
    }, [])

    if (!user) {
        setTimeout(() => {
            router.push("/login")
        }, 2000)
        return <Notallow />
    } else {
        return (
            <div>

                <h1 className="text-3xl font-black mb-10">
                    Hoş Geldin
                </h1>

            </div>
        )
    }

}


Profile.getLayout = function getLayout(page) {
    return (
        <MainLayout>
            {page}
        </MainLayout>
    )
}


