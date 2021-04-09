
import React from 'react'
const CommentDetails = function(props) {

    return (
        <div className="comment">
            <a href="/" className="avatar"><img alt="avatar" src={props.image}/></a>
            <div className="content">
                <a href="/" className="author">{props.author} </a>
                <div className="metadata">
                    <span className="date"> {props.time} </span>
                </div>
                <div className="text">{props.text} </div>
            </div>
        </div>
    )
}

/* class CommentDetails extends React.Component {
    render() {
        return (
            <div className="comment">
                <a href="/" className="avatar"><img alt="avatar" src={this.props.image}/></a>
                <div className="content">
                    <a href="/" className="author">{this.props.author} </a>
                    <div className="metadata">
                        <span className="date"> {this.props.time} </span>
                    </div>
                    <div className="text">{this.props.text} </div>
                </div>
            </div>

            )
    }
} */

export default CommentDetails;
