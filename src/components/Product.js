import React, { Component } from 'react';
import * as Message from '../constants/Message';

class Product extends Component {

  showRating = (rating) => {
    var result = [];
    for(var i = 1; i <= rating; i++) {
      result.push(
        <li key={i}>
          <i className="fa fa-star" />
        </li>
      );
    }
    for(var j = 1; j <= (5-rating); j++) {
      result.push(
        <li key={j + i}>
          <i className="fa fa-star-o" />
        </li>
      );
    }
    return result;
  }

  onAddToCart = (product) => {
    this.props.onAddToCart(product);
    this.props.onChangeMessage(Message.MSG_ADD_TO_CART_SUCCESS);
  }

  render() {
    var { product } = this.props;
    return (
      <div className="col-lg-4 col-md-6 mb-r">
        <div className="card text-center card-cascade narrower">
          <div className="view overlay hm-white-slight z-depth-1">
            <img src={product.image} className="img-fluid" alt="" />
            <a>
              <div className="mask waves-light waves-effect waves-light" />
            </a>
          </div>
          <div className="card-body">
            <h4 className="card-title">
              <strong>
                <a>{product.name}</a>
              </strong>
            </h4>
            <ul className="rating">
              {this.showRating(product.rating)}
            </ul>
            <p className="card-text">
              {product.description}
            </p>
            <div className="card-footer">
              <span className="left">{product.price}$</span>
              <span className="right">
                <a 
                  className="btn-floating blue-gradient" 
                  data-toggle="tooltip" 
                  data-placement="top" title="true" 
                  data-original-title="Add to Cart"
                  onClick={() => this.onAddToCart(product)}
                >
                  <i className="fa fa-shopping-cart" />
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
