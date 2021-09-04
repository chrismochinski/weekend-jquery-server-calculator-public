# Project Name

[Project Instructions](./INSTRUCTIONS.md), this line may be removed once you have updated the README.md

## Description

Your project description goes here. What problem did you solve? How did you solve it?

Additional README details can be found [here](https://github.com/PrimeAcademy/readme-template/blob/master/README.md).

## CHECKLIST


0- [X] Server complete with static files
1 - [x] HTML form to add items - inputs and buttons - SUPER basic CSS
2 - [ ] GET client-side on load, get anything that exists (nothing at first) 
3 - [ ] POST route, client-side, AJAX to send input info to server (on click)
4 - [ ] POST route, server-side, accept (req, res) the POST (req.body)
5 - [ ] GET route, server-side, short, to wrap stuff up and send the requested info (array of equations)
6 - [ ] GET route, client-side, to call for the equation (and array) to eventually display
7 - [ ] Postman tests (get and post)
8 - [ ] Button up equation logic
9 - [ ] Display items on DOM (routed from get items function)
10 - [ ] Put equation array into module/node and adjust paths.
11 - [ ] Sexy CSS

---


_AJAX REVIEW CHECKLIST_
1 - [x] Server complete with static files
2 - [ ] HTML form to add items
3 - [ ] jQuery AJAX to send data to the server ("the POST route")
4 - [ ] Server route to accept the POST ("the GET route")
5 - [ ]TEST WITH POSTMAN (get/post)
6 - [] Server route to GET the items
7 - [ ] jQuery AJAX to get the data from the server
8 - [ ] Append that info to the DOM
9 - [ ] Display the items on page load
10 - [ ] CSS styling

_Pick a number checklist_
- [x] Add inputs for each player - Name and guess inputs
- [x] Add one submit button for all
- [x] create an array to hold player guesses
- [x] Random number generator function within server
- [x] Click event on client for submit button
- [x] AJAX post on client.js with info from inputs
- [x] app.post on server.js looking for POST partner
- [x] app.get on server.js side sends information to client.js
- [x] AJAX GET on client side to append info to the DOM
- [x] Post in server for the random number 
- [x] Get on the client side to get the random number 
- [x] Post on the client side for winner/higher/lower historical data
- [x] Get on server side for historical data 
- [x] Display number of guesses for each player to the DOM
- [x] If nobody wins, tell each player if their number was too high or low
- [x] If player wins, cool and special alert!(or something better!)
- [x] If there is a winner, display a Restart button that Posts a new random number to the server