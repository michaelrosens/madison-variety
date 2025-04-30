// Live clock
function updateClock() {
  const clock = document.getElementById("clock");
  if (clock) {
    const now = new Date();
    const options = { year: "numeric", month: "long", day: "numeric" };
    const date = now.toLocaleDateString(undefined, options);
    const time = now.toLocaleTimeString();
    clock.textContent = `${date} | ${time}`;
  }
}
setInterval(updateClock, 1000);
updateClock();

// Snack data with nutrition, ingredients, allergens
const snackDetails = {
  "cheese-crackers": {
    ingredients:
      "Enriched Wheat Flour, Sugar, Corn Syrup, Cocoa, Palm Oil, Water, Eggs.",
    allergens: "Contains wheat, eggs, soy, milk.",
    nutrition:
      "<b>Calories:</b> 330 (per 2 cupcakes), <b>Fat:</b> 15g, <b>Sugar:</b> 30g, <b>Protein:</b> 2g",
  },
  "keebler-cookies": {
    ingredients:
      "Enriched Wheat Flour, Sugar, Palm and Palm Kernel Oil, Cocoa, Invert Sugar, Chocolate, Leavening (Baking Soda and/or Calcium Phosphate), Salt, Soy Lecithin, Artificial Flavor.",
    allergens: "Contains wheat, soy, milk.",
    nutrition:
      "<b>Calories:</b> 160 (per 2 cookies), <b>Fat:</b> 7g, <b>Sugar:</b> 13g, <b>Protein:</b> 1g",
  },
  "rice-krispie-treats": {
    ingredients: "Rice, Sugar, Corn Syrup, Palm Oil, Salt, Artificial Flavor.",
    allergens: "Contains soy.",
    nutrition:
      "<b>Calories:</b> 90 (per bar), <b>Fat:</b> 2g, <b>Sugar:</b> 10g, <b>Protein:</b> 1g",
  },
  oreos: {
    ingredients:
      "Sugar, Unbleached enriched flour (wheat flour, niacin, reduced iron, thiamine mononitrate [vitamin B1], riboflavin [vitamin B2], folic acid), palm and/or canola oil, cocoa, leavening (baking soda and/or calcium phosphate), soy lecithin, salt, chocolate, artificial flavor.",
    allergens: "Contains wheat, soy, milk.",
    nutrition:
      "<b>Calories:</b> 160 (per 3 cookies), <b>Fat:</b> 7g, <b>Sugar:</b> 14g, <b>Protein:</b> 1g",
  },
  "nature-valley-bars": {
    ingredients:
      "Whole Grain Oats, Sugar, Canola Oil, Corn Syrup, Salt, Baking Soda, Natural Flavor.",
    allergens: "Contains oats.",
    nutrition:
      "<b>Calories:</b> 190 (per bar), <b>Fat:</b> 9g, <b>Sugar:</b> 11g, <b>Protein:</b> 3g",
  },
  "sugar-wafers": {
    ingredients:
      "Sugar, Wheat Flour, Palm Oil, Corn Syrup, Salt, Artificial Flavor.",
    allergens: "Contains wheat.",
    nutrition:
      "<b>Calories:</b> 130 (per 3 wafers), <b>Fat:</b> 6g, <b>Sugar:</b> 12g, <b>Protein:</b> 1g",
  },
  "nutri-grain-bars": {
    ingredients:
      "Whole Grain Oats, Sugar, Corn Syrup, Canola Oil, Salt, Baking Soda, Natural Flavor.",
    allergens: "Contains oats.",
    nutrition:
      "<b>Calories:</b> 130 (per bar), <b>Fat:</b> 4g, <b>Sugar:</b> 12g, <b>Protein:</b> 2g",
  },
  "kellogg-bars": {
    ingredients:
      "Whole Grain Oats, Sugar, Corn Syrup, Canola Oil, Salt, Baking Soda, Natural Flavor.",
    allergens: "Contains oats.",
    nutrition:
      "<b>Calories:</b> 130 (per bar), <b>Fat:</b> 4g, <b>Sugar:</b> 12g, <b>Protein:</b> 2g",
  },
  "clif-bar": {
    ingredients:
      "Organic Rolled Oats, Organic Brown Rice Syrup, Organic Sugar, Organic Soy Protein Isolate, Organic Soy Protein Concentrate, Organic Cocoa, Organic Chocolate Liquor, Organic Soy Flour, Organic Sunflower Oil, Organic Peanut Butter, Organic Chocolate Chips, Organic Soy Lecithin, Organic Natural Flavors.",
    allergens: "Contains soy, peanuts.",
    nutrition:
      "<b>Calories:</b> 250 (per bar), <b>Fat:</b> 9g, <b>Sugar:</b> 23g, <b>Protein:</b> 10g",
  },
  "ritz-crackers": {
    ingredients:
      "Enriched Wheat Flour, Palm and/or Canola Oil, Sugar, Salt, Leavening (Baking Soda and/or Calcium Phosphate), Soy Lecithin.",
    allergens: "Contains wheat, soy.",
    nutrition:
      "<b>Calories:</b> 70 (per 4 crackers), <b>Fat:</b> 3g, <b>Sugar:</b> 1g, <b>Protein:</b> 1g",
  },
  "metrx-bars": {
    ingredients:
      "Protein Blend (Milk Protein Isolate, Whey Protein Isolate), Maltitol, Glycerin, Water, Cocoa, Palm Kernel Oil, Soy Protein Isolate, Natural and Artificial Flavors, Salt, Sucralose, Acesulfame Potassium.",
    allergens: "Contains milk, soy.",
    nutrition:
      "<b>Calories:</b> 410 (per bar), <b>Fat:</b> 18g, <b>Sugar:</b> 1g, <b>Protein:</b> 30g",
  },
  "kettle-chips": {
    ingredients: "Potatoes, Sunflower Oil, Salt.",
    allergens: "None.",
    nutrition:
      "<b>Calories:</b> 150 (per 1 oz), <b>Fat:</b> 9g, <b>Sugar:</b> 0g, <b>Protein:</b> 2g",
  },
  "cape-cod-chips": {
    ingredients: "Potatoes, Canola Oil, Salt.",
    allergens: "None.",
    nutrition:
      "<b>Calories:</b> 150 (per 1 oz), <b>Fat:</b> 9g, <b>Sugar:</b> 0g, <b>Protein:</b> 2g",
  },
  "dorito-cool-ranch": {
    ingredients:
      "Corn, Vegetable Oil (Corn, Canola, Soybean, and/or Sunflower Oil), Salt, Corn Starch, Tomato Powder, Lactose, Whey, Skim Milk, Onion Powder, Sugar, Garlic Powder, Monosodium Glutamate, Corn Maltodextrin, Potassium Salt, Cheddar Cheese (Milk, Cheese Cultures, Salt, Enzymes), Dextrose, Malic Acid, Corn Syrup Solids, Buttermilk, Natural and Artificial Flavors, Sodium Acetate, Artificial Color (Red 40, Blue 1, Yellow 5), Spices, Citric Acid, Disodium Inosinate, and Disodium Guanylate.",
    allergens: "Contains milk.",
    nutrition:
      "<b>Calories:</b> 150 (per 12 chips), <b>Fat:</b> 8g, <b>Sodium:</b> 190mg, <b>Protein:</b> 2g",
  },
  pringles: {
    ingredients:
      "Dehydrated Potato Flakes, Vegetable Oil (Corn, Canola, and/or Sunflower Oil), Rice Flour, Wheat Starch, Maltodextrin, Salt, Dextrose, Mono- and Diglycerides, Artificial Flavor, Artificial Color.",
    allergens: "Contains wheat.",
    nutrition:
      "<b>Calories:</b> 150 (per 14 chips), <b>Fat:</b> 9g, <b>Sodium:</b> 150mg, <b>Protein:</b> 1g",
  },
  "lays-potato-chips": {
    ingredients:
      "Potatoes, Vegetable Oil (Sunflower, Corn, and/or Canola Oil), Salt.",
    allergens: "None.",
    nutrition:
      "<b>Calories:</b> 160 (per 15 chips), <b>Fat:</b> 10g, <b>Sodium:</b> 170mg, <b>Protein:</b> 2g",
  },
  "cheddar-fries": {
    ingredients: "Potatoes, Vegetable Oil, Salt, Artificial Cheese Flavor.",
    allergens: "None.",
    nutrition:
      "<b>Calories:</b> 140 (per 1 oz), <b>Fat:</b> 8g, <b>Sodium:</b> 180mg, <b>Protein:</b> 2g",
  },
  "red-doritos": {
    ingredients:
      "Corn, Vegetable Oil (Corn, Canola, Soybean, and/or Sunflower Oil), Salt, Corn Starch, Tomato Powder, Lactose, Whey, Skim Milk, Onion Powder, Sugar, Garlic Powder, Monosodium Glutamate, Corn Maltodextrin, Potassium Salt, Cheddar Cheese (Milk, Cheese Cultures, Salt, Enzymes), Dextrose, Malic Acid, Corn Syrup Solids, Buttermilk, Natural and Artificial Flavors, Sodium Acetate, Artificial Color (Red 40, Blue 1, Yellow 5), Spices, Citric Acid, Disodium Inosinate, and Disodium Guanylate.",
    allergens: "Contains milk.",
    nutrition:
      "<b>Calories:</b> 150 (per 12 chips), <b>Fat:</b> 8g, <b>Sodium:</b> 190mg, <b>Protein:</b> 2g",
  },
  "tic-tacs": {
    ingredients:
      "Sugar, Maltodextrin, Natural and Artificial Flavors, Color Additives.",
    allergens: "None.",
    nutrition:
      "<b>Calories:</b> 1 (per mint), <b>Fat:</b> 0g, <b>Sugar:</b> 0g, <b>Protein:</b> 0g",
  },
  "extra-gum": {
    ingredients:
      "Sugar, Gum Base, Corn Syrup, Natural and Artificial Flavors, Artificial Color.",
    allergens: "None.",
    nutrition:
      "<b>Calories:</b> 5 (per piece), <b>Fat:</b> 0g, <b>Sugar:</b> 1g, <b>Protein:</b> 0g",
  },
  "mound-bar": {
    ingredients:
      "Sweetened Coconut, Semi-Sweet Chocolate (Sugar, Chocolate, Cocoa Butter, Milk Fat, Lecithin), Sugar.",
    allergens: "Contains coconut, milk, and soy.",
    nutrition:
      "<b>Calories:</b> 230, <b>Fat:</b> 13g, <b>Sugar:</b> 21g, <b>Protein:</b> 2g",
  },
  "jelly-rings": {
    ingredients: "Dark Chocolate, Sugar, Glucose Syrup, Fruit Puree, Gelatin.",
    allergens: "Contains milk and soy.",
    nutrition:
      "<b>Calories:</b> 160 (per 3 pieces), <b>Fat:</b> 7g, <b>Sugar:</b> 20g, <b>Protein:</b> 1g",
  },
  mms: {
    ingredients:
      "Milk Chocolate (Sugar, Cocoa Butter, Chocolate, Skim Milk, Lactose, Milkfat, Soy Lecithin), Sugar Shell.",
    allergens: "Contains milk and soy.",
    nutrition:
      "<b>Calories:</b> 140 (per fun size bag), <b>Fat:</b> 5g, <b>Sugar:</b> 18g, <b>Protein:</b> 1g",
  },
  "reeses-cups": {
    ingredients: "Milk Chocolate, Peanuts, Sugar, Dextrose, Salt.",
    allergens: "Contains peanuts, milk, and soy.",
    nutrition:
      "<b>Calories:</b> 210 (per 2 cups), <b>Fat:</b> 13g, <b>Sugar:</b> 21g, <b>Protein:</b> 5g",
  },
  "100-grand": {
    ingredients:
      "Milk Chocolate, Crisped Rice, Caramel (Corn Syrup, Milk, Sugar, Butter).",
    allergens: "Contains milk and soy.",
    nutrition:
      "<b>Calories:</b> 190, <b>Fat:</b> 8g, <b>Sugar:</b> 22g, <b>Protein:</b> 2g",
  },
  "peanut-butter-mms": {
    ingredients:
      "Milk Chocolate, Peanuts, Sugar Shell (Sugar, Cornstarch, Coloring).",
    allergens: "Contains peanuts, milk, and soy.",
    nutrition:
      "<b>Calories:</b> 190, <b>Fat:</b> 11g, <b>Sugar:</b> 18g, <b>Protein:</b> 4g",
  },
  "caramel-mms": {
    ingredients:
      "Milk Chocolate, Caramel Filling, Sugar Shell (Sugar, Cornstarch, Coloring).",
    allergens: "Contains milk, soy.",
    nutrition:
      "<b>Calories:</b> 190, <b>Fat:</b> 8g, <b>Sugar:</b> 23g, <b>Protein:</b> 2g",
  },
  blowpops: {
    ingredients:
      "Sugar, Corn Syrup, Gum Base, Citric Acid, Artificial Flavors, Colors (Red 40, Yellow 5, Blue 1).",
    allergens: "May contain traces of milk.",
    nutrition:
      "<b>Calories:</b> 60 (per pop), <b>Fat:</b> 0g, <b>Sugar:</b> 13g, <b>Protein:</b> 0g",
  },
  donettes: {
    ingredients:
      "Enriched Wheat Flour, Sugar, Palm Oil, Cocoa Powder, Corn Syrup, Eggs.",
    allergens: "Contains wheat, soy, milk, egg.",
    nutrition:
      "<b>Calories:</b> 380 (per 6 pieces), <b>Fat:</b> 22g, <b>Sugar:</b> 19g, <b>Protein:</b> 4g",
  },
  twinkies: {
    ingredients:
      "Enriched Wheat Flour, Sugar, Corn Syrup, High Fructose Corn Syrup, Eggs, Water, Palm Oil.",
    allergens: "Contains wheat, egg, soy, milk.",
    nutrition:
      "<b>Calories:</b> 270 (per 2 cakes), <b>Fat:</b> 9g, <b>Sugar:</b> 27g, <b>Protein:</b> 2g",
  },
  zingers: {
    ingredients:
      "Enriched Wheat Flour, Sugar, Corn Syrup, Coconut, Cocoa, Eggs, Water, Palm Oil.",
    allergens: "Contains wheat, egg, soy, coconut, milk.",
    nutrition:
      "<b>Calories:</b> 370 (per 2 pieces), <b>Fat:</b> 20g, <b>Sugar:</b> 28g, <b>Protein:</b> 3g",
  },
  "baby-bundles": {
    ingredients: "Varies (Typically Chocolate, Flour, Sugar, Oil, Eggs).",
    allergens: "Contains wheat, eggs, soy, milk.",
    nutrition:
      "<b>Calories:</b> 300, <b>Fat:</b> 18g, <b>Sugar:</b> 24g, <b>Protein:</b> 3g",
  },
  "hostess-cupcakes": {
    ingredients:
      "Enriched Wheat Flour, Sugar, Corn Syrup, Cocoa, Palm Oil, Water, Eggs.",
    allergens: "Contains wheat, eggs, soy, milk.",
    nutrition:
      "<b>Calories:</b> 330 (per 2 cupcakes), <b>Fat:</b> 15g, <b>Sugar:</b> 30g, <b>Protein:</b> 2g",
  },
  snickers: {
    ingredients:
      "Milk Chocolate, Peanuts, Corn Syrup, Sugar, Palm Oil, Skim Milk",
    allergens: "Contains milk, peanuts, and soy.",
    nutrition:
      "<b>Calories:</b> 250, <b>Fat:</b> 12g, <b>Sugar:</b> 20g, <b>Protein:</b> 4g",
  },
  "lays-classic": {
    ingredients: "Potatoes, Vegetable Oil, Salt",
    allergens: "Manufactured in a facility that processes milk.",
    nutrition:
      "<b>Calories:</b> 160, <b>Fat:</b> 10g, <b>Sugar:</b> 0g, <b>Protein:</b> 2g",
  },
  chuckles: {
    ingredients:
      "Corn Syrup, Sugar, Modified Food Starch, Natural and Artificial Flavors, Artificial Colors",
    allergens: "May contain traces of milk and soy.",
    nutrition:
      "<b>Calories:</b> 210, <b>Fat:</b> 0g, <b>Sugar:</b> 36g, <b>Protein:</b> 1g",
  },
  starburst: {
    ingredients:
      "Sugar, Corn Syrup, Hydrogenated Palm Kernel Oil, Fruit Juice, Citric Acid, Artificial Flavors, Colors (Red 40, Yellow 5, Blue 1).",
    allergens: "May contain traces of milk.",
    nutrition:
      "<b>Calories:</b> 160 (for 8 pieces), <b>Fat:</b> 3g, <b>Sugar:</b> 22g, <b>Protein:</b> 0g",
  },
  "milky-ways": {
    ingredients:
      "Milk Chocolate, Sugar, Corn Syrup, Hydrogenated Palm Kernel Oil, Skim Milk, Cocoa, Sugar, Malted Barley, Lactose.",
    allergens: "Contains milk, soy, egg.",
    nutrition:
      "<b>Calories:</b> 240, <b>Fat:</b> 9g, <b>Sugar:</b> 31g, <b>Protein:</b> 2g",
  },
  "crunch-bars": {
    ingredients:
      "Milk Chocolate, Crisped Rice (Rice Flour, Sugar, Barley Malt, Salt).",
    allergens: "Contains milk, soy.",
    nutrition:
      "<b>Calories:</b> 220, <b>Fat:</b> 11g, <b>Sugar:</b> 24g, <b>Protein:</b> 2g",
  },
  dots: {
    ingredients:
      "Corn Syrup, Sugar, Modified Food Starch, Artificial Flavors, Artificial Colors.",
    allergens: "May contain traces of milk.",
    nutrition:
      "<b>Calories:</b> 150 (per 12 pieces), <b>Fat:</b> 0g, <b>Sugar:</b> 24g, <b>Protein:</b> 0g",
  },
  hershey: {
    ingredients:
      "Milk Chocolate (Sugar, Milk, Chocolate, Cocoa Butter, Lecithin, PGPR).",
    allergens: "Contains milk and soy.",
    nutrition:
      "<b>Calories:</b> 210, <b>Fat:</b> 13g, <b>Sugar:</b> 24g, <b>Protein:</b> 3g",
  },
  "kit-kats": {
    ingredients:
      "Milk Chocolate, Wheat Flour, Sugar, Palm Oil, Cocoa, Lecithin, Yeast.",
    allergens: "Contains milk, soy, wheat.",
    nutrition:
      "<b>Calories:</b> 210, <b>Fat:</b> 11g, <b>Sugar:</b> 21g, <b>Protein:</b> 3g",
  },
  "twix-bar": {
    ingredients:
      "Milk Chocolate, Wheat Flour, Sugar, Palm Oil, Skim Milk, Cocoa, Lecithin, Corn Syrup.",
    allergens: "Contains milk, soy, wheat.",
    nutrition:
      "<b>Calories:</b> 250, <b>Fat:</b> 12g, <b>Sugar:</b> 24g, <b>Protein:</b> 2g",
  },
  "trident-gum": {
    ingredients:
      "Xylitol, Sorbitol, Natural and Artificial Flavors, Gum Base, Glycerin, Aspartame, Malic Acid, Acesulfame K, Colors (if applicable).",
    allergens: "Contains soy. May contain traces of wheat.",
    nutrition:
      "<b>Calories:</b> 5, <b>Fat:</b> 0g, <b>Sugar:</b> 0g, <b>Protein:</b> 0g",
  },

  "bazooka-gum": {
    ingredients:
      "Sugar, Gum Base, Corn Syrup, Artificial and Natural Flavors, Glycerin, Color Additives (varies).",
    allergens: "Contains soy.",
    nutrition:
      "<b>Calories:</b> 10, <b>Fat:</b> 0g, <b>Sugar:</b> 3g, <b>Protein:</b> 0g",
  },

  "doublemint-gum": {
    ingredients:
      "Sugar, Gum Base, Corn Syrup, Glycerin, Natural and Artificial Flavors, Aspartame, Colors (if applicable).",
    allergens: "Contains soy. May contain traces of wheat.",
    nutrition:
      "<b>Calories:</b> 5, <b>Fat:</b> 0g, <b>Sugar:</b> 0g, <b>Protein:</b> 0g",
  },

  "dentyne-gum": {
    ingredients: "Sorbitol, Gum Base, Maltitol, Mannitol, Artificial and Natural Flavoring; less than 2% of: Acacia, Acesulfame Potassium, Aspartame, BHT (to maintain freshness), Candelilla Wax, Glycerin, Soy Lecithin, Sucralose, Titanium Dioxide (color).",
    allergens: "Contains soy. Phenylketonurics: contains phenylalanine.",
    nutrition: "<b>Calories:</b> 5, <b>Fat:</b> 0g, <b>Sugar:</b> 0g, <b>Protein:</b> 0g"
  },
};

// Quick View Modal setup
const modal = document.getElementById("quickViewModal");
const closeModal = document.getElementById("closeModal");
const modalImage = document.getElementById("modalImage");
const modalName = document.getElementById("modalName");
const modalPrice = document.getElementById("modalPrice");
const modalDescription = document.getElementById("modalDescription");

// Remove unused description field content
modalDescription.textContent = "";

// Create ingredients, allergens, and nutrition elements
const modalIngredients = document.createElement("p");
modalIngredients.id = "modalIngredients";
modalIngredients.className = "modal-product-ingredients";

const modalAllergens = document.createElement("p");
modalAllergens.id = "modalAllergens";
modalAllergens.className = "modal-product-allergens";

const modalNutrition = document.createElement("p");
modalNutrition.id = "modalNutrition";
modalNutrition.className = "modal-product-nutrition";

// Insert them after the (now unused) modalDescription
modalDescription.insertAdjacentElement("afterend", modalNutrition);
modalNutrition.insertAdjacentElement("beforebegin", modalAllergens);
modalAllergens.insertAdjacentElement("beforebegin", modalIngredients);

// Button click listener for quick view
document.querySelectorAll(".quick-view-btn").forEach((btn) => {
  btn.addEventListener("click", function () {
    const snackItem = this.closest(".snack-item");
    const snackId = this.dataset.id;
    const snack = snackDetails[snackId] || {};

    modalImage.src = snackItem.querySelector(".snack-image").src;
    modalName.textContent = snackItem.querySelector(".snack-name").textContent;
    modalPrice.textContent =
      snackItem.querySelector(".snack-price").textContent;

    modalIngredients.innerHTML =
      "<strong>Ingredients:</strong> " + (snack.ingredients || "Not listed");
    modalAllergens.innerHTML =
      "<strong>Allergens:</strong> " + (snack.allergens || "Not listed");
    modalNutrition.innerHTML =
      "<strong>Nutrition Facts:</strong> " +
      (snack.nutrition || "Not available");

    modal.classList.add("active");
    modal.style.display = "flex";
  });
});

// Modal close actions
closeModal.addEventListener("click", () => {
  modal.classList.remove("active");
  modal.style.display = "none";
});
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("active");
    modal.style.display = "none";
  }
});

// Search
const searchInput = document.getElementById("snack-search");
const snackItems = document.querySelectorAll(".snack-item");
const noResults = document.querySelector(".no-results");
searchInput.addEventListener("input", function () {
  const val = this.value.toLowerCase();
  let anyVisible = false;
  snackItems.forEach((item) => {
    if (item.dataset.name.toLowerCase().includes(val)) {
      item.style.display = "";
      anyVisible = true;
    } else {
      item.style.display = "none";
    }
  });
  noResults.style.display = anyVisible ? "none" : "";
});

// Category filter
document.querySelectorAll(".category-btn").forEach((btn) => {
  btn.addEventListener("click", function () {
    document
      .querySelectorAll(".category-btn")
      .forEach((b) => b.classList.remove("active"));
    this.classList.add("active");
    const cat = this.dataset.category;
    let anyVisible = false;

    snackItems.forEach((item) => {
      // Split the category attribute into an array of categories
      const categories = item.dataset.category.split(" ");

      // Show item if we're showing 'all' or if the selected category is in the item's categories
      if (cat === "all" || categories.includes(cat)) {
        item.style.display = "";
        anyVisible = true;
      } else {
        item.style.display = "none";
      }
    });

    noResults.style.display = anyVisible ? "none" : "";
  });
});
// Sort
document.getElementById("sort-options").addEventListener("change", function () {
  const option = this.value;
  const grid = document.querySelector(".snacks-grid");
  const items = Array.from(grid.children);
  items.sort((a, b) => {
    if (option === "name-asc") {
      return a.dataset.name.localeCompare(b.dataset.name);
    } else if (option === "name-desc") {
      return b.dataset.name.localeCompare(a.dataset.name);
    } else if (option === "price-asc") {
      return parseFloat(a.dataset.price) - parseFloat(b.dataset.price);
    } else if (option === "price-desc") {
      return parseFloat(b.dataset.price) - parseFloat(a.dataset.price);
    }
    return 0;
  });
  items.forEach((item) => grid.appendChild(item));
});

// Back to Top
const backToTop = document.getElementById("backToTop");
window.addEventListener("scroll", function () {
  if (window.scrollY > 200) {
    backToTop.classList.add("visible");
  } else {
    backToTop.classList.remove("visible");
  }
});
backToTop.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
