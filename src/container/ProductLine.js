import React, { Component } from 'react'
import product01 from '../img/products/product01.jpg';
import product2 from '../img/products/product2.jpg';
import product3 from '../img/products/product3.jpg';

export default class ProductLine extends Component {
    render() {
            return (
                <div className="container product-ctr">
                <div className="row">
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="card h-100">
                    <img src={product01} alt="product1" className="img-fluid" />
                        <div className="card-body">
                        <div className="text-center">
                            <h4 className="card-title">
                                    <p>walnut double dresser</p>
                            </h4>
                            <h5>$210</h5>
                        </div>
                        </div>

                        <div className="card-footer">
                            <button className="btn btn-danger submit">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-4">
                    <div className="card h-100">
                    <img src={product2} alt="product2" className="img-fluid" />
                        <div className="card-body">
                        <div className="text-center">
                            <h4 className="card-title">
                                    <p>fushion armchair</p>
                            </h4>
                            <h5>$275</h5>
                        </div>
                        </div>

                        <div className="card-footer">
                            <button className="btn btn-danger submit">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-4">
                    <div className="card h-100">
                    <img src={product3} alt="product3" className="img-fluid" />
                        <div className="card-body">
                        <div className="text-center">
                            <h4 className="card-title">
                                    <p>river coffee table</p>
                            </h4>
                            <h5>$312</h5>
                            </div>
                        </div>

                        <div className="card-footer">
                            <button className="btn btn-danger submit">
                                Add to Cart
                            </button>
                        </div>
                        </div>
                    </div>
                </div>
                </div>
            )  
    };
}