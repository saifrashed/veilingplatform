import React from 'react';
import FilterBar from "../../containers/FilterBar/FilterBar";
import ProductList from "../../containers/ProductList/ProductList";

const Auctions = (props) => {
    console.log(props.match.params.category);

    return (
        <React.Fragment>
            <div className="row">
                <div className="jumbotron jumbotron-fluid w-100 pl-2 pr-2">
                    <div className="container">
                        <h1 className="display-4">{props.match.params.category}</h1>
                        <p className="lead">This is a modified jumbotron that occupies the entire horizontal space
                            of its parent.</p>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <FilterBar/>
                    <ProductList/>
                </div>
            </div>
        </React.Fragment>
    );
};


export default Auctions;
