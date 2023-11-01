const Header = () => {
    return (
        <header className="flex relative shrink-0 flex-row  min-w-full h-20">
            <div className="flex flex-row left-0 h-full w-56">
                <div className="mt-2">
                    <div>
                        <img
                            src="/developer mode.svg"
                            width={56}
                            height={20}
                        ></img>
                    </div>
                </div>
                <div className="w-max font-mono h-full text-3xl text-white text-center justify-center flex flex-1">
                    Develop Portfolio
                </div>
            </div>
            <div className="flex flex-1 flex-row-reverse ">
                <div className="h-full w-20">
                    <div className="mt-3 ml-2">
                        <img
                            src="/settings.svg"
                            alt="home"
                            width={45}
                            height={25}
                        ></img>
                    </div>
                </div>
                <div className="h-full w-20 ">
                    <div className="mt-3 ml-2">
                        <img
                            src="/logout.svg"
                            alt="home"
                            width={45}
                            height={20}
                        ></img>
                    </div>
                </div>
                <div className="h-full w-20 ">
                    <div className="mt-3 ml-2">
                        <img
                            src="/language.svg"
                            alt="home"
                            width={45}
                            height={20}
                        ></img>
                    </div>
                </div>
                <div className="h-full w-20 ">
                    <div className="mt-3 ml-2">
                        <img
                            src="/info.svg"
                            alt="home"
                            width={45}
                            height={20}
                        ></img>
                    </div>
                </div>
                <div className="h-full w-20 ">
                    <div className="mt-3 ml-2">
                        <img
                            src="/home.svg"
                            alt="home"
                            width={45}
                            height={20}
                        ></img>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
