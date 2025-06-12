import { createFeatureSelector, createSelector} from "@ngrx/store";
import { Grocery } from "../../../models/grocery.model";
import { __values } from "tslib";

// export const selectGroceries = (state:{groceries:Grocery[]}) => state.groceries;
export const selectGroceries = createFeatureSelector<Grocery[]>('groceries');

export const selectGroceryByType =(type:string)=> createSelector(
    selectGroceries,
    (state)=>{
        return state.filter(item=>item.type === type);
    }
)