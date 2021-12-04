import React, { Component } from 'react';

import { setResumeData } from '../redux/ActionCreator';
import { PreviewPage } from '../pages/Preview';
import { HomePage } from '../pages/Home';
import { Route, Routes } from 'react-router-dom';
import { connect } from 'react-redux';


const mapStateToProps = state => {
    return {
        resumeData: state.resumeData,
    }
}

const mapDispatchToProps = {
    setResumeData: (data) => (setResumeData(data)),
};



class Main extends Component {
    render() {
        return (
            <Routes>
                <Route path="/" element={<HomePage resumeData={this.props.resumeData} setResumeData={this.props.setResumeData} />} />
                <Route path="/preview" exact element={<PreviewPage />} />
            </Routes>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);