document.addEventListener('DOMContentLoaded', () => {
    // Fetch the recipe data from the JSON file
    fetch('recipes.json')
      .then(response => response.json())
      .then(data => {
        // Get the recipe container element
        const recipeContainer = document.getElementById('recipe-container');
  
        // Loop through each recipe in the JSON data
        for (const recipeId in data) {
          if (data.hasOwnProperty(recipeId)) {
            const recipe = data[recipeId];
  
            // Create a recipe card element
            const recipeCard = document.createElement('div');
            recipeCard.classList.add('recipe-card');
  
            // Add recipe details to the card
            const recipeTitle = document.createElement('h2');
            recipeTitle.textContent = recipe.name;
            recipeCard.appendChild(recipeTitle);
  
            const recipeSource = document.createElement('p');
            recipeSource.textContent = `Source: ${recipe.source}`;
            recipeCard.appendChild(recipeSource);
  
            const recipeInstructions = document.createElement('p');
            recipeInstructions.textContent = recipe.instructions;
            recipeCard.appendChild(recipeInstructions);
  
            const recipeIngredients = document.createElement('ul');
            for (const ingredient of recipe.ingredients) {
              const li = document.createElement('li');
              li.innerHTML = ingredient;
              recipeIngredients.appendChild(li);
            }
            recipeCard.appendChild(recipeIngredients);
  
            // Add the recipe card to the container
            recipeContainer.appendChild(recipeCard);
          }
        }
      })
      .catch(error => {
        console.error('An error occurred:', error);
      });
  });
  