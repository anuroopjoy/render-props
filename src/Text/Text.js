import { useEffect } from 'react';

function Text(props) {
    useEffect(() => {
        props.log('Text component created');
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return <p>Edit src/App.js and save to reload.</p>;
}

export default Text;
