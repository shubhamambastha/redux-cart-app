import { createStore } from 'redux';

let initialState = {
    listDetails: [
        {
          itemName:"Banana",
          cost: 25
        },
        {
          itemName:"Apple",
          cost: 100
        },
        {
          itemName:"Mango",
          cost: 80
        },
        {
          itemName:"Pineapple",
          cost: 20
        },
        {
          itemName:"Grapes",
          cost: 50
        },
        {
          itemName:"Pomogrenade",
          cost: 90
        },
        {
          itemName:"Potato",
          cost: 20
        },
        {
          itemName:"Tomato",
          cost: 10
        },
        {
          itemName:"Onion",
          cost: 110
        },
        {
          itemName:"Ladyfinger",
          cost: 30
        }
    ],
    cartItems:[]
}

function appReducerFunction(state = initialState, action) {
  let cartItemsCopy = JSON.parse(JSON.stringify(state.cartItems));
  switch (action.type) {
    case "add_item_to_cart":
        console.log("adding")
      let item = {};
      item.itemName = state.listDetails[action.payload].itemName;
      item.cost = state.listDetails[action.payload].cost;
      if (state.cartItems.indexOf(item) === -1) {
        cartItemsCopy.push(item);
      }
      state.cartItems = cartItemsCopy
      console.log("cart after adding", state.cartItems)
      return state

    case "delete_detail_from_cart":
        cartItemsCopy.splice(action.payload, 1)
        state.cartItems = cartItemsCopy
        console.log("after delete", state.cartItems)

        return state;
    
    case "clear_cart":
        console.log("comming clear")
        cartItemsCopy = []
        state.cartItems = cartItemsCopy
        return state;

    default:
      return state;
  }
}

const store = createStore(appReducerFunction);
export default store;