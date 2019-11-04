import React from 'react';
import { SectionConfigLayout } from './utils';
import BaseSectionConfig from './BaseSectionConfig';

class FeellioPetsOurWorkFormGeneral extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onFormGeneralChange(event.target.name, event.target.value);
    }

    render() {
        const { img, heading } = this.props;
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="img">Image URL</label>
                    <input type="text" className="form-control" id="img" name="img" value={img} onChange={this.handleChange} placeholder="Enter the image URL" />
                </div>
                <div className="form-group">
                    <label htmlFor="heading">Background text</label>
                    <input type="text" className="form-control" id="heading" name="heading" value={heading} onChange={this.handleChange} placeholder="Enter the background text" />
                </div>
            </form>
        );
    }
}

class FeellioPetsOurWorkItemOne extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onFormGeneralChange(event.target.name, event.target.value);
    }

    render() {
        const { title1, desc1 } = this.props;
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="title1">Title</label>
                    <input type="text" className="form-control" id="title1" name="title1" value={title1} onChange={this.handleChange} placeholder="Enter the title text" />
                </div>
                <div className="form-group">
                    <label htmlFor="desc1">Description</label>
                    <input type="text" className="form-control" id="desc1" name="desc1" value={desc1} onChange={this.handleChange} placeholder="Enter the description text" />
                </div>
            </form>
        );
    }
}

class FeellioPetsOurWorkItemTwo extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onFormGeneralChange(event.target.name, event.target.value);
    }

    render() {
        const { title2, desc2 } = this.props;
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="title2">Title</label>
                    <input type="text" className="form-control" id="title2" name="title2" value={title2} onChange={this.handleChange} placeholder="Enter the title text" />
                </div>
                <div className="form-group">
                    <label htmlFor="desc2">Description</label>
                    <input type="text" className="form-control" id="desc2" name="desc2" value={desc2} onChange={this.handleChange} placeholder="Enter the description text" />
                </div>
            </form>
        );
    }
}

class FeellioPetsOurWorkItemThree extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onFormGeneralChange(event.target.name, event.target.value);
    }

    render() {
        const { title3, desc3 } = this.props;
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="title2">Title</label>
                    <input type="text" className="form-control" id="title3" name="title3" value={title3} onChange={this.handleChange} placeholder="Enter the title text" />
                </div>
                <div className="form-group">
                    <label htmlFor="desc3">Description</label>
                    <input type="text" className="form-control" id="desc3" name="desc3" value={desc3} onChange={this.handleChange} placeholder="Enter the description text" />
                </div>
            </form>
        );
    }
}

class FeellioPetsOurWorkItemFour extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onFormGeneralChange(event.target.name, event.target.value);
    }

    render() {
        const { title4, desc4 } = this.props;
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="title4">Title</label>
                    <input type="text" className="form-control" id="title4" name="title4" value={title4} onChange={this.handleChange} placeholder="Enter the title text" />
                </div>
                <div className="form-group">
                    <label htmlFor="desc4">Description</label>
                    <input type="text" className="form-control" id="desc4" name="desc4" value={desc4} onChange={this.handleChange} placeholder="Enter the description text" />
                </div>
            </form>
        );
    }
}

class FeellioPetsOurWork extends BaseSectionConfig {
    defaultTitle = "Feellio Pets Our Work";
    scopeName = "FeellioPetsOurWork";

    constructor(props) {
        super(props);

        this.state = this.getStateFromLocalStorage() || {
            img: 'https://cdn11.bigcommerce.com/s-q6xkae5hk1/product_images/uploaded_images/feellio-carepets-our-work-banner.png',
            heading: 'Our Work',
            title1: 'Support',
            desc1: 'Praesent condimentum mi convallis, porta lorem ac, mollis lacus. Etiam sodales suscipit tortor...',
            title2: 'Team',
            desc2: 'Praesent condimentum mi convallis, porta lorem ac, mollis lacus. Etiam sodales suscipit tortor...',
            title3: 'Price',
            desc3: 'Praesent condimentum mi convallis, porta lorem ac, mollis lacus. Etiam sodales suscipit tortor...',
            title4: 'Services',
            desc4: 'Praesent condimentum mi convallis, porta lorem ac, mollis lacus. Etiam sodales suscipit tortor...',
        };
    }

    render() {
        const data = Buffer.from(JSON.stringify(this.state)).toString('base64');
        return (
            <SectionConfigLayout elClass="feellioPetsOurWork" title={this.title} sectionKey={this.sectionKey}
                panels={[
                    {
                        title: 'General',
                        element: <FeellioPetsOurWorkFormGeneral onFormGeneralChange={this.onFormGeneralChange} {...this.state} />,
                    },
                    {
                        title: 'Item 1',
                        element: <FeellioPetsOurWorkItemOne onFormGeneralChange={this.onFormGeneralChange} {...this.state} />,
                    },
                    {
                        title: 'Item 2',
                        element: <FeellioPetsOurWorkItemTwo onFormGeneralChange={this.onFormGeneralChange} {...this.state} />,
                    },
                    {
                        title: 'Item 3',
                        element: <FeellioPetsOurWorkItemThree onFormGeneralChange={this.onFormGeneralChange} {...this.state} />,
                    },
                    {
                        title: 'Item 4',
                        element: <FeellioPetsOurWorkItemFour onFormGeneralChange={this.onFormGeneralChange} {...this.state} />,
                    },
                ]}

                code={`<div class="u-hiddenVisually" data-local-banner-position="feellio-pets-our-work" data-template="feellio_pets_our_work" data-params="${data}">DO NOT REMOVE THIS LINE</div>`}
            />
        );
    }
}

export default FeellioPetsOurWork;
