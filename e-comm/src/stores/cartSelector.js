
import { createSelector } from 'reselect';
import { products } from '../products';

const cartItemsSelector = (state) => state.cart.items;

 export const subtotalSelector = createSelector(
  [cartItemsSelector],
  (items) =>
    items.reduce((total, item) => {
      const productDetail = products.find((product) => product.id === item.productId);
      return total + (productDetail.price * item.quantity);
    }, 0)
);

