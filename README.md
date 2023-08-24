# Social Network API

# ![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

## Description
This social network API is a backend application using Node.js, Express, and MongoDB. It creates a database of users who can share thoughts, add friends, and react to other user's thoughts.

## Table of Contents

- [Installation](#Installation)
- [Usage](#using-the-api)
- [License](#License)
- [Features](#Features)
- [Contributing](#Contributing)
- [Questions](#Questions)

## Installation

* To use this API you would need to clone the repository, and use it locally.

## Using the API

* Once you have the code locally, type "npm run start" to create a connection to the server. Use an API client to use the one of the following routes:
### User Routes
 - `GET` - `http://localhost:3001/api/users` - Retrieves all users. 
 - `POST` - `http://localhost:3001/api/users` - Allows you to add a new user, using the following format for the request:
  
   ![sna-post-user-cropped](https://github.com/ChadBowler/social-network-api/assets/127648744/16b21fc2-23d5-4620-bc8b-86e1104942d1)

> **_NOTE:_** Usernames will be converted to lowercase and all spaces will be removed.

 - `GET` - `http://localhost:3001/api/users/:id` - Retrieves a single user, using the `_id` property from the database.
 - `PUT` - `http://localhost:3001/api/users/:id` - Updates a current user, using the following format for the request:
  
   ![sna-update-user-cropped](https://github.com/ChadBowler/social-network-api/assets/127648744/0d7ca1ce-d675-45c2-b0bc-3af0bd14dd28)


 - `DELETE` - `http://localhost:3001/api/users/:id` - Removes a user from the database.
 > **_NOTE:_** Removing a user will also remove any thoughts by that user.

### Friends
 - `POST` - `http://localhost:3001/api/users/:id/friends/:friendId` - Adds a friend to the selected user. No JSON is needed for this request. The user's id and the friend's id will be pulled from the url.
 - `DELETE` - `http://localhost:3001/api/users/:id/friends/:friendId` - Removes a friend from the user's list.
 > **_NOTE:_** Adding a friend to a user's list will NOT automatically add the user to the friend's list. Likewise, removing a friend from a user's list will NOT automatically remove the user from the friend's list.

### Thought Routes
 - `GET` - `http://localhost:3001/api/thoughts` - Retrieves all thoughts
 - `POST` - `http://localhost:3001/api/thoughts` - Adds a new thought to the database, using the following format for the request:
  
   ![sna-post-thought-cropped](https://github.com/ChadBowler/social-network-api/assets/127648744/7bc5a77f-f1f2-48f2-bfef-ac29004a3874)

> **_NOTE:_** All thoughts and reactions are restricted to a 280 character maximum.

 - `GET` - `http://localhost:3001/api/thoughts/:thoughtId` - Retrieves  a single thought.
 - `PUT` - `http://localhost:3001/api/thoughts/:thoughtId` - Updates a thought, using the following format for the request:
   ![sna-update-thought-cropped](https://github.com/ChadBowler/social-network-api/assets/127648744/dba0c630-5ed6-4e78-abdc-734e49be272b)

- `DELETE` - `http://localhost:3001/api/thoughts/:thoughtId` - Removes a thought from the database.

### Reactions
- `POST` - `http://localhost:3001/api/thoughts/:thoughtId/reactions` - Adds a new reaction to the thought referenced in the url, using the following format:
 
  ![sna-post-reaction-cropped](https://github.com/ChadBowler/social-network-api/assets/127648744/e05eb114-853e-4e9e-a085-3c67c4490532)

 - `DELETE` - `http://localhost:3001/api/thoughts/thoughtId/reactions/:reactionId` - Removes a reaction from the thought referenced in the url.


## Video Walkthrough

Here is a [link](https://drive.google.com/file/d/1kZp377jX7B5O8SrilMJJphB20CZv7crz/view?usp=sharing) to the walkthrough video of the application.

## License

* This application is licenced under the [MIT License](https://opensource.org/licenses/MIT)

## Contributing

* Contributions are welcome. Please create an independent branch and go through the customary and polite channels to initiate collaboration.

## Questions

* Checkout my personal [portfolio](http://www.chadbowler.com) to see my other projects!

* Checkout my [Github](https://www.github.com/ChadBowler)! 

* If you have questions, feel free to contact me at: cbowlerdev@gmail.com

