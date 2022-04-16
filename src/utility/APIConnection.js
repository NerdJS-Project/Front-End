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

       async getUserForProfilePage() {

        console.log("token  " + this.token);
        
        console.log("fetch url dash board debug: " + 'http://localhost:3001/api/class/findByUser/'+this.user_id);
          try {
           const response = await fetch('http://localhost:3001/api/user/'+ this.user_id, {
              method: 'GET',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'token': this.token,
              },
            });
           const json = await response.json();
           console.log("User Info:  " + json);

           return json;
         } catch (error) {
           console.error(error);
           this.authCtx.logout
         } finally {
         }
       }

       async getModulesAndLessonInstructorCourseViewScreen(courseID) {

      //  console.log("token  " + this.token);
        
        console.log("fetch url dash board debug: " + 'http://localhost:3001/api/class/findByUser/'+courseID);
          try {
           const response = await fetch('http://localhost:3001/api/class/modulesAndLessons/'+ courseID, {
              method: 'GET',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
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

      
     async putLessonNameForLessonCreation(lessonName,lessonId,less_description,
        less_index, mod_id){
      try {
        const response = await fetch('http://localhost:3001/api/lesson/update/'+lessonId, {
           method: 'PUT',
           headers: {
             Accept: 'application/json',
             'Content-Type': 'application/json',
             'token': this.token 
           },
           body:JSON.stringify({
             lesson_name: lessonName,
             lesson_descrip: less_description,
             lesson_index: less_index,
             module_id: mod_id
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

     async getSingleLessonForLessonCreation(lesson_id){
      try {
        const response = await fetch('http://localhost:3001/api/lesson/findById/'+lesson_id, {
           method: 'GET',
           headers: {
             Accept: 'application/json',
             'Content-Type': 'application/json',
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

     // student route will be moved eventually
     async getClassByNameForStudentCourseDescription(class_id){
       try{
      const response = await fetch('http://http://localhost:3001/api/class/findByName/'+class_id, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
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

      async getSectionsPerLesson(lesson_id){
        // console.log("token  " + this.token);
        
       // console.log("fetch url dash board debug: " + 'http://localhost:3001/api/class/findByUser/');
     //  console.log(LessonID);
          try {
           const response = await fetch('http://localhost:3001/api/unit/findByLesson/'+lesson_id, {
              method: 'GET',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
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

    async addUnitForLessonCreation(lessonID){
      try {
        const response = await fetch('http://localhost:3001/api/unit/create/', {
           method: 'POST',
           headers: {
             Accept: 'application/json',
             'Content-Type': 'application/json',
            'token': this.token
           },
           body:JSON.stringify({
             unit_name: "new unit",
             unit_content: "content",
            lesson_id: lessonID,
            instructor_id: 10
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

    async deleteUnit(unit_id){
      try {
        const response = await fetch('http://localhost:3001/api/unit/delete/'+unit_id, {
           method: 'DELETE',
           headers: {
             Accept: 'application/json',
             'Content-Type': 'application/json',
            'token': this.token
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

}
export default APIConnection;