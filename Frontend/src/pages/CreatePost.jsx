import React from 'react'
import axios from "axios"
import '../App.css'
import { useNavigate } from 'react-router-dom'    // ← add this

const CreatePost = () => {
  const navigate = useNavigate()                  // ← add this

  const handleSubmit = async(e) => {
    e.preventDefault()

    const formData = new FormData(e.target)

    axios.post("http://localhost:3000/create-post", formData)
    .then((res) => {
      alert("Post created successfully")
      e.target.reset()
      navigate('/feed')                           // ← add this
    })
  }

  return (
    <section className='create-post-section'>
      <form onSubmit={handleSubmit}>
        <h1>Create post</h1>
        <div>
          <input type="file" name='image' accept='image/*'/>
          <input type="text" name='caption' required placeholder='Write a caption...'/>
        </div>
        <button type='submit'>Submit</button>
      </form>
    </section>
  )
}

export default CreatePost