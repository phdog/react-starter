/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import React from 'react';
import {connect} from 'react-redux';
import Text from '../components/Text';

interface IConnectedProps {
  css: any;
}

const NotFound = (props) => {
  return (
          <Text
            routing={{to: '/', text: 'Root'}}
            css={props.css}
        />);
};

const mapStateToProps = (state: IConnectedProps) => ({
  css: state.css,
});

const connector = connect(mapStateToProps);

export default connector(NotFound);
