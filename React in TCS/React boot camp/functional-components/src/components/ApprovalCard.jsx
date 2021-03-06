import React from 'react'


const ApprovalCard = function (props) {
console.log(props)
    return (
        <div className="ui card">
            <div className="content">{props.children}</div>
            <div className="extra content">
                <div className="ui two butttons">
                    <div className="ui basic green button">Approve</div>
                    <div className="ui basic red button">Reject</div>
            </div>
            </div>
        </div>
    )
}

export default ApprovalCard;

