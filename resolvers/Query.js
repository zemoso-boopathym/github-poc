const { Octokit } = require('@octokit/core');
const dotenv = require('dotenv');
dotenv.config();

const octokit = new Octokit({
  auth: process.env.GH_TOKEN,
});
const username = process.env.GH_USERNAME;

exports.Query = {
  User: async () => {
    try {
      const { data } = await octokit.request(`/user`);
      return data;
    } catch (err) {
      console.log(err);
    }
  },
  Following: async () => {
    try {
      const { data } = await octokit.request(`/users/${username}/following`);
      return data;
    } catch (err) {
      console.log(err);
    }
  },
  Followers: async () => {
    try {
      const { data } = await octokit.request(
        'GET /users/{username}/followers',
        {
          username,
        }
      );
      return data;
    } catch (err) {
      console.log(err);
    }
  },
  Email: async () => {
    try {
      const { data } = await octokit.request(`/user/emails`, {});

      return data;
    } catch (err) {
      console.log(err);
    }
  },
  UserInfo: async () => {
    try {
      const { data } = await octokit.request('GET /users/{username}', {
        username,
      });
      return data;
    } catch (err) {
      console.log(err);
    }
  },
};
