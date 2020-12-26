import React from 'react';
import {connect} from 'react-redux';
import './SubCategoryFilter.scss';
import {brands} from "../../data/brands";


const SubCategoryFilter = (props) => {

    const {dispatch, brandItemsCount} = props;
    const handleSelectBox             = (e) => {
        const name  = e.target.name;
        const value = e.target.checked;

        if (e.target.checked) {
            console.log("clicked")
        } else {
            console.log("clicked")
        }
    };


    return (
        <div className="card mt-3">
            <div className="card-header">
                <h3>Brands</h3>
            </div>
            <ul className="list-group flex-row flex-wrap">
                {brands.map(brand => (
                    <li className="list-group-item flex-50">
                        <label className="custom-checkbox text-capitalize"> {brand} ({brandItemsCount[brand]})
                            <input type="checkbox"
                                   name={brand}
                                   className="custom-checkbox__input" onInput={handleSelectBox}/>
                            <span className="custom-checkbox__span"></span>
                        </label>
                    </li>
                ))}
            </ul>
        </div>
    );

};

const mapStateToProps = (state) => {

    const brandItemsCount = {};

    state.auctionData.products.forEach(p => {
        brandItemsCount[p.brand] = brandItemsCount[p.brand] + 1 || 1;
    });


    return {
        brandItemsCount
    }

};

export default connect(mapStateToProps)(SubCategoryFilter);
