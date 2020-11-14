import React from 'react';
import './Feed.css';
import StoryReel from './StoryReel';
import MessageSender from './MessageSender';
import Post from './Post';

function Feed() {
    return (
        <div className='feed'>
            <StoryReel />
            <MessageSender />
            <Post
                profilePic='https://lh3.googleusercontent.com/a-/AOh14GhTDsRNWbPThMR3kDn3Xz_2PgeKjnXiY6L4MPjprA=s88-c-k-c0x00ffffff-no-rj-mo'

                username='leilabaneshi'
                timestamp='12 act'
                message='woooow its work!'
                image='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTR70OawpLSYvTJMDqMS0poq9TzjZfc5RI8Hw&usqp=CAU'
            />
            <Post
                profilePic='https://lh3.googleusercontent.com/a-/AOh14GhTDsRNWbPThMR3kDn3Xz_2PgeKjnXiY6L4MPjprA=s88-c-k-c0x00ffffff-no-rj-mo'

                username='leilabaneshi'
                timestamp='12 act'
                message='woooow its work!'
                image='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRTwEZ4G0SsJa8uklE0KkfUmFvB3dINhEMpTQ&usqp=CAU'
            />
            {/**storyReel */}
            {/**MaseegSender */}
        </div>
    )
}

export default Feed
