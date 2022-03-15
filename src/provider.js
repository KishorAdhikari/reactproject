import React, { useState } from 'react'

import PackageContext from './context'
const Provider = props => {
    const [info, setInfo] = useState({
        name: "Kishor",
        id: 7,
        address: "USA"
    })
    return(
        <PackageContext.Provider value={{
            data: info, 
            changeAddress: ()=>{
                setInfo({...info,address: "Russia"})
            }  
        }}>
        {props.children}
        </PackageContext.Provider>
    )
}
export default Provider;