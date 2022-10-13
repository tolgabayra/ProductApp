import { Input } from 'antd'
import Link from 'next/link'
import React from 'react'
import MainLayout from "../layouts/home/index"


export default function Reset_password() {
  return (
    <div>
            <div className="flex justify-center">
                <div className="w-full max-w-xs">
                    <div className="bg-indigo-50 shadow-md rounded px-8 pt-6 pb-8 mb-4 my-32">
                     
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-1" for="password">
                                Kayıt Eposta Adresiniz
                            </label>
                            <Input className='shadow-md' placeholder="Eposta" />
                         
                        </div>
                        <div className="flex items-center flex-wrap">
                            <button className='inline-block w-full px-4 py-2 bg-indigo-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-indigo-700 hover:shadow-lg focus:bg-indigo-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-indigo-800 active:shadow-lg transition duration-150 ease-in-out'>
                                Parolamı Yenile
                            </button>
                            <Link href="/login">
                                <a className='text-sm text-indigo-500 mt-2'>Giriş Sayfasına Dön</a>
                            </Link>

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


Reset_password.getLayout = function getLayout(page) {
    return (
        <MainLayout>
            {page}
        </MainLayout>
    )
}