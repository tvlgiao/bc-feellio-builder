import React from 'react';
import { SectionConfigLayout } from './utils';
import BaseSectionConfig from './BaseSectionConfig';


class FeellioPetsInformationFormItem extends React.Component {
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
                    <label htmlFor="img">Icon URL</label>
                    <input type="text" className="form-control" id="img" name="img" value={img} onChange={this.handleChange} placeholder="Enter the icon URL" />
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

class FeellioPetsInformationFormGeneral extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onFormGeneralChange(event.target.name, event.target.value);
    }

    render() {
        const { img, heading, items_count } = this.props;
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="img">Background image URL</label>
                    <input type="text" className="form-control" id="img" name="img" value={img} onChange={this.handleChange} placeholder="Enter the background image URL" />
                </div>
                <div className="form-group">
                    <label htmlFor="heading">Heading text</label>
                    <input type="text" className="form-control" id="heading" name="heading" value={heading} onChange={this.handleChange} placeholder="Enter the heading text" />
                </div>
                <div className="form-group">
                    <label htmlFor="items_count">Number of Information items</label>
                    <input type="number" min="0" max="100" className="form-control" id="items_count" name="items_count" value={items_count} onChange={this.handleChange} placeholder="Enter number of information items" />
                </div>
            </form>
        );
    }
}

class FeellioPetsInformation extends BaseSectionConfig {
    defaultTitle = "Feellio Pets Information";
    scopeName = "FeellioPetsInformation";

    constructor(props) {
        super(props);

        this.state = this.getStateFromLocalStorage() || {
            img: 'https://cdn11.bigcommerce.com/s-q6xkae5hk1/product_images/uploaded_images/feellio-carepets-information-bg.jpg',
            heading: 'Information',
            items: [
                { 
                    img: 'https://cdn11.bigcommerce.com/s-q6xkae5hk1/product_images/uploaded_images/feellio-carepets-icon-01.png', 
                    title: 'Health', 
                    content: 'Whether looking for information about which kind of pet best fits your lifestyle or troubleshooting a pressing concern, pet resources...'
                },
                { 
                    img: 'https://cdn11.bigcommerce.com/s-q6xkae5hk1/product_images/uploaded_images/feellio-carepets-icon-02.png', 
                    title: 'Food for pets', 
                    content: `Maybe you aren't even a pet owner and just love all things animal. There is no lack for entertaining animal antics and heartwarming animal pages....`
                },
                { 
                    img: 'https://cdn11.bigcommerce.com/s-q6xkae5hk1/product_images/uploaded_images/feellio-carepets-icon-03.png', 
                    title: 'Accessories', 
                    content: 'From guinea pigs to greyhounds, persians to parakeets, animal owners take enormous care in not only obtaining the best resources...'
                },
            ]
        };
    }

    render() {
        const data = Buffer.from(JSON.stringify(this.state)).toString('base64');
        return (
            <SectionConfigLayout elClass="feellioPetsInformation" title={this.title} sectionKey={this.sectionKey}
                panels={[
                    {
                        title: "General",
                        element: <FeellioPetsInformationFormGeneral onFormGeneralChange={this.onFormGeneralChange} {...this.state} heading={this.state.heading} items_count={this.state.items.length} />,

                    },
                    ...this.state.items.map((item, index) => ({
                        title: `Iformation item ${index + 1}`,
                        element: <FeellioPetsInformationFormItem onFormItemChange={this.onFormItemChange.bind(this, index)} {...item} />,
                    })),
                ]}

                code={`<div class="u-hiddenVisually" data-local-banner-position="feellio-pets-information" data-template="feellio_pets_information" data-params="${data}">DO NOT REMOVE THIS LINE</div>`}
            />
        );
    }
}

export default FeellioPetsInformation;
