/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import React from 'react';
import {Link} from 'react-router-dom';

const Text = (props: any) => {
    return (
        <div className={props.className}>
            Counting: {props.counting}
            <div onClick={props.actionClick}>Action</div>
            <div onClick={props.onClick}>+</div>
            <Link to={props.routing.to}>{props.routing.text}</Link>
        </div >
    );
}

export default Text;
