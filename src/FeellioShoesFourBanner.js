import React from 'react';
import { SectionConfigLayout } from './utils';
import BaseSectionConfig from './BaseSectionConfig';

class FeellioShoesFourBannerItemOne extends React.Component {
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

class FeellioShoesFourBannerItemTwo extends React.Component {
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

class FeellioShoesFourBannerItemThree extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onFormGeneralChange(event.target.name, event.target.value);
    }

    render() {
        const { img3, alt3, link3, title3 } = this.props;
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="img3">Banner image URL</label>
                    <input type="text" className="form-control" id="img3" name="img3" value={img3} onChange={this.handleChange} placeholder="Enter the banner image URL" />
                </div>
                <div className="form-group">
                    <label htmlFor="alt3">Banner image alt</label>
                    <input type="text" className="form-control" id="alt3" name="alt3" value={alt3} onChange={this.handleChange} placeholder="Enter the banner image alt text" />
                </div>
                <div className="form-group">
                    <label htmlFor="link3">Banner action link</label>
                    <input type="text" className="form-control" id="link3" name="link3" value={link3} onChange={this.handleChange} placeholder="Enter the banner action link" />
                </div>
                <div className="form-group">
                    <label htmlFor="title3">Banner action title</label>
                    <input type="text" className="form-control" id="title3" name="title3" value={title3} onChange={this.handleChange} placeholder="Enter the banner title text" />
                </div>
            </form>
        );
    }
}

class FeellioShoesFourBannerItemFour extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onFormGeneralChange(event.target.name, event.target.value);
    }

    render() {
        const { img4, alt4, link4, title4 } = this.props;
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="img4">Banner image URL</label>
                    <input type="text" className="form-control" id="img4" name="img4" value={img4} onChange={this.handleChange} placeholder="Enter the banner image URL" />
                </div>
                <div className="form-group">
                    <label htmlFor="alt4">Banner image alt</label>
                    <input type="text" className="form-control" id="alt4" name="alt4" value={alt4} onChange={this.handleChange} placeholder="Enter the banner image alt text" />
                </div>
                <div className="form-group">
                    <label htmlFor="link4">Banner action link</label>
                    <input type="text" className="form-control" id="link4" name="link4" value={link4} onChange={this.handleChange} placeholder="Enter the banner action link" />
                </div>
                <div className="form-group">
                    <label htmlFor="title4">Banner action title</label>
                    <input type="text" className="form-control" id="title4" name="title4" value={title4} onChange={this.handleChange} placeholder="Enter the banner title text" />
                </div>
            </form>
        );
    }
}

class FeellioShoesFourBanner extends BaseSectionConfig {
    defaultTitle = "Feellio Shoes Four Banner";
    scopeName = "FeellioShoesFourBanner";

    constructor(props) {
        super(props);

        this.state = this.getStateFromLocalStorage() || {
            img1: 'https://cdn11.bigcommerce.com/s-l1g1kbqosu/product_images/uploaded_images/feellio-shoes-banner-01.jpg',
            alt1: 'feellio-shoes-banner-01.jpg',
            link1: '#',
            title1: 'Contrast',
            img2: 'https://cdn11.bigcommerce.com/s-l1g1kbqosu/product_images/uploaded_images/feellio-shoes-banner-02.jpg',
            alt2: 'feellio-shoes-banner-02.jpg',
            link2: '#',
            title2: 'Flats',
            img3: 'https://cdn11.bigcommerce.com/s-l1g1kbqosu/product_images/uploaded_images/feellio-shoes-banner-04.jpg',
            alt3: 'feellio-shoes-banner-04.jpg',
            link3: '#',
            title3: 'Leather',
            img4: 'https://cdn11.bigcommerce.com/s-l1g1kbqosu/product_images/uploaded_images/feellio-shoes-banner-03.jpg',
            alt4: 'feellio-shoes-banner-03.jpg',
            link4: '#',
            title4: 'Sandals',
        };
    }

    render() {
        const data = Buffer.from(JSON.stringify(this.state)).toString('base64');
        return (
            <SectionConfigLayout elClass="feellioShoesFourBanner" title={this.title} sectionKey={this.sectionKey}
                panels={[
                    {
                        title: 'Banner item 1',
                        element: <FeellioShoesFourBannerItemOne onFormGeneralChange={this.onFormGeneralChange} {...this.state} />,
                    },
                    {
                        title: 'Banner item 2',
                        element: <FeellioShoesFourBannerItemTwo onFormGeneralChange={this.onFormGeneralChange} {...this.state} />,
                    },
                    {
                        title: 'Banner item 3',
                        element: <FeellioShoesFourBannerItemThree onFormGeneralChange={this.onFormGeneralChange} {...this.state} />,
                    },
                    {
                        title: 'Banner item 4',
                        element: <FeellioShoesFourBannerItemFour onFormGeneralChange={this.onFormGeneralChange} {...this.state} />,
                    },
                ]}

                code={`<div class="u-hiddenVisually" data-local-banner-position="feellio-shoes-four-banner" data-template="feellio_shoes_four_banner" data-params="${data}">DO NOT REMOVE THIS LINE</div>`}
            />
        );
    }
}

export default FeellioShoesFourBanner;
