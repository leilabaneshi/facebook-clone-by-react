import React from 'react';
import './StoryReel.css';
import Story from './Story'

function StoryReel() {
    return (
        <div className='storyReel'>

            {/*story */}
            <Story
                image='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRi9CYmQETamsA9D051BT2UpkRJKsLCKZJchQ&usqp=CAU'
                profileSrc='https://avatars2.githubusercontent.com/u/57330277?s=460&u=775ec18cfe93ff881788343f57440a235afdff46&v=4'

                title='leilabaneshi'
            />
            <Story
                image='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQuBZUUdsfC5STVNeI6Z9spLZObFWJoOMqSoQ&usqp=CAU'
                profileSrc='https://yt3.ggpht.com/a/AATXAJx3PndkWds1bfXd9OCocVVrnPoMOE3cHHjQrx3B=s176-c-k-c0x00ffffff-no-rj'

                title='mahshidopia'
            />
            <Story
                image='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQhyI-m1hse0jRhKwm2WkpwkGDoUkaLyYy3Iw&usqp=CAU'
                profileSrc='https://yt3.ggpht.com/ytc/AAUvwngcLOf7TMxPcF5reksj8_TpEcawSBrjBrAcxvlaNZ8=s176-c-k-c0x00ffffff-no-rj'

                title='mirandakor'
            />
            <Story
                image='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSSV7oO7spMeJkWMpE3SfB6upRM2fTMUAl1Hg&usqp=CAU'
                profileSrc='https://yt3.ggpht.com/a/AATXAJwIJcWT2wAYL2zK1pu9rC-HDyD2IF-tIzb_kvJsBA=s176-c-k-c0x00ffffff-no-rj'

                title='simabina'
            />
            <Story
                image='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTkgEmhKnvEpjB6JMSnrrD8s3cNCr6p8shXLQ&usqp=CAU'
                profileSrc='https://yt3.ggpht.com/a/AATXAJy8Z3VEwd8zAYJhLcwf2BcRxVCflbzNcKP5LMgS=s176-c-k-c0x00ffffff-no-rj'
                title='elvisone'
            />
        </div>
    )
}

export default StoryReel
