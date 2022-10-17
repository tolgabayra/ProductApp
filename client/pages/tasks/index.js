import { Button } from 'antd'
import React from 'react'
import Taskcard from '../../components/tasks/task_card'

import MainLayout from "../../layouts/home/index"
export default function index() {
    return (
        <div>
            <div className=" bg-fixed h-full">

                <div className="mx-auto p-4">

                    <h1 className="text-center text-2xl">Tailwind CSS -  Recipe Cards</h1>
                 

                </div>
                <div className="grid pt-5 bg-gray-50 gap-4 gay-y-8 md:grid-cols-2 lg:grid-cols-3 mb-16 pr-12 pl-12">
            
                  
                  <Taskcard />
                  <Taskcard />
                  <Taskcard />
                  <Taskcard />
                  <Taskcard />
                  <Taskcard />


                

                </div>



            </div>
        </div>
    )
}


index.getLayout = function getLayout(page) {
    return (
        <MainLayout>
            {page}
        </MainLayout>
    )
}