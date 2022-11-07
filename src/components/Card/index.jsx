import { Link } from "react-router-dom";
import { Edit, ExternalLink, Trash } from "react-feather";

const RecentPostCard = ({ data }) => {
  return (
    <div className="recent-post-card-container">
      <div className="recent-post-card-thumbs">
        <img src={data.imgUrl} alt="thumbnail" />
      </div>
      <div className="recent-post-card-content-wrapper">
        <div className="recent-post-card-content">
          <div>
            <h3 className="recent-post-card-title">{data.title}</h3>
            <p className="recent-post-card-subtitle">{data.description}</p>
          </div>
          <div className="recent-post-card-timeline">
            <p>created {data.createdAt}</p>
            <p>updated {data.updatedAt}</p>
          </div>
        </div>

        <div className="recent-post-card-btn-wrapper">
          <Link>
            <div className="recent-post-card-btn-main">
              <Edit size={16} />
            </div>
          </Link>
          <Link>
            <div className="recent-post-card-btn-sec">
              <ExternalLink size={16} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

const MyPostCard = ({ data }) => {
  return (
    <div className="recent-post-card-container">
      <div className="recent-post-card-thumbs">
        <img src={data.imgUrl} alt="thumbnail" />
      </div>
      <div className="recent-post-card-content-wrapper">
        <div className="recent-post-card-content">
          <div>
            <h3 className="recent-post-card-title">{data.title}</h3>
            <p className="recent-post-card-subtitle">{data.description}</p>
          </div>
          <div className="recent-post-card-timeline">
            <p>created {data.createdAt}</p>
            <p>updated {data.updatedAt}</p>
          </div>
        </div>

        <div className="recent-post-card-btn-wrapper">
          <Link>
            <div className="recent-post-card-btn-main">
              <Edit size={16} />
            </div>
          </Link>
          <Link>
            <div className="my-post-card-btn-danger">
              <Trash size={16} />
            </div>
          </Link>
          <Link>
            <div className="recent-post-card-btn-sec">
              <ExternalLink size={16} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

const CommentNotifCard = ({ sender, text }) => {
  return (
    <div className="notifcard-layout-container">
      <div className="notifcard-layout-text-wrapper">
        <div className="notifcard-layout-title">
          {sender} comment on your post <span className="notifcard-layout-colon">:</span>
        </div>
        <div className="notifcard-layout-text">
          {text}
        </div>
      </div>
      <div className="notifcard-layout-link">
        <Link to="/">Reply</Link>
      </div>
    </div>
  );
};

const LikeNotifCard = ({ sender, text }) => {
  return (
    <div className="notifcard-layout-container">
      <div className="notifcard-layout-text-wrapper">
        <div className="notifcard-layout-title">
          {sender} liked your post <span className="notifcard-layout-colon">:</span>
        </div>
        <div className="notifcard-layout-text">
          {text}
        </div>
      </div>
      <div className="notifcard-layout-link">
        <Link to="/">Go to post</Link>
      </div>
    </div>
  );
};
const FollowtNotifCard = ({ sender }) => {
  return (
    <div className="notifcard-layout-container">
      <div className="notifcard-layout-text-wrapper">
        <div className="notifcard-layout-title">
          {sender} started following you
        </div>
      </div>
      <div className="notifcard-layout-link">
        <Link to="/">See profile</Link>
      </div>
    </div>
  );
};

export { RecentPostCard, MyPostCard, CommentNotifCard, LikeNotifCard, FollowtNotifCard };
