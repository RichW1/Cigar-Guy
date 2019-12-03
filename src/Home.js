import React from 'react';

class Home extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className='welcome'>
                <h1>This is the home screen</h1>
                <section>
                    <h2>I'm just a guy who likes cigars.</h2>
                </section>
            </div>
        )
    }
}

export default Home;