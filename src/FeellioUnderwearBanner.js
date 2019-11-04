import React from 'react';
import { SectionConfigLayout } from './utils';
import BaseSectionConfig from './BaseSectionConfig';


class FeellioUnderwearBannerFormGeneral extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onFormGeneralChange(event.target.name, event.target.value);
    }

    render() {
        const { img, title, subtitle, desc, buttonText, buttonLink } = this.props;
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="img">Banner Image URL</label>
                    <input type="text" className="form-control" id="img" name="img" value={img} onChange={this.handleChange} placeholder="Enter the Banner image URL" />
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
                    <label htmlFor="desc">Description</label>
                    <input type="text" className="form-control" id="desc" name="desc" value={desc} onChange={this.handleChange} placeholder="Enter the desciption text" />
                </div>
                <div className="form-group">
                    <label htmlFor="buttonText">Button text</label>
                    <input type="text" className="form-control" id="buttonText" name="buttonText" value={buttonText} onChange={this.handleChange} placeholder="Enter the button text" />
                </div>
                <div className="form-group">
                    <label htmlFor="buttonLink">Button link</label>
                    <input type="text" className="form-control" id="buttonLink" name="buttonLink" value={buttonLink} onChange={this.handleChange} placeholder="Enter the button text" />
                </div>
            </form>
        );
    }
}

class FeellioUnderwearBanner extends BaseSectionConfig {
    defaultTitle = "Feellio Underwear Banner";
    scopeName = "FeellioUnderwearBanner";

    constructor(props) {
        super(props);

        this.state = this.getStateFromLocalStorage() || {
            img: 'https://cdn11.bigcommerce.com/s-vml4wdqe4n/product_images/uploaded_images/feellio-underwear-banner.jpg', 
            title: 'Perfect Bathrobes', 
            subtitle: 'It`s time for',
            desc: 'Floral prints, models of classic and modern cut, plain colors and a variety of textures. The main models of the new collection AW / 18.',
            buttonText: 'Discover',
            buttonLink: '#',
        };
    }

    render() {
        const data = Buffer.from(JSON.stringify(this.state)).toString('base64');
        return (
            <SectionConfigLayout elClass="feellioUnderwearBanner" title={this.title} sectionKey={this.sectionKey} 
                panels={[
                    {
                        title: "General",
                        element: <FeellioUnderwearBannerFormGeneral onFormGeneralChange={this.onFormGeneralChange} {...this.state} />,
                    },
                ]}

                code={`<div class="u-hiddenVisually" data-local-banner-position="feellio-underwear-banner" data-template="feellio_underwear_banner" data-params="${data}">DO NOT REMOVE THIS LINE</div>`}
            />
        );
    }
}

export default FeellioUnderwearBanner;
