import React from 'react'
import { Provider } from 'jotai'
import Post from '@/components/post'
import PostInput from '@/components/postInput'

const PostPage = () => {
    return (
        <>
            <Post />
            <PostInput />
        </>
    )
}

export default PostPage
