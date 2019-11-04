import React from 'react';
import { SectionConfigLayout } from './utils';
import BaseSectionConfig from './BaseSectionConfig';


class FeellioPetsBannerFormGeneral extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onFormGeneralChange(event.target.name, event.target.value);
    }

    render() {
        const { img, imgc, alt, link } = this.props;
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="img">Banner Image URL</label>
                    <input type="text" className="form-control" id="img" name="img" value={img} onChange={this.handleChange} placeholder="Enter the Banner image URL" />
                </div>
                <div className="form-group">
                    <label htmlFor="img">Banner caption Image URL</label>
                    <input type="text" className="form-control" id="imgc" name="imgc" value={imgc} onChange={this.handleChange} placeholder="Enter the Banner caption image URL" />
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

class FeellioPetsBanner extends BaseSectionConfig {
    defaultTitle = "Feellio Underwear Banner";
    scopeName = "FeellioUnderwearBanner";

    constructor(props) {
        super(props);

        this.state = this.getStateFromLocalStorage() || {
            img: 'https://cdn11.bigcommerce.com/s-q6xkae5hk1/product_images/uploaded_images/feellio-pets-b.jpg', 
            imgc: 'https://cdn11.bigcommerce.com/s-q6xkae5hk1/product_images/uploaded_images/feellio-pets-bc.png',
            alt: 'feellio-carepets-background-banner-image.jpg', 
            link: '#',
        };
    }

    render() {
        const data = Buffer.from(JSON.stringify(this.state)).toString('base64');
        return (
            <SectionConfigLayout elClass="feellioPetsBanner" title={this.title} sectionKey={this.sectionKey}
                panels={[
                    {
                        title: "General",
                        element: <FeellioPetsBannerFormGeneral onFormGeneralChange={this.onFormGeneralChange} {...this.state} />,
                    },
                ]}

                code={`<div class="u-hiddenVisually" data-local-banner-position="feellio-pets-banner" data-template="feellio_pets_banner" data-params="${data}">DO NOT REMOVE THIS LINE</div>`}
            />
        );
    }
}

export default FeellioPetsBanner;
