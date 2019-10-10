import React from 'react';
import { SectionConfigLayout } from './utils';
import BaseSectionConfig from './BaseSectionConfig';


class FeellioFashionReviewFormItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onFormItemChange(event.target.name, event.target.value);
    }

    render() {
        const { title, caption, job } = this.props;
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="title">Name</label>
                    <input type="text" className="form-control" id="title" name="title" value={title} onChange={this.handleChange} placeholder="Enter avata image URL" />
                </div>
                <div className="form-group">
                    <label htmlFor="caption">Review content</label>
                    <input type="text" className="form-control" id="caption" name="caption" value={caption} onChange={this.handleChange} placeholder="Enter the content review text" />
                </div>
                <div className="form-group">
                    <label htmlFor="job">Job name</label>
                    <input type="text" className="form-control" id="job" name="job" value={job} onChange={this.handleChange} placeholder="Enter job name" />
                </div>
            </form>
        );
    }
}

class FeellioFashionReviewFormGeneral extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onFormGeneralChange(event.target.name, event.target.value);
    }

    render() {
        const { heading, subHeading, items_count } = this.props;
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="heading">Heading text</label>
                    <input type="text" className="form-control" id="heading" name="heading" value={heading} onChange={this.handleChange} placeholder="Enter the heading text" />
                </div>
                <div className="form-group">
                    <label htmlFor="subHeading">Sub heading text</label>
                    <input type="text" className="form-control" id="subHeading" name="subHeading" value={subHeading} onChange={this.handleChange} placeholder="Enter the sub heading text" />
                </div>
                <div className="form-group">
                    <label htmlFor="items_count">Number of review items</label>
                    <input type="number" min="0" max="100" className="form-control" id="items_count" name="items_count" value={items_count} onChange={this.handleChange} placeholder="Enter number of review items" />
                </div>
            </form>
        );
    }
}

class FeellioFashionReview extends BaseSectionConfig {
    defaultTitle = "Feellio Fashion Review";
    scopeName = "FeellioFashionReview";

    constructor(props) {
        super(props);

        this.state = this.getStateFromLocalStorage() || {
            heading: `What They're Saying`,
            subHeading: 'Autumn winter Collection',
            items: [
                { 
                    title: 'julia walker',
                    caption: 'New innovative antiaging treatments with Lydia Badia. Treatments that allow you to look your best for your age. I met Lydia Badia when I was looking for the best Rhino and Septoplasty surgeon. It was one of the best investments I have made and after a successful rhino', 
                    job: 'designer'
                },
                { 
                    title: 'patrick harris',
                    caption: 'New innovative antiaging treatments with Lydia Badia. Treatments that allow you to look your best for your age. I met Lydia Badia when I was looking for the best Rhino and Septoplasty surgeon. It was one of the best investments I have made and after a successful rhino', 
                    job: 'dentist'
                },
                { 
                    title: 'Jin Alkaid',
                    caption: 'New innovative antiaging treatments with Lydia Badia. Treatments that allow you to look your best for your age. I met Lydia Badia when I was looking for the best Rhino and Septoplasty surgeon. It was one of the best investments I have made and after a successful rhino', 
                    job: 'Web Developer'
                },
            ]
        };
    }

    render() {
        const data = Buffer.from(JSON.stringify(this.state)).toString('base64');
        return (
            <SectionConfigLayout elClass="feellioFashionReview" title={this.title} 
                panels={[
                    {
                        title: "General",
                        element: <FeellioFashionReviewFormGeneral onFormGeneralChange={this.onFormGeneralChange} {...this.state} heading={this.state.heading} items_count={this.state.items.length} />,

                    },
                    ...this.state.items.map((item, index) => ({
                        title: `Review item ${index + 1}`,
                        element: <FeellioFashionReviewFormItem onFormItemChange={this.onFormItemChange.bind(this, index)} {...item} />,
                    })),
                ]}

                code={`<div class="u-hiddenVisually" data-local-banner-position="feellio-fashion-review" data-template="feellio_fashion_review" data-params="${data}">DO NOT REMOVE THIS LINE</div>`}
            />
        );
    }
}

export default FeellioFashionReview;
