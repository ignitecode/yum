# Yum
The Yum app is a full CRUD Express app, with sequelize, postgres and views.

Your task: create an app that tracks and stores Restaurants and their Menus, in a one-to-many relationship.

Use the lessons that we have gone through so far to help you create your app.

**Part of your assignment is to write notes on the steps/commands you used/process to create your app.**

## Requirements

- Fork + clone this repo
- Create a full CRUD app with express, postgres + sequelize with views
- At least 2 models (3rd model is a bonus)
- Have at least 25 commits (if you follow suggested commits, you will get there.
- Create a `README.md`, and write notes on your process/the commands that you use
---
<br />

# Let's Go!

## Setup  You App

Create your app using the Express Generator, called `yum`.  `cd` into it.  Run `$ npm install` to install all of the modules needed to run your express app.  Install any extra packages that you may need.

You can test your code by adding a `"start:dev": "nodemon ./bin/www"` in the package.json.

1. Create a README.md so you can write your notes in it.

2. git commit

## Part I: Create your Database + Restaurants Model + Controller

### Set up your app

1. Set up your postgres database, called `yum-app-development`.

2. Run `sequelize init`

3. Update your `config.json` file.

4. git commit

### Create your restaurant model

5. Create your `restaurant` model using sequelize

  - A restaurant should have (at least) the following field names...

    * `name` - a string
    * `city` - a string
    * `state` - a string
    * `zipCode` - a string
    * `typeOfFood` - a string with the type of food
    * `rating` - a float for their rating (out of 5)
    * `yelpUrl` - a string

6. Run the migration and check your postgres database.

7. git commit

### Create your seeds

8. Create a seeds file, and add 2 new restaurants.

9. Run your seeds to seed your database and check your postgres database.

10. git commit

### Create your restaurant controller

11. Create a restaurant controller- `restaurants_controller.js` and set it up in your app.js.

12. git commit

13. Require your restaurant model.

14. git commit

### Add in express-ejs-layouts

15. Require express-ejs-layouts in `app.js` + create a `layout.ejs`

16. git commit

### Create your index route + view

17. Create an index route, first with json/postman, then with view.

16. git commit

### Create your show route + view

17. Create a show route, first with json/postman, then with view.

18. Add a link to the show page and back to the home page.

19. git commit

### Add in method-override

20. Require method-override to the app.js

21. git commit

### Create a new route + view

22. Create a **new** route + view- or you can choose to add this form to the restaurant's show page.

23. git commit

### Create a post route

24. Create a **post** route, first with json/postman, then with re-routing.  Add a link between the new, back + home pages.

25. git commit

### Create an edit route + view

26. Create an edit route + view.

27. git commit

### Create an update route

28. Create a route that updates a restaurant, first with json/postman, then with re-routing. Add a link between the show + edit pages.

29. git commit

### Create a delete route + form

30. Create a route that deletes a restaurant, first with json/postman, then add the form onto your show page.

31. git commit

## Part II: Create your Menu Model + Controller

### Create your menu model

1. Create your `menu` model using sequelize

  - A menu should have (at least) the following field names...

    * `name` - a string
    * `days` - a string
    * `hours` - a string
    * `restaurantId` - an integer

2. Run the migration and check your postgres database.

3. git commit

4. Set up your associations.

5. git commit

### Create your seeds for your menus

6. Create a seeds file, and add 2 new menus.

7. Run your seeds to seed your database and check your postgres database.

8. git commit

### Create your menus controller

9. Create a menus controller- `menus_controller.js` and set it up in your app.js.

10. Require your restaurant + menu model in both controllers.

11. git commit

### Update your restaurant's show view to include menus

12. Add include statement in your restaurant show page, and update your restaurant's show view

13. git commit

### Create a menu show route + view

14. Create a menu show route + view. Add links to view the single menu from the restaurant's show page, and back.

15. git commit

### Create a menu new route + view

16. Create a new route + view to create a new menu.

17. git commit

### Create a menu post route

18. Create a post route to create a new menu.

19. git commit

### Create an edit route + view

20. Create an edit route + view to update a menu.

23. git commit

### Create an update route

24. Create a route that updates a menu.

25. git commit

### Create a delete route + form

26. Create a route that deletes a menu and add the form onto your menu show page.

27. git commit

<br />

## The Finished App

Your app should have a welcome page, an index, edit, new and show pages for the restaurant resource, plus full-CRUD for a restaurant's menus:

- A welcome page.
- A page that lists all of the restaurants, on which a user can create a new restaurant.
- A page where you can create a new restaurant.
- A restaurant show page that lists one restaurant and all of its menus, on which a user can...
  - Click on a link to the edit page, where you can update the restaurant.
  - Delete the restaurant.
  - Click on a link to view the menu show page.
  - Create a new menu for that restaurant.
- A menu show page, where a user can...
  - Edit a menu for a restaurant.
  - Delete a menu for a restaurant.

---

<br />

## Bonus

- add a navbar + footer via partials
- add a layout page (if you haven't already- to DRY up your code)
- add bootstrap, materialize or SASS
- add restaurant images
- make it pretty
- create a **menuItems** model/controller
  - This could either be a one-to-many with menus or a many-to-many (if you want to push yourself)
- It should have (at least) the following field names...
    * `menuItem` - a string
    * `price` - an integer
    * `dietaryRestriction` - a string
    * `restaurantId` - an integer

## Extra Bonus

- Create a search that finds a restaurant by `name`.
- Create a search that finds all restaurants by `zipCode`.
- Create a search that finds all restaurants by `typeOfFood`.
- show the reviews as stars, instead of a number.
- add a suggestions page that will suggest a restaurant for the user.
