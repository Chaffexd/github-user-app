import IconLocation from "../../assets/IconLocation";
import IconCompany from "../../assets/IconCompany";
import IconTwitter from "../../assets/IconTwitter";
import IconWebsite from "../../assets/IconWebsite";

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
        <div>
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">{userData.login}</h1>
            <time className="text-sm text-light-gray">Joined {formattedDate}</time>
          </div>
          <h2 className="text-light-blue">@{`${userData.login}`}</h2>
          <h3 className="my-4 text-m text-light-gray">{userData.bio}</h3>
        </div>
        <div className="flex w-full bg-light-off-white rounded-lg px-8 py-4 justify-between">
          <div>
            <p className="text-light-gray">Repos</p>
            <p className="font-bold text-xl">{userData.public_repos}</p>
          </div>
          <div>
            <p className="text-light-gray">Followers</p>
            <p className="font-bold text-xl">{userData.followers}</p>
          </div>
          <div>
            <p className="text-light-gray">Following</p>
            <p className="font-bold text-xl">{userData.following}</p>
          </div>
        </div>
        <div className="flex flex-col h-12 w-full mt-8 text-light-gray">
          <div className="flex justify-between mb-4">
            <span className="w-3/5 flex items-center">
              <IconLocation />
              {userData.location && <span>{userData.location}</span>}
            </span>
            <span className="w-2/5 flex items-center">
              <IconTwitter />
              {userData.twitter_username ? <span>{userData.location}</span> : <span>Not available</span>}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="w-3/5 flex items-center">
              <IconWebsite />
              {userData.blog && <span><a className="no-underline hover:text-light-blue" href={userData.blog} target="_blank">{userData.blog}</a></span>}
            </span>
            <span className="w-2/5 flex items-center">
              <IconCompany />
              {userData.company ? <span>{userData.company}</span> : <span>Not available</span>}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
