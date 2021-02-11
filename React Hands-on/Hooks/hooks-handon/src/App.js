import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {useForm} from './useForm.jsx';
import {Test} from './Test.jsx';
import unSplash from './api/unsplash';
import {ImageList} from './components/ImageList.jsx'
const App = () => {

    const [value, handleChange] = useForm({
        name: "",
        email: ""
    });

    const [showTest, setShowTest] = useState(true)
    const [images, setImages] = useState([]);
    useEffect(()=>{
        console.log("Running")
    },[])

     const searchImage = async (term) => {
        try {
            const response = await unSplash.get('https://api.unsplash.com/search/photos',
                {

                    params: {
                        query: term
                    }
                }
            );
            console.log(response.data.results)
            setImages(response.data.results)
         } catch (Error) {
            console.log(Error)
        }

    }



    return (
        <div className="box">
            {showTest && <Test /> }
           {/* <button onClick={()=>{setShowTest(!showTest)}}>Toggle</button>*/}
            {/*<form className="ui form" autoComplete="off">
                <div className="field">
                    <label>Name</label>
                    <input type="text" placeholder="Name..." name="name" value={value.name} onChange={handleChange}/>
                </div>
                <div className="field">
                    <label>Email</label>
                    <input type="text" placeholder="Email..." name="email" value={value.email} onChange={handleChange}/>
                </div>
            </form>*/}
            {/*//Image search*/}

            <div>
                <form className="ui form" autoComplete="off">
                    <div className="field">
                        <label>Images</label>
                        <input type="text" placeholder="Search for images" name="name"  onChange={(event)=>{searchImage(event.target.value)}}/>
                    </div>
                    <button>Search image</button>
                    <div><ImageList images={images}/></div>
                </form>
            </div>


        </div>
    );
}

export default App;
