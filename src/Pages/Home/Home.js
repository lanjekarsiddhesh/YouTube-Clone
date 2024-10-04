import React, { useState } from 'react'
import './home.css'
import Sidbar from '../../components/Sidbar/Sidbar'
import Feed from '../../components/Feed/Feed'

function Home({sidebar}) {
  const [category, setCategory] = useState(0)
  return (
    <>
    <Sidbar sidebar={sidebar} category={category} setCategory={setCategory}/>
    <div className={`container ${sidebar?'':'large-container'}`}>
      <Feed category={category} />
    </div>
      
    </>
  )
}

export default Home
