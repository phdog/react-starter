/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import React from 'react';
import { ESize } from 'client/constants/enums/ui';

interface IButton {
    disabled?: boolean;
    onClick?: () => void;
    size?: ESize;
    color?: string;
    css?: any;
}

const Button: React.SFC<IButton> = (props) => (
    <button
        onClick={props.onClick}
        css={css`
            padding: 32px;
            background-color: hotpink;
            font-size: 24px;
            border-radius: 4px;
            &:hover {
                background-color: ${props.color};
            }
        `}
    >
        {props.children}
    </button>
);

export default Button;
