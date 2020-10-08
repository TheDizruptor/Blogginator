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

# BUILD HELP #

The project is structured so that the frontend is nested 
in the project folder but they are separate aside from the 
plugin doing it's magic. The plugin installs node and yarn 
into the appropriate directory and installs dependency. The 
command wraps it into a maven wrapper (foggy on this), the 
backend then frontend spin up, and then the website can be 
accessed at http://localhost:8080. 

**Steps For Production**

1. Navigate to the project directory in the command line then run: 

    `./mvnw clean install`
    
2. Crack open a cold one and wait a minute for everything to install, then run:

    `./mvnw spring-boot:run`
    
3. Go to http://localhost:8080

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

**Database Setup**

In the production environment, the database will be set up through docker.
However, for local development it's in our best interest to run MySQL in a 
docker container for rapid development and testing. 

1. First, we need to pull the appropriate docker image for MySQL. To do this, 
type the following command into the command line:

    `docker pull mysql/mysql-server:latest`
    
2. Verify the image is stored locally by listing the downloaded docker images: 

    `docker images`
    
You should see an image called mysql/mysql-server or something like that

3. Run the docker container, mapping the container port (3306) to localhost. 

    `docker run -d -p 3306:3306 --name=cs4230 --env="MYSQL_ROOT_PASSWORD=password" mysql`

4. Open the mysql cli using the following command:

    `docker exec -it cs4230 mysql -uroot -p`

The password is what we set above for the MYSQL_ROOT_PASSWORD so in this case... 
The all powerful, very secure 'password' password.

5. Type: `show databases;` to see the databases currently in the system.

6. type `create database cs4230_group3;` to create the database for the project. 

7. Now that the docker container is set up, you should be able to connect to it 
through whatever IDE you're using (I use intelliJ so I'm probably useless with 
anything else)

