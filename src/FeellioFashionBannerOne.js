import React from 'react';
import { SectionConfigLayout } from './utils';
import BaseSectionConfig from './BaseSectionConfig';


class FeellioFashionBannerOneFormGeneral extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onFormGeneralChange(event.target.name, event.target.value);
    }

    render() {
        const { img, captionImage, alt, link } = this.props;
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="img">Banner Image URL</label>
                    <input type="text" className="form-control" id="img" name="img" value={img} onChange={this.handleChange} placeholder="Enter the Banner image URL" />
                </div>
                <div className="form-group">
                    <label htmlFor="captionImage">Banner caption image URL</label>
                    <input type="text" className="form-control" id="captionImage" name="captionImage" value={captionImage} onChange={this.handleChange} placeholder="Enter the Banner caption image URL" />
                </div>
                <div className="form-group">
                    <label htmlFor="alt">alt</label>
                    <input type="text" className="form-control" id="alt" name="alt" value={alt} onChange={this.handleChange} placeholder="Enter the image alt text" />
                </div>
                <div className="form-group">
                    <label htmlFor="link">link</label>
                    <input type="text" className="form-control" id="link" name="link" value={link} onChange={this.handleChange} placeholder="Enter the banner link" />
                </div>
            </form>
        );
    }
}

class FeellioFashionBannerOne extends BaseSectionConfig {
    defaultTitle = "Feellio Fashion Banner One";
    scopeName = "FeellioFashionBannerOne";

    constructor(props) {
        super(props);

        this.state = this.getStateFromLocalStorage() || {
            img: 'https://cdn11.bigcommerce.com/s-z57ig2u8p0/product_images/uploaded_images/feellio-fashion-bo.jpg', 
            captionImage: 'https://cdn11.bigcommerce.com/s-z57ig2u8p0/product_images/uploaded_images/feellio-fashion-boca.png',
            alt: 'feellio-feellio-bannner-01.jpg', 
            link: '#',
        };
    }

    render() {
        const data = Buffer.from(JSON.stringify(this.state)).toString('base64');
        return (
            <SectionConfigLayout elClass="feellioFashionBannerOne" title={this.title} 
                panels={[
                    {
                        title: "General",
                        element: <FeellioFashionBannerOneFormGeneral onFormGeneralChange={this.onFormGeneralChange} {...this.state} />,
                    },
                ]}

                code={`<div class="u-hiddenVisually" data-local-banner-position="feellio-fashion-banner-one" data-template="feellio_fashion_banner_one" data-params="${data}">DO NOT REMOVE THIS LINE</div>`}
            />
        );
    }
}

export default FeellioFashionBannerOne;
