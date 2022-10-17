import Link from 'next/link'
import React, { useContext, useState } from 'react'
import MainLayout from "../layouts/home/index"

import { Button, Checkbox, Form, Input } from 'antd';
import { appAxios } from '../utils/appAxios';
import AuthContext from "../store/authContext"
import { useRouter } from 'next/router';


export default function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const { login } = useContext(AuthContext)
    const router = useRouter()

    const submitLogin = () => {
        appAxios.post("/auth/login", {
            email,
            password
        })
            .then((res) => {
                console.log(res);
                login
                localStorage.setItem("email",res.data.email)
                router.push(`/profile/${res.data.username}`)
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <div>
            <div className="flex justify-center">
                <div className="w-full max-w-xs">
                    <div className="bg-indigo-50 shadow-md rounded px-8 pt-6 pb-8 mb-4 my-32">
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-1" for="username">
                                Eposta
                            </label>
                            <Input onChange={(e) => setEmail(e.target.value)} className='shadow-md' placeholder="Eposta" />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-1" for="password">
                                Parola
                            </label>
                            <Input.Password onChange={(e) => setPassword(e.target.value)} className='mb-1 shadow-md' placeholder="Parola" />
                            <div className='flex justify-between mt-1'>
                                <Link href="/reset_password">
                                    <a className='text-sm text-indigo-500'>Parolamı Unuttum</a>
                                </Link>
                                <Link href="/register">
                                    <a className='text-sm text-indigo-500'>Üye Ol</a>
                                </Link>
                            </div>

                        </div>
                        <div className="flex items-center justify-between">
                            <button onClick={submitLogin} className='inline-block w-full px-4 py-2.5 bg-indigo-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-indigo-700 hover:shadow-lg focus:bg-indigo-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-indigo-800 active:shadow-lg transition duration-150 ease-in-out'>
                                Giriş Yap
                            </button>
                        </div>
                    </div>
                    <p className="text-center text-grey text-xs">
                        ©2022 PCT. All rights reserved.
                    </p>
                </div>
            </div>
        </div>
    )
}

Login.getLayout = function getLayout(page) {
    return (
        <MainLayout>
            {page}
        </MainLayout>
    )
}