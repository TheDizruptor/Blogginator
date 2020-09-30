# BUILD HELP #

The project is structured so that the frontend is nested 
in the project folder but they are separate aside from the 
plugin doing it's magic. The plugin installs node and yarn 
into the appropriate directory and installs dependency. The 
command wraps it into a maven wrapper (foggy on this), the 
backend then frontend spin up, and then the website can be 
accessed at http://localhost:8080. 

**Steps For Production**

1. Build using the docker-compose file (this may take a while)

    `docker-compose build`
    
2. Crack open a cold one and wait a minute for everything to install, then run:

    `docker-compose up`
    
3. Go to http://localhost:3000

**Steps For Development**

1. For development you'll need npm installed locally on your computer. 
Navigate to blogginator/frontend and run: 
    
    `npm install`

2. After dependencies are installed, open up the backend in 
your IDE of choice and run it. 

3. In blogginator/frontend, run the following command: 

    `npm start`
    
4. It should open up your browser automatically, but if it doesn't, 
go to http://localhost:3000
