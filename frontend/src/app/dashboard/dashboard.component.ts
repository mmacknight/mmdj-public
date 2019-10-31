// Node Imports
import { Component, OnInit } from "@angular/core";

// Service Imports
import { ApiService } from "../api.service";

// Class Imports
import { Policy } from "@classes/policy";
import { Event } from "@classes/event";
import { QueuedSong } from "@classes/queuedSong";
import { Song } from "@classes/song";
import { Token } from "@classes/token";
import { User } from "@classes/user";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})


export  class  DashboardComponent  implements  OnInit {
  policies:  Policy[];
  seletedEvent: Event;
  queuedSongs: QueuedSong[];
  users: User[];
  selectedPolicy:  Policy;
  selectedUser:  User;


  constructor(private apiService: ApiService) { } 

  ngOnInit() {
    this.readUsers();
  }
  readPolicies() {
    this.apiService.readPolicies().subscribe((policies: Policy[])=>{
      this.policies = policies;
      console.log(this.policies);
    })
  }
  readUsers() {
    this.apiService.readUsers().subscribe((users: User[])=>{
      this.users = users;
      console.log(this.users);
    })
  }

  createOrUpdateUser(form){
    console.log("User update ", this.selectedUser);
    if(this.selectedUser && this.selectedUser.user_id){
      console.log("updating");
      form.value.id = this.selectedUser.user_id;
      this.apiService.updateUser(form.value).subscribe((user: User)=>{
        console.log("User updated" , user);
        this.readUsers();
      });
    }
    else{
      console.log("creating");
      this.apiService.createUser(form.value).subscribe((user: User)=>{
        console.log("User created, ", user);
        this.readUsers();
      });
    }
    this.selectedUser = { user_id :  null , username:null, password:  null};
  }
  
  selectUser(user: User){
    this.selectedUser = user;
    console.log("selected user is ", user);
  }
  deleteUser(id){
    this.apiService.deleteUser(id).subscribe((user: User)=>{
      console.log("User deleted, ", user);
      this.readUsers();
    });
  }
  /*
  createOrUpdatePolicy(form){
    if(this.selectedPolicy && this.selectedPolicy.id){
      form.value.id = this.selectedPolicy.id;
      this.apiService.updatePolicy(form.value).subscribe((policy: Policy)=>{
        console.log("Policy updated" , policy);
        this.readPolicies();
      });
    }
    else{

      this.apiService.createPolicy(form.value).subscribe((policy: Policy)=>{
        console.log("Policy created, ", policy);
        this.readPolicies();
      });
    }
  }*/
  selectPolicy(policy: Policy){
    this.selectedPolicy = policy;
  }
  deletePolicy(id){
    this.apiService.deletePolicy(id).subscribe((policy: Policy)=>{
      console.log("Policy deleted, ", policy);
      this.readPolicies();
    });
  }
}
