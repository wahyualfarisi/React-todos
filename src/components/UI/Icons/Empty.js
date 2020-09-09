import React from 'react';
import Icon from './../../../assets/img/empty.svg';

const Empty = (props) => {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '300px',
            flexDirection: 'column'
        }}>
        <img src={Icon} width="150px" alt="empty image" />
        <p>No list</p>
        </div>
    );
};

export default Empty;