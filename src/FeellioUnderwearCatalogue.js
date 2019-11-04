import React from 'react';
import { SectionConfigLayout } from './utils';
import BaseSectionConfig from './BaseSectionConfig';


class FeellioUnderwearCatalogueFormItem extends React.Component {
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
                    <input type="text" className="form-control" id="img" name="img" value={img} onChange={this.handleChange} placeholder="Enter the catalogue image URL" />
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

class FeellioUnderwearCatalogueFormGeneral extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onFormGeneralChange(event.target.name, event.target.value);
    }

    render() {
        const { items_count, heading, subheading, desc, actionText, actionLink } = this.props;
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="heading">Heading</label>
                    <input type="text" className="form-control" id="heading" name="heading" value={heading} onChange={this.handleChange} placeholder="Enter the heading text" />
                </div>
                <div className="form-group">
                    <label htmlFor="subheading">Sub Heading</label>
                    <input type="text" className="form-control" id="subheading" name="subheading" value={subheading} onChange={this.handleChange} placeholder="Enter the sub heading text" />
                </div>
                <div className="form-group">
                    <label htmlFor="desc">Description</label>
                    <textarea type="text" className="form-control" id="desc" name="desc" value={desc} onChange={this.handleChange} placeholder="Enter the description text" />
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
                    <label htmlFor="items_count">Number of catalogue items</label>
                    <input type="number" min="0" max="100" className="form-control" id="items_count" name="items_count" value={items_count} onChange={this.handleChange} placeholder="Enter number of catalogue items" />
                </div>
            </form>
        );
    }
}

class FeellioUnderwearCatalogue extends BaseSectionConfig {
    defaultTitle = "Feellio Underwear Catalogue";
    scopeName = "FeellioUnderwearCatalogue";

    constructor(props) {
        super(props);

        this.state = this.getStateFromLocalStorage() || {
            heading: 'Fresh for fall',
            subheading: 'Pajamas and clothes for home',
            desc: 'Satin and lace details are perfectly combined with a classic cut and thin straps.',
            actionText: '',
            actionLink: '',
            items: [
                { 
                    img: 'https://cdn11.bigcommerce.com/s-vml4wdqe4n/product_images/uploaded_images/feellio-underwear-catalogue-01.jpg', 
                    title: 'Pajamas', 
                    link: '#'
                },
                { 
                    img: 'https://cdn11.bigcommerce.com/s-vml4wdqe4n/product_images/uploaded_images/feellio-underwear-catalogue-02.jpg', 
                    title: 'Bathrobes', 
                    link: '#'
                },
                { 
                    img: 'https://cdn11.bigcommerce.com/s-vml4wdqe4n/product_images/uploaded_images/feellio-underwear-catalogue-03.jpg', 
                    title: 'Knitwear', 
                    link: '#'
                },
                { 
                    img: 'https://cdn11.bigcommerce.com/s-vml4wdqe4n/product_images/uploaded_images/feellio-underwear-catalogue-04.jpg', 
                    title: 'Nightshirts', 
                    link: '#'
                },
                { 
                    img: 'https://cdn11.bigcommerce.com/s-vml4wdqe4n/product_images/uploaded_images/feellio-underwear-catalogue-03.jpg', 
                    title: 'Knitwear', 
                    link: '#'
                },
            ]
        };
    }

    render() {
        const data = Buffer.from(JSON.stringify(this.state)).toString('base64');
        return (
            <SectionConfigLayout elClass="FeellioUnderwearCatalogue" title={this.title} sectionKey={this.sectionKey}
                panels={[
                    {
                        title: "General",
                        element: <FeellioUnderwearCatalogueFormGeneral onFormGeneralChange={this.onFormGeneralChange} {...this.state} heading={this.state.heading} items_count={this.state.items.length} />,

                    },
                    ...this.state.items.map((item, index) => ({
                        title: `Catalogue item ${index + 1}`,
                        element: <FeellioUnderwearCatalogueFormItem onFormItemChange={this.onFormItemChange.bind(this, index)} {...item} />,
                    })),
                ]}

                code={`<div class="u-hiddenVisually" data-local-banner-position="feellio-underwear-catalogue" data-template="feellio_underwear_catalogue" data-params="${data}">DO NOT REMOVE THIS LINE</div>`}
            />
        );
    }
}

export default FeellioUnderwearCatalogue;
