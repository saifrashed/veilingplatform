import React, {Component} from 'react';
import {connect} from 'react-redux';
import Product from "../../components/Product/Product";

import {orderByFilter} from "../../pipes/orderByFilter";
import {paginationPipe} from "../../pipes/paginationFilter";
import Pagination from "../../components/Pagination/Pagination";

class ProductList extends Component {

    state = {
        perPage:     12,
        currentPage: 1,
        pagesToShow: 3,
    };


    onPrev = () => {
        const updatedState       = {...this.state};
        updatedState.currentPage = this.state.currentPage - 1;
        this.setState(updatedState);
    };


    onNext = () => {
        this.setState({
            ...this.state,
            currentPage: this.state.currentPage + 1
        });
    };

    goPage = (n) => {
        this.setState({
            ...this.state,
            currentPage: n
        });
    };


    render() {

        console.log(this.props.products);

        return (
            <div className="col-lg-9">
                <div className="row">
                    {paginationPipe(this.props.products, this.state).map(product => {
                        let classes = "col-lg-6 col-md-6 mb-4";
                        return (<div className={classes}>
                            <Product key={product.id} product={product}/>
                        </div>)
                    })}
                </div>
                <div className="d-flex justify-content-end">
                    <Pagination
                        totalItemsCount={this.props.products.length}
                        currentPage={this.state.currentPage}
                        perPage={this.state.perPage}
                        pagesToShow={this.state.pagesToShow}
                        onGoPage={this.goPage}
                        onPrevPage={this.onPrev}
                        onNextPage={this.onNext}
                    />
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    const orderBy = state.filterData.orderBy;

    return {products: orderByFilter(state.auctionData.products, orderBy)}
};

export default connect(mapStateToProps, null)(ProductList);
