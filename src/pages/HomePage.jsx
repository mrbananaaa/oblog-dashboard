import React from "react";
import Footer from "../components/Footer";
import Profile from "../components/Home/Profile";
import RecentPosts from "../components/Home/RecentPosts";

const HomePage = () => {
  const currentUser = {
    name: 'Devyan Astagiri',
    username: '@mr.banana',
    accountInfo: {
      imgUrl: 'https://images.unsplash.com/photo-1662673482200-e68f1d0eb893?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80'
    }
  }

  const recentPosts = [
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
  ]

  // display name for greetings
  const displayName = currentUser ? currentUser.name.split(' ')[0] : 'User'

  return (
    <section>
      <div className="home-title-wrapper">
        <h4 className="home-title-welcome">Welcome,</h4>
        <h1 className="home-title-username">{displayName}</h1>
      </div>
      <div className="home-content-wrapper">
        <RecentPosts posts={recentPosts} />
        <Profile user={currentUser} />
      </div>
      <Footer />
    </section>
  );
};

export default HomePage;
