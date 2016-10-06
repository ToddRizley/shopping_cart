#README

Greetings! Welcome to my small Shopping Cart App. The app utilizes React/Redux on the front end with Rails 5 JSON  API on the backend. The app is not currently deployed so please follow the below instructions for how to run locally:

clone repo locally
make sure you have Postgres running! (should see the little elephant on a Mac and it should say, upon clicking it, "Running on Port XXXX" )

Back-end

1. cd into shopping_cart_backend
2. run bundle install on the command line
3. run rake db:create then rake db:migrate
4. you should then be able to start the rails server by typing rails s into the command line
5. double check that the you are running on localhost:3000  (if not, update the routes on the front end in the actions folder)
6. Back end is good to go!


Front-end

1. cd into shopping_cart_frontend
2. run npm install
3. run npm start (enter "Y" to run on localhost:3001)
4. open browser (preferably Chrome) and navigate to localhost:3001 and voila!
5. make sure to add products via the add product form to update the inventory as the inventory has not been seeded to date

if you have any questions or issues don't hesitate to reach out! Happy shopping!
