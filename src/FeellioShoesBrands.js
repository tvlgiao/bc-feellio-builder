import React from 'react';
import { SectionConfigLayout } from './utils';
import BaseSectionConfig from './BaseSectionConfig';


class FeellioShoesBrandsFormItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onFormItemChange(event.target.name, event.target.value);
    }

    render() {
        const { img, alt, link } = this.props;
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="img">Image URL</label>
                    <input type="text" className="form-control" id="img" name="img" value={img} onChange={this.handleChange} placeholder="Enter the Brand image URL" />
                </div>
                <div className="form-group">
                    <label htmlFor="alt">Image alt</label>
                    <input type="text" className="form-control" id="alt" name="alt" value={alt} onChange={this.handleChange} placeholder="Enter the image alt text" />
                </div>
                <div className="form-group">
                    <label htmlFor="link">Link</label>
                    <input type="text" className="form-control" id="link" name="link" value={link} onChange={this.handleChange} placeholder="Enter the link URL" />
                </div>
            </form>
        );
    }
}

class FeellioShoesBrandsFormGeneral extends React.Component {
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

class FeellioShoesBrands extends BaseSectionConfig {
    defaultTitle = "Feellio Shoes Brands";
    scopeName = "FeellioShoesBrands";

    constructor(props) {
        super(props);

        this.state = this.getStateFromLocalStorage() || {
            items: [
                { 
                    img: 'https://cdn11.bigcommerce.com/s-l1g1kbqosu/product_images/uploaded_images/feellio-shoes-brand-01.png', 
                    alt: 'feellio-shoes-brand-01.png', 
                    link: '#'
                },
                { 
                    img: 'https://cdn11.bigcommerce.com/s-l1g1kbqosu/product_images/uploaded_images/feellio-shoes-brand-02.png', 
                    alt: 'feellio-shoes-brand-02.png', 
                    link: '#'
                },
                { 
                    img: 'https://cdn11.bigcommerce.com/s-l1g1kbqosu/product_images/uploaded_images/feellio-shoes-brand-03.png', 
                    alt: 'feellio-shoes-brand-03.png', 
                    link: '#'
                },
                { 
                    img: 'https://cdn11.bigcommerce.com/s-l1g1kbqosu/product_images/uploaded_images/feellio-shoes-brand-04.png', 
                    alt: 'feellio-shoes-brand-04.png', 
                    link: '#'
                },
                { 
                    img: 'https://cdn11.bigcommerce.com/s-l1g1kbqosu/product_images/uploaded_images/feellio-shoes-brand-05.png', 
                    alt: 'feellio-shoes-brand-05.png', 
                    link: '#'
                },
                { 
                    img: 'https://cdn11.bigcommerce.com/s-l1g1kbqosu/product_images/uploaded_images/feellio-shoes-brand-03.png', 
                    alt: 'feellio-shoes-brand-03.png', 
                    link: '#'
                },
            ]
        };
    }

    render() {
        const data = Buffer.from(JSON.stringify(this.state)).toString('base64');
        return (
            <SectionConfigLayout elClass="feellioShoesBrands" title={this.title} sectionKey={this.sectionKey}
                panels={[
                    {
                        title: "General",
                        element: <FeellioShoesBrandsFormGeneral onFormGeneralChange={this.onFormGeneralChange} {...this.state} heading={this.state.heading} items_count={this.state.items.length} />,

                    },
                    ...this.state.items.map((item, index) => ({
                        title: `Brand item ${index + 1}`,
                        element: <FeellioShoesBrandsFormItem onFormItemChange={this.onFormItemChange.bind(this, index)} {...item} />,
                    })),
                ]}

                code={`<div class="u-hiddenVisually" data-local-banner-position="feellio-shoes-brands" data-template="feellio_shoes_brands" data-params="${data}">DO NOT REMOVE THIS LINE</div>`}
            />
        );
    }
}

export default FeellioShoesBrands;
