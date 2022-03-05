# poll-maker
For making simple yes or no, this vs. that question.
Using this project to work on better file structure/writing cleaner code.  

## How to run
There are node modules in both the frontend and backend folders so `npm i` must be run from the command line in both folders.  
The database used is MongoDB Atlas so a .env file must be included in the backend directory with the following:

`POLLS_DB_URI=mongodb+srv://<your atlas username>:<password>@cluster0.2esvc.mongodb.net/pollmaker?retryWrites=true&w=majority`  
`PORT=5000`  

From the command line in backend run:

`nodemon server`

From the command line in frontend run:

`npm start `
