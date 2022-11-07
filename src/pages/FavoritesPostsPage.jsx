import React from 'react'
import { ChevronLeft, ChevronRight } from 'react-feather'
import { MyPostCard } from '../components/Card'

const FavouritesPage = () => {
  const myPosts = [
    {
      id: 1,
      imgUrl: 'https://images.unsplash.com/photo-1662519861406-439bf0756d87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
      title: 'Title goes here...',
      description: 'Description bla bla bla and so on goes here....',
      createdAt: '25/06/2022',
      updatedAt: '28/10/2022',
      linkToThePost: 'http://localhost/placeholder'
    },
    {
      id: 2,
      imgUrl: 'https://images.unsplash.com/photo-1662514146802-20d0650cde57?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      title: 'Title goes here...',
      description: 'Description bla bla bla and so on goes here....',
      createdAt: '05/09/2022',
      updatedAt: '18/10/2022',
      linkToThePost: 'http://localhost/placeholder'
    },
    {
      id: 3,
      imgUrl: 'https://images.unsplash.com/photo-1662901580223-392875b05fb9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
      title: 'Title goes here...',
      description: 'Description bla bla bla and so on goes here....',
      createdAt: '05/09/2022',
      updatedAt: '18/10/2022',
      linkToThePost: 'http://localhost/placeholder'
    },
  ]

  return (
    <section className="pt-40 p-8 md:pt-14 md:p-14 text-dark">
      <div className="text-3xl md:text-4xl font-medium">Favourite Posts</div>
      {/* card */}
      <div className="pt-10 flex flex-col space-y-3">
        {
          myPosts ?
          myPosts.map((post) => (
            <MyPostCard
              key={post.id}
              data={post}
            />
          )) :
          null
        }
      </div>
      {/* paginations */}
      <div className="flex justify-center items-center space-x-5 py-10 md:pb-0 select-none text-xs">
        <div className="flex items-center cursor-pointer">
          <ChevronLeft />
          <span>Previous</span>
        </div>
        <div className="flex justify-center items-center space-x-2 cursor-pointer">
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span className="tracking-[5px]">...</span>
          <span>10</span>
        </div>
        <div className="flex items-center cursor-pointer">
          <span>Next</span>
          <ChevronRight />
        </div>
      </div>
    </section>
  )
}

export default FavouritesPage