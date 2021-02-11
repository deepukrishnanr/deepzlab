// React, React DOM import

import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";

import CommentDetails from "./components/CommentDetails.jsx";
import ApprovalCard from "./components/ApprovalCard.jsx"

// Create Component

const Comments = function() {

    return (
        <div className="ui container comments"> ​
            <ApprovalCard >
                <div>
                    <h1> Warning!!!</h1>
                    <p>Are you sure you want to do this???</p>
                </div>
            </ApprovalCard>
            <ApprovalCard >
                <CommentDetails
                    author={faker.name.firstName()}
                    image={faker.image.avatar()}
                    time = {formatDate(faker.date.past())}
                    content = {faker.lorem.text()}
                    isLiked = {true}
                />
            </ApprovalCard>
            <ApprovalCard >
                <CommentDetails
                    author={faker.name.firstName()}
                    image={faker.image.avatar()}
                    time = {formatDate(faker.date.past())}
                    content = {faker.lorem.text()}
                    isLiked = {true}
                />
            </ApprovalCard>
            <ApprovalCard >
                <CommentDetails
                    author={faker.name.firstName()}
                    image={faker.image.avatar()}
                    time = {formatDate(faker.date.past())}
                    content = {faker.lorem.text()}
                    isLiked = {false}
                />
            </ApprovalCard>

        </div>
    );


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