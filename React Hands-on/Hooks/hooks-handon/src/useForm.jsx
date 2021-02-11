
import React, {useState} from "react";

export const useForm = (defaultValue) => {
    const [value, setValue] = useState(defaultValue);

    return [
        value,
        (event)=> {
            setValue({
                ...value,
                [event.target.name]: event.target.value
            })
        }

    ]
}