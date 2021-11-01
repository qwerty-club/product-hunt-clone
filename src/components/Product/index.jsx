import React from 'react';

import './Product.css';

function Product({ title, description }) {
  return (
    <div className="product">
      <figure className="preview">
        <img src="https://via.placeholder.com/240x140" alt="" />
      </figure>
      <div className="info">
        <main>
          <h2>{title}</h2>
          <p>{description}</p>
        </main>
        <footer>
          <div className="user product_controller">
            <figure className="avatar">
              <img src="https://via.placeholder.com/40" alt="" />
            </figure>
            <span className="username">DaraRod</span>
          </div>
          <div className="upvote product_controller">
            <button>Upvote</button>
            <span>55</span>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Product;
