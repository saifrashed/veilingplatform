import React, {Component} from 'react';
import SubCategoryFilter from "../../components/SubCategoryFilter/SubCategoryFilter";
import OrderFilter from "../../components/OrderFilter/OrderFilter";

class FilterBar extends Component {
    render() {
        return (
            <div className="col-lg-3">
                <div className="row">
                    <div className="col-12">
                        <OrderFilter/>
                    </div>
                    <div className="col-12">
                        <SubCategoryFilter/>
                    </div>
                </div>
            </div>
        );
    }
}

export default FilterBar;
