import React from 'react';
import { SectionConfigLayout } from './utils';
import BaseSectionConfig from './BaseSectionConfig';


class FeellioUnderwearBrandsFormItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onFormItemChange(event.target.name, event.target.value);
    }

    render() {
        const { img, title, link } = this.props;
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="img">Image URL</label>
                    <input type="text" className="form-control" id="img" name="img" value={img} onChange={this.handleChange} placeholder="Enter the Brand image URL" />
                </div>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input type="text" className="form-control" id="title" name="title" value={title} onChange={this.handleChange} placeholder="Enter the title text" />
                </div>
                <div className="form-group">
                    <label htmlFor="link">Link</label>
                    <input type="text" className="form-control" id="link" name="link" value={link} onChange={this.handleChange} placeholder="Enter the link URL" />
                </div>
            </form>
        );
    }
}

class FeellioUnderwearBrandsFormGeneral extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onFormGeneralChange(event.target.name, event.target.value);
    }

    render() {
        const { items_count } = this.props;
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="items_count">Number of brand items</label>
                    <input type="number" min="0" max="100" className="form-control" id="items_count" name="items_count" value={items_count} onChange={this.handleChange} placeholder="Enter number of brand items" />
                </div>
            </form>
        );
    }
}

class FeellioUnderwearBrands extends BaseSectionConfig {
    defaultTitle = "Feellio Underwear Brands";
    scopeName = "FeellioUnderwearBrands";

    constructor(props) {
        super(props);

        this.state = this.getStateFromLocalStorage() || {
            items: [
                { 
                    img: 'https://cdn11.bigcommerce.com/s-vml4wdqe4n/product_images/uploaded_images/feellio-brand-01.png', 
                    title: 'feellio brand 01', 
                    link: '#'
                },
                { 
                    img: 'https://cdn11.bigcommerce.com/s-vml4wdqe4n/product_images/uploaded_images/feellio-brand-02.png', 
                    title: 'feellio brand 02', 
                    link: '#'
                },
                { 
                    img: 'https://cdn11.bigcommerce.com/s-vml4wdqe4n/product_images/uploaded_images/feellio-brand-03.png', 
                    title: 'feellio brand 03', 
                    link: '#'
                },
                { 
                    img: 'https://cdn11.bigcommerce.com/s-vml4wdqe4n/product_images/uploaded_images/feellio-brand-04.png', 
                    title: 'feellio brand 04', 
                    link: '#'
                },
                { 
                    img: 'https://cdn11.bigcommerce.com/s-vml4wdqe4n/product_images/uploaded_images/feellio-brand-05.png', 
                    title: 'feellio brand 05', 
                    link: '#'
                },
                { 
                    img: 'https://cdn11.bigcommerce.com/s-vml4wdqe4n/product_images/uploaded_images/feellio-brand-06.png', 
                    title: 'feellio brand 06', 
                    link: '#'
                },
                { 
                    img: 'https://cdn11.bigcommerce.com/s-vml4wdqe4n/product_images/uploaded_images/feellio-brand-07.png', 
                    title: 'feellio brand 07', 
                    link: '#'
                },
            ]
        };
    }

    render() {
        const data = Buffer.from(JSON.stringify(this.state)).toString('base64');
        return (
            <SectionConfigLayout elClass="feellioUnderwearBrands" title={this.title} 
                panels={[
                    {
                        title: "General",
                        element: <FeellioUnderwearBrandsFormGeneral onFormGeneralChange={this.onFormGeneralChange} {...this.state} heading={this.state.heading} items_count={this.state.items.length} />,

                    },
                    ...this.state.items.map((item, index) => ({
                        title: `Brand item ${index + 1}`,
                        element: <FeellioUnderwearBrandsFormItem onFormItemChange={this.onFormItemChange.bind(this, index)} {...item} />,
                    })),
                ]}

                code={`<div class="u-hiddenVisually" data-local-banner-position="feellio-underwear-brands" data-template="feellio_underwear_brands" data-params="${data}">DO NOT REMOVE THIS LINE</div>`}
            />
        );
    }
}

export default FeellioUnderwearBrands;
