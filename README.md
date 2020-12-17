# TaskTimeAnalyzer

[![Build Status](https://travis-ci.com/cjoshmartin/TaskTimeAnalyzer.svg?token=ZncnpxqczpbF3zZi26Yt&branch=main)](https://travis-ci.com/cjoshmartin/TaskTimeAnalyzer)

[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)


## Running this project

```
yarn 
yarn run test
```

## To run the web server

```
yarn run start:server
```

## To test web server

you can either run:

```
yarn run test
```
which will run all the test include the web server tests (in `src/test/server`)

-or- 


you can start the start the server (`yarn run start:server`) and POST data to the endpoint `/analyze/tasks` using Postman. 

format of data: 

  1) find the number of users (N), in the first line of the input
  2) parse the N number of lines, which has an ID followed by country code
  3) after gathering the users, a newline will contain the number of task executed(T)
  4) lines after T go as follows
    - Task ID
    - User ID
    - Time spent (in seconds) executing that task

```
       2
        1 PT
        2 US
        3
        1 1 10
        2 1 5
        3 2 10
```

<b>This endpoint only supports plain text</b>. A 400 response will be return if json data is attempted to be posted to this endpoint.





## P.S.

Project I worked on related to this job:

* Interview for a graphQL position a while ago and it was a take home project
    - [code](https://github.com/cjoshmartin/Graphql-Typescript-Work-index-server)

* While in college, I when to a open source hackathon. Where I got to work with some of the Vercel (then they were called Zeit) team and build a terminal recorder plugin for their hyper.js terminal.
    - [code](https://github.com/cwlowder/hyper-orama)
    - [twitter post from Vercel](https://twitter.com/vercel/status/1099806113732673536?s=20)