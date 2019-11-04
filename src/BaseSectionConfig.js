import React from 'react';
import clone from 'clone';
import _ from 'lodash';

class BaseSectionConfig extends React.Component {
    defaultTitle = "BaseSectionConfig";
    scopeName = "BaseSectionConfig";

    constructor(props) {
        super(props);
        this.onSaveState = _.debounce(this.onSaveState.bind(this), 300);
        this.onFormItemChange = this.onFormItemChange.bind(this);
        this.onFormGeneralChange = this.onFormGeneralChange.bind(this);
    }

    get title() {
        return this.props.title || this.defaultTitle;
    }

    get sectionKey() {
        return this.props.sectionKey || '';
    }

    setState() {
        this.onSaveState();
        return super.setState(...arguments);
    }

    onSaveState() {
        localStorage.setItem(`${this.scopeName}_state`, JSON.stringify(this.state));
    }

    getStateFromLocalStorage() {
        const val = localStorage.getItem(`${this.scopeName}_state`);
        try {
            return val ? JSON.parse(val) : null;
        } catch (e) {
            return null;
        }
    }

    onFormItemChange(index, name, value) {
        this.setState(state => {
            const items = clone(state.items);
            items[index][name] = value;
            return {
                items
            };
        })
    }

    onFormGeneralChange(name, value) {
        if (name === 'items_count') {
            const num = Number(value);
            if (this.state.items.length < num) {
                this.setState(state => {
                    const items = clone(state.items).concat(
                        Array.from(Array(num - this.state.items.length), () => ({ img: '', title: '',  link: '' }))
                    );
                    return {
                        items
                    };
                });
            } else if (this.state.items.length > num) {
                this.setState(state => {
                    const items = clone(state.items).slice(0, num);
                    return {
                        items
                    };
                });
            }
        } else {
            this.setState({
                [name]: value,
            });
        }
    }
}

export default BaseSectionConfig;