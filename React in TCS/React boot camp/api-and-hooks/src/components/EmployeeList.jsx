import React,{useState, useEffect} from 'react'

/* class EmployeeList extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            employees: []
        }
    }

    async componentDidMount() {
        const response = await fetch("http://localhost:3000/employees");
        const data = await response.json()
        console.log(data)
        this.setState({
            employees: data
        })
    }

    render() {
        return (
             <div className="ui container">
                <h3>Employee List</h3>

                <ul>
                    {
                        this.state.employees.map((value, index) => {
                            return (<li key={value.id}>{value.first_name}</li>)
                        } )
                    }
                </ul>
             </div>
        )
    }
} */

const EmployeeList = () => {

    const [employees, setEmployees] = useState([])

    const [isClicked, setIsClicked] = useState(false)
    const [isLiked, setIsLiked] = useState(false)

    useEffect( ()=>{
                    //action to perform
                        console.log("Initial render and when re render ")
                        /* const getEmployee = async ()=> {
                             const response = await fetch("http://localhost:3000/employees");
                             const data = await response.json()
                             setEmployees(data)
                        }
                        if (isClicked) {
                            getEmployee()
                        }

 */
                    },[isLiked, isClicked]
                    )

    return (
                 <div className="ui container">
                    <h3>Employee List</h3>
                        <div className="ui basic green button" onClick={()=> {setIsClicked(true)}}>Get Employees</div>
                        <div className="ui basic green button" onClick={()=> {setIsLiked(true)}}>Like me</div>
                    <ul>
                        {
                            employees.map((value, index) => {
                                return (<li key={value.id}>{value.first_name}</li>)
                            } )
                        }
                    </ul>
                 </div>
            )
}


export default EmployeeList;