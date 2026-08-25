import { useDispatch } from "react-redux"
import { addItem, getCart, incrementCartItemApi } from "../services/cart.api"
import { setCart, incrementCartItem} from "../states/cart.slice"


export const useCart = () => {

   const dispatch = useDispatch()

   async function handleAddItem({ productId, variantId }) {
      const data = await addItem({ productId, variantId })
      return data
   }

   async function handleGetCart() {
      const data = await getCart()
      dispatch(setCart(data.cart))
   }

   async function handleIncrementCartItem({ productId, variantId }) {
      await incrementCartItemApi({ productId, variantId })
      dispatch(incrementCartItem({ productId, variantId }))
   }

   return { handleAddItem, handleGetCart, handleIncrementCartItem }
}