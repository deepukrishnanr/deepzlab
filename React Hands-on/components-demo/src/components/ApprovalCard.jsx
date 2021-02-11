import React from "react"

/*const ApprovalCard = (props) => {
    return(
        <div className="ui card">
            <div className="content">
                {props.children}
            </div>
            <div className="extra content">
                <div className="ui two butttons">
                    <div className="ui basic green button">Approve</div>
                    <div className="ui basic red button">Reject</div>
                </div>
            </div>
        </div>
    )
}*/

class ApprovalCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isFavourite: false
        }
    }

    handleClick() {
        this.setState({
            isFavourite: !this.state.isFavourite
        })
    }

    render() {
        return (
            <div className="ui card">
                <div className="content">
                    {
                        React.cloneElement(
                            this.props.children,
                                {
                                    handleClick: () => {
                                        this.handleClick()
                                    },
                                    isFavourite: this.state.isFavourite
                                }
                            )
                    }
                </div>
                <div className="extra content">
                    <div className="ui two butttons">
                        <div className="ui basic green button">Approve</div>
                        <div className="ui basic red button">Reject</div>
                    </div>
                </div>

                {this.state.isFavourite &&
                    <div style={{padding: "5px"}}>
                        <hr/>

                        <a className="ui teal tag label">Favourite</a>
                    </div>
                }

            </div>

        )
    }
}

export default ApprovalCard;