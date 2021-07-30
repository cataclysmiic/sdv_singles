# Stardew Valley Singles

Mock dating website for villagers in the game Stardew Valley. "Sign up" to create your own profile, view and sort villagers and send gifts a villager loves (or hates :sweat_smile:) and view recently sent gifts. Final project for [Code Louisville](https://www.codelouisville.org/) JavaScript May 2021 course.

## Feature Requirements
- [x] Has a responsive design (buit with Bootstrap)
- [x] Has 5+ commits on Github
- [x] Includes README :eyes:
- [x] Reads and parses an external file (JSON) and displays that data
  * Villager cards are generated from JSON file
- [x] Creates an array, populates it with multiple values and retrieves those values for use in the project
  * Likes, Dislikes, Loves and Hates selects are arrays generated from JSON file and used in the join form
- [x] Calculate and display data based on an external factor (ex: get the current date, and display how many days remaining until some event)
  * Current season (converted to Stardew Valley time) and countdown to the Dance of the Jellies
### Upcoming features
- [ ] Add and rank villagers with a draggable list
- [ ] Join form info saved and displayed as "logged in"
- [ ] Display if it's a villager's birthday


## About the date
Stardew Valley time consists of 4 seasons (Spring, Summer, Fall, Winter) of 28 days each. The full conversion is a work in progress, but the season displayed is converted to SDV time in `date.js`. The countdown displays the days remaining until the date of the next event (the Dance of the Jellies) converted to our time.