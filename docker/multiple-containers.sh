echo "Running docker containers..."
docker container run --publish 80:80 --name nginx-server --detach nginx
docker container run --publish 8080:80 --name apache-server --detach httpd
docker container run --publish 3306:3306 --name mysql-server --env MYSQL_RANDOM_ROOT_PASSWORD=yes --detach mysql

docker container ls

echo "Checking logs time..."
docker container logs mysql-server

read -p "Enter to cleaning up..."

docker container stop nginx-server apache-server mysql-server

docker container rm nginx-server apache-server mysql-server

docker container ls

