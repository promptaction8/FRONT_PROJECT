const Career = () => {
    return (
        <div className="w-full justify-center flex flex-col items-center my-40">
            <div className="bg-[url(/images/gray_background.jpg)] font-mono text-2xl text-white  bg-cover bg-no-repeat flex-col flex rounded-2xl py-20 max-w-[1600px] lg:flex-col gap-16 lg:gap-4">
                <div className="w-400  flex-1 text-6xl text-center">Career</div>
                <div className="w-full text-center text-4xl lg:flex-row flex flex-col  h-100 ">
                    <div className="flex-1 ">
                        <div className="w-full   h-12">Nurse history</div>
                        <div className="mt-4  text-lg flex-col  w-full">
                            <p className="text-3xl">Chungmu Hospital</p>
                            <p>-Operation Room Nurse</p>
                            <p>-Anesthesiology and Pain Medicine Nurse</p>
                            <p>-Angio Room Anesthetic Nurse</p>
                            <p></p>
                            <p className="text-3xl">Naeun Pil Hospital</p>
                            <p>-Operation Room Nurse</p>
                            <p>-Operation Room Manager</p>
                            <p>-Operation Room an Administrative officer</p>
                            <p>-Emergency Room Nurse</p>
                            <p>-Physician Assistant</p>
                        </div>
                    </div>
                    <div className="flex-1 ">
                        <div className="w-full   h-12">Developer Stacks</div>
                        <div className="mt-4  text-lg flex-col  w-full">
                            <p>-Python</p>
                            <p>-Django</p>
                            <p>-React</p>
                            <p>-Jotai</p>
                            <p>-Next.js</p>
                            <p>-Node.js</p>
                            <p>-Tailwind</p>
                            <p>-React-Toastify</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Career
