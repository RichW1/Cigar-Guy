import React from 'react';
import ReactDOM from 'react-dom';

class QuestionsCorner extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className='questionscorner'>
                <h1>Welcome to the QC</h1>
                <h2>Ask me your questions!</h2>
                <div className='formdiv'>
                <form className='questionsform'>
                    <div>
                    First name: <input type="text" name="fname" />
                    </div>
                    <textarea className='qctext' rows='13' cols='42'>
                      Submit your questions here...
                    </textarea>
                    <div><input type='submit' value='Submit' /></div>
                </form>
                </div>
            </div>
        )
    }
}

export default QuestionsCorner;