package routes

import (
	"blog-backend/api/controllers"
	"net/http"
)

var postsRoutes = []Route{
	{
		Uri:          "/posts",
		Method:       http.MethodGet,
		Handler:      controllers.GetPosts,
		AuthRequired: false,
	},
	{
		Uri:          "/posts",
		Method:       http.MethodPost,
		Handler:      controllers.CreatePost,
		AuthRequired: true,
	},
	{
		Uri:          "/posts/{id}",
		Method:       http.MethodGet,
		Handler:      controllers.GetPost,
		AuthRequired: false,
	},
	{
		Uri:          "/posts/{id}",
		Method:       http.MethodPut,
		Handler:      controllers.UpdatePost,
		AuthRequired: true,
	},
	{
		Uri:          "/posts/{id}",
		Method:       http.MethodDelete,
		Handler:      controllers.DeletePost,
		AuthRequired: true,
	},
}
