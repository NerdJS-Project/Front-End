import AsyncStorage from '@react-native-async-storage/async-storage';
import { useContext } from 'react';
import { AuthContext } from '../store/AuthContext';
//var url = "${url}"
var url = "http://192.168.1.229:3001/api"
//var url = "http://10.117.160.154:3001/api";



class APIConnection{

    constructor()
    {
        this.authCtx = useContext(AuthContext);
        this.token = this.authCtx.token;
        this.user_id = this.authCtx.user_id;
    }

    async getUnitProgress(unit_id){
      try {
        const response = await fetch(`${url}/progress/findByUnit/${unit_id}/${this.user_id}`, {
           method: 'GET',
           headers: {
             Accept: 'application/json',
             'Content-Type': 'application/json',
             'token': this.token,
           },
         });
        const json = await response.json();

        return json;
      } catch (error) {
        console.error(error);
        this.authCtx.logout
      } finally {
      }
    }

    async getLessonProgress(lesson_id){
      try {
        const response = await fetch(`${url}/progress/findByLessonAndUser/${lesson_id}/${this.user_id}`, {
           method: 'GET',
           headers: {
             Accept: 'application/json',
             'Content-Type': 'application/json',
             'token': this.token,
           },
         });
        const json = await response.json();

        return json;
      } catch (error) {
        console.error(error);
        this.authCtx.logout
      } finally {
      }
    }

    async getModuleProgress(module_id){
      try {
        const response = await fetch(`${url}/progress/findByModuleAndUser/${module_id}/${this.user_id}`, {
           method: 'GET',
           headers: {
             Accept: 'application/json',
             'Content-Type': 'application/json',
             'token': this.token,
           },
         });
        const json = await response.json();

        return json;
      } catch (error) {
        console.error(error);
        this.authCtx.logout
      } finally {
      }
    }

    async getClassProgress(class_id){
      try {
        const response = await fetch(`${url}/progress/findByClassAndUser/${class_id}/${this.user_id}`, {
           method: 'GET',
           headers: {
             Accept: 'application/json',
             'Content-Type': 'application/json',
             'token': this.token,
           },
         });
        const json = await response.json();

        return json;
      } catch (error) {
        console.error(error);
        this.authCtx.logout
      } finally {
      }
    }

    async getClasses() {

        
        console.log("fetch url dash board debug: " + `${url}/class/findByUser/`+this.user_id);
          try {
           const response = await fetch(`${url}/class/findByUser/`+ this.user_id, {
              method: 'GET',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'token': this.token,
              },
            });
           const json = await response.json();

           return json;
         } catch (error) {
           console.error(error);
           this.authCtx.logout
         } finally {
         }
       }




       async getSearchClassResultSearchScreen(keyword) {

        
        console.log("class search api called: " + `${url}/class/findByUser/`+this.user_id);
          try {
           const response = await fetch(`${url}/class/findByName/`+ keyword, {
              method: 'GET',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
              },
            });
           const json = await response.json();

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
            console.log("post class api called: ");
            const response = fetch(`${url}/class/create`, {
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
 
            return json;
          } catch (error) {
            console.error(error);
            this.authCtx.logout
          } finally {
          }
       }

       async getUserForProfilePage() {

        
       // console.log("get user for profile page called " + `${url}/class/findByUser/`+this.user_id);
          try {
           const response = await fetch(`${url}/user/`+ this.user_id, {
              method: 'GET',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'token': this.token,
              },
            });
           const json = await response.json();

           return json;
         } catch (error) {
           console.error(error);
           this.authCtx.logout
         } finally {
         }
       }

       async getModulesAndLessonInstructorCourseViewScreen(courseID) {


        
        console.log("get modules and lessons called " + `${url}/class/findByUser/`+courseID);
          try {
           const response = await fetch(`${url}/class/modulesAndLessons/`+ courseID, {
              method: 'GET',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
              },
            });
           const json = await response.json();

           return json;
         } catch (error) {
           console.error(error);
           this.authCtx.logout
         } finally {
         }
       }

      async getAllModulesForClass(courseID){
              try {
           const response = await fetch(`${url}/module/findByClass/`+ courseID, {
              method: 'GET',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
              },
            });
           const json = await response.json();

           return json;
         } catch (error) {
           console.error(error);
           this.authCtx.logout
         } finally {
         }
      }

      async getLessonsInModule(moduleID){
        try {
          const response = await fetch(`${url}/lesson/findByModule/`+ moduleID, {
             method: 'GET',
             headers: {
               Accept: 'application/json',
               'Content-Type': 'application/json',
             },
           });
          const json = await response.json();
           
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
        const response = await fetch(`${url}/lesson/update/`+lessonId, {
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
        // class in route worked instead of lesson
        const response = await fetch(`${url}/lesson/findById/`+lesson_id, {
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
     async getClassByIdForStudentCourseDescription(classId){
       try{
      const response = await fetch(`${url}/class/findById/`+classId, {
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
        
          try {
           const response = await fetch(`${url}/unit/findByLesson/`+lesson_id, {
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

    async addUnitForLessonCreation(lessonID,instID){
      try {
        const response = await fetch(`${url}/unit/create/`, {
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
            instructor_id: instID
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
        const response = await fetch(`${url}/unit/`+unit_id, {
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

    //student enroll
    async signUpForClass(classID){
      try {
        const response = await fetch(`${url}/class/signup/`+classID, {
           method: 'POST',
           headers: {
             Accept: 'application/json',
             'Content-Type': 'application/json',
             'token': this.token,
           },
        //    body: JSON.stringify({ 
          
        //      class_id: classID
        //  })
         });
        const json = await response.json();

        return json;
      } catch (error) {
        console.error(error);
        this.authCtx.logout
      } finally {
      }
    }

   





       async editModule(moduleID, newModuleName, newModuleDescription, classID) {

        
        console.log("fetch url dash board debug: " + `${url}/class/findByUser/`+this.user_id);
          try {
           const response = await fetch('${url}/module/update/'+ moduleID, {
              method: 'PUT',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'token': this.token,
              },
              body: JSON.stringify({ 
                module_name: newModuleName,
                module_descrip: newModuleDescription,
                class_id: classID
            })
            });
           const json = await response.json();

           return json;
         } catch (error) {
           console.error(error);
           this.authCtx.logout
         } finally {
         }
       }


       async deleteModule(moduleID) {

        
        console.log("fetch url dash board debug: " + `${url}/class/findByUser/`+this.user_id);
          try {
           const response = await fetch('${url}/module/delete/'+ moduleID, {
              method: 'DELETE',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'token': this.token,
              },
            });
           const json = await response.json();

           return json;
         } catch (error) {
           console.error(error);
           this.authCtx.logout
         } finally {
         }
       }


       async createModule(moduleName, description, classID) {

        
        console.log("Creating Module aPI called " );
          try {
           const response = await fetch(`${url}/module/create/`, {
              method: 'POST',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'token': this.token,
              },
              body: JSON.stringify({ 
                module_name: moduleName,
                module_descrip: description,
                class_id: classID,
                instructor_id: this.user_id
            })
            });
           const json = await response.json();
            console.log("create apI result: " + json)
           return json;
         } catch (error) {
           console.error(error);
           this.authCtx.logout
         } finally {
         }
       }



}
export default APIConnection;