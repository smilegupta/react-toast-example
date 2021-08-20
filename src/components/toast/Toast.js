import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import './Toast.css';

const Toast = props => {
    const { toastList, position} = props;
    const [list, setList] = useState(toastList);

    useEffect(() => {
        setList([...toastList]);
    }, [toastList]);


    const deleteToast = id => {
        const listItemIndex = list.findIndex(e => e.id === id);
        const toastListItem = toastList.findIndex(e => e.id === id);
        list.splice(listItemIndex, 1);
        toastList.splice(toastListItem, 1);
        setList([...list]);
    }

    return (
        <>
            <div className={`notification-container ${position}`}>
                {
                    list.map((toast, i) =>     
                        <div 
                            key={i}
                            className={`notification toast ${position}`}
                            style={{ backgroundColor: toast.backgroundColor, borderLeftColor: toast.borderColor, borderLeftStyle: "solid", borderLeftWidth: "7px"  }}
                        >
                            {console.log("border",)}
                            <div className="wrapper">
                            <span className="notification-title">{toast.title}</span>
                            <button onClick={() => deleteToast(toast.id)}>
                                X
                            </button>
                            </div>
                        </div>
                    )
                }
            </div>
        </>
    );
}

Toast.propTypes = {
    toastList: PropTypes.array.isRequired,
    position: PropTypes.string,
    autoDelete: PropTypes.bool,
    dismissTime: PropTypes.number
}

export default Toast;
