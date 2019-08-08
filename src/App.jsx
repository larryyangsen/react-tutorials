import React from 'react';
import List from './List';
import ListWithChildren from './List-With-Children';
import ChangeProps from './Change-Props';

const items = ['iNu', 'WFM', 'Log 8000', 'QMS'];
const items2 = ['CIC', 'IVR', 'eVoice'];

const App = () => {
    return (
        <div className="App">
            <div className="productions">
                <List items={items} />
            </div>
            <ListWithChildren items={items2}>
                <h3>I am a child</h3>
            </ListWithChildren>
            <ChangeProps name="Richard" />
        </div>
    );
};

export default App;
