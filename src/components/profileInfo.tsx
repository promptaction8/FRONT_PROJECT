const ProfileInfo = () => {
    return (
        <div className="w-full justify-center flex flex-row h-350 ">
            <div className="bg-[url(/images/gray_background.jpg)]  bg-cover bg-no-repeat mt-52 flex-row  flex rounded-2xl  w-430 h-230 ">
                <div className="w-140 gap-20 h-full flex justify-center flex-col">
                    <div className="ml-auto mr-auto w-100 h-100 rounded-2xl ">
                        {/* 그라데이션 삽입 */}
                        <div className="bg-gradient-to-r from-slate-700 to-slate-300 w-100 h-100 relative rounded-2xl">
                            <div className="w-100 h-100 bg-pink-400 absolute left-6 bottom-6 rounded-2xl overflow-hidden">
                                <img src="/images/komi.png" alt="komi"></img>
                            </div>
                        </div>
                    </div>
                    <div className="ml-auto mr-auto w-96 h-48 rounded-2xl  flex flex-col">
                        <div className=" flex-1 flex-row justify-center mt-auto mb-auto text-white font-mono text-lg">
                            <label>
                                <p>
                                    GitHub :
                                    <a
                                        href="https://github.com/promptaction8"
                                        target="_blank"
                                    >
                                        https://github.com/promptaction8
                                    </a>
                                </p>
                            </label>
                        </div>
                        <div className=" flex-1 flex-row justify-center mt-auto mb-auto text-white font-mono text-lg">
                            <label>
                                <p>
                                    VeLog :
                                    <a
                                        href="https://velog.io/@jinwoo30754"
                                        target="_blank"
                                    >
                                        https://velog.io/@jinwoo30754
                                    </a>
                                </p>
                            </label>
                        </div>
                    </div>
                </div>
                <div className="flex-1 flex-col flex ">
                    <div className=" w-full h-32 flex-col flex justify-center">
                        <p className="w-60 h-20 ml-8 font-mono pt-14 text-center text-5xl text-white">
                            About Me
                        </p>
                    </div>
                    <div className=" w-full h-140 flex-col flex justify-center ">
                        <div className="flex flex-col rounded-md h-5/6 w-11/12 overflow-y-auto ml-auto mr-auto overflow-auto">
                            <p className="text-white text-start font-mono text-3xl  w-full h-20 ">
                                I'm Jinwoo Yang, Passionate Web Developer, with
                                Proficiency in React, JavaScript, Tailwind, and
                                Next.js
                            </p>
                            <p className="text-white text-start font-mono flex justify-center flex-col text-xl w-full h-52 ">
                                As an emerging software developer, my passion
                                lies in creating dynamic web applications. I
                                specialize in React and JavaScript to craft
                                engaging user interfaces. I'm also proficient in
                                Tailwind CSS and Next.js, ensuring clean,
                                responsive designs with server-side rendering.
                                Committed to writing maintainable code, I aim to
                                contribute to impactful projects while
                                continuously learning and staying current with
                                industry best practices.
                            </p>
                            <p className="text-white text-start font-mono flex-col text-xl  w-full flex-1 ">
                                My dedication to excellence drives me to seek
                                out challenges and expand my knowledge. I'm
                                eager to join a team where I can apply my skills
                                and add value while fostering a culture of
                                innovation and growth
                            </p>
                        </div>
                    </div>
                    <div className=" w-full flex-1 justify-center flex-row flex">
                        <div className="w-11/12  h-40 grid grid-cols-3 gap-10 content-center">
                            <div className=" w-72 h-14 flex flex-row justify-center">
                                <p className="mr-8 mt-auto mb-auto text-white font-mono text-3xl">
                                    Name
                                </p>
                                <p className="mt-auto mb-auto  text-white font-mono text-3xl">
                                    Jinwoo Yang
                                </p>
                            </div>
                            <div className=" w-72 h-14 flex flex-row justify-center">
                                <p className="mr-8 mt-auto mb-auto text-white font-mono text-3xl">
                                    Age
                                </p>
                                <p className="mt-auto mb-auto  text-white font-mono text-3xl">
                                    28
                                </p>
                            </div>
                            <div className=" w-72 h-14 flex flex-row justify-center">
                                <p className="mr-8 mt-auto mb-auto text-white font-mono text-3xl">
                                    Birth
                                </p>
                                <p className="mt-auto mb-auto  text-white font-mono text-3xl">
                                    1995.03.17
                                </p>
                            </div>
                            <div className=" w-72 h-14 flex flex-row justify-center">
                                <p className="mr-8 mt-auto mb-auto text-white font-mono text-3xl">
                                    Address
                                </p>
                                <p className="mt-auto mb-auto  text-white font-mono text-md">
                                    Incheon Seogu Cheongna Hannae-ro 132
                                </p>
                            </div>
                            <div className=" w-72 h-14 flex flex-row justify-center">
                                <p className="mr-8 mt-auto mb-auto text-white font-mono text-3xl">
                                    Phone
                                </p>
                                <p className="mt-auto mb-auto  text-white font-mono text-xl">
                                    010-3857-7155
                                </p>
                            </div>
                            <div className="  w-72 h-14 flex flex-row justify-center">
                                <p className="mr-8 mt-auto mb-auto text-white font-mono text-3xl">
                                    Part
                                </p>
                                <p className="mt-auto mb-auto  text-white font-mono text-lg">
                                    Web Developer
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProfileInfo
