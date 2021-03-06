import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AddTeacherService {

  constructor(private http: HttpClient) { }
  configUrl = 'http://localhost:3000/users/signUp';
  listUsersUrl = 'http://localhost:3000/users/';
  profileUrl = 'http://localhost:3000/profilePhoto';
  videoUrl = 'http://localhost:3000/video';
  addVideoUrl = 'http://localhost:3000/videos';

  dataObj = {};

  uoploadProfilePhoto(data: any) {
    return this.http.post(this.profileUrl, data);
  }

  addTeacher(data: any, image: any) {
    
    this.dataObj = {
      "firstName": data.firstName,
      "lastName": data.lastName,
      "email": data.email,
      "password": data.password,
      "role" : "teacher",
      "imageUrl": image
    }
    console.log("data", this.dataObj);
    return this.http.post(this.configUrl, this.dataObj);
    }

    ListUsers(){
      this.dataObj = {
        "role" : "teacher"
      }
      return this.http.get(this.listUsersUrl, this.dataObj);
    }

    uoploadVideo(data: any) {
      return this.http.post(this.videoUrl, data);
    }

    addVideoForm(data: any, videoUrl: any, teacherId: any){
      this.dataObj = {
        "teacherId":teacherId,
        "class": data.class,
        "subject": data.subject,
        "lesson": data.lesson,
        "unit": data.unit,
        "videoUrl": videoUrl.data
      }
      console.log("obj", this.dataObj)

      return this.http.post(this.addVideoUrl, this.dataObj);

    }
    
}
