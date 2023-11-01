const ProfileInfo = () => {
    return (
        <div className="w-full justify-center flex flex-col items-center my-40">
            <div className="bg-[url(/images/gray_background.jpg)] bg-cover bg-no-repeat flex-col flex rounded-2xl py-20 max-w-[1600px] lg:flex-row gap-16 lg:gap-4">
                <div className="mx-8 gap-8 flex justify-center flex-col items-center lg:justify-start">
                    <div className="rounded-2xl w-52 h-52 sm:w-72 sm:h-72 md:w-100 md:h-100">
                        {/* 그라데이션 삽입 */}
                        <div className="bg-gradient-to-r from-slate-700 to-slate-300 w-52 h-52 sm:w-72 sm:h-72 relative rounded-2xl md:w-100 md:h-100">
                            <div className="w-52 h-52 sm:w-72 sm:h-72 bg-pink-400 absolute left-6 bottom-6 rounded-2xl overflow-hidden md:w-100 md:h-100">
                                <img src="/images/komi.png" alt="komi"></img>
                            </div>
                        </div>
                    </div>
                    <div className="ml-auto mr-auto w-96 flex flex-col gap-4 text-white font-mono text-lg">
                        <p className="flex whitespace-nowrap">
                            <span>GitHub: </span>
                            <a
                                href="https://github.com/promptaction8"
                                target="_blank"
                            >
                                https://github.com/promptaction8
                            </a>
                        </p>
                        <p className="flex whitespace-nowrap">
                            <span>VeLog: </span>
                            <a
                                href="https://velog.io/@jinwoo30754"
                                target="_blank"
                            >
                                https://velog.io/@jinwoo30754
                            </a>
                        </p>
                    </div>
                </div>
                <div className="flex-1 flex-col flex mx-10 items-start text-white font-mono gap-12">
                    <p className="text-center text-6xl">About Me</p>
                    <div className="w-full flex-col flex">
                        <div className="flex flex-col gap-10 text-justify">
                            <p className="text-2xl">
                                I'm Jinwoo Yang, Passionate Web Developer, with
                                Proficiency in React, JavaScript, Tailwind, and
                                Next.js
                            </p>
                            <div className="text-white font-normal text-lg flex flex-col gap-8 leading-6">
                                <p>
                                    As an emerging software developer, my
                                    passion lies in creating dynamic web
                                    applications. I specialize in React and
                                    JavaScript to craft engaging user
                                    interfaces. I'm also proficient in Tailwind
                                    CSS and Next.js, ensuring clean, responsive
                                    designs with server-side rendering.
                                    Committed to writing maintainable code, I
                                    aim to contribute to impactful projects
                                    while continuously learning and staying
                                    current with industry best practices.
                                </p>
                                <p>
                                    My dedication to excellence drives me to
                                    seek out challenges and expand my knowledge.
                                    I'm eager to join a team where I can apply
                                    my skills and add value while fostering a
                                    culture of innovation and growth
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full grid grid-cols-2 gap-x-4 gap-y-10 content-start text-white whitespace-nowrap font-mono text-xl items-center xl:grid-cols-6">
                        <p>Name</p>
                        <p>Jinwoo Yang</p>
                        <p>Age</p>
                        <p>28</p>

                        <p>Birth</p>
                        <p>1995.03.17</p>

                        <p>Address</p>
                        <p className="whitespace-normal">
                            Incheon Seogu Cheongna Hannae-ro 132
                        </p>
                        <p>Phone</p>
                        <p>010-3857-7155</p>
                        <p>Part</p>
                        <p>Web Developer</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProfileInfo
