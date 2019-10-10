import React from 'react';
import { SectionConfigLayout } from './utils';
import BaseSectionConfig from './BaseSectionConfig';


class FeellioFlowersAboutUsFormItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onFormItemChange(event.target.name, event.target.value);
    }

    render() {
        const { img, title, content } = this.props;
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="img">Image URL</label>
                    <input type="text" className="form-control" id="img" name="img" value={img} onChange={this.handleChange} placeholder="Enter the image URL" />
                </div>
                <div className="form-group">
                    <label htmlFor="title">Title text</label>
                    <input type="text" className="form-control" id="title" name="title" value={title} onChange={this.handleChange} placeholder="Enter the title text" />
                </div>
                <div className="form-group">
                    <label htmlFor="content">Content text</label>
                    <input type="text" className="form-control" id="content" name="content" value={content} onChange={this.handleChange} placeholder="Enter content text" />
                </div>
            </form>
        );
    }
}

class FeellioFlowersAboutUsFormGeneral extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onFormGeneralChange(event.target.name, event.target.value);
    }

    render() {
        const { img, heading, subheading, desc, items_count } = this.props;
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="img">Heading icon URL</label>
                    <input type="text" className="form-control" id="img" name="img" value={img} onChange={this.handleChange} placeholder="Enter the heading icon URL" />
                </div>
                <div className="form-group">
                    <label htmlFor="heading">Heading text</label>
                    <input type="text" className="form-control" id="heading" name="heading" value={heading} onChange={this.handleChange} placeholder="Enter the heading text" />
                </div>
                <div className="form-group">
                    <label htmlFor="subheading">Sub heading text</label>
                    <input type="text" className="form-control" id="subheading" name="subheading" value={subheading} onChange={this.handleChange} placeholder="Enter the sub heading text" />
                </div>
                <div className="form-group">
                    <label htmlFor="desc">Description</label>
                    <input type="text" className="form-control" id="desc" name="desc" value={desc} onChange={this.handleChange} placeholder="Enter the desctiption text" />
                </div>
                <div className="form-group">
                    <label htmlFor="items_count">Number of About us items</label>
                    <input type="number" min="0" max="100" className="form-control" id="items_count" name="items_count" value={items_count} onChange={this.handleChange} placeholder="Enter number of about us items" />
                </div>
            </form>
        );
    }
}

class FeellioFlowersAboutUs extends BaseSectionConfig {
    defaultTitle = "Feellio Flowers About us";
    scopeName = "FeellioFlowersAboutUs";

    constructor(props) {
        super(props);

        this.state = this.getStateFromLocalStorage() || {
            img: 'https://cdn11.bigcommerce.com/s-agzbp14fso/product_images/uploaded_images/feellio-flowers-section-about-us-title-icon.jpg',
            heading: 'About us',
            subheading: '- Shopping process with our team -',
            desc: 'We love flowers and we want more people to share our passion for flowers by being able to have them affordably in their homes. We are all about sharing the love, so order with us today and help us spread yours!',
            items: [
                { 
                    img: 'https://cdn11.bigcommerce.com/s-agzbp14fso/product_images/uploaded_images/feellio-flowers-about-us-image-01.jpg', 
                    title: 'Choose your flowers', 
                    content: 'At The Flower Web we pride ourselves on delivering the freshest flowers, 6 days a week across Adelaide...'
                },
                { 
                    img: 'https://cdn11.bigcommerce.com/s-agzbp14fso/product_images/uploaded_images/feellio-flowers-about-us-image-02.jpg', 
                    title: 'Wrapping', 
                    content: 'All products come beautifully wrapped in our signature brown paper with The Flower Web detailing and acts as a beautiful...'
                },
                { 
                    img: 'https://cdn11.bigcommerce.com/s-agzbp14fso/product_images/uploaded_images/feellio-flowers-about-us-image-03.jpg', 
                    title: 'Checkout & Delivery', 
                    content: 'If you would like your order to be delivered the next day (Monday – Saturday), it must be placed before 5.30pm (ACST)...'
                },
            ]
        };
    }

    render() {
        const data = Buffer.from(JSON.stringify(this.state)).toString('base64');
        return (
            <SectionConfigLayout elClass="feellioFlowersAboutUs" title={this.title} 
                panels={[
                    {
                        title: "General",
                        element: <FeellioFlowersAboutUsFormGeneral onFormGeneralChange={this.onFormGeneralChange} {...this.state} heading={this.state.heading} items_count={this.state.items.length} />,

                    },
                    ...this.state.items.map((item, index) => ({
                        title: `About us item ${index + 1}`,
                        element: <FeellioFlowersAboutUsFormItem onFormItemChange={this.onFormItemChange.bind(this, index)} {...item} />,
                    })),
                ]}

                code={`<div class="u-hiddenVisually" data-local-banner-position="feellio-flowers-about-us" data-template="feellio_flowers_about_us" data-params="${data}">DO NOT REMOVE THIS LINE</div>`}
            />
        );
    }
}

export default FeellioFlowersAboutUs;
