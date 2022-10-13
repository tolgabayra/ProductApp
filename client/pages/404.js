import Link from 'next/link'
import React from 'react'

export default function Notfound() {
    return (
        <div>

            <div class="flex items-center justify-center min-h-screen bg-white py-48">
                <div class="flex flex-col">


                    <div class="flex flex-col items-center">
                        <div class="text-indigo-500 font-bold text-7xl">
                            404
                        </div>

                        <div class="font-bold text-3xl xl:text-7xl lg:text-6xl md:text-5xl mt-10">
                            Bu sayfa mevcut değildir
                        </div>

                        <div class="text-gray-400 font-medium text-sm md:text-xl lg:text-2xl mt-8">
                            Ana sayfaya dönebilirsiniz <span><Link href="/">Anasayfa </Link></span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
