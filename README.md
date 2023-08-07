recipe API
Description
The Recipe API is a simple web service that provides endpoints to access recipes and their details. It is built using HTML, JavaScript, and JSON data. The API allows users to retrieve a list of recipes, view recipe details, and search for recipes based on ingredients.

Features
Get a list of all recipes
View details of a specific recipe
Search for recipes by ingredients
Usage
To use the Recipe API, you can make HTTP requests to the following endpoints:

GET /api/recipes: Get a list of all recipes.
GET /api/recipes/:id: Get details of a specific recipe by its ID.
GET /api/recipes/search: Search for recipes by ingredients. Pass a query parameter q with a comma-separated list of ingredients (e.g., /api/recipes/search?q=chicken,tomato,onion).
Data Format
The recipes data is stored in a JSON format. Each recipe object has the following properties:

id: Unique identifier for the recipe.
name: Name of the recipe.
description: Brief description of the recipe.
ingredients: An array of ingredients used in the recipe.
instructions: Step-by-step instructions to prepare the recipe
