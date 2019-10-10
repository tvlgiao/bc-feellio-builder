import React from 'react';
import { SectionConfigLayout } from './utils';
import BaseSectionConfig from './BaseSectionConfig';


class FeellioShoesReviewsInstagramsFormItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onFormItemChange(event.target.name, event.target.value);
    }

    render() {
        const { img, content, name, job } = this.props;
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="img">Avata Image URL</label>
                    <input type="text" className="form-control" id="img" name="img" value={img} onChange={this.handleChange} placeholder="Enter avata image URL" />
                </div>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" id="name" name="name" value={name} onChange={this.handleChange} placeholder="Enter the name text" />
                </div>
                <div className="form-group">
                    <label htmlFor="content">Review content</label>
                    <input type="text" className="form-control" id="content" name="content" value={content} onChange={this.handleChange} placeholder="Enter the review content" />
                </div>
                <div className="form-group">
                    <label htmlFor="job">Job name</label>
                    <input type="text" className="form-control" id="job" name="job" value={job} onChange={this.handleChange} placeholder="Enter job name" />
                </div>
            </form>
        );
    }
}

class FeellioShoesReviewsInstagramsFormGeneral extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onFormGeneralChange(event.target.name, event.target.value);
    }

    render() {
        const { review_title, instagram_token, instagram_limit, items_count } = this.props;
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="review_title">Review title text</label>
                    <input type="text" className="form-control" id="review_title" name="review_title" value={review_title} onChange={this.handleChange} placeholder="Enter the review title text" />
                </div>
                <div className="form-group">
                    <label htmlFor="instagram_token">Instagram token</label>
                    <input type="text" className="form-control" id="instagram_token" name="instagram_token" value={instagram_token} onChange={this.handleChange} placeholder="Enter the instagram token" />
                </div>
                <div className="form-group">
                    <label htmlFor="instagram_limit">Instagram image limit</label>
                    <input type="number" min="0" max="100" className="form-control" id="instagram_limit" name="instagram_limit" value={instagram_limit} onChange={this.handleChange} placeholder="Enter the instagram limit" />
                </div>
                <div className="form-group">
                    <label htmlFor="items_count">Number of review items</label>
                    <input type="number" min="0" max="100" className="form-control" id="items_count" name="items_count" value={items_count} onChange={this.handleChange} placeholder="Enter number of review items" />
                </div>
            </form>
        );
    }
}

class FeellioShoesReviewsInstagrams extends BaseSectionConfig {
    defaultTitle = "Feellio Our Professionals";
    scopeName = "FeellioOurProfessionals";

    constructor(props) {
        super(props);

        this.state = this.getStateFromLocalStorage() || {
            review_title: 'Our Professionals',
            instagram_token: '',
            instagram_limit: 6,
            items: [
                { 
                    img: 'https://cdn11.bigcommerce.com/s-l1g1kbqosu/product_images/uploaded_images/feellio-shoes-avata-01.jpg', 
                    content: `Shop some of the most stylish fashion accessories around from a superlative selection at Farfetch. Find everything from chic leather belts and eye catching hats to evocative eyewear from this season's most sought after designers.`,
                    name: 'Adam Scost',
                    job: 'Happy Customer'
                },
                { 
                    img: 'https://cdn11.bigcommerce.com/s-l1g1kbqosu/product_images/uploaded_images/feellio-shoes-avata-02.jpg', 
                    content: `Shop some of the most stylish fashion accessories around from a superlative selection at Farfetch. Find everything from chic leather belts and eye catching hats to evocative eyewear from this season's most sought after designers.`,
                    name: 'Adam Scost', 
                    job: `Happy Customer`
                },
                { 
                    img: 'https://cdn11.bigcommerce.com/s-l1g1kbqosu/product_images/uploaded_images/feellio-shoes-avata-03.jpg', 
                    content: `Shop some of the most stylish fashion accessories around from a superlative selection at Farfetch. Find everything from chic leather belts and eye catching hats to evocative eyewear from this season's most sought after designers.`,
                    name: 'Adam Scost', 
                    job: 'Happy Customer'
                },
            ]
        };
    }

    render() {
        const data = Buffer.from(JSON.stringify(this.state)).toString('base64');
        return (
            <SectionConfigLayout elClass="feellioShoesReviewsInstagrams" title={this.title} 
                panels={[
                    {
                        title: "General",
                        element: <FeellioShoesReviewsInstagramsFormGeneral onFormGeneralChange={this.onFormGeneralChange} {...this.state} heading={this.state.heading} items_count={this.state.items.length} />,

                    },
                    ...this.state.items.map((item, index) => ({
                        title: `review item ${index + 1}`,
                        element: <FeellioShoesReviewsInstagramsFormItem onFormItemChange={this.onFormItemChange.bind(this, index)} {...item} />,
                    })),
                ]}

                code={`<div class="u-hiddenVisually" data-local-banner-position="feellio-shoes-reviews-instagrams" data-template="feellio_shoes_reviews_instagrams" data-params="${data}">DO NOT REMOVE THIS LINE</div>`}
            />
        );
    }
}

export default FeellioShoesReviewsInstagrams;
