# Flask API example

**TLDR**: Clone the project, then go into the flak folder and create a virtual environment, activate it, install dependencies: ```pip install -r requirements.txt```, and run the server: ```flask --app server run```       

## Instructions 

Create a virtual environment:  
```python -m venv venv```  
and activate it:  
Mac/Linux: ```. venv/bin/activate```  
Windows: ```venv\Scripts\activate```    

Install Flask: ```pip install Flask```   

Create the requirements file: ```pip freeze > requirements.txt```  
This will create a file with project's dependencies.  

Now copy server.py and the templates folder and run the server: ```flask --app server run```    

In order to auto rerun the server on any file change:  
```export FLASK_DEBUG=1```  
```export FLASK_APP=server.py```  
```flask run``` 


## URLs

**/** : displays plain text         
**/about** : displays the templates/about.html page  
**/api** : return JSON data  
**/add** : adds data form a form request  
**/api/add** : adds data from a json request  
**/data** : page to consume API