# Setlists

This project allows a user to log in or register and create setlists and save them to their account. In addition, it includes a pulsing metronome that automatically adjusts to the BPM of the selected song.

## Technologies Used

Setlists is a fullstack web app built using the React framework, React Redux, React Router, Tailwind CSS, Express, and MYSQL.

## Prerequisites

Before you get started, make sure you have the following software installed on your computer:

- Node.js
- MySQL
- Nodemon

## Installation

1. Clone the repo
2. Create a new MySQL database called "Setlists"
3. Queries to create the users table in the database are in the db folder as setlists.sql
4. Open up editor of your choice and run npm install
5. Make sure server instance is running.
6. Open Server folder and `run npm start`
7. Open Client folder and `run npm start`

This should open a browser and allow you to interact with the site.
The datalist info in the song from is being added from a local file, but there is also a useEffect() in SetListForm.js that can be used to pull the data from a mock server instead.

### Future plans

- Adding JWT Authentication
- Upload database schema to Github to allow full download of project
- Add song list data to setlists database

## Screenshots

Log in:
![Screen Shot 2022-02-17 at 12 20 32 PM](https://user-images.githubusercontent.com/81320112/154549029-ce233cf9-39ad-49dd-a2a9-e43a3dd0a437.png)
Application after log in:
![Screen Shot 2022-02-17 at 12 37 40 PM](https://user-images.githubusercontent.com/81320112/154549048-b8edfaec-09cb-40f9-9123-e3d8f9199e31.png)
