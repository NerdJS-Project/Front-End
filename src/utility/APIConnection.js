import AsyncStorage from '@react-native-async-storage/async-storage';
import { useContext } from 'react';
import { AuthContext } from '../store/AuthContext';
var url = "http://localhost:3001/api"




class APIConnection{

    constructor()
    {
        this.authCtx = useContext(AuthContext);
        this.token = this.authCtx.token;
        this.user_id = this.authCtx.user_id;
        console.log("constructor debug userid:" + this.user_id)
    }

    async getClasses() {

        console.log("token  " + this.token);
        
        console.log("fetch url dash board debug: " + 'http://localhost:3001/api/class/findByUser/'+this.user_id);
          try {
           const response = await fetch('http://localhost:3001/api/class/findByUser/'+ this.user_id, {
              method: 'GET',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'token': this.token,
              },
            });
           const json = await response.json();
           console.log("Json api: " + json);

           return json;
         } catch (error) {
           console.error(error);
           this.authCtx.logout
         } finally {
         }
       }



       async postClass(courseName, courseText )
       {
        try {
            const response = fetch('http://localhost:3001/api/class/create', {
                method: 'POST',
                headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json',
                  'token': this.token,
                },
                body: JSON.stringify({
                  "class_name": courseName,
                  "class_descrip": "this is a class"
                })
              });
            const json = await response.json();
            console.log("Json api: " + json);
 
            return json;
          } catch (error) {
            console.error(error);
            this.authCtx.logout
          } finally {
          }
        
       }
}
export default APIConnection;