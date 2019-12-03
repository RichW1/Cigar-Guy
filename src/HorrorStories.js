import React from 'react';

class HorrorStories extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div>
                <div className='broken'>
                    <form id="horrorStories">
                        <div>
                            <h1>Share your horror stories with me!</h1>
                            <label>
                                <span>Name</span><input id="name1" type="text" name="name1" />
                            </label>

                            <label>
                                <span>Where did this happen?</span><input id="email1" type="text" name="email1" />
                            </label>

                            <label>
                                <span>Did it happen to you or someone else?</span><input id="subject1" type="text" name="subject1" />
                            </label>

                            <label>
                                <span>Tell me your story!</span><textarea id="feedback1" name="feedback1"></textarea>
                                <input id="hsbutton" type="button" value="Submit Form" />
                            </label>

                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default HorrorStories;