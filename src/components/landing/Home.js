import React from 'react';
import Header from './Header';
import Section from './Section';
import Footer from './Footer';
import GoogleLogin from 'react-google-login';

const googleSuccess = (response) => {
    //console.log(response.profileObj);
    console.log(response.profileObj.email);
    console.log(response.profileObj.name);
    window.location.pathname = '/courses'
};

const googleFailure = (response) => {
    //popup_closed_by_user
    //access_denied
    //immediate_failed
    //idpiframe_initialization_failed
    console.log(response.error);
    window.location.pathname = '/'
};

const Home = () => {
    return (
        <div>
            
            <Header/>

            <div className="container text-muted">
                <Section/>
                <span className="ml-5">
                            <GoogleLogin
                                clientId="442664569962-bkfjkg7vvi9fhio0aeoedr4lofe57hjh.apps.googleusercontent.com"
                                buttonText="Google Login"
                                className="btn btn-primary"
                                onSuccess={googleSuccess}
                                onFailure={googleFailure}
                            />
                </span>
                <Footer/>
            </div>
            
        </div>
    );
};



export default Home;
