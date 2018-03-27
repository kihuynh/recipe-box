import { Component } from '@angular/core';
import { Recipe } from './models/recipe.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Recipe Box';
  recipes: Recipe[] = [
    new Recipe('Chocolate Chip Cookies', 'Flour, egg, sugar, butter, chocolate chips, baking soda, salt','Pre-heat oven to 375, combine dry ingredients, cream sugar and butter, add egg. Add dry mix to wet mixture. Mix. Add chocolate chips, and walnuts fold gently. 1 TBS on cookie sheet. Bake. Eat'),
    new Recipe('Sandwich', 'bread, peanut butter, grape jelly', 'Toast bread. Apply peanut butter and jelly generously to your liking'),
    new Recipe('Sesame Chicken', 'Chicken, Sesame oil, Sugar, Salt, Soysauce, Onion, Bell Pepper, Corn Starch', 'Heat pan with oil. Coat chicken in corn starch, Fry, take it out when done. Combine liquids. Heat sauce in pan until thickened, toss chicken in sauce.'
  ];

  editRecipe() {
    alert("Time")
  }
}
