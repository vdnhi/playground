package routes

import (
	"blog-backend/api/controllers"
	"net/http"
)

var authRoutes = []Route{
	{
		Uri:          "/login",
		Method:       http.MethodPost,
		Handler:      controllers.Login,
		AuthRequired: false,
	},
}
