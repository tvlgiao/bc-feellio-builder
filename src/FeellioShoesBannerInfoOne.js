import React from 'react';
import { SectionConfigLayout } from './utils';
import BaseSectionConfig from './BaseSectionConfig';


class FeellioShoesBannerInfoOneFormGeneral extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onFormGeneralChange(event.target.name, event.target.value);
    }

    render() {
        const { img, heading, title, subtitle, desc, image_position, buttonText, buttonLink } = this.props;
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="image_position">The images position</label>
                    <select id="image_position" name="image_position" className="form-control">
                        <option value="left" selected={image_position === 'left'}>Left</option>
                        <option value="right" selected={image_position === 'right'}>Right</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="img">Banner Image URL</label>
                    <input type="text" className="form-control" id="img" name="img" value={img} onChange={this.handleChange} placeholder="Enter the Banner image URL" />
                </div>
                <div className="form-group">
                    <label htmlFor="heading">Heading</label>
                    <input type="text" className="form-control" id="heading" name="heading" value={heading} onChange={this.handleChange} placeholder="Enter the heading text" />
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
                    <input type="text" className="form-control" id="desc" name="desc" value={desc} onChange={this.handleChange} placeholder="Enter the description text" />
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

class FeellioShoesBannerInfoOne extends BaseSectionConfig {
    defaultTitle = "Feellio Shoes Banner Info One";
    scopeName = "FeellioShoesBannerInfoOne";

    constructor(props) {
        super(props);

        this.state = this.getStateFromLocalStorage() || {
            image_position: 'left',
            img: 'https://cdn11.bigcommerce.com/s-l1g1kbqosu/product_images/uploaded_images/feellio-shoes-banner-05.jpg', 
            heading: 'New Collection', 
            title: `Heeled Vinyl Ankle Boots`, 
            subtitle: `It's time for`,
            desc: 'Floral prints, models of classic and modern cut, plain colors and a variety of textures. The main models of the new collection AW / 18.',
            buttonText: 'Discover',
            buttonLink: '#',
        };
    }

    render() {
        const data = Buffer.from(JSON.stringify(this.state)).toString('base64');
        return (
            <SectionConfigLayout elClass="feellioShoesBannerInfoOne" title={this.title} sectionKey={this.sectionKey}
                panels={[
                    {
                        title: "General",
                        element: <FeellioShoesBannerInfoOneFormGeneral onFormGeneralChange={this.onFormGeneralChange} {...this.state} />,
                    },
                ]}

                code={`<div class="u-hiddenVisually" data-local-banner-position="feellio-shoes-banner-info-one" data-template="feellio_shoes_banner_info_one" data-params="${data}">DO NOT REMOVE THIS LINE</div>`}
            />
        );
    }
}

export default FeellioShoesBannerInfoOne;
