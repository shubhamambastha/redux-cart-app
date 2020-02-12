import React from 'react';
import { connect } from "react-redux";
import store from '../Redux/state';

class List extends React.Component{

    render(){
        console.log("list details here", this.props.listDetails)
        return(
            <div className="detail-container">
                {this.props.listDetails && this.props.listDetails.map((detail, index)=>{
                    return(
                        <div key={index} className="detail-box">
                        <h4>{detail.itemName}</h4>
                        <span>Rs. {detail.cost}</span>
                        <button 
                            className="btn-success addCart" 
                            onClick={()=>{this.props.dispatch({ type: "add_item_to_cart", payload: index })}}>
                                Add to Cart
                        </button>
                    </div>
                    )
                })}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        listDetails: state.listDetails
    };
}

export default connect(mapStateToProps)(List);