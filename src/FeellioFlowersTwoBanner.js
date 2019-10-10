import React from 'react';
import { SectionConfigLayout } from './utils';
import BaseSectionConfig from './BaseSectionConfig';

class FeellioFlowersTwoBannerItemOne extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onFormGeneralChange(event.target.name, event.target.value);
    }

    render() {
        const { img1, alt1, link1, title1 } = this.props;
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="img1">Banner image URL</label>
                    <input type="text" className="form-control" id="img1" name="img1" value={img1} onChange={this.handleChange} placeholder="Enter the banner image URL" />
                </div>
                <div className="form-group">
                    <label htmlFor="alt1">Banner image alt</label>
                    <input type="text" className="form-control" id="alt1" name="alt1" value={alt1} onChange={this.handleChange} placeholder="Enter the banner image alt text" />
                </div>
                <div className="form-group">
                    <label htmlFor="link1">Banner action link</label>
                    <input type="text" className="form-control" id="link1" name="link1" value={link1} onChange={this.handleChange} placeholder="Enter the banner action link" />
                </div>
                <div className="form-group">
                    <label htmlFor="title1">Banner action title</label>
                    <input type="text" className="form-control" id="title1" name="title1" value={title1} onChange={this.handleChange} placeholder="Enter the banner title text" />
                </div>
            </form>
        );
    }
}

class FeellioFlowersTwoBannerItemTwo extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onFormGeneralChange(event.target.name, event.target.value);
    }

    render() {
        const { img2, alt2, link2, title2 } = this.props;
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="img2">Banner image URL</label>
                    <input type="text" className="form-control" id="img2" name="img2" value={img2} onChange={this.handleChange} placeholder="Enter the banner image URL" />
                </div>
                <div className="form-group">
                    <label htmlFor="alt2">Banner image alt</label>
                    <input type="text" className="form-control" id="alt2" name="alt2" value={alt2} onChange={this.handleChange} placeholder="Enter the banner image alt text" />
                </div>
                <div className="form-group">
                    <label htmlFor="link2">Banner action link</label>
                    <input type="text" className="form-control" id="link2" name="link2" value={link2} onChange={this.handleChange} placeholder="Enter the banner action link" />
                </div>
                <div className="form-group">
                    <label htmlFor="title2">Banner action title</label>
                    <input type="text" className="form-control" id="title2" name="title2" value={title2} onChange={this.handleChange} placeholder="Enter the banner title text" />
                </div>
            </form>
        );
    }
}

class FeellioFlowersTwoBanner extends BaseSectionConfig {
    defaultTitle = "Feellio Flowers Banner Parallax";
    scopeName = "FeellioFlowersTwoBanner";

    constructor(props) {
        super(props);

        this.state = this.getStateFromLocalStorage() || {
            img1: 'https://cdn11.bigcommerce.com/s-agzbp14fso/product_images/uploaded_images/feellio-flowers-section-banner-two-01.jpg',
            alt1: 'feellio-flowers-section-banner-two-01.jpg',
            link1: '#',
            title1: '',
            img2: 'https://cdn11.bigcommerce.com/s-agzbp14fso/product_images/uploaded_images/feellio-flowers-section-banner-two-02.jpg',
            alt2: 'feellio-flowers-section-banner-two-02.jpg',
            link2: '#',
            title2: '',
        };
    }

    render() {
        const data = Buffer.from(JSON.stringify(this.state)).toString('base64');
        return (
            <SectionConfigLayout elClass="feellioFlowersTwoBanner" title={this.title} 
                panels={[
                    {
                        title: 'Banner item 1',
                        element: <FeellioFlowersTwoBannerItemOne onFormGeneralChange={this.onFormGeneralChange} {...this.state} />,
                    },
                    {
                        title: 'Banner item 2',
                        element: <FeellioFlowersTwoBannerItemTwo onFormGeneralChange={this.onFormGeneralChange} {...this.state} />,
                    },
                ]}

                code={`<div class="u-hiddenVisually" data-local-banner-position="feellio-flowers-two-banner" data-template="feellio_flowers_two_banner" data-params="${data}">DO NOT REMOVE THIS LINE</div>`}
            />
        );
    }
}

export default FeellioFlowersTwoBanner;
