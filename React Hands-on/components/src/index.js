// React, React DOM import

import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";

import CommentDetails from "./components/CommentDetails.jsx";
import ApprovalCard from "./components/ApprovalCard";


// Create Component
//props

const Comments = function() {

    const datas = [
        {
            avatar: faker.image.avatar(),
            author: faker.name.firstName(),
            time: formatDate(faker.date.past()),
            text: faker.lorem.text(),
            isLiked: true

        }/*,
        {
            avatar: faker.image.avatar(),
            author: faker.name.firstName(),
            time: formatDate(faker.date.past()),
            text: faker.lorem.text(),
            isLiked: false

        }*/
    ];

    return (

        <div className="ui container comments"> ​

            {
                datas.map(function(item, index){
                    return (
                        <ApprovalCard key={index}>
                            <CommentDetails key={index} image={item.avatar} name={item.author} time={item.time} text={item.text} isLiked={item.isLiked}/>
                        </ApprovalCard>
                    )
                })
            }
            <ApprovalCard>
                Are you sure???
            </ApprovalCard>
        </div>
    )
};

function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();
    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;
    return [year, month, day].join('-');
}

//Render the component

ReactDOM.render(<Comments />, document.querySelector("#root"))