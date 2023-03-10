import { unsetLoading } from "../redux/action";
import axios from 'axios';


export const comm = {
    userRegister: (userRegisterData, dispatch, showToastSuccessMessage,showToastErrorMessage , enableLink) => {


        var data = JSON.stringify(userRegisterData);

        var config = {
            method: 'post',
            url: 'http://localhost:8080/api/saveuser',
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios(config)
            .finally(() => {
                dispatch(unsetLoading());
                
            })
            .then(function (response) {
                if (response.status === 200) {
                    console.log(JSON.stringify(response.data));
                    showToastSuccessMessage()
                    enableLink()
                }

            })
            .catch(function (error) {
                console.log(error);
                showToastErrorMessage()
            });

    }
}