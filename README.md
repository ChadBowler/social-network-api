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
 - `GET` - `http://localhost:3001/api/users` - Retrieves all users. 
 - `POST` - `http://localhost:3001/api/users` - Allows you to add a new user, using the following format for the request:
            ![sna-post-user-cropped](https://github.com/ChadBowler/social-network-api/assets/127648744/16b21fc2-23d5-4620-bc8b-86e1104942d1)


 - `GET` - `http://localhost:3001/api/users/:id` - Retrieves a single user, using the `_id` property from the database.
 - `PUT` - `http://localhost:3001/api/users/:id` - Updates a current user, using the following format for the request:


 - `DELETE` - `http://localhost:3001/api/users/:id` - Removes a user from the database.

 - `POST` - `http://localhost:3001/api/users/:id/friends/:friendId` - Adds a friend to the selected user. No JSON is needed for this request. The user's id and the friend's id will be pulled from the url.
 - `DELETE` - `http://localhost:3001/api/users/:id/friends/:friendId` - Removes a friend from the user's list.
 > **_NOTE:_** Adding a friend to a user's list will NOT automatically add the user to the friend's list. Likewise, removing a friend from a user's list will NOT automatically remove the user from the friend's list.

 - `GET` - `http://localhost:3001/api/thoughts` - Retrieves all thoughts
 - `POST` - `http://localhost:3001/api/thoughts` - Adds a new thought to the database, using the following format for the request:

 - `GET` - `http://localhost:3001/api/thoughts/:thoughtId` - Retrieves  a single thought.
 - `PUT` - `http://localhost:3001/api/thoughts/:thoughtId` - Updates a thought, using the following format for the request:

- `DELETE` - `http://localhost:3001/api/thoughts/:thoughtId` - Removes a thought from the database.
- `POST` - `http://localhost:3001/api/thoughts/:thoughtId/reactions` - Adds a new reaction to the thought referenced in the url, using the following format:

 - `DELETE` - `http://localhost:3001/api/thoughts/thoughtId/reactions/:reactionId` - Removes a reaction from the thought referenced in the url.


## License

* This application is licenced under the [MIT License](https://opensource.org/licenses/MIT)

## Contributing

* Contributions are welcome. Please create an independent branch and go through the customary and polite channels to initiate collaboration.

## Questions

* Checkout my Github! [ChadBowler](https://www.github.com/ChadBowler)

* If you have questions, feel free to contact me at: cbowlerdev@gmail.com

