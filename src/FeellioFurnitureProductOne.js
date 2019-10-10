import React from 'react';
import { SectionConfigLayout } from './utils';
import BaseSectionConfig from './BaseSectionConfig';


class FeellioFurnitureProductOneFormItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onFormItemChange(event.target.name, event.target.value);
    }

    render() {
        const { img, alt } = this.props;
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="img">Product Image URL</label>
                    <input type="text" className="form-control" id="img" name="img" value={img} onChange={this.handleChange} placeholder="Enter the product image URL" />
                </div>
                <div className="form-group">
                    <label htmlFor="alt">Product image alt</label>
                    <input type="text" className="form-control" id="alt" name="alt" value={alt} onChange={this.handleChange} placeholder="Enter the product image alt" />
                </div>
            </form>
        );
    }
}

class FeellioFurnitureProductOneGeneral extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onFormGeneralChange(event.target.name, event.target.value);
    }

    render() {
        const { name, link, price, price_old, image_position, items_count } = this.props;
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="name">Product name</label>
                    <input type="text" className="form-control" id="name" name="name" value={name} onChange={this.handleChange} placeholder="Enter the product name" />
                </div>
                <div className="form-group">
                    <label htmlFor="link">Product link</label>
                    <input type="text" className="form-control" id="link" name="link" value={link} onChange={this.handleChange} placeholder="Enter the product link" />
                </div>
                <div className="form-group">
                    <label htmlFor="price">Product price</label>
                    <input type="text" className="form-control" id="price" name="price" value={price} onChange={this.handleChange} placeholder="Enter the product price" />
                </div>
                <div className="form-group">
                    <label htmlFor="price_old">Product Price old</label>
                    <input type="text" className="form-control" id="price_old" name="price_old" value={price_old} onChange={this.handleChange} placeholder="Enter the product Price old" />
                </div>
                <div className="form-group">
                    <label htmlFor="image_position">The images position</label>
                    <select id="image_position" name="image_position" className="form-control">
                        <option value="left" selected={image_position === 'left'}>Left</option>
                        <option value="right" selected={image_position === 'right'}>Right</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="items_count">Number of image items</label>
                    <input type="number" min="0" max="100" className="form-control" id="items_count" name="items_count" value={items_count} onChange={this.handleChange} placeholder="Enter number of image items" />
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
            name: 'Curabitur cursus dignis',
            link: '#',
            price: '$259.00',
            price_old: '$300.00',
            image_position: 'left',
            items: [
                { 
                    img: 'https://cdn11.bigcommerce.com/s-n9ulo8j4yj/product_images/uploaded_images/feellio-furniture-banner-04.jpg', 
                    alt: 'feellio-furniture-banner-04.jpg', 
                },
                { 
                    img: 'https://cdn11.bigcommerce.com/s-n9ulo8j4yj/product_images/uploaded_images/feellio-furniture-banner-05.jpg', 
                    alt: 'feellio-furniture-banner-05.jpg', 
                },
                { 
                    img: 'https://cdn11.bigcommerce.com/s-n9ulo8j4yj/product_images/uploaded_images/feellio-furniture-banner-06.jpg', 
                    alt: 'feellio-furniture-banner-06.jpg', 
                },
            ]
        };
    }

    render() {
        const data = Buffer.from(JSON.stringify(this.state)).toString('base64');
        return (
            <SectionConfigLayout elClass="feellioFurnitureProductOne" title={this.title} 
                panels={[
                    {
                        title: "General",
                        element: <FeellioFurnitureProductOneGeneral onFormGeneralChange={this.onFormGeneralChange} {...this.state} heading={this.state.heading} items_count={this.state.items.length} />,

                    },
                    ...this.state.items.map((item, index) => ({
                        title: `Product image item ${index + 1}`,
                        element: <FeellioFurnitureProductOneFormItem onFormItemChange={this.onFormItemChange.bind(this, index)} {...item} />,
                    })),
                ]}

                code={`<div class="u-hiddenVisually" data-local-banner-position="feellio-furniture-product-one" data-template="feellio_furniture_product_one" data-params="${data}">DO NOT REMOVE THIS LINE</div>`}
            />
        );
    }
}

export default FeellioFurnitureProductOne;
