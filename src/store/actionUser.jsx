import { GET_SELECTED_USER, GET_USER } from "./actionType";


import axios from "axios"
const getUserDone = (payload)=>{
    return {
        type:GET_USER,
        payload
    }
}

const getSelectedUserDone = (payload)=>{
    return{
        type:GET_SELECTED_USER,
        payload
    }
}

export const getUser = ()=>{
    return async (dispatch) => {
        try {
            const {data} = await axios({
                method:"get",
                url:"http://localhost:3000/users",
                headers:{
                    access_token: localStorage.getItem("access_token")
                }

            })
            
            dispatch(getUserDone(data))
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }
}

export const getSelectedUser = (id)=>{
    return async(dispatch)=>{
        try {
            console.log(id);
            const{data} = await axios({
                url:`http://localhost:3000/users/${id}`,
                method:"get",
                headers:{
                    access_token:localStorage.getItem("access_token")
                }
            })

            dispatch(getSelectedUserDone(data))
        } catch (error) {
            console.log(error);
        }
    }
}