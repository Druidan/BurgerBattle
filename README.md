# Burger Battle
Have you ever had a hard time choosing which burger you wanted to eat? Yeah, that's normal. Ever wanted to smash two burgers against eachother and see which one comes out on top? Well, that's not quite normal, per se, but we're here to meet that demand!

Welcome to Burger Battle! Choose your favorite burger by pitting one burger against another in a struggle for the title of Buger Battle Champion!

## Overview and Goals


## Deployment
_Where we will be deployed - probably Heroku, but maybe Zeit if that works for our "new tech"_

## MVP
As our app is run, it must be able to do the following:
* A user is presented with a welcome screen / Introduction to the concept of the Burger Fight, and a button to start the tournament.
* When the start button is clicked, the user is presented with two burgers, and the user selects the one they prefer (by clicking the burger itself or some other button, etc.)
* The burger they did not select is replaced by the next burger, and the user is prompted again to choose their favorite between the two. This process repeats until the user has chosen their favorite burger.
* The user’s favorite burger is presented to them as the champion burger and the “All-Time Champion” burger. It also shows them where their favorite burger ranks on the overall ranking.

## Dependancies
We will be using the following NPM for our app:
* [MySQL](https://www.npmjs.com/package/mysql) - We will be using MySQL for our database system.
* [Express](https://www.npmjs.com/package/express) - Express will handle our routing and server.
* [Sequelize](https://www.npmjs.com/package/sequelize) & [Sequelize-Cli](https://www.npmjs.com/package/sequelize-cli) - We will be using sequelize for models and database configuration.
* [DotEnv](https://www.npmjs.com/package/dotenv) - DotEnv will keep our mysql password secret and safe.

## Active Bugs and Issues

##Future Features
Once our MVP is done...
* The ability on the end screen to click a button and view the full rankings of all the burgers.
* The ability for a user to Log in and keep track of their burger rankings.
* Beer Pairing?
