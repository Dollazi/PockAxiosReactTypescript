import React, { useState, useEffect } from 'react'
import axios from 'axios'

type Post = {
  userId: number,
  id: number,
  title: string,
  body: string,
}

const App = () => {
  const [posts, setPosts] = useState<Post[]>([])
  
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts')
        setPosts(response.data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchPosts()
  }, [])

  return (
    <div>
      <h1>List of Posts</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <h3>{post.id}</h3>
            <p>{post.body}</p>     
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
