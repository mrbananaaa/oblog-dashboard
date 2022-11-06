const Avatar = ({ url }) => {
  return (
    <div className="avatar-main-container">
      <img
        className="avatar-main-img"
        src={url}
        alt="profile-pict"
      />
    </div>
  );
};

export { Avatar };
