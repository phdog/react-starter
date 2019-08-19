/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import React from 'react';
import Loader from 'client/components/common/Loader/index';

interface IButton {
    disabled?: boolean;
    loading?: boolean;
    active?: boolean;
    inverted?: boolean;
    inline?: boolean;
    color: {
        text: string;
        background: string;
        hover: string;
        disabled: string;
        active: string
    };
    onClick?: () => void;
    css?: any;
}

const Button: React.SFC<IButton> = ({
    disabled, loading, active, inverted, inline, color, onClick, children }) => {

    const isMinimal = inverted || inline;
    const borderWidth = 1;
    const hPadding = 8;
    const vPadding = 16;

    const baseColor = () => {
        if (isMinimal) {
            if (active) {
                return color.active;
            }
            return color.background;
        }
        return color.text;
    };

    const baseBackground = () => {
        if (isMinimal) {
            return color.text;
        }
        if (active) {
            return color.active;
        }
        return color.background;
    };

    const baseBorder = () => {
        if (inverted) {
            if (active) {
                return `${borderWidth}px solid ${color.active}`;
            }
            return `${borderWidth}px solid ${color.background}`;
        }
        return 'none';
    };

    const hoverBackground = () => {
        if (isMinimal) {
            return color.text;
        }
        if (loading) {
            return color.background;
        }
        return color.hover;
    };

    const hoverColor = () => {
        if (isMinimal) {
            return color.hover;
        }
    };

    const hoverBorder = () => {
        if (inverted && !loading) {
            return `${borderWidth}px solid ${color.hover}`;
        }
        if (inverted && loading) {
            return `${borderWidth}px solid ${color.background}`;
        }
        return 'none';
    };

    const activeBackground = () => {
        if (isMinimal) {
            return color.text;
        }
        if (loading) {
            return color.background;
        }
        return color.active;
    };

    const activeBorder = () => {
        if (inverted) {
            return `${borderWidth}px solid ${color.active}`;
        }
        return 'none';
    };

    return (
        <button
            onClick={onClick}
            disabled={disabled}
            css={css`
            position: relative;
            box-sizing: border-box;
            padding: ${inverted ?
                    `${hPadding - borderWidth}px ${vPadding - borderWidth}px` :
                    `${hPadding}px ${vPadding}px`};
            border: ${baseBorder()};
            background-color: ${baseBackground()};
            color: ${baseColor()};

            font-size: 24px;

            &:focus {
                outline: none;
            }

            &:active:not(:disabled) {
                outline: none;
                background-color: ${activeBackground()};
                color: ${isMinimal ? color.active : color.text};
                border: ${activeBorder()};
            }

            &:hover:not(:disabled):not(:active) {
                cursor: ${loading ? 'default' : 'pointer'};
                background-color: ${hoverBackground()};
                color: ${hoverColor()};
                border: ${hoverBorder()};
            }

            &:disabled {
                cursor: default;
                color: ${isMinimal ? color.disabled : color.text};
                border: ${inverted ? `${borderWidth}px solid ${color.disabled}` : 'none'};
                background-color: ${isMinimal ? color.text : color.disabled};
            }
        `}
        >
            <span
                css={css`
               visibility: ${loading ? 'hidden' : 'visible'};
            `}
            >
                {children}
            </span>
            {loading ? <Loader color={isMinimal ? color.background : color.text} inline /> : null}
        </button>
    );
};

export default Button;
