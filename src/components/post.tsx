import { useAtom } from 'jotai'
import { myPostAtom } from '@/atoms/post'
import { editingPostIndexAtom } from '@/atoms/post'
import { toast } from 'react-toastify'

const Post = () => {
    const [posts, setPosts] = useAtom(myPostAtom)
    const [, setEditingIndex] = useAtom(editingPostIndexAtom)
    const deletePost = (index) => {
        const updatedPosts = [...posts]

        updatedPosts.splice(index, 1)

        setPosts(updatedPosts)
        toast.success('The post has been successfully deleted!!')
    }
    const startEditing = (index) => {
        setEditingIndex(index)
        toast.success('Please edit the title and content and save')
    }

    return (
        <div className="w-full  font-mono text-white">
            {posts.length === 0 ? (
                <p className="text-center text-xl text-white">
                    No Posts Available (Backend Not Implemented)
                </p>
            ) : (
                posts.map((post, index) => (
                    <div key={index} className="w-full font-mono text-white ">
                        <div className=" mt-2 w-full p-6">
                            <h2 className="mb-4 block w-2/3 rounded-md border-0 py-1.5 pl-7 pr-20 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6">
                                {post.TITLE}
                            </h2>
                            <p className="mb-4 block w-2/3 rounded-md border-0 py-1.5 pl-7 pr-20 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2  sm:text-sm sm:leading-6">
                                {post.CONTENTS}
                            </p>
                            <button
                                className="h-14 w-28 rounded-md bg-indigo-200"
                                onClick={() => deletePost(index)}
                            >
                                Delete
                            </button>
                            <button
                                className="ml-4 h-14 w-28 rounded-md bg-indigo-200"
                                onClick={() => startEditing(index)}
                            >
                                Edit
                            </button>
                        </div>
                    </div>
                ))
            )}
        </div>
    )
}

export default Post
