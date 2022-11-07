import React from 'react'
import { TextEditor } from '../components/Form'

const CreateNewPostPage = () => {
  return (
    <div className="text-dark min-h-screen">
      <div className="text-3xl md:text-4xl pt-40 md:pt-14 p-8 md:p-14 font-medium">Create New Post</div>
      
      {/* form */}
      <div className="border">
        {/* title */}
        <div className='flex justify-between border-b px-8 md:px-14'>
          <div className='py-3 md:text-xl font-medium'>
            Title :
          </div>
          <div className='border-l text-xs md:text-base flex items-center w-[80%]'>
            <input 
              className='h-full w-full px-5 outline-none bg-transparent focus:bg-gray-100' 
              type="text" 
              placeholder='write your title here...'
            />
          </div>
        </div>
        {/* body */}
        <div className='flex justify-between px-8 md:px-14'>
          <div className='py-3 md:text-xl font-medium'>
            Body :
          </div>
          <div className='text-xs md:text-base flex items-center w-[80%]'>
            <TextEditor />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateNewPostPage