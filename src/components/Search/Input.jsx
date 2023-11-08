import IconSearch from "../../assets/IconSearch";
import { useEffect, useState } from "react";
import { getGitHubUser } from "../../api/helpers";
import Profile from "../Profile/Profile";

const Input = () => {
  const [username, setUsername] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [userData, setUserData] = useState(null);
  const [errorState, setErrorState] = useState(false);

  const handleChange = (event) => {
    setUsername(event.target.value);
  };

  useEffect(() => {
    console.log(userData);
  }, [userData]);

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
        company
      } = response.data;

      setErrorState(false);

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
        blog,
        company
      });
    } catch (error) {
      console.error(error);
      setIsLoading(false);
      console.log(`We have some error, loading state is: ${isLoading}`);
      setErrorState(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <form
        className="w-4/5 h-16 bg-light-white shadow-lg rounded-lg"
        onSubmit={handleFormSubmission}
      >
        <div className="flex justify-between items-center w-full p-2 dark:bg-dark-blue rounded-lg">
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
              className="pl-2 w-3/4 dark:bg-dark-blue dark:placeholder-white dark:text-white"
              value={username}
              onChange={handleChange}
              required
            />
            {errorState && <span className="text-red-500 font-bold text-sm">No results</span>}
          </div>
          <div>
            <button className="bg-light-blue text-white rounded-lg h-12 w-24 hover:bg-sky-600">
              Search
            </button>
          </div>
        </div>
      </form>
      {userData && (
        <div className="w-4/5 p-12 bg-light-white rounded-lg mt-4 shadow-lg flex dark:bg-dark-blue">
          <Profile userData={userData} />
        </div>
      )}
    </>
  );
};

export default Input;
