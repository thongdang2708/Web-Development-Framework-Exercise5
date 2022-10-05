# Web-Development-Framework-Exercise-5
Web Development Framework Exercise 5 (Calling Node from React)

-Additional Information:

Install npm i --save concurrently

Run by: npm run dev

Set in a package.json as in a script as below:

{
  "name": "exercisefourframework",
  "version": "1.0.0",
  "description": "Exercise4",
  "main": "index.js",
  "scripts": {
    "start": "node backend/index.js",
    "server": "nodemon backend/index.js",
    "client": "npm start --prefix frontend",
    "dev": "concurrently \"npm run server\" \"npm run client\""
  },
  "author": "Thong Dang",
  "license": "MIT",
  "dependencies": {
    "colors": "^1.4.0",
    "concurrently": "^7.4.0",
    "cors": "^2.8.5",
    "express": "^4.18.1",
    "nodemon": "^2.0.20"
  }
}

