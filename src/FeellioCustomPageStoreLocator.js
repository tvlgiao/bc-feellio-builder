import React from 'react';
import { SectionConfigLayout } from './utils';
import BaseSectionConfig from './BaseSectionConfig';


class FeellioCustomPageStoreLocatorFormItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onFormItemChange(event.target.name, event.target.value);
    }

    render() {
        const { content, name, lat, lng } = this.props;
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="name">The location name</label>
                    <input type="text" className="form-control" id="name" name="name" value={name} onChange={this.handleChange} placeholder="Enter the location name" />
                </div>
                <div className="form-group">
                    <label htmlFor="content">The location information</label>
                    <input type="text" className="form-control" id="content" name="content" value={content} onChange={this.handleChange} placeholder="Enter the location information" />
                </div>
                <div className="form-group">
                    <label htmlFor="lat">lat</label>
                    <input type="text" className="form-control" id="lat" name="lat" value={lat} onChange={this.handleChange} placeholder="Enter the lat" />
                </div>
                <div className="form-group">
                    <label htmlFor="lng">lng</label>
                    <input type="text" className="form-control" id="lng" name="lng" value={lng} onChange={this.handleChange} placeholder="Enter the lng" />
                </div>
            </form>
        );
    }
}

class FeellioCustomPageStoreLocatorFormGeneral extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onFormGeneralChange(event.target.name, event.target.value);
    }

    render() {
        const { items_count, apiKey } = this.props;
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="apiKey">Google apiKey</label>
                    <input type="text" className="form-control" id="apiKey" name="apiKey" value={apiKey} onChange={this.handleChange} placeholder="Enter the google apiKey" />
                </div>
                <div className="form-group">
                    <label htmlFor="items_count">Number of location items</label>
                    <input type="number" min="0" max="100" className="form-control" id="items_count" name="items_count" value={items_count} onChange={this.handleChange} placeholder="Enter number of location items" />
                </div>
            </form>
        );
    }
}

class FeellioCustomPageStoreLocator extends BaseSectionConfig {
    defaultTitle = "Feellio Custom Page Store Locator";
    scopeName = "FeellioCustomPageStoreLocator";

    constructor(props) {
        super(props);
        this.state = this.getStateFromLocalStorage() || {
            apiKey: '',
            items: [
                {
                    content: `he marker's title will appear as a tooltip.`,
                    name: 'Chợ Bến Thành',
                    lat: 10.772752, 
                    lng: 106.6991856,
                },
                {
                    content: 'he marker`s title will appear as a tooltip.',
                    name: 'Bảo tàng Tôn Đức Thắng',
                    lat: 10.7772935, 
                    lng: 106.7044382,
                },
                {
                    content: 'he marker`s title will appear as a tooltip.',
                    name: 'Dinh Độc Lập',
                    lat: 10.777149, 
                    lng: 106.6932592,
                },
                {
                    content: 'he marker`s title will appear as a tooltip.',
                    name: 'UBND Thành phố Hồ Chí Minh',
                    lat: '10.7765663',
                    lng: '106.6987833',
                },
            ]
        };
    }

    render() {
        const data = Buffer.from(JSON.stringify(this.state)).toString('base64');
        return (
            <SectionConfigLayout elClass="feellioCustomPageStoreLocator" title={this.title} sectionKey={this.sectionKey}
                panels={[
                    {
                        title: "General",
                        element: <FeellioCustomPageStoreLocatorFormGeneral onFormGeneralChange={this.onFormGeneralChange} {...this.state} heading={this.state.heading} items_count={this.state.items.length} />,

                    },
                    ...this.state.items.map((item, index) => ({
                        title: `Location item ${index + 1}`,
                        element: <FeellioCustomPageStoreLocatorFormItem onFormItemChange={this.onFormItemChange.bind(this, index)} {...item} />,
                    })),
                ]}

                code={`<div id="map" data-map="${data}">THE MAP WILL BE DISPLAY HERE! DO NOT REMOVE THIS LINE!</div>`}
            />
        );
    }
}

export default FeellioCustomPageStoreLocator;
