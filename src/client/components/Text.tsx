/** @jsx jsx */
import { jsx, css } from '@emotion/core';


const Text = (props: any) => {
    return (
        <div className={props.className}>
            Counting: {props.counting}
            <div onClick={props.actionClick}>Action</div>
            <div onClick={props.onClick}>+</div>
        </div >
    );
}

export default Text;
