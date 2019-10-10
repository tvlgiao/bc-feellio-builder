import React from 'react';
import { SectionConfigLayout } from './utils';
import BaseSectionConfig from './BaseSectionConfig';


class FeellioUnderwearVideoFormItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onFormItemChange(event.target.name, event.target.value);
    }

    render() {
        const { img, title, subTitle, actionText, actionLink } = this.props;
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="img">Icon URL</label>
                    <input type="text" className="form-control" id="img" name="img" value={img} onChange={this.handleChange} placeholder="Enter the icon URL" />
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
                    <label htmlFor="actionText">Action text</label>
                    <input type="text" className="form-control" id="actionText" name="actionText" value={actionText} onChange={this.handleChange} placeholder="Enter the action text" />
                </div>
                <div className="form-group">
                    <label htmlFor="actionLink">Action link</label>
                    <input type="text" className="form-control" id="actionLink" name="actionLink" value={actionLink} onChange={this.handleChange} placeholder="Enter the action link" />
                </div>
            </form>
        );
    }
}

class FeellioUnderwearVideoFormGeneral extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onFormGeneralChange(event.target.name, event.target.value);
    }

    render() {
        const { items_count, background, heading, subheading, desc, actionText, actionLink, videoLink, bannerVideo, iconVideoAction, textVideoAction  } = this.props;
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="background">Background image url</label>
                    <input type="text" className="form-control" id="background" name="background" value={background} onChange={this.handleChange} placeholder="Enter the background image url" />
                </div>
                <div className="form-group">
                    <label htmlFor="heading">Heading</label>
                    <input type="text" className="form-control" id="heading" name="heading" value={heading} onChange={this.handleChange} placeholder="Enter the heading text" />
                </div>
                <div className="form-group">
                    <label htmlFor="subheading">Sub Heading</label>
                    <input type="text" className="form-control" id="subheading" name="subheading" value={subheading} onChange={this.handleChange} placeholder="Enter the sub heading text" />
                </div>
                <div className="form-group">
                    <label htmlFor="desc">Description</label>
                    <textarea type="text" className="form-control" id="desc" name="desc" value={desc} onChange={this.handleChange} placeholder="Enter the description text" />
                </div>
                <div className="form-group">
                    <label htmlFor="actionText">Action text</label>
                    <textarea type="text" className="form-control" id="actionText" name="actionText" value={actionText} onChange={this.handleChange} placeholder="Enter the action text" />
                </div>
                <div className="form-group">
                    <label htmlFor="actionLink">Action link</label>
                    <textarea type="text" className="form-control" id="actionLink" name="actionLink" value={actionLink} onChange={this.handleChange} placeholder="Enter the action link" />
                </div>
                <div className="form-group">
                    <label htmlFor="videoLink">Video URL</label>
                    <textarea type="text" className="form-control" id="videoLink" name="videoLink" value={videoLink} onChange={this.handleChange} placeholder="Enter the video URL" />
                </div>
                <div className="form-group">
                    <label htmlFor="bannerVideo">Banner video URL</label>
                    <textarea type="text" className="form-control" id="bannerVideo" name="bannerVideo" value={bannerVideo} onChange={this.handleChange} placeholder="Enter the banner video URL" />
                </div>
                <div className="form-group">
                    <label htmlFor="iconVideoAction">Icon video action URL</label>
                    <textarea type="text" className="form-control" id="iconVideoAction" name="iconVideoAction" value={iconVideoAction} onChange={this.handleChange} placeholder="Enter the icon video action URL" />
                </div>
                <div className="form-group">
                    <label htmlFor="textVideoAction">Video action text</label>
                    <textarea type="text" className="form-control" id="textVideoAction" name="textVideoAction" value={textVideoAction} onChange={this.handleChange} placeholder="Enter The video action text" />
                </div>
                <div className="form-group">
                    <label htmlFor="items_count">Number of video items</label>
                    <input type="number" min="0" max="100" className="form-control" id="items_count" name="items_count" value={items_count} onChange={this.handleChange} placeholder="Enter number of video items" />
                </div>
            </form>
        );
    }
}

class FeellioUnderwearVideo extends BaseSectionConfig {
    defaultTitle = "Feellio Underwear Video";
    scopeName = "FeellioUnderwearVideo";

    constructor(props) {
        super(props);
        this.state = this.getStateFromLocalStorage() || {
            background: 'https://cdn11.bigcommerce.com/s-vml4wdqe4n/product_images/uploaded_images/feellio-underwear-video-bg.jpg',
            heading: 'It all starts with the Feellio store',
            subheading: 'Who we are',
            desc: `At the end of the day, we're here to make you feel good. Seriously. Because when you feel good, you can do anything. Make a statement, make a difference, make nice! It's up to you.`,
            actionText: 'Join the membership',
            actionLink: '#',
            videoLink: 'https://www.youtube.com/watch?v=lv98qicKbfs',
            bannerVideo: 'https://cdn11.bigcommerce.com/s-vml4wdqe4n/product_images/uploaded_images/feellio-underwear-video-banner.jpg',
            iconVideoAction: 'https://cdn11.bigcommerce.com/s-vml4wdqe4n/product_images/uploaded_images/feellio-underwear-video-action.png',
            textVideoAction: 'Video showcase 5:22',
            items: [
                { 
                    img: 'https://cdn11.bigcommerce.com/s-vml4wdqe4n/product_images/uploaded_images/feellio-underwear-video-icon-01.png', 
                    title: 'Exclusive Prints', 
                    subTitle: 'Gain access to super limited, monthly specifically made for customers.',
                    actionText: 'Read more',
                    actionLink: '#'
                },
                { 
                    img: 'https://cdn11.bigcommerce.com/s-vml4wdqe4n/product_images/uploaded_images/feellio-underwear-video-icon-02.png', 
                    title: 'Member Pricing', 
                    subTitle: 'Enjoy special pricing on everything we make. Seriously, go nuts.',
                    actionText: 'Read more',
                    actionLink: '#'
                },
                { 
                    img: 'https://cdn11.bigcommerce.com/s-vml4wdqe4n/product_images/uploaded_images/feellio-underwear-video-icon-03.png', 
                    title: 'No Strings Attached', 
                    subTitle: `It's your Membership. Swap styles, skip a month, or cancel anytime.`,
                    actionText: 'Read more',
                    actionLink: '#'
                }
            ]
        };
    }

    render() {
        const data = Buffer.from(JSON.stringify(this.state)).toString('base64');
        return (
            <SectionConfigLayout elClass="FeellioUnderwearVideo" title={this.title} 
                panels={[
                    {
                        title: "General",
                        element: <FeellioUnderwearVideoFormGeneral onFormGeneralChange={this.onFormGeneralChange} {...this.state} heading={this.state.heading} items_count={this.state.items.length} />,

                    },
                    ...this.state.items.map((item, index) => ({
                        title: `Video item ${index + 1}`,
                        element: <FeellioUnderwearVideoFormItem onFormItemChange={this.onFormItemChange.bind(this, index)} {...item} />,
                    })),
                ]}

                code={`<div class="u-hiddenVisually" data-local-banner-position="feellio-underwear-video" data-template="feellio_underwear_video" data-params="${data}">DO NOT REMOVE THIS LINE</div>`}
            />
        );
    }
}

export default FeellioUnderwearVideo;
