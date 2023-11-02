const Profile = ({ userData }) => {
  return (
    <>
      <picture>
        <img
          src={userData.avatar_url}
          alt={`A photo of ${userData.login}`}
          className="rounded-full w-1/6"
        />
      </picture>
      <div>
        <div>
          <h1>Username</h1>
          <time>Date</time>
          <h2>@username</h2>
          <h3>Bio</h3>
        </div>
        <div>
          <div>
            <p>Repos</p>
            <p>8</p>
          </div>
          <div>
            <p>Followers</p>
            <p>8</p>
          </div>
          <div>
            <p>Following</p>
            <p>8</p>
          </div>
        </div>
        <div>
            <span>Location</span>
            <span>Twitter</span>
            <span>GitHub Link</span>
            <span>Company?</span>
        </div>
      </div>
    </>
  );
};

export default Profile;
