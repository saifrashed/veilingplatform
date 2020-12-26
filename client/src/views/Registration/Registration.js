import React from 'react';

const Registration = (props) => {
    return (
        <>
            <div className="container" style={{paddingTop: '6rem'}}>

                <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-6 p-2">
                        <div className="card">
                            <div className="card-header bg-dark text-light">
                                <i className="fas fa-clipboard mr-2"/>
                                Registreren
                                <div className="clearfix"></div>
                            </div>

                            <div className="card-body">
                            </div>
                        </div>
                    </div>


                    <div className="col-sm-12 col-md-6 col-lg-6 p-2">
                        <div className="card">
                            <div className="card-header bg-dark text-light">
                                <i className="fas fa-info-circle  mr-2"/>
                                Informatie
                                <div className="clearfix"></div>
                            </div>

                            <div className="card-body">
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </>
    );
};


export default Registration;
