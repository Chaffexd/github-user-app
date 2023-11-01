import IconSearch from "../../assets/IconSearch";
import { useEffect, useState } from "react";
import { getGitHubUser } from "../../api/helpers";

const Input = () => {
  const [username, setUsername] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [userData, setUserData] = useState(null);

  const handleChange = (event) => {
    setUsername(event.target.value);
  };

  useEffect(() => {
    console.log(userData)
  }, [userData])

  const handleFormSubmission = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    try {
      const response = await getGitHubUser(username);
      const {
        login,
        avatar_url,
        bio,
        created_at,
        followers,
        following,
        public_repos,
        location,
        twitter_username,
        blog,
      } = response.data;

      setUserData({
        login,
        avatar_url,
        bio,
        created_at,
        followers,
        following,
        public_repos,
        location,
        twitter_username,
        blog
      });

    } catch (error) {
      console.error(error);
      setIsLoading(false);
      console.log(isLoading);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form className="w-full" onSubmit={handleFormSubmission}>
      <div className="flex justify-between items-center w-full p-2">
        <div className="flex items-center w-4/5 ml-8">
          <i className="mr-4">
            <IconSearch />
          </i>
          <label htmlFor="input"></label>
          <input
            type="text"
            id="input"
            name="input"
            placeholder="Search for a GitHub user"
            className="pl-2 w-4/5"
            value={username}
            onChange={handleChange}
          />
        </div>
        <div>
          <button className="bg-light-blue text-white rounded-lg h-12 w-24">
            Search
          </button>
        </div>
      </div>
    </form>
  );
};

export default Input;
