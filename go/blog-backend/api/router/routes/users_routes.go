package routes

import (
	"blog-backend/api/controllers"
	"net/http"
)

var usersRoutes = []Route{
	{
		Uri:          "/users",
		Method:       http.MethodGet,
		Handler:      controllers.GetUsers,
		AuthRequired: false,
	},
	{
		Uri:          "/users",
		Method:       http.MethodPost,
		Handler:      controllers.CreateUser,
		AuthRequired: false,
	},
	{
		Uri:          "/users/{id}",
		Method:       http.MethodGet,
		Handler:      controllers.GetUser,
		AuthRequired: false,
	},
	{
		Uri:          "/users/{id}",
		Method:       http.MethodPut,
		Handler:      controllers.UpdateUser,
		AuthRequired: true,
	},
	{
		Uri:          "/users/{id}",
		Method:       http.MethodDelete,
		Handler:      controllers.DeleteUser,
		AuthRequired: true,
	},
}
