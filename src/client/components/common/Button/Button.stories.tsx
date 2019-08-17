import React from 'react';
import {storiesOf} from '@storybook/react';
import Button from './index';

storiesOf('Button', module)
    .add('Simple', () => (
        <Button>Simple</Button>
    ))
    .add('With color props on hover', () => (
        <Button color="green">Hover me</Button>
    ))
