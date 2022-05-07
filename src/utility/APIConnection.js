import AsyncStorage from '@react-native-async-storage/async-storage';
import { useContext } from 'react';
import { AuthContext } from '../store/AuthContext';
var url = "http://localhost:3001/api"



class APIConnection {

  constructor() {
    this.authCtx = useContext(AuthContext);
    this.token = this.authCtx.token;
    this.user_id = this.authCtx.user_id;
  }


  async dropClass(class_id){
    try {
      const response = await fetch(`${url}/class/drop/${class_id}`, {
         method: 'DELETE',
         headers: {
           Accept: 'application/json',
           'Content-Type': 'application/json',
           'token': this.token,
         },
       });
      const json = await response.json();

      console.log("THIS IS DROP CLASS " + json);
      return json;
    } catch (error) {
      console.error(error);
      this.authCtx.logout
    } finally {
    }
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


    async editCourseForInstructor(classID, class_name, class_descrip){
      try {
        const response = await fetch(`${url}/class/update/`+classID, {
           method: 'PUT',
           headers: {
             Accept: 'application/json',
             'Content-Type': 'application/json',
             'token': this.token,
           },
           body: JSON.stringify({ 
          
             class_name: class_name,
             class_descrip: class_descrip
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


        
        async postProgress(unitID){
          try {
            const response = await fetch(`${url}/progress/create`, {
               method: 'POST',
               headers: {
                 Accept: 'application/json',
                 'Content-Type': 'application/json',
                 'token': this.token,
               },
               body: JSON.stringify({ 
              
                 unit_id: unitID
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


        async editUnitName(unitID, newName){
          try {
            const response = await fetch(`${url}/unit/update/`+unitID, {
               method: 'PUT',
               headers: {
                 Accept: 'application/json',
                 'Content-Type': 'application/json',
                 'token': this.token,
               },
               body: JSON.stringify({ 
              
                 unit_name: newName,
                 unit_index: 0
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

        async postLesson(ModuleID){
          try {
            const response = await fetch(`${url}/lesson/create`, {
               method: 'POST',
               headers: {
                 Accept: 'application/json',
                 'Content-Type': 'application/json',
                 'token': this.token,
               },
               body: JSON.stringify({ 
              
                 module_id: ModuleID,
                 lesson_name: "New Lesson",
                 lesson_descrip: "New lesson description",
                 lesson_index: 0,
                 instructor_id: this.user_id
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


       async editUserProfile(newName, userType, newBio, newPic) {
          try {
           const response = await fetch('http://localhost:3001/api/user/update/'+ this.user_id, {
              method: 'PUT',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'token': this.token,
              },
              body:JSON.stringify({ 
                user_name: newName,
                user_type: userType,
                user_pp: newPic,
                user_bio: newBio
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



       async changeEmail(newEmail, currentPassword){
        try{
          const response = await fetch(`${url}/user/changeAuth/${this.user_id}`, {
            method: 'PUT',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
              'token': this.token,
            },
            body:JSON.stringify({ 
              user_email: newEmail,
              user_password: currentPassword
            })
          });
          const json = await response.json(); 
          return json; 
        }catch (error){
          console.error(error);
          this.authCtx.logout
        }finally {
        }
      }


      async changePassword(currentEmail, newPassword){
        try{
          const response = await fetch(`${url}/user/changeAuth/${this.user_id}`, {
            method: 'PUT',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
              'token': this.token,
            },
            body:JSON.stringify({ 
              user_email: currentEmail,
              user_password: newPassword
            })
          });
          const json = await response.json(); 
          return json; 
        }catch (error){
          console.error(error);
          this.authCtx.logout
        }finally {
        }
      }


       



  async getClasses() {


    console.log("fetch url dash board debug: " + url + '/class/findByUser/' + this.user_id);
    try {
      const response = await fetch(url + '/class/findByUser/' + this.user_id, {
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

  async getUnitQuizContent(unitID) {


    console.log("fetch unit content quiz " + url + '/quiz/findByUnitId/' + unitID);
    let response = "initial response";

    try {
      response = await fetch(url + '/quiz/findByUnitId/' + unitID, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
      //const json = await response.json();

      return response;
    } catch (error) {
      console.error(error);
      this.authCtx.logout
    } finally {
    }
  }

  async createQuizData(quizID, quizQuestion, quizAnswers) {



    try {
      const response = await fetch(url + '/quizdata/create/', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'token': this.token
        },
        body: JSON.stringify({
          quiz_id: quizID,
          quizdata_question: quizQuestion,
          quizdata_answers: quizAnswers,
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

  async createNewQuizForUnit(unitID) {



    try {
      const response = await fetch(url + '/quiz/create', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'token': this.token
        },
        body: JSON.stringify({
          quiz_name: "new quiz",
          unit_id: unitID,
          instructor_id: this.user_id,
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


  async editQuizData(quizID, quizDataID, quizQuestion, quizAnswers) {



    try {
      const response = await fetch(url + '/quizdata/update/' + quizID, {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          quizdata_id: quizDataID,
          quizdata_question: quizQuestion,
          quizdata_answers: quizAnswers,
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
  async deleteQuizData(quizID, quizDataID) {


    try {
      const response = await fetch(url + '/quizdata/delete/' + quizID + "/" + quizDataID, {
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


  async getQuizData(quizID) {


    console.log("fetch unit content quiz data " + url + '/quizdata/' + quizID);
    try {
      const response = await fetch(url + '/quizdata/' + quizID, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });

      return response;
    } catch (error) {
      console.error(error);
      this.authCtx.logout
    } finally {
    }
  }
  async getAllModulesForClass(courseID) {
    try {
      const response = await fetch(`${url}/module/findByClass/` + courseID, {
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


  async postUnit(content, content2) {
    try {
      const response = await fetch('http://localhost:3001/api/unit/create', {
        method: 'POST',
        headers: {
          'accept': 'application/json',
          'token': this.token,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          'unit_name': 'fast coutning',
          'unit_content': [content, content2],
          'unit_content_type': 'string',
          'lesson_id': 29,
          'instructor_id': 5
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
  async getUnitContent(unit_id) {


    console.log("fetch url dash board debug: " + 'http://localhost:3001/api/class/findByUser/' + this.user_id);
    try {
      const response = await fetch('http://localhost:3001/api/unit/' + unit_id, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
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

  async editUnitContent(content, content2, unit_id) {
    try {
      const response = await fetch('http://localhost:3001/api/unit/updateUnitContent/' + unit_id, {
        method: 'PUT',
        headers: {
          'accept': 'application/json',
          'token': this.token,
          'Content-Type': 'application/json'
        },
        // body: '{\n  "unit_content": "https://www.youtube.com/watch?v=JfVOs4VSpmA",\n  "unit_content_type": "text"\n}',
        body: JSON.stringify({
          'unit_content': content,
          'unit_content_type': content2
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



  async getUnitContent(unit_id) {


    console.log("fetch url dash board debug: " + 'http://localhost:3001/api/class/findByUser/' + this.user_id);
    try {
      const response = await fetch('http://localhost:3001/api/unit/' + unit_id, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
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


    console.log("class search api called: " + url + '/class/findByUser/' + this.user_id);
    try {
      const response = await fetch(url + '/class/findByName/' + keyword, {
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

  async postClass(courseName, courseText) {

    try {
      console.log("post class api called: ");

      const response = fetch(url + '/class/create', {
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


    console.log("get user for profile page called " + url + '/class/findByUser/' + this.user_id);
    try {
      const response = await fetch(url + '/user/' + this.user_id, {
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
    console.log("get modules and lessons called " + 'http://localhost:3001/api/class/findByUser/' + courseID);

    try {
      const response = await fetch(url + '/class/modulesAndLessons/' + courseID, {
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


  async putLessonNameForLessonCreation(lessonName, lessonId, less_description,
    less_index, mod_id) {
    try {
      const response = await fetch(url + '/lesson/update/' + lessonId, {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'token': this.token
        },
        body: JSON.stringify({
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

  async getSingleLessonForLessonCreation(lesson_id) {
    try {
      const response = await fetch(url + '/lesson/findById/' + lesson_id, {
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
  async getClassByNameForStudentCourseDescription(class_id) {
    try {
      const response = await fetch('http://http://localhost:3001/api/class/findByName/' + class_id, {
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

  async getSectionsPerLesson(lesson_id) {
    // console.log("token  " + this.token);

    // console.log("fetch url dash board debug: " +  url + '/class/findByUser/');
    //  console.log(LessonID);
    try {
      const response = await fetch(url + '/unit/findByLesson/' + lesson_id, {
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

  async getUnitByID(unitID) {
    // console.log("token  " + this.token);

    // console.log("fetch url dash board debug: " +  url + '/class/findByUser/');
    //  console.log(LessonID);
    try {
      const response = await fetch(url + '/unit/' + unitID, {
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

  async getClassByID(classID) {
    // console.log("token  " + this.token);

    // console.log("fetch url dash board debug: " +  url + '/class/findByUser/');
    //  console.log(LessonID);
    try {
      const response = await fetch(url + '/class/findById/' + classID, {
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


  async addUnitForLessonCreation(lessonID) {
    try {
      const response = await fetch(url + '/unit/create/', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'token': this.token
        },
        body: JSON.stringify({
          unit_name: "new unit",
          unit_content: "content",
          lesson_id: lessonID,
          instructor_id: this.user_id
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

  async deleteUnit(unit_id) {
    try {
      const response = await fetch(url + '/unit/delete/' + unit_id, {
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





  async editModule(moduleID, newModuleName, newModuleDescription, classID) {



    console.log("fetch url dash board debug: " + url + '/class/findByUser/' + this.user_id);

    try {
      const response = await fetch(url + '/module/update/' + moduleID, {
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


    console.log("deleting module: " + moduleID);
    try {
      const response = await fetch(url + '/module/delete/' + moduleID, {
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


    console.log("Creating Module aPI called " + moduleName + " " + description + classID);
    try {
      const response = await fetch(url + '/module/create/', {
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