"use client"
import React from 'react'
import { useState } from 'react'
import Link from 'next/link'

const page = () => {
  const [btn, setBtn] = useState(true)
  const [A, setA] = useState(false)
  const [B, setB] = useState(false)
  const [the, setThe] = useState(false)
  const handleA = ()=>{
    setA(true)
    setBtn(false)
  }
  const handleB = ()=>{
    setA(false)
    setBtn(false)
    setB(true)
  }
  const handleThe = ()=>{
    setA(false)
    setBtn(false)
    setB(false)
    setThe(true)
  }
  return (
    <div className='background-1 w-[100%] h-[100vh]'>
        <div className="logo">Tec</div>
        <div className='flex flex-col items-center h-[100vh] justify-center'>
        <div className="box bg-white h-[80vh] w-[50%] mb-12 rounded-2xl px-6">
            <div className="intro flex flex-col justify-center items-center gap-4">
                <h1 className='mt-6 text-4xl font-bold'>Articles:</h1>
                <p className='text-center w-[90%]'>Articles are words used to define nouns as specific or unspecific. There are two types of articles:</p>
                <p> <b>Definite Article:</b>  "The"</p>
                <p><b> Indefinite Articles:</b>  "A" and "An"</p>
                <h2 className='text-3xl mt-3 font-bold'>Defination</h2>
                <div className="box-buttons flex gap-5">
                  <button onClick={handleA}  className='bg-red-700 px-6 py-4 w-24 text-white'><span class="emoji">🅰️</span>A</button>
                  <button onClick={handleB} className='bg-green-700 px-6 py-4 w-24 text-white'><span class="emoji">🔤</span>An</button>
                  <button onClick={handleThe} className='bg-blue-700 px-6 py-4 w-24 text-white'><span class="emoji">🎯</span>The</button>
                </div>
                {btn && <button className='bg-slate-200 w-[90%] py-7 mt-3 font-bold'>Click on an article to learn its definition and examples:</button>}
                {!btn && A && <button className='bg-slate-200 w-[90%] py-7 mt-3 font-bold'>
                  <p>We use 'a' before a word which begins with a consonant sound.</p> 
                  <p>Examples: A girl, A ball.</p>
                </button>}
                {!btn && !A && B && <button className='bg-slate-200 w-[90%] py-7 mt-3 font-bold'>
                  <p>We use 'an' before a word which begins with a vowel sound.</p> 
                  <p>Examples: An apple, An eagle.</p>
                </button>}
                {!btn && !A && !B && the  && <button className='bg-slate-200 w-[90%] py-7 mt-3 font-bold'>
                  <p>'The' is used to refer to specific or previously mentioned nouns.</p> 
                  <p>Examples: The sun, The car, The Eiffel Tower.</p>
                </button>}
            </div>
        </div>
        <div className="buttons flex gap-14">
          <Link href={"/"}><button className='text-white bg-blue-500 px-6 py-2 rounded-lg'>Back</button></Link>
        </div>
        </div>
        
    </div>
  )
}

export default page
