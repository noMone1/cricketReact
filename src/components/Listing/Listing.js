import React from 'react';
import { useNavigate } from 'react-router-dom';

const Listing = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/match');
    };

    return (
        <div className="p-0">
            <ul className="list-group">
                <b>
                    <li className="list-group-item" >
                        <div className="row align-items-center">
                            <div className="col-6" onClick={handleClick}>
                                <a style={{ color: '#347aeb', fontSize: '16px' }}>The Ashes 2023</a>
                            </div>
                            <div className="col-3">
                                <span style={{ color: '#4dbd74', fontSize: '14px' }}>In -Play</span>
                            </div>
                            <div className="col-3 text-end">
                                <span style={{ fontSize: '25px' }}>
                                    <i className="fa fa-thumb-tack" />
                                </span>
                            </div>
                        </div>
                    </li>
                    <li className="list-group-item" >
                        <div className="row align-items-center">
                            <div className="col-6" onClick={handleClick}>
                                <a style={{ color: '#347aeb', fontSize: '16px' }}>Ireland V Nepal</a>
                            </div>
                            <div className="col-3">
                                <span style={{ color: '#4dbd74', fontSize: '14px' }}>In -Play</span>
                            </div>
                            <div className="col-3 text-end">
                                <span style={{ fontSize: '25px' }}>
                                    <i className="fa fa-thumb-tack" />
                                </span>
                            </div>
                        </div>
                    </li>
                    <li className="list-group-item" >
                        <div className="row align-items-center">
                            <div className="col-6" onClick={handleClick}>
                                <a style={{ color: '#347aeb', fontSize: '16px' }}>Siechem Madurai v IDream Tiruppur</a>
                            </div>
                            <div className="col-3">
                                <span style={{ color: '#4dbd74', fontSize: '14px' }}>In -Play</span>
                            </div>
                            <div className="col-3 text-end">
                                <span style={{ fontSize: '25px' }}>
                                    <i className="fa fa-thumb-tack" />
                                </span>
                            </div>
                        </div>
                    </li>
                    <li className="list-group-item" >
                        <div className="row align-items-center">
                            <div className="col-6" onClick={handleClick}>
                                <a style={{ color: '#347aeb', fontSize: '16px' }}>The Ashes 2023</a>
                            </div>
                            <div className="col-3">
                                <span style={{ color: '#4dbd74', fontSize: '14px' }}>In -Play</span>
                            </div>
                            <div className="col-3 text-end">
                                <span style={{ fontSize: '25px' }}>
                                    <i className="fa fa-thumb-tack" />
                                </span>
                            </div>
                        </div>
                    </li>
                    <li className="list-group-item" >
                        <div className="row align-items-center">
                            <div className="col-6" onClick={handleClick}>
                                <a style={{ color: '#347aeb', fontSize: '16px' }}>The Ashes 2023</a>
                            </div>
                            <div className="col-3">
                                <span style={{ color: '#4dbd74', fontSize: '14px' }}>In -Play</span>
                            </div>
                            <div className="col-3 text-end">
                                <span style={{ fontSize: '25px' }}>
                                    <i className="fa fa-thumb-tack" />
                                </span>
                            </div>
                        </div>
                    </li>
                    <li className="list-group-item" >
                        <div className="row align-items-center">
                            <div className="col-6" onClick={handleClick}>
                                <a style={{ color: '#347aeb', fontSize: '16px' }}>The Ashes 2023</a>
                            </div>
                            <div className="col-3">
                                <span style={{ color: '#4dbd74', fontSize: '14px' }}>In -Play</span>
                            </div>
                            <div className="col-3 text-end">
                                <span style={{ fontSize: '25px' }}>
                                    <i className="fa fa-thumb-tack" />
                                </span>
                            </div>
                        </div>
                    </li>
                </b>
            </ul>
        </div>
    );
};

export default Listing;
