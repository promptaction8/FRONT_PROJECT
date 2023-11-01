import Post from './post'
import PostInput from './postInput'

const SendEmail = () => {
    return (
        <div className="w-full justify-center flex flex-col font-mono items-center my-40">
            <div className="bg-[url(/images/gray_background.jpg)] text-white font-mono bg-cover bg-no-repeat flex-col flex rounded-2xl py-20 max-w-[1600px] lg:flex-col gap-16  lg:gap-4">
                <div className="mx-8 gap-8 flex justify-center flex-col items-center lg:justify-start">
                    <div className="w-400  flex-1 text-6xl text-center">
                        <p>Talk To Me</p>
                    </div>
                </div>
                <div className=" mx-8 lg:h-150 flex flex-col">
                    <div className=" w-full h-14 justify-center flex text-2xl">
                        <a
                            className="mt-auto mb-auto"
                            href="mailto:jinwoo30754@naver.com"
                        >
                            Send Email : jinwoo30754@naver.com
                        </a>
                    </div>
                    <div className="flex-1  flex lg:flex-row flex-col">
                        <div className=" flex-1 w-full">
                            <div className=" h-14 flex flex-1">
                                <div className="text-2xl pl-7">
                                    Comment Me Here
                                </div>
                            </div>
                            <div className="flex-1">
                                <PostInput />
                            </div>
                        </div>
                        <div className=" flex-1 w-full">
                            <Post />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SendEmail
