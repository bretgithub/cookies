## Cookie counter

A simple cookie application utilizing:
Node.js
Express
MySQL
Handlebars
Materialize 

## Description

This application is our first full stack application with a front end implemented with HTML and CSS elements from Materialize framework and the backend handled with Node.js and Express. We used handlebars to template our HTML. 

The user arrives to the page and is able to perform operations on our cookie app that will satisfy RESTful principles that were required for this assignment. 

## Satisfying RESTful principles (Create, Read, Update, Destroy):

### Adding a cookie (CREATE: POST)
Clicking "Add cookie" button makes a POST request to our API via ajax. This action also adds the cookie entry into the MySQL databse. The cookie is then displayed on the "COOKIES TO EAT" tab of our card, ready to be eaten or removed. 

The user then has the option to UPDATE the cookie via "EAT ME!" button or DESTROY the cookie via "HIDE THE EVIDENCE" button.

### Updating a cookie (UPDATE: PUT)
Clicking "EAT ME!" button on a cookie makes a PUT request to our API via ajax and updates the boolean value of that cookie from "crumbled=FALSE" to "crumbled=TRUE" in the MySQL database. The cookie is then moved from the "COOKIES TO EAT" tab to the "COOKIES YOU ATE" tab. On the "COOKIES YOU ATE" tab the user loses the ability to DESTROY the cookie. 

The user can then change the status of the cookie by clicking the "BAKE AGAIN!" button that makes another PUT request to our API via ajax and updates the boolean value of that cookie from "crumbled=TRUE" to "crumbled=FALSE" in the MySQL database which then displays the cookie on the "COOKIES TO EAT" tab on the reload.

### Removing a cookie (DESTROY: DELETE)
To remove a cookie the user has to click "HIDE THE EVIDENCE!" button on cookies in the "COOKIES TO EAT" tab. Clicking this button makes a DELETE request to our API via ajax and removes that cookie from our MySQL database also removing it from the page. 

### Reading tbe database (READ: GET)
The READ request to our API via ajax is made and displays cookies in tne databse to the user either in the "COOKIES TO EAT" tab or "COOKIES YOU ATE" tab, depending on their "crumbled" value (default is set to FALSE). 

WHen loading the cookies_db for the first time, initiating the database with the [schema.sql](https://github.com/bretgithub/cookies/blob/master/db/schema.sql) and [seeds.sql](https://github.com/bretgithub/cookies/blob/master/db/seeds.sql) files, the cookies will display in "COOKIES TO EAT" tab.

## Eat some cookies!
The demo of the cookie application can be found by clicking [This link](https://pacific-sands-18168.herokuapp.com/cookies)

NOTE: The UI is choppy and requires a page reload to display the updates made by the user, this can be handled more elegantly with ReactJS however, that is not for this assignmnet. 

## Installation
To run the application locally, clone this repository with the following command:

git clone git@github.com:bretgithub/cookies.git
Next, install the application dependencies.

cd cookies
npm install
npm install express express-handlebars
npm install mysql
npm install nodemon
Finally, run the node server locally with the command:

nodemon server,js

Finally, open the local application in your browser on port 6060 at the URL: http://localhost:6060/
