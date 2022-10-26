# Express.js API example

**TLDR**: Clone the project, then go into the express folder and run ```npm install``` to install necessary packages. Then run: ```nodemon index.js```

## Instructions 

Create a new project: ```npm init```   
You are prompted with several things. Select ```index.js``` as the entry point.   
Then install express.js ```npm install express```  
and packages for form processing: ```npm install body-parser multer```  
Now copy the index.js file and the templates folder and run the server: ```node index.js```   

*A better approach*:   
Install nodemon so that changes in code load without restarting the server: ```npm install nodemon```   
After that you can start the server: ```nodemon index.js```  

## URLs

**/** : displays plain text         
**/about** : displays the templates/about.html page  
**/api** : return JSON data  
**/add** : adds data from a form or json request  
**/data** : page to consume API