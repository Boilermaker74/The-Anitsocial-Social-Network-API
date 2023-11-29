# Antisocial Social API 
  by Bradley Moleterno    ![Github license](https://img.shields.io/badge/license-MIT-blue.svg)
## Description
The Antisocial Social Network application is an API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list.  It employed a MongoDB database for storage, and Mongoose ODM. Express.js for routing and the JavaScript Date object was used to format timestamps. Insomnia must be used to utilize and manipulate the database. 
## Deployed Application URL
There is no Url. The api must be cloned from the github repository located at https://github.com/Boilermaker74/The-Anitsocial-Social-Network-API. The api can be utilized via the insomnia design tool. 
## Table of Contents
* [Installation](#installation)
* [How to Use This Application](#how-to-use-this-application)
* [Licenses](#Licenses)
* [Contributors](#contributors)
* [Testing](#testing)
* [Features](#features)
* [Languages and Technologies Used](#languages-and-technologies-used)
* [Dependencies](#dependencies)
* [Questions](#questions)

## Installation
Clone the github repository

Open terminal and navigate to social_network_api folder

Type npm init -y into terminal to create a new .json file

Type npm i into terminal

Type npm i express into terminal

Type npm i mongoose into terminal

Type npm i moment into terminal

Type npm start into the terminal

Once you see the Now Listening indication you may open up Insomnia.
## How to Use This Application:
A walkthrught video showing the application in action is available at https://app.screencastify.com/v2/watch/LpgvLJdm5KdLqkTkJJ79

Once the server is spun up, Insomnia is used to access the available route to access the app. The routes available are:

GET /api/users

GET /api/users/:userID 

POST /api/users 

PUT /api/users/:userID 

DELETE /api/users/:userID 

POST /api/users/:userID/friends/:friendID 

DELETE /api/users/:userID/friends/:friendID 

GET /api/thoughts 

GET /api/thoughts/:thoughtID 

POST /api/thoughts 

PUT /api/thoughts/:thoughtID 

DELETE /api/thoughts/:thoughtID 

POST /api/thoughts/:thoughtID/reactions 

DELETE /api/thoughts/:thoughtID/reactions/reactionID 

## Licenses
![Github license](https://img.shields.io/badge/license-MIT-blue.svg)
## Contributors
N/A
## Testing
N/A
## Features
It will alow the user to make friends, state their thougths and react to the thoughts of others.
## Languages and Technologies Used
![Github license](https://img.shields.io/badge/Language-JavaScript-blue.svg)
![Github license](https://img.shields.io/badge/Technology-NodeJs,Mongoose,ExpressJs,MongoDB-blue.svg)
## Dependencies
express version 4.18.2

mongodb version 4.17.1

mongoose version 6.12.3

## Questions
Please send your questions by email:  Bradm1492@gmail.com or visit [github/Boilermaker74](https://github.com/Boilermaker74).
