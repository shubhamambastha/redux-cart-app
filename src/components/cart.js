import React from 'react';
import { connect } from "react-redux";

class Cart extends React.Component{

    render(){
        console.log("this.props.cartDetails",this.props.cartDetails)
        // let totalAmount = this.props.cartDetails.reduce((acc, curr)=>acc+curr.cost,0)
        return(
            <div className="cart-container">
                {this.props.cartDetails && this.props.cartDetails.map((cartDetail, index)=>{
                    return(
                        <div key={index} className="detail-box">
                            <h4>{cartDetail.itemName}</h4>
                            <span>Rs. {cartDetail.cost}</span>
                            <button 
                                className="btn-danger addCart" 
                                onClick={()=>{this.props.deleteFromCart({ type: "delete_detail_from_cart", payload: index })}}>
                                    Remove
                            </button>
                        </div>
                    )
                })}                
                <h5 className="checkout">Total Amount: Rs. </h5>
                <button 
                    className="checkout btn btn-info" 
                    onClick={()=>{this.props.deleteAll({ type: "clear_cart"})}}>
                        Checkout
                </button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log("cart items here", state.cartItems)
    return {
        cartDetails: state.cartItems
    };
}

const takeActionsFromReactToRedux = (dispatch) => {
    console.log("City Component dispatch function", dispatch);
    return {
        deleteFromCart: dispatch,
        deleteAll: dispatch
    };
}


export default connect(mapStateToProps, takeActionsFromReactToRedux)(Cart);