import AsyncStorage from '@react-native-async-storage/async-storage';
//var url = "http://localhost:3001/api"
var url = "http://192.168.56.1:3001/api"

class Authentication{
    async signIn(user_email, user_password){
        console.log(user_email, user_password);
        if(user_email!=='' && user_password!==''){
            await fetch(`${url}/user/signin`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ 
                    user_email: user_email,
                    user_password: user_password
                })
            }).then(response => response.json()).then(data => {
                AsyncStorage.setItem("@user_info", JSON.stringify(data));
                console.log(data);
            })
        }
    }

    async signUp(user_email, user_password, user_name, user_type){
        if(u!=='' && p!=='' && e!==''){
            let response = await fetch(`${url}/user/create`, {
                method: 'POST',
                headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                },
                body: JSON.stringify({ 
                    user_name: user_name,
                    user_email: user_email,
                    user_password: user_password,
                    user_type: user_type
                })
            })
            console.log(response.status);
            return await response.json();
          
        }
        return {message:"No input!"};
    }
}
export default Authentication;