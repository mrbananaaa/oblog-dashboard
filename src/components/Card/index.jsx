import { Link } from "react-router-dom";
import { Edit, ExternalLink } from "react-feather"

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

export { RecentPostCard };
