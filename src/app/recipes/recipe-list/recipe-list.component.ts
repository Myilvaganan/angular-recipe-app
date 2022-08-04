import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Morning Meal',
      'Have a great breakfast!',
      'https://th.bing.com/th/id/OIP.ibC0ZQ8poXAwutIsnog_YQHaGu?pid=ImgDet&rs=1'
    ),
    new Recipe(
      'Lunch',
      'Its Lunch time!',
      'https://img1.cookinglight.timeinc.net/sites/default/files/styles/4_3_horizontal_-_1200x900/public/1513280925/quinoa-breakfast-bowl-6-minute-egg-1801-ck.jpg?itok=AQUZyfUV'
    ),
    new Recipe(
      'Dinner',
      'Delight Dinner!',
      'https://th.bing.com/th/id/OIP.MdvtCiO_dZmlMVuOOsGFaAHaHa?pid=ImgDet&rs=1'
    ),
  ];
  @Output() recipeSelection = new EventEmitter<Recipe>();

  constructor() {}

  ngOnInit(): void {}

  onSelectionOfRecipe(recipe: Recipe) {
    this.recipeSelection.emit(recipe);
  }
}
