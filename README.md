# Social Network API

# ![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

## Description
This social network API is a backend application using Node.js, Express, and MongoDB. It creates a database of users who can share thoughts, add friends, and react to other user's thoughts.

## Table of Contents

- [Installation](#Installation)
- [Usage](#Usage)
- [License](#License)
- [Features](#Features)
- [Contributing](#Contributing)
- [Questions](#Questions)

## Installation

* To use this API you would need to clone the repository, and use it locally.

## Usage

* Once you have the code locally, type "npm run start" to create a connection to the server. Use an API client to use the one of the following routes:
 - `GET` - `http://localhost:3001/api/users` - Allows you to view all users. 
 - `POST` - `http://localhost:3001/api/users` - Allows you to add a new user, using the following format for the request:
        ![sna-post-user](https://github.com/ChadBowler/social-network-api/assets/127648744/4d4ac037-bc83-4f75-a3a4-71b563a8d6c0)

 - `http://localhost:3001/api/users/:id` - Can `GET` a single user, `PUT`(update) a current user, or `DELETE` a user.
 - `http://localhost:3001/api/users/:id/friends/:friendId` - Will allow you to add (`POST`) a friend to the selected user, or remove (`DELETE`) a friend from the user's list.
 - `http://localhost:3001/api/thoughts` - Can `GET` all thoughts or `POST` a new thought.
 - `http://localhost:3001/api/thoughts/:thoughtId` - Will allow you to `GET` a single thought, `PUT` to update a thought, or `DELETE` a thought.
 - `http://localhost:3001/api/thoughts/thoughtId/reactions` - Will allow you to `POST` a new reaction to the referenced thought.
 - `http://localhost:3001/api/thoughts/thoughtId/reactions/reactionId` - Will allow you to send a `DELETE` request to remove a reaction from a thought.


## License

* This application is licenced under the [MIT License](https://opensource.org/licenses/MIT)

## Contributing

* Contributions are welcome. Please create an independent branch and go through the customary and polite channels to initiate collaboration.

## Questions

* Checkout my Github! [ChadBowler](https://www.github.com/ChadBowler)

* If you have questions, feel free to contact me at: cbowlerdev@gmail.com

