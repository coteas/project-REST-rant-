# Project REST-Rant

REST-Rant is an app where users can review restaurants.

Fill in the blanks!
User stories are most often phrased as: "As a \_**\_(user type)\_\_\_** I need \_**\_(feature)\_\_** so I can \_**\_(action)\_\_**"

1. "As a **foodie** I need **to upload my favorite restaurants** so I can **share my recommendations**."
2. "As a **user type** I need **feature** so I can **action**."

| Method  |           Path            |                     Purpose                         |
| :----:  | :----------------------:  | :------------------------------------------------:  |
|  GET    |    /                      |  Home page                                          |
|  GET    | /places                   |  Places index page                                  |
|  POST   | /places                   |  Create new place                                   |
|  GET    | /places/new               |  Form page for creating a new place                 |
|  GET    | /places/:id               |  Details about a particular place                   |
|  PUT    | /places/:id               |  Update a particular place                          |
|  GET    | /places/:id/edit          |  Form page for editing an existing place            |
|  DELETE | /places/:id               |  Delete a particular place                          |
|  POST   |  /places/:id/rant         |  Create a rant (comment) about a particular place   |
|  DELETE |  /places/:id/rant/:rantId |  Delete a rant (comment) about a particular place   |
|  GET    |    *                      |  404 page (matches any route not defined above)     |


Places:
| Name       | City       |  State      | Cuisines      |
| :--------: | :--------: | :---------: | :-----------: |
| String     | String     | String      | String        |

