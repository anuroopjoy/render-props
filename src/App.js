import logo from './logo.svg';
import './App.css';

import Text from './Text/Text';
import Link from './Link/Link';
import SharedStyle from './SharedStyle/SharedStyle';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <SharedStyle
                    render={({ log }) => <Text log={log} />}
                ></SharedStyle>
                <SharedStyle
                    render={({ log }) => <Link log={log} />}
                ></SharedStyle>
            </header>
        </div>
    );
}

export default App;
