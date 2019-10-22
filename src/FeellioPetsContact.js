import React from 'react';
import { SectionConfigLayout } from './utils';
import BaseSectionConfig from './BaseSectionConfig';

class FeellioPetsContactItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onFormGeneralChange(event.target.name, event.target.value);
    }

    render() {
        const { img, heading } = this.props;
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="img">Background image URL</label>
                    <input type="text" className="form-control" id="img" name="img" value={img} onChange={this.handleChange} placeholder="Enter the background image URL" />
                </div>
                <div className="form-group">
                    <label htmlFor="heading">Heading</label>
                    <input type="text" className="form-control" id="heading" name="heading" value={heading} onChange={this.handleChange} placeholder="Enter the heading text" />
                </div>
            </form>
        );
    }
}

class FeellioPetsContact extends BaseSectionConfig {
    defaultTitle = "Feellio Pets Contact";
    scopeName = "FeellioPetsContact";

    constructor(props) {
        super(props);

        this.state = this.getStateFromLocalStorage() || {
            img: 'https://cdn11.bigcommerce.com/s-q6xkae5hk1/product_images/uploaded_images/feellio-pets-c.jpg',
            heading: 'Contact',
        };
    }

    render() {
        const data = Buffer.from(JSON.stringify(this.state)).toString('base64');
        return (
            <SectionConfigLayout elClass="feellioFlowersTwoBanner" title={this.title} 
                panels={[
                    {
                        title: 'General',
                        element: <FeellioPetsContactItem onFormGeneralChange={this.onFormGeneralChange} {...this.state} />,
                    }
                ]}

                code={`<div class="u-hiddenVisually" data-local-banner-position="feellio-pets-contact" data-template="feellio_pets_contact" data-params="${data}">DO NOT REMOVE THIS LINE</div>`}
            />
        );
    }
}

export default FeellioPetsContact;
