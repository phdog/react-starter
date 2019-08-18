import React from 'react';
import {storiesOf} from '@storybook/react';
import Button from './index';

storiesOf('Button', module)
    .add('idle', () => (
        <Button color="hotpink">Press me</Button>
    ))
    .add('disabled', () => (
        <Button color="hotpink" disabled>Press me</Button>
    ))
    .add('loading', () => (
        <Button color="hotpink" loading>Press me</Button>
    ))
