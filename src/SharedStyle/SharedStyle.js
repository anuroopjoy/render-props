import { useState } from 'react';

function SharedStyle(props) {
    const [title, setTitle] = useState('');
    const log = (message) => {
        console.log(message);
    };
    return (
        <code
            style={{ color: 'blue' }}
            title={title}
            onMouseOver={(evt) => {
                setTitle(evt.target.textContent);
            }}
        >
            {props.render({ log })}
        </code>
    );
}

export default SharedStyle;
