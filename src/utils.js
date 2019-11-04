import React from 'react';

export function htmlEntities(str) {
    return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

export function Code(props) {
    return (
        <pre className="code">{props.children.replace(/^(?!\n)\s+/mg, '').trim()}</pre>
    );
}

export function SectionConfigLayout(props) {
    return (
        <div className={props.elClass}>
            <div className="card">
                <div className="card-header">
                    <h3>{props.title} ({props.sectionKey})</h3>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="accordion" id={props.elClass+'Accordion'}>
                                <div className="card">
                                    {
                                        props.panels.map((panel, index) => (
                                            <div className="card" key={index}>
                                                <div className="card-header" id={props.elClass+'Heading'+index}>
                                                    <h4 className="mb-0">
                                                        <button className={'btn btn-link btn-block text-left' + (index > 0 ? ' collapsed' : '')} type="button" data-toggle="collapse" data-target={'#'+props.elClass+'Collapse'+index} aria-expanded="true" aria-controls={props.elClass+'Collapse'+index}>
                                                            {panel.title}
                                                        </button>
                                                    </h4>
                                                </div>
                                                <div id={props.elClass+'Collapse'+index} className={'collapse' + (index === 0 ? ' show' : '')} aria-labelledby={props.elClass+'Heading'+index} data-parent={'#'+props.elClass+'Accordion'}>
                                                    <div className="card-body">
                                                        {panel.element}
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-header">
                                    <h4>Banner Code</h4>
                                </div>
                                <div className="card-body">
                                    <Code>
                                        {props.code}
                                    </Code>
                                </div>
                            </div>
                            <div className="card mt-3">
                                <div className="card-header">
                                    <h4>Instruction</h4>
                                </div>
                                <div className="card-body">
                                    <p>Input the code below to your banner.</p>
                                    <ol>
                                        <li>Create a new banner in <strong>Marketing</strong> > <strong>Banners</strong> > click <strong>Create a Banner</strong> button.</li>
                                        <li>Click button <strong>HTML</strong> in <strong>Banner Content</strong> editor to show <strong>HTML Source Editor</strong>.</li>
                                        <li>Copy and paste the code above to <strong>HTML Source Editor</strong>. Then click <strong>Update</strong> button:<br/>
                                            <img className="img-thumbnail mt-3 mb-4" src="img/banner-content-html-source-editor.png" alt="html source editor" />
                                        </li>
                                        <li>
                                            Set Show on <strong>Page</strong> = <strong>Home Page</strong> and <code>Location</code> = <code>Top of Page</code>:<br/>
                                            <img className="img-thumbnail mt-3 mb-4" src="img/config-banner-show-on-home.png" alt="Show on Home Page" />
                                        </li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
