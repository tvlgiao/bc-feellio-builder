import React from 'react';
import { SectionConfigLayout } from './utils';
import BaseSectionConfig from './BaseSectionConfig';

class FeellioFlowersFiveBannerItemOne extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onFormGeneralChange(event.target.name, event.target.value);
    }

    render() {
        const { img1, imgc1, alt1, link1, title1 } = this.props;
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="img1">Banner image URL</label>
                    <input type="text" className="form-control" id="img1" name="img1" value={img1} onChange={this.handleChange} placeholder="Enter the banner image URL" />
                </div>
                <div className="form-group">
                    <label htmlFor="imgc1">Banner caption image URL</label>
                    <input type="text" className="form-control" id="imgc1" name="imgc1" value={imgc1} onChange={this.handleChange} placeholder="Enter the banner caption image URL" />
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

class FeellioFlowersFiveBannerItemTwo extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onFormGeneralChange(event.target.name, event.target.value);
    }

    render() {
        const { img2, imgc2, alt2, link2, title2 } = this.props;
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="img2">Banner image URL</label>
                    <input type="text" className="form-control" id="img2" name="img2" value={img2} onChange={this.handleChange} placeholder="Enter the banner image URL" />
                </div>
                <div className="form-group">
                    <label htmlFor="imgc2">Banner caption image URL</label>
                    <input type="text" className="form-control" id="imgc2" name="imgc2" value={imgc2} onChange={this.handleChange} placeholder="Enter the banner caption image URL" />
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

class FeellioFlowersFiveBannerItemThree extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onFormGeneralChange(event.target.name, event.target.value);
    }

    render() {
        const { img3, imgc3, alt3, link3, title3 } = this.props;
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="img3">Banner image URL</label>
                    <input type="text" className="form-control" id="img3" name="img3" value={img3} onChange={this.handleChange} placeholder="Enter the banner image URL" />
                </div>
                <div className="form-group">
                    <label htmlFor="imgc3">Banner caption image URL</label>
                    <input type="text" className="form-control" id="imgc3" name="imgc3" value={imgc3} onChange={this.handleChange} placeholder="Enter the banner caption image URL" />
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

class FeellioFlowersFiveBannerItemFour extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onFormGeneralChange(event.target.name, event.target.value);
    }

    render() {
        const { img4, imgc4, alt4, link4, title4 } = this.props;
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="img4">Banner image URL</label>
                    <input type="text" className="form-control" id="img4" name="img4" value={img4} onChange={this.handleChange} placeholder="Enter the banner image URL" />
                </div>
                <div className="form-group">
                    <label htmlFor="imgc4">Banner caption image URL</label>
                    <input type="text" className="form-control" id="imgc4" name="imgc4" value={imgc4} onChange={this.handleChange} placeholder="Enter the banner caption image URL" />
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

class FeellioFlowersFiveBannerItemFive extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onFormGeneralChange(event.target.name, event.target.value);
    }

    render() {
        const { img5, imgc5, alt5, link5, title5 } = this.props;
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="img5">Banner image URL</label>
                    <input type="text" className="form-control" id="img5" name="img5" value={img5} onChange={this.handleChange} placeholder="Enter the banner image URL" />
                </div>
                <div className="form-group">
                    <label htmlFor="imgc5">Banner caption image URL</label>
                    <input type="text" className="form-control" id="imgc5" name="imgc5" value={imgc5} onChange={this.handleChange} placeholder="Enter the banner caption image URL" />
                </div>
                <div className="form-group">
                    <label htmlFor="alt5">Banner image alt</label>
                    <input type="text" className="form-control" id="alt5" name="alt5" value={alt5} onChange={this.handleChange} placeholder="Enter the banner image alt text" />
                </div>
                <div className="form-group">
                    <label htmlFor="link5">Banner action link</label>
                    <input type="text" className="form-control" id="link5" name="link5" value={link5} onChange={this.handleChange} placeholder="Enter the banner action link" />
                </div>
                <div className="form-group">
                    <label htmlFor="title5">Banner action title</label>
                    <input type="text" className="form-control" id="title5" name="title5" value={title5} onChange={this.handleChange} placeholder="Enter the banner title text" />
                </div>
            </form>
        );
    }
}

class FeellioFlowersFiveBanner extends BaseSectionConfig {
    defaultTitle = "Feellio Flowers Banner Parallax";
    scopeName = "FeellioFlowersFiveBanner";

    constructor(props) {
        super(props);

        this.state = this.getStateFromLocalStorage() || {
            img1: 'https://cdn11.bigcommerce.com/s-agzbp14fso/product_images/uploaded_images/feellio-flowers-b01.jpg',
            imgc1: 'https://cdn11.bigcommerce.com/s-agzbp14fso/product_images/uploaded_images/feellio-flowers-bc01.png',
            alt1: 'feellio-flowers-banner-01.jpg',
            link1: '#',
            title1: '',
            img2: 'https://cdn11.bigcommerce.com/s-agzbp14fso/product_images/uploaded_images/feellio-flowers-b02.jpg',
            imgc2: 'https://cdn11.bigcommerce.com/s-agzbp14fso/product_images/uploaded_images/feellio-flowers-bc02.png',
            alt2: 'feellio-flowers-banner-02.jpg',
            link2: '#',
            title2: '',
            img3: 'https://cdn11.bigcommerce.com/s-agzbp14fso/product_images/uploaded_images/feellio-flowers-b03.jpg',
            imgc3: 'https://cdn11.bigcommerce.com/s-agzbp14fso/product_images/uploaded_images/feellio-flowers-bc03.png',
            alt3: 'feellio-flowers-banner-03.jpg',
            link3: '#',
            title3: '',
            img4: 'https://cdn11.bigcommerce.com/s-agzbp14fso/product_images/uploaded_images/feellio-flowers-b04.jpg',
            imgc4: 'https://cdn11.bigcommerce.com/s-agzbp14fso/product_images/uploaded_images/feellio-flowers-bc04.png',
            alt4: 'feellio-flowers-banner-04.jpg',
            link4: '#',
            title4: '',
            img5: 'https://cdn11.bigcommerce.com/s-agzbp14fso/product_images/uploaded_images/feellio-flowers-b05.jpg',
            imgc5: 'https://cdn11.bigcommerce.com/s-agzbp14fso/product_images/uploaded_images/feellio-flowers-bc05.png',
            alt5: 'feellio-flowers-banner-05.jpg',
            link5: '#',
            title5: '',
        };
    }

    render() {
        const data = Buffer.from(JSON.stringify(this.state)).toString('base64');
        return (
            <SectionConfigLayout elClass="feellioFlowersFiveBanner" title={this.title} 
                panels={[
                    {
                        title: 'Banner item 1',
                        element: <FeellioFlowersFiveBannerItemOne onFormGeneralChange={this.onFormGeneralChange} {...this.state} />,
                    },
                    {
                        title: 'Banner item 2',
                        element: <FeellioFlowersFiveBannerItemTwo onFormGeneralChange={this.onFormGeneralChange} {...this.state} />,
                    },
                    {
                        title: 'Banner item 3',
                        element: <FeellioFlowersFiveBannerItemThree onFormGeneralChange={this.onFormGeneralChange} {...this.state} />,
                    },
                    {
                        title: 'Banner item 4',
                        element: <FeellioFlowersFiveBannerItemFour onFormGeneralChange={this.onFormGeneralChange} {...this.state} />,
                    },
                    {
                        title: 'Banner item 5',
                        element: <FeellioFlowersFiveBannerItemFive onFormGeneralChange={this.onFormGeneralChange} {...this.state} />,
                    },
                ]}

                code={`<div class="u-hiddenVisually" data-local-banner-position="feellio-flowers-five-banner" data-template="feellio_flowers_five_banner" data-params="${data}">DO NOT REMOVE THIS LINE</div>`}
            />
        );
    }
}

export default FeellioFlowersFiveBanner;
