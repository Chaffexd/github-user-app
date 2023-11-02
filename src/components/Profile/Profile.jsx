const Profile = ({ userData }) => {
  const originalDateJoined = new Date(userData.created_at);
  const options = { day: "numeric", month: "long", year: "numeric" };
  const formattedDate = originalDateJoined.toLocaleDateString("en-US", options);

  return (
    <>
      <picture className="w-1/4">
        <img
          src={userData.avatar_url}
          alt={`A photo of ${userData.login}`}
          className="rounded-full w-5/6"
        />
      </picture>
      <div className="w-full">
        <div className="">
          <div className="flex justify-between">
            <h1>{userData.login}</h1>
            <time>Joined {formattedDate}</time>
          </div>
          <h2>@{`${userData.login}`}</h2>
          <h3>{userData.bio}</h3>
        </div>
        <div className="flex w-full bg-light-off-white rounded-lg px-8 py-4 justify-between">
          <div>
            <p>Repos</p>
            <p>{userData.public_repos}</p>
          </div>
          <div>
            <p>Followers</p>
            <p>{userData.followers}</p>
          </div>
          <div>
            <p>Following</p>
            <p>{userData.following}</p>
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
