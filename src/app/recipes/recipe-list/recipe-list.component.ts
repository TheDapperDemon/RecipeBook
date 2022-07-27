import { 
  Component, 
  OnInit 
} from '@angular/core';

import { Recipe } from '../recipe.model';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe (
      'Test Recipe', 
      'This is a test', 
      'https://media.istockphoto.com/vectors/healthy-recipes-weight-loss-flat-design-icon-vector-id1078219340?k=20&m=1078219340&s=612x612&w=0&h=dn6FllWFfQ1QVwuMknrQ9EUXDe3PUM0d8kjgFZo4Prk='
      )
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
