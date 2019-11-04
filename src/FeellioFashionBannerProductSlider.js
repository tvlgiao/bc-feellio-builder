import React from 'react';
import { SectionConfigLayout } from './utils';
import BaseSectionConfig from './BaseSectionConfig';


class FeellioFashionBannerProductSliderFormItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onFormItemChange(event.target.name, event.target.value);
    }

    render() {
        const { img, title, price, link } = this.props;
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="img">Image URL</label>
                    <input type="text" className="form-control" id="img" name="img" value={img} onChange={this.handleChange} placeholder="Enter the catalogue image URL" />
                </div>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input type="text" className="form-control" id="title" name="title" value={title} onChange={this.handleChange} placeholder="Enter the title text" />
                </div>
                <div className="form-group">
                    <label htmlFor="price">Price</label>
                    <input type="text" className="form-control" id="price" name="price" value={price} onChange={this.handleChange} placeholder="Enter the price text" />
                </div>
                <div className="form-group">
                    <label htmlFor="link">Link</label>
                    <input type="text" className="form-control" id="link" name="link" value={link} onChange={this.handleChange} placeholder="Enter the link URL" />
                </div>
            </form>
        );
    }
}

class FeellioFashionBannerProductSliderFormGeneral extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onFormGeneralChange(event.target.name, event.target.value);
    }

    render() {
        const { items_count, background, heading, actionText, actionLink } = this.props;
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="background">Background image URL</label>
                    <input type="text" className="form-control" id="background" name="background" value={background} onChange={this.handleChange} placeholder="Enter the background image Url" />
                </div>y
                
                <div className="form-group">
                    <label htmlFor="heading">Heading</label>
                    <input type="text" className="form-control" id="heading" name="heading" value={heading} onChange={this.handleChange} placeholder="Enter the heading text" />
                </div>
                <div className="form-group">
                    <label htmlFor="actionText">Action text</label>
                    <textarea type="text" className="form-control" id="actionText" name="actionText" value={actionText} onChange={this.handleChange} placeholder="Enter the action text" />
                </div>
                <div className="form-group">
                    <label htmlFor="actionLink">Action link</label>
                    <textarea type="text" className="form-control" id="actionLink" name="actionLink" value={actionLink} onChange={this.handleChange} placeholder="Enter the action link" />
                </div>
                <div className="form-group">
                    <label htmlFor="items_count">Number of banner items</label>
                    <input type="number" min="0" max="100" className="form-control" id="items_count" name="items_count" value={items_count} onChange={this.handleChange} placeholder="Enter number of banner items" />
                </div>
            </form>
        );
    }
}

class FeellioFashionBannerProductSlider extends BaseSectionConfig {
    defaultTitle = "Feellio Fashion Banner Product Slider";
    scopeName = "FeellioFashionBannerProductSlider";

    constructor(props) {
        super(props);

        this.state = this.getStateFromLocalStorage() || {
            background: 'https://cdn11.bigcommerce.com/s-z57ig2u8p0/product_images/uploaded_images/feellio-fashion-banner-product-slider-bg.jpg',
            heading: `Women's Dresses For <br> Every Moment`,
            actionText: 'See Whole Collection',
            actionLink: '#',
            items: [
                { 
                    img: 'https://cdn11.bigcommerce.com/s-z57ig2u8p0/product_images/uploaded_images/feellio-fashion-banner-product-slider-01.jpg', 
                    title: 'New Product', 
                    price: '$299',
                    link: '#'
                },
                { 
                    img: 'https://cdn11.bigcommerce.com/s-z57ig2u8p0/product_images/uploaded_images/feellio-fashion-banner-product-slider-02.jpg', 
                    title: 'New Product', 
                    price: '$299',
                    link: '#'
                },
                { 
                    img: 'https://cdn11.bigcommerce.com/s-z57ig2u8p0/product_images/uploaded_images/feellio-fashion-banner-product-slider-03.jpg', 
                    title: 'New Product', 
                    price: '$299',
                    link: '#'
                },
            ]
        };
    }

    render() {
        const data = Buffer.from(JSON.stringify(this.state)).toString('base64');
        return (
            <SectionConfigLayout elClass="feellioFashionBannerProductSlider" title={this.title} sectionKey={this.sectionKey} 
                panels={[
                    {
                        title: "General",
                        element: <FeellioFashionBannerProductSliderFormGeneral onFormGeneralChange={this.onFormGeneralChange} {...this.state} heading={this.state.heading} items_count={this.state.items.length} />,

                    },
                    ...this.state.items.map((item, index) => ({
                        title: `Banner item ${index + 1}`,
                        element: <FeellioFashionBannerProductSliderFormItem onFormItemChange={this.onFormItemChange.bind(this, index)} {...item} />,
                    })),
                ]}

                code={`<div class="u-hiddenVisually" data-local-banner-position="feellio-fashion-banner-product-slider" data-template="feellio_fashion_banner_product_slider" data-params="${data}">DO NOT REMOVE THIS LINE</div>`}
            />
        );
    }
}

export default FeellioFashionBannerProductSlider;
