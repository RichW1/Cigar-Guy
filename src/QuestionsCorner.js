import React from 'react';
import ReactDOM from 'react-dom';

class QuestionsCorner extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className='questionscorner'>
                <div className='formdiv'>
                    <form id="questionsCorner">
                        <div>
                            <h1>Submit your questions!!</h1>
                            <label>
                                <span>Your name</span><input id="name" type="text" name="name" />
                            </label>

                            <label>
                                <span>Email Address</span><input id="email" type="text" name="email" />
                            </label>

                            <label>
                                <span>Subject</span><input id="subject" type="text" name="subject" />
                            </label>

                            <label>
                                <span>Message</span><textarea id="feedback" name="feedback"></textarea>
                                <input id="qcbutton" type="button" value="Submit Form" />
                            </label>

                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default QuestionsCorner;