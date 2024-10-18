import React from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()

    return (
        <div className='text-center m-4 bg-gray-600 text-white text-3xl '>
          Github followers : {data?.followers !== undefined ? data.followers : 'Loading...'}
        </div>
    )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/sonushavik')
    if (!response.ok) {
        throw new Error('Failed to fetch data')
    }
    return response.json()
}
