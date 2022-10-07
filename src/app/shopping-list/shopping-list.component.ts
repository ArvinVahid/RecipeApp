import {Component, OnDestroy, OnInit} from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import {Subscription} from "rxjs";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  ingredients: Ingredient[];
  private igChangeSub: Subscription;

  constructor(private shoppingService: ShoppingListService) {}

  ngOnInit(): void {
    this.ingredients = this.shoppingService.getIngredients();
    this.igChangeSub = this.shoppingService.ingredientChanged.subscribe((ingredient: Ingredient[]) => {
      this.ingredients = ingredient;
    })
  }

  ngOnDestroy(): void {
    this.igChangeSub.unsubscribe();
  }
}
