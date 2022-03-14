package auto

import "blog-backend/api/models"

var users = []models.User{
	{Nickname: "Jhon Doe", Email: "jhondoe@gmail.com", Password: "123456789"},
}

var posts = []models.Post{
	{
		Title: "Test title",
		Content: "Lorem ipsum",
	},
}