/* Constraints
For the initial version of this app the recipe data may be encoded as a JSON file. After implementing the initial version of this app you may expand on this to maintain recipes in a file or database.
User Stories
User can see a list of recipe titles
User can click a recipe title to display a recipe card containing the recipe title, meal type (breakfast, lunch, supper, or snack), number of people it serves, its difficulty level (beginner, intermediate, advanced), the list of ingredients (including their amounts), and the preparation steps.
User click a new recipe title to replace the current card with a new recipe.
Bonus features
User can see a photo showing what the item looks like after it has been prepared.
User can search for a recipe not in the list of recipe titles by entering the meal name into a search box and clicking a ‘Search’ button. Any open source recipe API may be used as the source for recipes (see The MealDB below).
User can see a list of recipes matching the search terms
User can click the name of the recipe to display its recipe card.
User can see a warning message if no matching recipe was found.
User can click a ‘Save’ button on the cards for recipes located through the API to save a copy to this apps recipe file or database. */

// Require/import the HTTP module
var http = require("http");

// Define a port to listen for incoming requests
var PORT = 8080;

// Create a generic function to handle requests and responses
function handleRequest(request, response) {

  // Send the below string to the client when the user visits the PORT URL
  response.end("It Works!! Path Hit: " + request.url);
}

// Use the Node HTTP package to create our server.
// Pass the handleRequest function to empower it with functionality.
var server = http.createServer(handleRequest);

// Start our server so that it can begin listening to client requests.
server.listen(PORT, function() {

  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
