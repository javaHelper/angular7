import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  // Custom Elevets doesn't propogate up hierarchy
  @Output() recipeWasSelected = new EventEmitter<Recipe>();


  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a Test',
    'https://www.aspicyperspective.com/wp-content/uploads/2018/09/Cheesy-Spinach-Stuffed-Chicken-Breasts-8.jpg'),
    new Recipe('A Another Test Recipe', 'This is simply a another Test',
    'https://www.aspicyperspective.com/wp-content/uploads/2018/09/Cheesy-Spinach-Stuffed-Chicken-Breasts-8.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
