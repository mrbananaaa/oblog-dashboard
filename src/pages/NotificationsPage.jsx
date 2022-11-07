import React from 'react'
import { ChevronLeft, ChevronRight } from 'react-feather'
import { CommentNotifCard, FollowtNotifCard, LikeNotifCard } from '../components/Card';

const NotificationCard = ({ data }) => {
  switch(data.type) {
    case 'comment':
      return <CommentNotifCard
        sender={data.sender}
        text={data.text}
      />
    case 'like':
      return <LikeNotifCard 
        sender={data.sender}
        text={data.text}
      />
    case 'following':
      return <FollowtNotifCard
        sender={data.sender}
      />
    default:
      return null
  }
};

const NotificationsPage = () => {
  const notifications = [
    {
      id: 1,
      type: 'comment',
      sender: '@test.dev',
      text: 'can you please add more options to the dashboard plesae??? and if you mind to...'
    },
    {
      id: 2,
      type: 'comment',
      sender: '@mr.bananaa',
      text: 'great tutorial! can’t wait for next posts'
    },
    {
      id: 3,
      type: 'comment',
      sender: '@boogey.man',
      text: 'but if you use tailwindcss it more easier to implement the dark mode feature...'
    },
    {
      id: 4,
      type: 'like',
      sender: '@your.layzcoder',
      text: 'How to write a clean CSS with Tailwindcss.'
    },
    {
      id: 5,
      type: 'like',
      sender: '@notsjs',
      text: 'Implementing refresh token with Express and JWT library'
    },
    {
      id: 6,
      type: 'following',
      sender: '@indodotgg',
      text: null
    },
  ]

  return (
    <section className="text-dark min-h-screen">
      <div className="text-3xl pt-40 p-8 md:pt-14 md:p-14 md:text-4xl font-medium">Notifications</div>
      {/* notifications */}
      <div className="border-y">
        {
          notifications ?
          notifications.map((notif) => (
            <NotificationCard
              key={notif.id}
              data={notif}
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

export default NotificationsPage