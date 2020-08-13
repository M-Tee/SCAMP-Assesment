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
MongoDB, Node.js, Express.js
```

## Install

```sh
npm install
```

## Usage
Start Server
```sh
npm run start
```
Start MongoDB
```sh
mongod
```
## Testing the endpoints in postman
 
    
| EndPoint         |  Url            | Functionality  |
| ------------- |---------------| ---------|
| GET |/users/ |Retrive users|
| POST |/users/ |User signup, add users to the database|
|POST|/users/login  |User log-in with valid username and password|
|GET|/shoppingmart/products |Retrieve products from a database|
|POST|/shoppingmart/products|Add a product to the database|
|DELETE |/shoppingmart/products/:productId| Allow authenticated user to fetch all incidents created|
|PATCH|/shoppingmart/products/:productId|Allow only an admin to change the status of an incident|
|PUT|/shoppingmart/products/:productId|Replace a product|


## Author

* Github: [@m-tee](https://github.com/m-tee)

## Show your support

Give a ⭐️ if this project helped you!

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_

