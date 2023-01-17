# Travel Tracker

This is my final solo project for Module 2 of Turing's Front End Developer course. 

[My Github](https://github.com/crgweller)

[My LinkedIn](https://www.linkedin.com/in/craig-weller/)

The project specs can be viewed[ here. ](https://frontend.turing.edu/projects/travel-tracker.html)

## Goals

1. TDD Test Driven Development to build and test structure of classes and methods.
1. OOP Object Oriented Programming to design the application.
1. Work with API's to send and recieve data.

## How to access and run this application

1. Clone down [this](https://github.com/crgweller/Travel-Tracker) repo.
1. Then cd into the root directory and run npm start in the terminal to start up the local server.
1. Then clone down [this repo](https://github.com/turingschool-examples/travel-tracker-api)) outside of the TravelTracker directory.
1. cd into travel-tracker-api.
1. Run npm start in the terminal to start up the local api server.
1. Finally, open the app at http://localhost:8080/

## Logging In

Log in using the credentials below:

username: traveler50
password: travel

This will take you to your dashboard. Here, you can:
- See all of your past, present, and upcoming trips,
- Check what a new trip will cost,
- Book new trips, and
- View your total travel expenses from last year (2022)

![login](https://user-images.githubusercontent.com/113863021/212793810-0b8a047c-0ed4-4001-bc33-2bc65d39772c.gif)

## Booking new trips

To book new trips, go to the form on the right-hand side of the screen, and describe the trip you're interested by entering the following information:
- Desired departure date
- How long you'd like the trip to be
- How many people will be on the trip
- Your desired location

## Checking trip prices

If you'd like to see how much a trip will cost before you book it, click the "Estimate Trip Cost" button at the bottom of the form. This will display the estimated cost of the trip you've described. Like what you see? Click "Book New Trip" and your travel request will be submitted and you'll see your new trip listed with a status of pending. 

![new trip](https://user-images.githubusercontent.com/113863021/212795583-d6b72644-37cd-405e-9b72-7fc1737c43a5.gif)

## Technologies used

- JavaScript
- CSS
- HTML
- Webpack
- Mocha & Chai for testing
- VS Code

## Future site updates

- Add the ability to sort trips by status
- Add a travel agent's page so that an agent can browse trip data for all users and approve pending trips

