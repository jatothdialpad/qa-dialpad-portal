# qa-dialpad-portal
QA-dialpad-portal

#setup using docker
1. Install docker on your system
2. Run docker-compose using 'docker-compose up -d' ( This will build the images and runs containers in detached mode)
3. You can verify client and server running by checking their status on localhost:port

# Few docker commands which can be helpful
1. docker-compose down (To stop the containers which started by docker-compose up)
2. docker image ls (list down all images)
3. docker image rm <image_tag_name> (To remove the image)
4. docker ps (to list running docker containers)

# Note- if you are adding a new dependency , please build the images, do the following steps to rebuild the images
1. docker image ls (list all the images)
2. delete the docker images : docker image rm <image_tag_name>
3. Docker-compose up -d