/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import React from 'react';
import Loader from 'client/components/common/Loader/index';
import { ESize } from 'client/constants/enums/ui';

interface IButton {
    disabled?: boolean;
    loading?: boolean;
    onClick?: () => void;
    size?: ESize;
    color?: string;
    css?: any;
}


const Button: React.SFC<IButton> = ({disabled, loading, color, onClick, children}) => {

    const textVisibility = loading ? 'hidden' : 'visible';
    const textColor = 'white';
    const cursor = loading ? 'default' : 'pointer';
    const shouldNotTransform = loading || disabled;

    return (
        <button
        onClick={onClick}
        disabled={disabled}
        css={css`
            position: relative;
            padding: 8px 16px;
            background-color: ${color};
            opacity: 1;
            color: ${textColor};
            font-size: 24px;
            border: none;
            border-radius: 4px;
            &:focus {
                outline: none;
            }
            &:active {
                outline: none;
                border: none;
                filter: ${loading ? 'none' : 'contrast(150%)'};
                transform: ${shouldNotTransform ? 'none' : 'scale3d(1.03, 1.03, 1)'};
            }
            &:hover {
                cursor: ${cursor};
            }
            &:disabled {
                filter: contrast(80%);
                cursor: default;
            }
        `}
    >
        <span
            css={css`
               visibility: ${textVisibility};
            `}
        >
            {children}
        </span>
        {loading && <Loader color={textColor} inline />}
    </button>
    );
};

export default Button;
