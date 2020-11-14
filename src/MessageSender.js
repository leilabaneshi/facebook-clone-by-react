import { Avatar } from '@material-ui/core';
import React, { useState } from 'react';
import './MessageSender.css';
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmotionIcon from '@material-ui/icons/InsertEmoticon'

function MessageSender() {
    const [input, setInput] = useState('');
    const [imageUrl, setImageUrl] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();

        //some db stuff

        setInput('');
        setImageUrl('');
    };

    return (
        <div className='messageSender'>
            <div className="messageSender__top">
                <Avatar />
                <form >
                    <input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className='messageSender__input' placeholder={`What's on your mind leila?`} />

                    <input
                        value={imageUrl}
                        onChange={(e) => setImageUrl(e.target.value)}
                        placeholder='image URL (optional)' />

                    <button onClick={handleSubmit} type='submit'> Hidden submit</button>

                </form>
            </div>

            <div className="messageSender__bottom">
                <div className="messageSender__option">
                    <VideocamIcon style={{ color: 'red' }} />
                    <h3>Live Video</h3>


                </div>

                <div className="messageSender__option">
                    <PhotoLibraryIcon style={{ color: 'green' }} />
                    <h3>photo/Video</h3>


                </div>
                <div className="messageSender__option">
                    <InsertEmotionIcon style={{ color: 'orange' }} />
                    <h3>Feeling/Activity</h3>


                </div>


            </div>

        </div >
    )
}

export default MessageSender