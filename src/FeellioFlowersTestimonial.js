import React from 'react';
import { SectionConfigLayout } from './utils';
import BaseSectionConfig from './BaseSectionConfig';


class FeellioFlowersTestimonialFormItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onFormItemChange(event.target.name, event.target.value);
    }

    render() {
        const { img, title, subtitle, content } = this.props;
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="img">Image URL</label>
                    <input type="text" className="form-control" id="img" name="img" value={img} onChange={this.handleChange} placeholder="Enter the image URL" />
                </div>
                <div className="form-group">
                    <label htmlFor="title">Title text</label>
                    <input type="text" className="form-control" id="title" name="title" value={title} onChange={this.handleChange} placeholder="Enter the title text" />
                </div>
                <div className="form-group">
                    <label htmlFor="subtitle">Sub title text</label>
                    <input type="text" className="form-control" id="subtitle" name="subtitle" value={subtitle} onChange={this.handleChange} placeholder="Enter the sub title text" />
                </div>
                <div className="form-group">
                    <label htmlFor="content">Content text</label>
                    <input type="text" className="form-control" id="content" name="content" value={content} onChange={this.handleChange} placeholder="Enter content text" />
                </div>
            </form>
        );
    }
}

class FeellioFlowersTestimonialFormGeneral extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onFormGeneralChange(event.target.name, event.target.value);
    }

    render() {
        const { img_top, img_bottom, items_count } = this.props;
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="img_top">Background icon top</label>
                    <input type="text" className="form-control" id="img_top" name="img_top" value={img_top} onChange={this.handleChange} placeholder="Enter background icon top image URL" />
                </div>
                <div className="form-group">
                    <label htmlFor="img_bottom">Background icon bottom</label>
                    <input type="text" className="form-control" id="img_bottom" name="img_bottom" value={img_bottom} onChange={this.handleChange} placeholder="Enter background icon bottom image URL" />
                </div>
                <div className="form-group">
                    <label htmlFor="items_count">Number of testimonial items</label>
                    <input type="number" min="0" max="100" className="form-control" id="items_count" name="items_count" value={items_count} onChange={this.handleChange} placeholder="Enter number of testimonial items" />
                </div>
            </form>
        );
    }
}

class FeellioFlowersTestimonial extends BaseSectionConfig {
    defaultTitle = "FFeellio Flowers Testimonial";
    scopeName = "FeellioFlowersTestimonial";

    constructor(props) {
        super(props);

        this.state = this.getStateFromLocalStorage() || {
            img_top: 'https://cdn11.bigcommerce.com/s-agzbp14fso/product_images/uploaded_images/feellio-section-review-bg-top.jpg',
            img_bottom: 'https://cdn11.bigcommerce.com/s-agzbp14fso/product_images/uploaded_images/feellio-section-review-bg-bottom.jpg', 
            items: [
                { 
                    img: 'https://cdn11.bigcommerce.com/s-agzbp14fso/product_images/uploaded_images/feellio-flowers-avata-01.jpg', 
                    title: 'Miranda Robertson', 
                    subtitle: 'Graphic Designer from NY', 
                    content: 'Floristry can involve the cultivation of flowers as well as their arrangement, and to the business of selling them. Much of the raw material supplied for the floristry trade comes from the cut flowers industry.'
                },
                { 
                    img: 'https://cdn11.bigcommerce.com/s-agzbp14fso/product_images/uploaded_images/feellio-flowers-avata-02.jpg', 
                    title: 'Miranda Robertson', 
                    subtitle: 'Graphic Designer from NY', 
                    content: 'Floristry can involve the cultivation of flowers as well as their arrangement, and to the business of selling them. Much of the raw material supplied for the floristry trade comes from the cut flowers industry.'
                },
                { 
                    img: 'https://cdn11.bigcommerce.com/s-agzbp14fso/product_images/uploaded_images/feellio-flowers-avata-03.jpg', 
                    title: 'Miranda Robertson', 
                    subtitle: 'Graphic Designer from NY', 
                    content: 'Floristry can involve the cultivation of flowers as well as their arrangement, and to the business of selling them. Much of the raw material supplied for the floristry trade comes from the cut flowers industry.'
                },
                { 
                    img: 'https://cdn11.bigcommerce.com/s-agzbp14fso/product_images/uploaded_images/feellio-flowers-avata-04.jpg', 
                    title: 'Miranda Robertson', 
                    subtitle: 'Graphic Designer from NY', 
                    content: 'Floristry can involve the cultivation of flowers as well as their arrangement, and to the business of selling them. Much of the raw material supplied for the floristry trade comes from the cut flowers industry.'
                }
            ]
        };
    }

    render() {
        const data = Buffer.from(JSON.stringify(this.state)).toString('base64');
        return (
            <SectionConfigLayout elClass="feellioFlowersTestimonial" title={this.title} sectionKey={this.sectionKey}
                panels={[
                    {
                        title: "General",
                        element: <FeellioFlowersTestimonialFormGeneral onFormGeneralChange={this.onFormGeneralChange} {...this.state} heading={this.state.heading} items_count={this.state.items.length} />,

                    },
                    ...this.state.items.map((item, index) => ({
                        title: `Item ${index + 1}`,
                        element: <FeellioFlowersTestimonialFormItem onFormItemChange={this.onFormItemChange.bind(this, index)} {...item} />,
                    })),
                ]}

                code={`<div class="u-hiddenVisually" data-local-banner-position="feellio-flowers-testimonial" data-template="feellio_flowers_testimonial" data-params="${data}">DO NOT REMOVE THIS LINE</div>`}
            />
        );
    }
}

export default FeellioFlowersTestimonial;
