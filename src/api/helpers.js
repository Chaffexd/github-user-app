import { Octokit } from "@octokit/core"

const octokit = new Octokit({
    auth: import.meta.GITHUB_ACCESS_TOKEN
});

export async function getGitHubUser(username) {
    const response = await octokit.request(`GET /users/${username}`, {
        username: 'USERNAME',
        headers: {
            'X-GitHub-Api-Version': '2022-11-28'
        }
    });

    return response;
};