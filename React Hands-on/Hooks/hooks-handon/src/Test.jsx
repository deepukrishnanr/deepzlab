import React, {useEffect} from 'react';

export const Test = () => {
    useEffect(()=>{

        console.log("Test component mounted");
        return () => {
            console.log("Test component unmounted...")
        }

    },[]);

    return (
        <h1>This is my toggle pane</h1>
    )
}