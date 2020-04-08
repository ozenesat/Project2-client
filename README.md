# The Lists Application

Lists application is an online list organizer. With the List application, users can register with a username and password. And registered users can create and customize any list of their choice with up to five items per list with a due date option. Users also can update or delete any information on their lists or the list itself anytime. In this application, all data and lists belong to the user and cannot access without the users’ sign-in into their account.

-----------------------

# Technologies used @ The Lists
* Bootstrap, HTML, CSS, JavaScript
* Handlebars, jQuery, AJAX
* Ruby, Rails, Postgresql (for the back-end)

-------------------------

# Future goals of The Lists
* Allow users to add items as many as they want.
* Allow users to share their list with friends with edit or view-only options.

-------------------------

# Developing proccess

I started to work on this website app project based on real-life needs of my household. Instead of an old-style stick a note for grocery shopping I would like to keep my list on my phone. But also I do not want to download an application for it. Then I realize that a website application can be a great idea to keep the shopping list. Then I realize that instead of an only shopping list, to keep any list like watch-list, to-do list, etc. will be more functional and effective. But also all of these lists should be private for me.

After the idea popped up, I started work on this application by creating tables on Ruby rails for the lists. I defined it in a protected relationship with the user’s table. So users have to sign-up/in to access the lists. Then created curd-scripts for create a list, update a list, delete a list, and show lists that the user has.

As second step I started to work on the front end. I implemented basic buttons and forms for user actions with Bootstrap. Then I added list related functionalities using handlebars and AJAX with JavaScript.

Finally, I tested all functionalities and fixed the errors. Also, I added some styling on CSS and added a background picture.

---------------------

# User Stories
 - As a new user, I want to sign-up so that I can sing-in.
 - As a registered user, I want to sign-in so that I can see my lists.
 - As a signed-in user, I want to change password
 - As a signed-in user, I want to sign out
 - As a signed-in user, I want to create a list with title, description, due date, and complete status and list items.
 - As a signed-in user, I want to update any properties of the list like title, description, due date, and complete status and list items.
 - As a signed-in user, I want to delete any list which I created before.
 - As a signed-in user, I want to view all my lists.

 ------------------------

# Wireframe
<img src="https://i.imgur.com/2P9OPMp.png" width="250">

--------------------------

# Entity Relationship Diagram (ERD)
<img src="https://i.imgur.com/gE7uIqQ.png" width="250">

---------------------------

# API Repo
https://github.com/ozenesat/project2-api
