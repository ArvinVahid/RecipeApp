import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StorageDataService {
  constructor(private http: HttpClient, private recipeService: RecipeService) {}

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    this.http
      .put<Recipe[]>(
        'https://ng-client-e4d1b-default-rtdb.asia-southeast1.firebasedatabase.app/recipes.json',
        recipes
      )
      .subscribe((response) => {
        console.log(response);
      });
  }

  fetchRecipes() {
    return this.http
      .get<Recipe[]>(
        'https://ng-client-e4d1b-default-rtdb.asia-southeast1.firebasedatabase.app/recipes.json'
      )
      .pipe(
        tap((recipes) => {
          this.recipeService.setRecipes(recipes);
        })
      );
  }
}
