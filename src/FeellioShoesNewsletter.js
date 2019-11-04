import React from 'react';
import { SectionConfigLayout } from './utils';
import BaseSectionConfig from './BaseSectionConfig';


class FeellioShoesNewsletterFormGeneral extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onFormGeneralChange(event.target.name, event.target.value);
    }

    render() {
        const { img, title, subtitle, action_text } = this.props;
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="img">Background Image URL</label>
                    <input type="text" className="form-control" id="img" name="img" value={img} onChange={this.handleChange} placeholder="Enter the background image URL" />
                </div>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input type="text" className="form-control" id="title" name="title" value={title} onChange={this.handleChange} placeholder="Enter the title text" />
                </div>
                <div className="form-group">
                    <label htmlFor="subtitle">Sub Title</label>
                    <input type="text" className="form-control" id="subtitle" name="subtitle" value={subtitle} onChange={this.handleChange} placeholder="Enter the sub title text" />
                </div>
                <div className="form-group">
                <label htmlFor="action_text">Button text</label>
                <input type="text" className="form-control" id="action_text" name="action_text" value={action_text} onChange={this.handleChange} placeholder="Enter the button text" />
            </div>
            </form>
        );
    }
}

class FeellioShoesNewsletter extends BaseSectionConfig {
    defaultTitle = "Feellio Shoes Newsletter";
    scopeName = "FeellioShoesNewsletter";

    constructor(props) {
        super(props);

        this.state = this.getStateFromLocalStorage() || {
            img: 'https://cdn11.bigcommerce.com/s-l1g1kbqosu/product_images/uploaded_images/feellio-shoes-banner-08.jpg', 
            title: 'Join Our Newsletter', 
            subtitle: '- Express yourself -',
            action_text: 'Subsrcibe',
        };
    }

    render() {
        const data = Buffer.from(JSON.stringify(this.state)).toString('base64');
        return (
            <SectionConfigLayout elClass="feellioShoesNewsletter" title={this.title} sectionKey={this.sectionKey}
                panels={[
                    {
                        title: "General",
                        element: <FeellioShoesNewsletterFormGeneral onFormGeneralChange={this.onFormGeneralChange} {...this.state} />,
                    },
                ]}

                code={`<div class="u-hiddenVisually" data-local-banner-position="feellio-shoes-newsletter" data-template="feellio_shoes_newsletter" data-params="${data}">DO NOT REMOVE THIS LINE</div>`}
            />
        );
    }
}

export default FeellioShoesNewsletter;
