import React , {createContext} from 'react';
import all_Product from '../Components/Assets/all_product'


export const ShopContext = createContext(null)

const ShopContextProvider =(props) =>{

    const contextValue ={all_Product};

    return(

        <ShopContext.Provider value={contextValue}>
            {props.children}
        
        </ShopContext.Provider>



    )

}
export default ShopContextProvider;