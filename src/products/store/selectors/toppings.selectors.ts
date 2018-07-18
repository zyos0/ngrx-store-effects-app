import * as fromRoot from '../../../app/store';
import * as fromFeature from '../reducers';
import * as fromToppin from '../reducers/toppings.reducer'
import {createSelector} from "@ngrx/store";


export const getToppingState = createSelector(fromFeature.getProductsState, (state: fromFeature.ProductsState) => state.toppings);


export const getToppingsEntities = createSelector(getToppingState, fromToppin.getToppingsEntities);

export const getAllToppings = createSelector(getToppingsEntities,
  (entities) => {
    return Object.keys(entities).map(id => entities[parseInt(id, 10)])
  });

export const getSelectedToppings = createSelector(
  getToppingState,
  fromToppin.getSelectedToppings
);

export const getToppingsLoaded = createSelector(getToppingState, fromToppin.getToppingsLoaded);
export const getToppingsLoading = createSelector(getToppingState, fromToppin.getToppingsLoading);
