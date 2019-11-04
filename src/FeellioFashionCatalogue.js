import React from 'react';
import { SectionConfigLayout } from './utils';
import BaseSectionConfig from './BaseSectionConfig';


class FeellioFashionCatalogueFormItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onFormItemChange(event.target.name, event.target.value);
    }

    render() {
        const { title1, subTitle1, img1, alt1, link1, title2, subTitle2, img2, alt2, link2 } = this.props;
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="title1">Banner 1 title</label>
                    <input type="text" className="form-control" id="title1" name="title1" value={title1} onChange={this.handleChange} placeholder="Enter the banner 1 title text" />
                </div>
                <div className="form-group">
                    <label htmlFor="subTitle1">Banner 1 sub title</label>
                    <input type="text" className="form-control" id="subTitle1" name="subTitle1" value={subTitle1} onChange={this.handleChange} placeholder="Enter the banner 1 sub title text" />
                </div>
                <div className="form-group">
                    <label htmlFor="img1">Banner 1 image URL</label>
                    <input type="text" className="form-control" id="img1" name="img1" value={img1} onChange={this.handleChange} placeholder="Enter the banner 1 image URL" />
                </div>
                <div className="form-group">
                    <label htmlFor="alt1">Banner 1 image alt</label>
                    <input type="text" className="form-control" id="alt1" name="alt1" value={alt1} onChange={this.handleChange} placeholder="Enter the banner 1 image alt" />
                </div>
                <div className="form-group">
                    <label htmlFor="link1">Banner 1 link</label>
                    <input type="text" className="form-control" id="link1" name="link1" value={link1} onChange={this.handleChange} placeholder="Enter the banner 1 link" />
                </div>
                <div className="form-group">
                    <label htmlFor="title2">Banner 2 title</label>
                    <input type="text" className="form-control" id="title2" name="title2" value={title2} onChange={this.handleChange} placeholder="Enter the banner 2 title text" />
                </div>
                <div className="form-group">
                    <label htmlFor="subTitle2">Banner 2 sub title</label>
                    <input type="text" className="form-control" id="subTitle2" name="subTitle2" value={subTitle2} onChange={this.handleChange} placeholder="Enter the banner 2 sub title text" />
                </div>
                <div className="form-group">
                    <label htmlFor="img2">Banner 2 image URL</label>
                    <input type="text" className="form-control" id="img2" name="img2" value={img2} onChange={this.handleChange} placeholder="Enter the banner 2 image URL" />
                </div>
                <div className="form-group">
                    <label htmlFor="alt2">Banner 2 image alt</label>
                    <input type="text" className="form-control" id="alt2" name="alt2" value={alt2} onChange={this.handleChange} placeholder="Enter the banner 2 image alt" />
                </div>
                <div className="form-group">
                    <label htmlFor="link2">Banner 2 link</label>
                    <input type="text" className="form-control" id="link2" name="link2" value={link2} onChange={this.handleChange} placeholder="Enter the banner 2 link" />
                </div>
            </form>
        );
    }
}

class FeellioFashionCatalogueFormGeneral extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onFormGeneralChange(event.target.name, event.target.value);
    }

    render() {
        const { background ,title, subTitle, desc, action_text, action_link, items_count } = this.props;
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="background">Background image URL</label>
                    <input type="text" className="form-control" id="background" name="background" value={background} onChange={this.handleChange} placeholder="Enter the background image url" />
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
                    <label htmlFor="desc">Description</label>
                    <input type="text" className="form-control" id="desc" name="desc" value={desc} onChange={this.handleChange} placeholder="Enter the description" />
                </div>
                <div className="form-group">
                    <label htmlFor="action_text">Button text</label>
                    <input type="text" className="form-control" id="action_text" name="action_text" value={action_text} onChange={this.handleChange} placeholder="Enter the button text" />
                </div>
                <div className="form-group">
                    <label htmlFor="action_link">Button link</label>
                    <input type="text" className="form-control" id="action_link" name="action_link" value={action_link} onChange={this.handleChange} placeholder="Enter the button link" />
                </div>
                <div className="form-group">
                    <label htmlFor="items_count">Number of image items</label>
                    <input type="number" min="0" max="100" className="form-control" id="items_count" name="items_count" value={items_count} onChange={this.handleChange} placeholder="Enter number of image items" />
                </div>
            </form>
        );
    }
}

class FeellioFashionCatalogue extends BaseSectionConfig {
    defaultTitle = "Feellio Fashion Catalogue";
    scopeName = "FeellioFashionCatalogue";

    constructor(props) {
        super(props);

        this.state = this.getStateFromLocalStorage() || {
            background: 'https://cdn11.bigcommerce.com/s-z57ig2u8p0/product_images/uploaded_images/feellio-fashion-catalogue-bg.jpg',
            title: 'Stylish For Women',
            subTitle: 'See The 2019 Catalogue',
            desc: `Outerwear can define a woman's look. This season's outerwear adapts to any weather with style. Wrap yourself in fleece, down or faux fur on the coldest of days. Flowy and ultralight pieces for milder temperatures.`,
            action_text: 'See more',
            action_link: '#',
            items: [
                { 
                    title1: 'Weekly Fashion Trends For Women',
                    subTitle1: 'NEW IN',
                    img1: 'https://cdn11.bigcommerce.com/s-z57ig2u8p0/product_images/uploaded_images/feellio-fashion-catalogue-01.jpg', 
                    alt1: 'feellio-furniture-banner-01.jpg', 
                    link1: '#',
                    title2: 'Sweatshirt With Zippers',
                    subTitle2: 'WINTER MOOD',
                    img2: 'https://cdn11.bigcommerce.com/s-z57ig2u8p0/product_images/uploaded_images/feellio-fashion-catalogue-02.jpg', 
                    alt2: 'feellio-furniture-banner-02.jpg',
                    link2: '#',
                },
                { 
                    title1: 'Floral print voile fitted dress',
                    subTitle1: 'DRESS TIME',
                    img1: 'https://cdn11.bigcommerce.com/s-z57ig2u8p0/product_images/uploaded_images/feellio-fashion-catalogue-03.jpg', 
                    alt1: 'feellio-furniture-banner-03.jpg', 
                    link1: '#',
                    title2: 'Brick red leather biker jacket',
                    subTitle2: 'ANIMAL PRINT',
                    img2: 'https://cdn11.bigcommerce.com/s-z57ig2u8p0/product_images/uploaded_images/feellio-fashion-catalogue-04.jpg', 
                    alt2: 'feellio-furniture-banner-04.jpg',
                    link2: '#',
                },
                { 
                    title1: 'Beautiful and rebel',
                    subTitle1: 'BEST SELLERS',
                    img1: 'https://cdn11.bigcommerce.com/s-z57ig2u8p0/product_images/uploaded_images/feellio-fashion-catalogue-05.jpg', 
                    alt1: 'feellio-furniture-banner-05.jpg', 
                    link1: '#',
                    title2: 'White V-neck Blondie',
                    subTitle2: 'NIGHT FEVER',
                    img2: 'https://cdn11.bigcommerce.com/s-z57ig2u8p0/product_images/uploaded_images/feellio-fashion-catalogue-06.jpg', 
                    alt2: 'feellio-furniture-banner-06.jpg',
                    link2: '#',
                },
            ]
        };
    }

    render() {
        const data = Buffer.from(JSON.stringify(this.state)).toString('base64');
        return (
            <SectionConfigLayout elClass="feellioFashionCatalogue" title={this.title} sectionKey={this.sectionKey}
                panels={[
                    {
                        title: "General",
                        element: <FeellioFashionCatalogueFormGeneral onFormGeneralChange={this.onFormGeneralChange} {...this.state} heading={this.state.heading} items_count={this.state.items.length} />,

                    },
                    ...this.state.items.map((item, index) => ({
                        title: `catalogue item ${index + 1}`,
                        element: <FeellioFashionCatalogueFormItem onFormItemChange={this.onFormItemChange.bind(this, index)} {...item} />,
                    })),
                ]}

                code={`<div class="u-hiddenVisually" data-local-banner-position="feellio-fashion-catalogue" data-template="feellio_fashion_catalogue" data-params="${data}">DO NOT REMOVE THIS LINE</div>`}
            />
        );
    }
}

export default FeellioFashionCatalogue;
