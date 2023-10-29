const Career = () => {
    return (
        <div className="min-w-full shrink-0 justify-center flex flex-row h-350 border-4 border-solid border-pink-900">
            <div className=" border-double bg-[url(/images/gray_background.jpg)]  bg-cover bg-no-repeat flex-col  flex rounded-2xl  w-430 h-230  border-4  border-pink-400">
                <div className="w-full h-32 border-2 border-solid border-pink-400 flex flex-row justify-center">
                    <div className="h-full w-40 border-2 border-solid border-pink-400">
                        <p className="pt-8 text-5xl text-white font-mono">
                            Career
                        </p>
                    </div>
                </div>
                <div className="flex-1 flex border-2 border-solid border-pink-400 w-full justify-center ">
                    <div className="w-11/12 h-5/6 border-2 border-solid border-pink-400 mt-auto mb-auto flex flex-row">
                        <div className="flex-1 border-2 border-solid border-pink-400"></div>
                        <div className="border-2 border-solid border-pink-400 flex-1"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Career
