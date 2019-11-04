import React from 'react';
import { SectionConfigLayout } from './utils';
import BaseSectionConfig from './BaseSectionConfig';

class FeellioFurnitureBannerDealFormGenneral extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onFormGeneralChange(event.target.name, event.target.value);
    }

    render() {
        const { background, title, subTitle, price, time, action_text, action_link } = this.props;
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="background">Background image URL</label>
                    <input type="text" className="form-control" id="background" name="background" value={background} onChange={this.handleChange} placeholder="Enter the background image URL" />
                </div>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input type="text" className="form-control" id="title" name="title" value={title} onChange={this.handleChange} placeholder="Enter the title text" />
                </div>
                <div className="form-group">
                    <label htmlFor="subTitle">Sub title</label>
                    <input type="text" className="form-control" id="subTitle" name="subTitle" value={subTitle} onChange={this.handleChange} placeholder="Enter the sub title text" />
                </div>
                <div className="form-group">
                    <label htmlFor="price">Price tag</label>
                    <input type="text" className="form-control" id="price" name="price" value={price} onChange={this.handleChange} placeholder="Enter the price tag text" />
                </div>
                <div className="form-group">
                    <label htmlFor="time">Date</label>
                    <input type="datetime-local" className="form-control" id="{time}" name="time" value={time} onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="action_text">Button text</label>
                    <input type="text" className="form-control" id="action_text" name="action_text" value={action_text} onChange={this.handleChange} placeholder="Enter the button text" />
                </div>
                <div className="form-group">
                    <label htmlFor="action_link">Button link</label>
                    <input type="text" className="form-control" id="action_link" name="action_link" value={action_link} onChange={this.handleChange} placeholder="Enter the button link" />
                </div>
            </form>
        );
    }
}

class FeellioFurnitureBannerDeal extends BaseSectionConfig {
    defaultTitle = "Feellio Furniture Banner Deal";
    scopeName = "FeellioFurnitureBannerDeal";

    constructor(props) {
        super(props);

        this.state = this.getStateFromLocalStorage() || {
            background: 'https://cdn11.bigcommerce.com/s-n9ulo8j4yj/product_images/uploaded_images/feellio-furniture-banner-11.jpg', 
            title: `<span>Summer</span> tires`, 
            subTitle: 'Deal of the week', 
            price: `<span>From</span>$99.99`, 
            time: '2020-09-12', 
            action_text: 'Shop Now', 
            action_link: '#',
        };
    }

    render() {
        const data = Buffer.from(JSON.stringify(this.state)).toString('base64');
        return (
            <SectionConfigLayout elClass="feellioFurnitureBannerDeal" title={this.title} sectionKey={this.sectionKey}
                panels={[
                    {
                        title: 'Genneral',
                        element: <FeellioFurnitureBannerDealFormGenneral onFormGeneralChange={this.onFormGeneralChange} {...this.state} />,
                    },
                ]}

                code={`<div class="u-hiddenVisually" data-local-banner-position="feellio-furniture-banner-deal" data-template="feellio_furniture_banner_deal" data-params="${data}">DO NOT REMOVE THIS LINE</div>`}
            />
        );
    }
}

export default FeellioFurnitureBannerDeal;
