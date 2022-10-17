import { Button } from 'antd'
import React from 'react'
import {blue} from "@ant-design/colors"
export default function task_card() {
    return (
        <div>
            <div className="bg-white rounded-md overflow-hidden relative shadow-md">
                <div>
                    <img className="w-full" src="https://lorempixel.com/640/360/food/" alt="Recipe Title" />
                </div>
                <div className="p-4">
                    <h2 className="text-2xl text-indigo-500">Recipe Title</h2>
                    <div className="flex justify-between mt-4 mb-4 text-gray-500">
                        <div className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className="ml-1 lg:text-xl">30m</span>
                        </div>
                        <div className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                                <path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd" />
                            </svg>
                            <span className="ml-1 lg:text-xl">10</span>
                        </div>
                        <div className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                            </svg>
                            <span className="ml-1 lg:text-xl">1-2</span>
                        </div>
                    </div>
                    <p className="mb-4 text-gray-500">A recipe that's quick and easy to make and super tasty!</p>
                    <Button size='large' className=''   block>
                        Hemen Başlayalım.
                    </Button>                        </div>
                <div className="absolute top-0 right-0 mt-4 mr-4 bg-indigo-500 text-white rounded-full pt-1 pb-1 pl-4 pr-5 text-xs uppercase">
                    <span>Medium</span>
                </div>
            </div>
        </div>
    )
}
