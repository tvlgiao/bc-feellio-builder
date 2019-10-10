import React from 'react';
import { SectionConfigLayout } from './utils';
import BaseSectionConfig from './BaseSectionConfig';

class FeellioFurnitureProductNewFormGenneral extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onFormGeneralChange(event.target.name, event.target.value);
    }

    render() {
        const { img, name, desc, price, action_text, action_link } = this.props;
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="img">Product image</label>
                    <input type="text" className="form-control" id="img" name="img" value={img} onChange={this.handleChange} placeholder="Enter the product image url" />
                </div>
                <div className="form-group">
                    <label htmlFor="name">Product name</label>
                    <input type="text" className="form-control" id="name" name="name" value={name} onChange={this.handleChange} placeholder="Enter the product name" />
                </div>
                <div className="form-group">
                    <label htmlFor="desc">Product description</label>
                    <input type="text" className="form-control" id="desc" name="desc" value={desc} onChange={this.handleChange} placeholder="Enter the product description" />
                </div>
                <div className="form-group">
                    <label htmlFor="price">Price</label>
                    <input type="text" className="form-control" id="price" name="price" value={price} onChange={this.handleChange} placeholder="Enter the product price" />
                </div>
                <div className="form-group">
                    <label htmlFor="action_text">Button text</label>
                    <input type="text" className="form-control" id="action_text" name="action_text" value={action_text} onChange={this.handleChange} placeholder="Enter the button text" />
                </div>
                <div className="form-group">
                    <label htmlFor="action_link">Button link</label>
                    <input type="text" className="form-control" id="action_link" name="action_link" value={action_link} onChange={this.handleChange} placeholder="Enter the button link" />
                </div>
            </form>
        );
    }
}

class FeellioFurnitureProductNew extends BaseSectionConfig {
    defaultTitle = "Feellio Furniture Product New";
    scopeName = "FeellioFurnitureProductNew";

    constructor(props) {
        super(props);

        this.state = this.getStateFromLocalStorage() || {
            img: 'https://cdn11.bigcommerce.com/s-n9ulo8j4yj/product_images/uploaded_images/feellio-furniture-banner-10.jpg',
            name: 'Table Lamp',
            desc: `<p>New designs have just made their way to your local store. With exiting new functionalities, new materials and eye-catching designs.</p>
            <p>Explore the thrilling new Amsterdam sofa and many more exciting news here ...</p>`,
            price: '$64.60',
            action_text: 'EXPLORE THE NEWS',
            action_link: '#',
        };
    }

    render() {
        const data = Buffer.from(JSON.stringify(this.state)).toString('base64');
        return (
            <SectionConfigLayout elClass="feellioFurnitureProductNew" title={this.title} 
                panels={[
                    {
                        title: 'Genneral',
                        element: <FeellioFurnitureProductNewFormGenneral onFormGeneralChange={this.onFormGeneralChange} {...this.state} />,
                    },
                ]}

                code={`<div class="u-hiddenVisually" data-local-banner-position="feellio-furniture-product-new" data-template="feellio_furniture_product_new" data-params="${data}">DO NOT REMOVE THIS LINE</div>`}
            />
        );
    }
}

export default FeellioFurnitureProductNew;
