import {createSlice} from "@reduxjs/toolkit"


const initialState = {
    items:[]
}


const wishListSlice = createSlice({
    name:"wishlist",
    initialState,
    reducers:{
        addTowishList:(state,action) =>{
            const existing = state.items.find(items => items.id === action.payload.id)

      if(!existing){
            state.items.push(action.payload)
        }
        },
        removeFromWishlist:(state,action)=>{
            state.items = state.items.filter(i => i.id !== action.payload)
        },
        clearWishList:(state)=>{
            state.items = []
        }
    


    }

})

export const {addTowishList,removeFromWishlist,clearWishList} = wishListSlice.actions;
export default wishListSlice.reducer