const searchInput = document.querySelector("input");
const searchBtn = document.querySelector(".btn__search");
const shuffleBtn = document.querySelector(".btn__shuffle");
const photoWraper = document.querySelector(".photo__wraper");

function getMeal(meal) {
  photoWraper.innerHTML = "";
  const mainUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`;

  fetch(mainUrl)
    .then((response) => response.json())
    .then((data) => {
      let allMeals = data.meals;
      if (allMeals) {
        allMeals.forEach((meal) => {
          console.log(meal);
          let ingredients = [];
          for (let i = 1; i < 20; i++) {
            if (meal[`strIngredient${i}`]) {
              ingredients.push(meal[`strIngredient${i}`]);
            }
          }
          let ingredientsList = ingredients
            .map((ingredient) => `<li>${ingredient}</li>`)
            .join("");
          let article = `<article>
          <h3 >${meal.strMeal}</h3>
          <img src="${meal.strMealThumb}" alt="meal picture" />
          <p>Ingredients:</p>
            <ul>${ingredientsList}</ul>
        </article>`;
          photoWraper.insertAdjacentHTML("afterbegin", article);
        });
      } else {
        alert("No meals found.");
      }
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}

function getRandomMeal() {
  photoWraper.innerHTML = "";
  fetch("https://www.themealdb.com/api/json/v1/1/random.php")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      let allMeals = data.meals;
      if (allMeals) {
        allMeals.forEach((meal) => {
          console.log(meal);
          let ingredients = [];
          for (let i = 1; i < 20; i++) {
            if (meal[`strIngredient${i}`]) {
              ingredients.push(meal[`strIngredient${i}`]);
            }
          }
          let ingredientsList = ingredients
            .map((ingredient) => `<li>${ingredient}</li>`)
            .join("");
          let article = `<article>
          <h3 >${meal.strMeal}</h3>
          <img src="${meal.strMealThumb}" alt="meal picture" />
          <p>Ingredients:</p>
            <ul>${ingredientsList}</ul>
        </article>`;
          photoWraper.insertAdjacentHTML("afterbegin", article);
        });
      } else {
        alert("No meals found.");
      }
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}

searchBtn.addEventListener("click", () => {
  getMeal(searchInput.value);
  searchInput.value = "";
});

shuffleBtn.addEventListener("click", () => {
  getRandomMeal();
});
