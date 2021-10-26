import React, {FunctionComponent, useState} from 'react';

import ComputerCase from "./component/ComputerCase";

import './App.css';

const App: FunctionComponent = () => {
    const [isGameInProgress, setIsGameInProgress] = useState(true);

    const onClickNewGame = () => setIsGameInProgress(true);

    return (
        <div className="App">
            {!isGameInProgress && (<header className="new-game-screen" onClick={onClickNewGame}>New Game</header>)}
            {isGameInProgress && (<ComputerCase />)}
        </div>
    );
}

export default App;