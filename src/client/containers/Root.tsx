/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import React from 'react';
import {connect} from 'react-redux';
//import {Dispatch} from 'redux';

import Text from '../components/Text';
import {testAction} from '../actions/index';

interface IConnectedProps {
    css: any;
    testAction: Function
}

interface IState {
    count: number;
}

class Root extends React.Component<IConnectedProps, IState> {

    state = {
        count: 0
    }

    handleClick = () => {
        this.setState((prevState: IState) => ({
            count: prevState.count + 1
        }))
    }

    render() {
        return (
            <Text 
                counting={this.state.count}
                onClick={this.handleClick}
                actionClick={this.props.testAction}
                css={this.props.css}
            />
        );
    }
}


const mapStateToProps = (state: IConnectedProps) => ({
    css: state.css,
});

const mapDispatchToProps = (dispatch: any) => ({
    testAction: () => dispatch(testAction()),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(Root);
