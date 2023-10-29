const ProfileInfo = () => {
    return (
        <div className='w-full justify-center flex flex-col items-center my-40'>
            <div className='bg-[url(/images/gray_background.jpg)] bg-cover bg-no-repeat mt-52 flex-row flex rounded-2xl  w-430 py-20'>
                <div className='w-140 gap-8 flex justify-center flex-col mt-8'>
                    <div className='ml-auto mr-auto w-100 h-100 rounded-2xl '>
                        {/* 그라데이션 삽입 */}
                        <div className='bg-gradient-to-r from-slate-700 to-slate-300 w-100 h-100 relative rounded-2xl'>
                            <div className='w-100 h-100 bg-pink-400 absolute left-6 bottom-6 rounded-2xl overflow-hidden'>
                                <img src='/images/komi.png' alt='komi'></img>
                            </div>
                        </div>
                    </div>
                    <div className='ml-auto mr-auto w-96 flex flex-col gap-4 text-white font-mono text-lg'>
                        <p className='flex whitespace-nowrap'>
                            <span>GitHub: </span>
                            <a
                                href='https://github.com/promptaction8'
                                target='_blank'
                            >
                                https://github.com/promptaction8
                            </a>
                        </p>
                        <p className='flex whitespace-nowrap'>
                            <span>VeLog: </span>
                            <a
                                href='https://velog.io/@jinwoo30754'
                                target='_blank'
                            >
                                https://velog.io/@jinwoo30754
                            </a>
                        </p>
                    </div>
                </div>
                <div className='flex-1 flex-col flex mx-10 items-start text-white font-mono gap-12'>
                    <p className='text-center text-6xl'>About Me</p>
                    <div className='w-full flex-col flex'>
                        <div className='flex flex-col gap-10 text-justify'>
                            <p className='text-2xl'>
                                I'm Jinwoo Yang, Passionate Web Developer, with
                                Proficiency in React, JavaScript, Tailwind, and
                                Next.js
                            </p>
                            <div className='text-white font-normal text-lg flex flex-col gap-8 leading-6'>
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
                    <div className='w-full grid grid-cols-6 gap-x-4 gap-y-10 content-start text-white whitespace-nowrap font-mono text-xl items-center'>
                        <p>Name</p>
                        <p>Jinwoo Yang</p>
                        <p>Age</p>
                        <p>28</p>

                        <p>Birth</p>
                        <p>1995.03.17</p>

                        <p>Address</p>
                        <p className='whitespace-normal'>
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
