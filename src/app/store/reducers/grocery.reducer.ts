import { createReducer } from "@ngrx/store";
import { Grocery } from "../../../models/grocery.model";

const initialState: Grocery[] = [
  { id: 1, name: 'Milk', type: 'dairy' },
  { id: 2, name: 'Apple', type: 'fruits' },
  { id: 3, name: 'Banana', type: 'fruits' },
  { id: 4, name: 'Bread', type: 'bakery' },
  { id: 5, name: 'Tomato', type: 'vegetables' },
  { id: 6, name: 'Potato', type: 'vegetables' },
  { id: 7, name: 'Cheese', type: 'dairy' },
  { id: 8, name: 'Eggs', type: 'poultry' },
  { id: 9, name: 'Chicken Breast', type: 'meat' },
  { id: 10, name: 'Orange Juice', type: 'beverages' },
  { id: 11, name: 'Cucumber', type: 'vegetables' },
  { id: 12, name: 'Grapes', type: 'fruits' },
  { id: 13, name: 'Butter', type: 'dairy' },
  { id: 14, name: 'Croissant', type: 'bakery' },
  { id: 15, name: 'Fish Fillet', type: 'meat' },
  { id: 16, name: 'Paneer', type: 'dairy' },
  { id: 17, name: 'Spinach', type: 'vegetables' },
  { id: 18, name: 'Pepsi', type: 'beverages' },
  { id: 19, name: 'Biscuit', type: 'snacks' },
  { id: 20, name: 'Mango', type: 'fruits' }
];


export const groceryReducer = createReducer(initialState);
