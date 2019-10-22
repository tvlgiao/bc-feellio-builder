import React from 'react';
import { SectionConfigLayout } from './utils';
import BaseSectionConfig from './BaseSectionConfig';

class FeellioFurnitureProductOneGeneral extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onFormGeneralChange(event.target.name, event.target.value);
    }

    render() {
        const { product_id, image_position } = this.props;
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="product_id">Product Id</label>
                    <input type="text" className="form-control" id="product_id" name="product_id" value={product_id} onChange={this.handleChange} placeholder="Enter the product id" />
                </div>
                <div className="form-group">
                    <label htmlFor="image_position">The images position</label>
                    <select id="image_position" name="image_position" className="form-control">
                        <option value="left" selected={image_position === 'left'}>Left</option>
                        <option value="right" selected={image_position === 'right'}>Right</option>
                    </select>
                </div>
            </form>
        );
    }
}

class FeellioFurnitureProductOne extends BaseSectionConfig {
    defaultTitle = "Feellio Furniture Product One";
    scopeName = "FeellioFurnitureProductOne";

    constructor(props) {
        super(props);

        this.state = this.getStateFromLocalStorage() || {
            product_id: '115',
            image_position: 'left'
        };
    }

    render() {
        const data = Buffer.from(JSON.stringify(this.state)).toString('base64');
        return (
            <SectionConfigLayout elClass="feellioFurnitureProductOne" title={this.title} 
                panels={[
                    {
                        title: "General",
                        element: <FeellioFurnitureProductOneGeneral onFormGeneralChange={this.onFormGeneralChange} {...this.state} heading={this.state.heading}/>,

                    }
                ]}

                code={`<div class="u-hiddenVisually" data-local-banner-position="feellio-furniture-product-one" data-template="feellio_furniture_product_one" data-params="${data}">DO NOT REMOVE THIS LINE</div>`}
            />
        );
    }
}

export default FeellioFurnitureProductOne;
