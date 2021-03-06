import React from 'react'

export const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

export const checkIfNull = (string) => {
    return string.trim() !== '' && string !== null
}

export const formatResponseData = (data) => {
    const arrayValue = []
    for(let key in data) {
        arrayValue.push({
            id: key,
            ...data[key]
        })
    }
    return arrayValue;
}

export const parseNewLine = (data) => {
    let newText =  data.split('\n').map((item, i) => {
        return <p key={i}>{item}</p>
    });
    return newText;
}

export const checkValidation = (email, password) => {
    return ((email.trim !== null && email !== '')  && (password.trim !== null && password !== ''))
}

export const formatCartData = (data) => {
    let arrayValue = [];
    arrayValue = Object.values(data.reduce((obj, item) => {
        if (obj[item.product_id]) {
            obj[item.product_id].id = [].concat(obj[item.product_id].id, item.id)
            obj[item.product_id].count = (obj[item.product_id].count + item.count <=item.availableQuantity) 
            ? obj[item.product_id].count + item.count : item.availableQuantity
        } else {
            obj[item.product_id] = {...item};
        }

        return obj
    }, {}))
    return arrayValue
}

export const checkIfArrayIsNull = (data) => {
    return (Array.isArray(data) && data.length)
}