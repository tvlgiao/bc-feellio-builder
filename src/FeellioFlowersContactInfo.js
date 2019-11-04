import React from 'react';
import { SectionConfigLayout } from './utils';
import BaseSectionConfig from './BaseSectionConfig';


class FeellioFlowersContactInfoFormItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onFormItemChange(event.target.name, event.target.value);
    }

    render() {
        const { img, alt, title, link } = this.props;
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="img">Image URL</label>
                    <input type="text" className="form-control" id="img" name="img" value={img} onChange={this.handleChange} placeholder="Enter the image URL" />
                </div>
                <div className="form-group">
                    <label htmlFor="alt">Image alt text</label>
                    <input type="text" className="form-control" id="alt" name="alt" value={alt} onChange={this.handleChange} placeholder="Enter the image alt text" />
                </div>
                <div className="form-group">
                    <label htmlFor="title">Title text</label>
                    <input type="text" className="form-control" id="title" name="title" value={title} onChange={this.handleChange} placeholder="Enter the title text" />
                </div>
                <div className="form-group">
                    <label htmlFor="link">Action link</label>
                    <input type="text" className="form-control" id="link" name="link" value={link} onChange={this.handleChange} placeholder="Enter the action link" />
                </div>
            </form>
        );
    }
}

class FeellioFlowersContactInfoFormGeneral extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onFormGeneralChange(event.target.name, event.target.value);
    }

    render() {
        const { items_count, background, contactFormHeading, contactFormSubHeading, aboutHeading, aboutSubHeading, contactDetailHeading, contactDetailSubHeading } = this.props;
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="background">Background image URL</label>
                    <input type="text" className="form-control" id="background" name="background" value={background} onChange={this.handleChange} placeholder="Enter the background image URL" />
                </div>
                <div className="form-group">
                    <label htmlFor="contactFormHeading">Contact form heading text</label>
                    <input type="text" className="form-control" id="contactFormHeading" name="contactFormHeading" value={contactFormHeading} onChange={this.handleChange} placeholder="Enter the contact form heading text" />
                </div>
                <div className="form-group">
                    <label htmlFor="contactFormSubHeading">Contact form sub heading text</label>
                    <input type="text" className="form-control" id="contactFormSubHeading" name="contactFormSubHeading" value={contactFormSubHeading} onChange={this.handleChange} placeholder="Enter the contact form sub heading text" />
                </div>
                <div className="form-group">
                    <label htmlFor="aboutHeading">About heading text</label>
                    <input type="text" className="form-control" id="aboutHeading" name="aboutHeading" value={aboutHeading} onChange={this.handleChange} placeholder="Enter the About heading text" />
                </div>
                <div className="form-group">
                    <label htmlFor="aboutSubHeading">About sub heading text</label>
                    <input type="text" className="form-control" id="aboutSubHeading" name="aboutSubHeading" value={aboutSubHeading} onChange={this.handleChange} placeholder="Enter the About sub heading text" />
                </div>
                <div className="form-group">
                    <label htmlFor="contactDetailHeading">Contact detail heading text</label>
                    <input type="text" className="form-control" id="contactDetailHeading" name="contactDetailHeading" value={contactDetailHeading} onChange={this.handleChange} placeholder="Enter the contact detail heading text" />
                </div>
                <div className="form-group">
                    <label htmlFor="contactDetailSubHeading">Contact detail sub heading text</label>
                    <input type="text" className="form-control" id="contactDetailSubHeading" name="contactDetailSubHeading" value={contactDetailSubHeading} onChange={this.handleChange} placeholder="Enter the contact detail sub heading text" />
                </div>
                <div className="form-group">
                    <label htmlFor="items_count">Number of Contact detail items</label>
                    <input type="number" min="0" max="100" className="form-control" id="items_count" name="items_count" value={items_count} onChange={this.handleChange} placeholder="Enter number of contact detail items" />
                </div>
            </form>
        );
    }
}

class FeellioFlowersContactInfo extends BaseSectionConfig {
    defaultTitle = "Feellio Flowers Contact Info";
    scopeName = "FeellioFlowersContactInfo";

    constructor(props) {
        super(props);

        this.state = this.getStateFromLocalStorage() || {
            background: 'https://cdn11.bigcommerce.com/s-agzbp14fso/product_images/uploaded_images/feellio-flowers-section-contact-bg.jpg', 
            contactFormHeading: 'CONTACT FORM', 
            contactFormSubHeading: `We'd love to help you with all your floral needs!`, 
            aboutHeading: 'ABOUT OUR SHOP', 
            aboutSubHeading: `<p>At The Flower Web we pride ourselves on delivering the freshest flowers, 6 days a week across Adelaide. You can order ahead, or take advantage of our reliable, same day delivery service.</p>
            <p>We are all about sharing the love, so order with us today and help us spread yours!</p>`, 
            contactDetailHeading: 'CONTACT DETAILS', 
            contactDetailSubHeading: '',
            items: [
                { 
                    img: 'https://cdn11.bigcommerce.com/s-agzbp14fso/product_images/uploaded_images/feellio-flowers-contact-icon-01.png', 
                    alt: 'feellio-flowers-contact-icon-01.png', 
                    title: '+61 (8) 8271-8325', 
                    link: '#',
                },
                { 
                    img: 'https://cdn11.bigcommerce.com/s-agzbp14fso/product_images/uploaded_images/feellio-flowers-contact-icon-03.png', 
                    alt: 'feellio-flowers-contact-icon-03.png', 
                    title: 'info@theflowerweb.com', 
                    link: '#',
                },
                { 
                    img: 'https://cdn11.bigcommerce.com/s-agzbp14fso/product_images/uploaded_images/feellio-flowers-contact-icon-02.png', 
                    alt: 'feellio-flowers-contact-icon-02.png', 
                    title: 'Visit any of our stores in Adelaide', 
                    link: '#',
                },
                { 
                    img: 'https://cdn11.bigcommerce.com/s-agzbp14fso/product_images/uploaded_images/feellio-flowers-contact-icon-04.png', 
                    alt: 'feellio-flowers-contact-icon-04.png', 
                    title: 'Delivery information', 
                    link: '#',
                },
            ]
        };
    }

    render() {
        const data = Buffer.from(JSON.stringify(this.state)).toString('base64');
        return (
            <SectionConfigLayout elClass="feellioFlowersContactInfo" title={this.title} sectionKey={this.sectionKey}
                panels={[
                    {
                        title: "General",
                        element: <FeellioFlowersContactInfoFormGeneral onFormGeneralChange={this.onFormGeneralChange} {...this.state} heading={this.state.heading} items_count={this.state.items.length} />,

                    },
                    ...this.state.items.map((item, index) => ({
                        title: `About us item ${index + 1}`,
                        element: <FeellioFlowersContactInfoFormItem onFormItemChange={this.onFormItemChange.bind(this, index)} {...item} />,
                    })),
                ]}

                code={`<div class="u-hiddenVisually" data-local-banner-position="feellio-flowers-contact-info" data-template="feellio_flowers_contact_info" data-params="${data}">DO NOT REMOVE THIS LINE</div>`}
            />
        );
    }
}

export default FeellioFlowersContactInfo;
