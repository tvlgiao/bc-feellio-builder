import React from 'react';
import { SectionConfigLayout } from './utils';
import BaseSectionConfig from './BaseSectionConfig';


class FeellioFurnitureFeaturedFormItem extends React.Component {
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

class FeellioFurnitureFeaturedFormGeneral extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onFormGeneralChange(event.target.name, event.target.value);
    }

    render() {
        const { title, desc, action_text, action_link, items_count } = this.props;
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input type="text" className="form-control" id="title" name="title" value={title} onChange={this.handleChange} placeholder="Enter the title text" />
                </div>
                <div className="form-group">
                    <label htmlFor="desc">Description</label>
                    <input type="text" className="form-control" id="desc" name="desc" value={desc} onChange={this.handleChange} placeholder="Enter the description" />
                </div>
                <div className="form-group">
                    <label htmlFor="action_text">Button text</label>
                    <input type="text" className="form-control" id="action_text" name="action_text" value={action_text} onChange={this.handleChange} placeholder="Enter the button text" />
                </div>
                <div className="form-group">
                    <label htmlFor="action_link">Button link</label>
                    <input type="text" className="form-control" id="action_link" name="action_link" value={action_link} onChange={this.handleChange} placeholder="Enter the button link" />
                </div>
                <div className="form-group">
                    <label htmlFor="items_count">Number of image items</label>
                    <input type="number" min="0" max="100" className="form-control" id="items_count" name="items_count" value={items_count} onChange={this.handleChange} placeholder="Enter number of image items" />
                </div>
            </form>
        );
    }
}

class FeellioFurnitureFeatured extends BaseSectionConfig {
    defaultTitle = "Feellio Furniture Featured";
    scopeName = "FeellioFurnitureFeatured";

    constructor(props) {
        super(props);

        this.state = this.getStateFromLocalStorage() || {
            title: `Featured<br><strong>Items</strong>`,
            desc: 'The iconic Adelaide chair is all about curves, comfort and character. With a graceful, organic form and sublime comfort this modern chair will set ...',
            action_text: 'See all items',
            action_link: '#',
            items: [
                { 
                    img: 'https://cdn11.bigcommerce.com/s-n9ulo8j4yj/product_images/uploaded_images/feellio-furniture-banner-01.jpg', 
                    alt: 'feellio-furniture-banner-01.jpg', 
                },
                { 
                    img: 'https://cdn11.bigcommerce.com/s-n9ulo8j4yj/product_images/uploaded_images/feellio-furniture-banner-02.jpg', 
                    alt: 'feellio-furniture-banner-02.jpg', 
                },
                { 
                    img: 'https://cdn11.bigcommerce.com/s-n9ulo8j4yj/product_images/uploaded_images/feellio-furniture-banner-03.jpg', 
                    alt: 'feellio-furniture-banner-03.jpg', 
                },
            ]
        };
    }

    render() {
        const data = Buffer.from(JSON.stringify(this.state)).toString('base64');
        return (
            <SectionConfigLayout elClass="feellioFurnitureFeatured" title={this.title} sectionKey={this.sectionKey}
                panels={[
                    {
                        title: "General",
                        element: <FeellioFurnitureFeaturedFormGeneral onFormGeneralChange={this.onFormGeneralChange} {...this.state} heading={this.state.heading} items_count={this.state.items.length} />,

                    },
                    ...this.state.items.map((item, index) => ({
                        title: `image item ${index + 1}`,
                        element: <FeellioFurnitureFeaturedFormItem onFormItemChange={this.onFormItemChange.bind(this, index)} {...item} />,
                    })),
                ]}

                code={`<div class="u-hiddenVisually" data-local-banner-position="feellio-furniture-featured" data-template="feellio_furniture_featured" data-params="${data}">DO NOT REMOVE THIS LINE</div>`}
            />
        );
    }
}

export default FeellioFurnitureFeatured;
