 require('dotenv').config();

const express = require('express')
const app = express()

const ismailGitHub = {
  "login": "ismailyykhalid",
  "id": 109650150,
  "node_id": "U_kgDOBokg5g",
  "avatar_url": "https://avatars.githubusercontent.com/u/109650150?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/ismailyykhalid",
  "html_url": "https://github.com/ismailyykhalid",
  "followers_url": "https://api.github.com/users/ismailyykhalid/followers",
  "following_url": "https://api.github.com/users/ismailyykhalid/following{/other_user}",
  "gists_url": "https://api.github.com/users/ismailyykhalid/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/ismailyykhalid/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/ismailyykhalid/subscriptions",
  "organizations_url": "https://api.github.com/users/ismailyykhalid/orgs",
  "repos_url": "https://api.github.com/users/ismailyykhalid/repos",
  "events_url": "https://api.github.com/users/ismailyykhalid/events{/privacy}",
  "received_events_url": "https://api.github.com/users/ismailyykhalid/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Muhammad Ismail",
  "company": null,
  "blog": "",
  "location": "Riyadh, Saudi Arabia",
  "email": null,
  "hireable": null,
  "bio": "AUTOMATION makes life easy.\r\n\r\nJavaScript, ReactJS, React Native, NextJS, NodeJS, NodeJS, TailwindCSS",
  "twitter_username": null,
  "public_repos": 3,
  "public_gists": 0,
  "followers": 2,
  "following": 3,
  "created_at": "2022-07-20T06:32:15Z",
  "updated_at": "2023-11-23T08:34:27Z"
}


app.get('/', (req, res) => {
  res.send('Home')

})

app.get('/profile', (req, res) => {
    res.send('Profile')
  
  })

  app.get("/github", (req, res)=>{
    res.json(ismailGitHub)
  })

app.listen(process.env.PORT || 3000, () => {
    console.log(`Example app listening on port ${process.env.PORT || 3000}`);
  });
  