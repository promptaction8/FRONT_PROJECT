import { useAtom } from 'jotai'
import React from 'react'
import { editingPostIndexAtom } from '@/atoms/post'
import { myPostAtom } from '@/atoms/post'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

export const PostInput = () => {
    const [posts, setPosts] = useAtom(myPostAtom)
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        setValue,
    } = useForm()
    const [editingIndex, setEditingIndex] = useAtom(editingPostIndexAtom)

    React.useEffect(() => {
        if (editingIndex !== -1) {
            setValue('TITLE', posts[editingIndex].title)
            setValue('COMMENTS', posts[editingIndex].content)
        }
    }, [editingIndex, setValue, posts])

    const onSubmit = (data) => {
        if (editingIndex !== -1) {
            const updatedPosts = [...posts]
            updatedPosts[editingIndex] = data
            setPosts(updatedPosts)
            setEditingIndex(-1)
            toast.success('The post has been successfully updated')
        } else {
            setPosts([...posts, data])
            toast.success('A new post has been successfully added')
        }
        reset()
    }

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="relative flex w-full flex-1 flex-col  p-6 "
        >
            <input
                className="mb-4 block w-2/3 rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                type="text"
                {...register('TITLE')}
                required
                placeholder="TITLE"
            />
            {errors.TITLE && <p>제목을 작성해주세요</p>}
            <input
                className="mb-4 block h-60 w-2/3 rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                type="text"
                {...register('COMMENTS')}
                required
                placeholder="COMMENTS"
            />
            {errors.CONTENTS && <p>내용을 작성해주세요</p>}
            <button
                className="h-14 w-28 rounded-md bg-indigo-200 "
                type="submit"
                value={editingIndex !== -1 ? 'save' : 'Submit'}
            ></button>
        </form>
    )
}
