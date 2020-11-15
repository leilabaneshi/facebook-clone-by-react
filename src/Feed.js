import React, { useEffect, useState } from 'react';
import './Feed.css';
import StoryReel from './StoryReel';
import MessageSender from './MessageSender';
import Post from './Post';
import db from './firebase';

function Feed() {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        db.collection('posts').onSnapshot((snapshot) =>
            setPosts(snapshot.docs.map(doc => ({ id: doc.id, data: doc.data() })))
        );
    }, []);

    return (
        <div className='feed'>
            <StoryReel />
            <MessageSender />

            {posts.map((post) => (
                <Post
                    key={post.data.id}
                    profilePic={post.data.profilePic}
                    message={post.data.message}
                    timestamp={post.data.timestamp}
                    username={post.data.username}
                    image={post.data.image}

                />
            ))}



            { /** * <Post
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
           />*/}

        </div>
    )
}

export default Feed
