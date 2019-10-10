import React from 'react';
import { SectionConfigLayout } from './utils';
import BaseSectionConfig from './BaseSectionConfig';


class FeellioPetsOurProfessionalsFormItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onFormItemChange(event.target.name, event.target.value);
    }

    render() {
        const { img, name, patients, job } = this.props;
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
                    <label htmlFor="patients">Patients</label>
                    <input type="text" className="form-control" id="patients" name="patients" value={patients} onChange={this.handleChange} placeholder="Enter patient number text" />
                </div>
                <div className="form-group">
                    <label htmlFor="job">Job name</label>
                    <input type="text" className="form-control" id="job" name="job" value={job} onChange={this.handleChange} placeholder="Enter job name" />
                </div>
            </form>
        );
    }
}

class FeellioPetsOurProfessionalsFormGeneral extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onFormGeneralChange(event.target.name, event.target.value);
    }

    render() {
        const { heading, items_count } = this.props;
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="heading">Heading text</label>
                    <input type="text" className="form-control" id="heading" name="heading" value={heading} onChange={this.handleChange} placeholder="Enter the heading text" />
                </div>
                <div className="form-group">
                    <label htmlFor="items_count">Number of OurProfessional items</label>
                    <input type="number" min="0" max="100" className="form-control" id="items_count" name="items_count" value={items_count} onChange={this.handleChange} placeholder="Enter number of Our Professional items" />
                </div>
            </form>
        );
    }
}

class FeellioPetsOurProfessionals extends BaseSectionConfig {
    defaultTitle = "Feellio Our Professionals";
    scopeName = "FeellioOurProfessionals";

    constructor(props) {
        super(props);

        this.state = this.getStateFromLocalStorage() || {
            heading: 'Our Professionals',
            items: [
                { 
                    img: 'https://cdn11.bigcommerce.com/s-q6xkae5hk1/product_images/uploaded_images/feellio-carepets-avata-01.jpg', 
                    name: 'julia walker',
                    patients: '30 patients', 
                    job: 'dentist'
                },
                { 
                    img: 'https://cdn11.bigcommerce.com/s-q6xkae5hk1/product_images/uploaded_images/feellio-carepets-avata-02.jpg', 
                    name: 'patrick harris', 
                    patients: '40 patients', 
                    job: `therapist`
                },
                { 
                    img: 'https://cdn11.bigcommerce.com/s-q6xkae5hk1/product_images/uploaded_images/feellio-carepets-avata-03.jpg', 
                    name: 'simon bennett', 
                    patients: '45 patients', 
                    job: 'consultant'
                },
                { 
                    img: 'https://cdn11.bigcommerce.com/s-q6xkae5hk1/product_images/uploaded_images/feellio-carepets-avata-04.jpg', 
                    name: 'samanta johnson', 
                    patients: '50 patients', 
                    job: 'surgeon'
                },
                { 
                    img: 'https://cdn11.bigcommerce.com/s-q6xkae5hk1/product_images/uploaded_images/feellio-carepets-avata-05.jpg', 
                    name: 'samanta johnson', 
                    patients: '50 patients', 
                    job: 'surgeon'
                },
                { 
                    img: 'https://cdn11.bigcommerce.com/s-q6xkae5hk1/product_images/uploaded_images/feellio-carepets-avata-03.jpg', 
                    name: 'cameron brown', 
                    patients: '55 patients', 
                    job: 'traumatologist'
                },
            ]
        };
    }

    render() {
        const data = Buffer.from(JSON.stringify(this.state)).toString('base64');
        return (
            <SectionConfigLayout elClass="feellioPetsOurProfessionals" title={this.title} 
                panels={[
                    {
                        title: "General",
                        element: <FeellioPetsOurProfessionalsFormGeneral onFormGeneralChange={this.onFormGeneralChange} {...this.state} heading={this.state.heading} items_count={this.state.items.length} />,

                    },
                    ...this.state.items.map((item, index) => ({
                        title: `Our Professional item ${index + 1}`,
                        element: <FeellioPetsOurProfessionalsFormItem onFormItemChange={this.onFormItemChange.bind(this, index)} {...item} />,
                    })),
                ]}

                code={`<div class="u-hiddenVisually" data-local-banner-position="feellio-pets-our-professionals" data-template="feellio_pets_our_professionals" data-params="${data}">DO NOT REMOVE THIS LINE</div>`}
            />
        );
    }
}

export default FeellioPetsOurProfessionals;
