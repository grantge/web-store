import React from 'react';

import './GoodsCard.css';

class GoodsCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      active: false,
    };
  }

  activeButton() {
    this.setState({ active: true });
  }

  render() {
    return (
      <div className="nes-container is-rounded is-white">
        <h4 className="cart-title"> {this.props.cartTitle} </h4>
        <img src={this.props.image} alt={this.props.alt} />
        <p className="descr">{this.props.text}</p>
        <p className="price">{this.props.price}z</p>
        <button
          onClick={() => this.activeButton()}
          type="button"
          className={
            this.state.active ? 'nes-btn is-disabled' : 'nes-btn is-primary'
          }
        >
          Add
        </button>
      </div>
    );
  }
}

export default GoodsCard;
