import React, { useEffect, useRef } from 'react';

const App = () => {
    const divRef = useRef();
    useEffect(() => {
        const { height } = divRef.current.getBoundingClientRect();
        const interval = setInterval(() => {
            divRef.current.scrollTop += 1;
            if (
                divRef.current.scrollTop + height >=
                divRef.current.scrollHeight
            ) {
                clearInterval(interval);
            }
        }, 100);
    }, []);
    return (
        <div className="App">
            <div ref={divRef}>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Nisi omnis amet, beatae, nulla iusto debitis eligendi fuga
                    deleniti ex qui eveniet et mollitia. Aliquam esse nihil
                    voluptatum quam eveniet nobis.
                </p>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Nisi omnis amet, beatae, nulla iusto debitis eligendi fuga
                    deleniti ex qui eveniet et mollitia. Aliquam esse nihil
                    voluptatum quam eveniet nobis.
                </p>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Nisi omnis amet, beatae, nulla iusto debitis eligendi fuga
                    deleniti ex qui eveniet et mollitia. Aliquam esse nihil
                    voluptatum quam eveniet nobis.
                </p>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Nisi omnis amet, beatae, nulla iusto debitis eligendi fuga
                    deleniti ex qui eveniet et mollitia. Aliquam esse nihil
                    voluptatum quam eveniet nobis.
                </p>
            </div>
        </div>
    );
};

export default App;
