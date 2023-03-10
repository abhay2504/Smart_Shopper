import React from 'react';

export default function NameAndType(props) {

    const elem = {
        display: 'flex',
        flexDirection: 'column',
    }

    return (
        <div style={elem}>
            <label>{props.label}</label>
            <input type={props.type} id={props.id} placeholder={props.placeholder} value={props.value} onChange={(e) => { props.onChange(e) }} />
        </div>
    )
}