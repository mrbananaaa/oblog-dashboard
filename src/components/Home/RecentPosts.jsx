import React from "react";
import { RecentPostCard } from "../Card";

const RecentPosts = ({ posts }) => {
  return (
    <div className="recent-posts-wrapper">
      <h2 className="recent-posts-text">Recent Posts...</h2>
      <div className="recent-posts-card-wrapper">
        {
          posts ?
          posts.map((post) => (
            <RecentPostCard 
              key={post.id}
              data={post}
            />
          )) :
          null
        }
      </div>
    </div>
  );
};

export default RecentPosts;
