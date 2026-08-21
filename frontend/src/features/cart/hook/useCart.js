import { addItem } from "../services/cart.api"
import { addItem as addItemToCart } from "../states/cart.slice"

export const useCart = ()=>{

   async function handleAddItem({productId,variantId}) {
        const data = await addItem({productId,variantId})
        return data
   }

   return {handleAddItem}
}