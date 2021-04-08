import React from 'react'
import CommentDetails from './CommentDetails.jsx'
import ladyOne from '../avatar/lady-1.png'
import ladyTwo from '../avatar/lady-2.png'
import manOne from '../avatar/men-1.png'


const comments = [
    {
        image: ladyOne,
        author: "Anisha sam",
        time: "Today, 10:00PM",
        text: "Nice blog post!!! "
    },
    {
        image: ladyTwo,
        author: "Sruthi",
        time: "Today, 7:00PM",
        text: "Nice blog post!!! "
    },
    {
        image: manOne,
        author: "Deepu",
        time: "Today, 5:00PM",
        text: "Nice blog post!!! "
    },
]


const App = function() {
    return (
        <div className="ui container comments">

         {
            comments.map(function(value, index) {
                return <CommentDetails key={index} image={value.image} author={value.author} time={value.time} text={value.text}/>
            })

            }

        </div>

    )
}

export default App