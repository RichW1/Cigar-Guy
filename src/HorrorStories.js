import React from 'react';

class HorrorStories extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div>
                <div className='broken'>
                    <h1>Horror Stories!!!</h1>
                    <h2>Share your horror stories with me!</h2>
                    <form className='horrorform'>
                        <div>
                            Alias: <input type="text" name="fname" />
                        </div>
                        <textarea className='qctext' rows='13' cols='42'>
                            Tell me your horror stories...
                        </textarea>
                        <div><input type='submit' value='Submit' /></div>
                    </form>
                </div>
            </div>
        )
    }
}

export default HorrorStories;