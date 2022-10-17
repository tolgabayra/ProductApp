import { Input, message, notification, Result } from 'antd'
import Link from 'next/link'
import React, { useState } from 'react'
import MainLayout from "../layouts/home/index"
import { useRouter } from 'next/router'

import { appAxios } from "../utils/appAxios"

export default function Register() {
    const router = useRouter()

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [result, setResult] = useState(false)

    const submitRegister = () => {
        appAxios.post("/auth/register", {
            username,
            email,
            password
        }, { withCredentials: true })
            .then((res) => {
                console.log(res);
                message.success({
                    content: 'Hesabınız Oluşturuldu, yönlendiriliyorsunuz...',
                    className: 'custom-class',
                    style: {
                      marginLeft: '150vh',
                    },
                  });
                  setResult(true)
                setTimeout(() => {
                  router.push("/login")
                },3000)
            })
            .catch(err => {
                message.warning({
                    content: 'Yanlış İşlem Yaptınız, Lütfen kontrol ediniz.',
                    className: 'custom-class',
                    style: {
                      marginLeft: '150vh',
                    },
                  });
                console.log(err);
            })
    }




    return (
        <div>
            {
                result ? 
                <Result
                status="success"
                title="Hesabınız Başarılı Bir Şekilde Oluşturuldu"
                subTitle="Giriş Ekranına Yönlendiriliyorsunuz... Lütfen Bekleyiniz."
              />
              :
              <div className="flex justify-center">
              <div className="w-full max-w-xs">
                  <div className="bg-indigo-50 shadow-md rounded px-8 pt-6 pb-8 mb-4 my-24">
                      <div className="mb-4">
                          <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="username">
                              Kullanıcı Adı
                          </label>
                          <Input onChange={(e) => setUsername(e.target.value)} className='shadow-md' placeholder="Kullanıcı Adı" />
                      </div>
                      <div className="mb-4">
                          <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="username">
                              Eposta
                          </label>
                          <Input onChange={(e) => setEmail(e.target.value)} className='shadow-md' placeholder="Eposta" />
                      </div>

                      <div className="mb-6">
                          <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="password">
                              Parola
                          </label>
                          <Input.Password onChange={(e) => setPassword(e.target.value)} className='mb-1 shadow-md' placeholder="Parola" />
                          <Link href="/login">
                              <a className='text-sm text-indigo-500'>Zaten kayıtlı bir hesabınız var mı ?</a>
                          </Link>
                      </div>
                      <div className="flex items-center justify-between">
                          <button onClick={submitRegister} className='inline-block w-full px-4 py-2.5 bg-indigo-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-indigo-700 hover:shadow-lg focus:bg-indigo-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-indigo-800 active:shadow-lg transition duration-150 ease-in-out'>
                              Kayıt Ol
                          </button>

                      </div>
                  </div>
                  <p className="text-center text-grey text-xs">
                      ©2022 PCT. All rights reserved.
                  </p>
              </div>
          </div>
            }
     
        </div>
    )
}


Register.getLayout = function getLayout(page) {
    return (
        <MainLayout>
            {page}
        </MainLayout>
    )
}

