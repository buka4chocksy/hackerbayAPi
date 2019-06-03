# hackerbayAPi

A Node.js micro service Api  which houses the implementation of login authentication , image thumbnail generation and jason patching .

## How it works

* Firstly you have to navigate into the project folder and run the command below to install all dependencies

```
npm install

```
* After that you Create a .env file then add a jwt secret of your choice eg secret = hackerbay


## Login

In other to be logged in successfully , you need to provide a username and password via a POST request to the  following 
url http://localhost:3000/user/login , on successful login , it would return a jsonwebtoken .


## Accessing Protected routes

To be able to access protected routes while making a POST , GET or PATCH request , you need to input the token gotten on login via header during any request to a protected route.


## Making JSON patch request

In other to make a successful PATCH request you need to provide a token via header to the url http://localhost:3000/user/jsonpatch

```
'token', 'bearer <token>'

```
The json patching request accepts two parameters which has key : mydoc , value:'must be a JSON object'  and key:patch ,value:'must be a JSON object'


## Thumbnail

To created  a thumbnail , you need to make a POST request with a token provided via header to the url http://localhost:3000/user/thumbnail. Also you need to provide an image url via the full image part with key : source and value :"image path " e.g key:"source" , value:"C:\Users\User\Desktop\hackeybayApi\thumbnail/index.jpg". this will created a thumbnail with width 50 and height 50.

## Unit Testing

* In other to run unit test , run the command below

```
npm test

```

* To check for code coverage run the command

```
npm run coverage

```


##  Development dependencies  

* jsonwebtoken: Used for generate and verify token
* Jsonpatch: Used for making JSON patch request
* node-thumbnail: Used for image thumbnail generation
* Chai: Used for unit testing
* nyc: Used for test coverage


## Author
**Ochoko Peter** 