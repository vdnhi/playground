package auto

import (
	"blog-backend/api/database"
	"blog-backend/api/models"
	"log"
)

func Load() {
	db, err := database.Connect()
	if err != nil {
		log.Fatal(err)
	}
	defer db.Close()

	err = db.Debug().DropTableIfExists(&models.Post{}, &models.User{}).Error
	if err != nil {
		log.Fatal(err)
	}

	err = db.Debug().AutoMigrate(&models.Post{}, &models.User{}).Error
	if err != nil {
		log.Fatal(err)
	}

	err = db.Debug().Model(&models.Post{}).AddForeignKey("author_id", "users(id)", "cascade", "cascade").Error
	if err != nil {
		log.Fatal(err)
	}

	for index := range users {
		err = db.Debug().Model(&models.User{}).Create(&users[index]).Error
		if err != nil {
			log.Fatal(err)
		}

		posts[index].AuthorID = users[index].ID
		err = db.Debug().Model(&models.Post{}).Create(&posts[index]).Error
		if err != nil {
			log.Fatal(err)
		}
	}
}
