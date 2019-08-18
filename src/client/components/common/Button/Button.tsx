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
            }
            &:hover {
                cursor: pointer;
            }
            &:disabled {
                opacity: 0.8;
                cursor: default;

                & * {
                    opacity: 1;
                }
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
