<h1 align="center">Welcome to sales-inventory-api 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="#" target="_blank">
    <img alt="License: ISC" src="https://img.shields.io/badge/License-ISC-yellow.svg" />
  </a>
</p>

> A backend application for a shoppingmart to manage inventory. 
## Prerequisites
```sh
MongoDB, Node Enviroment
```

## Install

```sh
npm install
```

## Usage
Start Server
```sh
npm run dev
```
Start MongoDB
```sh
mongod
```
## Testing the endpoints in postman
 
    
| EndPoint         |  Url            | Functionality  |
| ------------- |---------------| ---------|
| GET |/users |Retrive users: Requires a valid token passed through x-access-token to access|
| POST |/signup |User signup, add users to the database|
|POST|/login  |Search user by email, validates password and returns a token|
|GET|/users/:userId  |Get a specific user by ID|
|PATCH|/users/:userId  |Update user details|
|DELETE|/users/:userId  |Delete a user|
|GET|/products |Retrieve products from a database|
|POST|/products|Add a product to the database|
|DELETE |/products/:productId| Allow authenticated user to fetch all incidents created|
|PATCH|/products/:productId|Allow only an admin to change the status of an incident|
|PUT|/products/:productId|Replace a product|


## Author

* Github: [@m-tee](https://github.com/m-tee)

## Show your support

Give a ⭐️ if this project helped you!

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_

