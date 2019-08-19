import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './index';

const dividerStyle = {marginBottom: '2rem'};
const color = {
    text: 'white',
    background: 'hotpink',
    hover: 'salmon',
    disabled: 'pink',
    active: 'red',
};

storiesOf('Button', module)
    .add('all', () => (
        <>
            <div style={dividerStyle}>
                <Button color={color}>Press me</Button>
                <Button color={color} inverted>Press me</Button>
                <Button color={color} inline>Press me</Button>
            </div>
            <div style={dividerStyle}>
                <Button color={color} active>Press me</Button>
                <Button color={color} active inverted>Press me</Button>
                <Button color={color} active inline>Press me</Button>
            </div>
            <div style={dividerStyle}>
                <Button color={color} disabled>Press me</Button>
                <Button color={color} disabled inverted>Press me</Button>
                <Button color={color} disabled inline>Press me</Button>
            </div>
            <div style={dividerStyle}>
                <Button color={color} loading>Press me</Button>
                <Button color={color} loading inverted>Press me</Button>
                <Button color={color} loading inline>Press me</Button>
            </div>
        </>
    ));
