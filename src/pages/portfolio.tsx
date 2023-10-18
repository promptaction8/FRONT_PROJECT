import React from 'react'
import category from '@/components/category'

const portfolio = () => {
    return (
        <>
            <div className=" bg-cover shrink-0  bg-center bg-[url('/images/background_2.jpg')] bg-no-repeat overflow-scroll  justify-center w-screen h-screen border-solid border-4 border-indigo-600">
                <div className="flex relative shrink-0 flex-row  min-w-full h-20 border-4 border-solid border-pink-400">
                    <div className="absolute left-0 h-full w-56 border-solid border-2 border-black">
                        <img
                            src="/images/apple_logo.png"
                            width={56}
                            height={20}
                        ></img>
                    </div>
                    <div className="absolute right-0 h-full w-80 border-solid border-2 border-black"></div>
                </div>
                <div className="min-w-full shrink-0 justify-center flex flex-row h-250 border-4 border-solid border-pink-900">
                    <div className=" border-double rounded-3xl bg-gray-800 bg-opacity-70 shadow-2xl backdrop-blur-lg w-470 h-230 border-4  border-pink-400">
                        <div className=""></div>
                    </div>
                </div>
                <div className="min-w-full shrink-0 justify-center flex flex-row h-250 border-4 border-solid border-pink-900">
                    <div className=" border-double rounded-3xl bg-gray-800 bg-opacity-70 shadow-2xl backdrop-blur-lg w-470 h-230 border-4  border-pink-400"></div>
                </div>
                <div className="min-w-full shrink-0 justify-center flex flex-row h-250 border-4 border-solid border-pink-900">
                    <div className=" border-double rounded-3xl bg-gray-800 bg-opacity-70 shadow-2xl backdrop-blur-lg w-470 h-230 border-4  border-pink-400"></div>
                </div>
            </div>
        </>
    )
}

export default portfolio
