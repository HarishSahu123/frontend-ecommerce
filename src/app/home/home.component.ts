import { Component, Input } from '@angular/core';
import { SearchComponent } from "../search/search.component";
import { FormsModule } from '@angular/forms';
import { HomeService } from '../services/home.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [SearchComponent, FormsModule ,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

   users: any[] = [];
  posts: any[] = [];
  comments: any[] = [];

  selectedUserId!: number;
  selectedPostId!: number;


   constructor(private apiService: HomeService) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers() {
    this.apiService.getUsers().subscribe(data => {
      this.users = data;
    });
  }

  onUserChange() {
    this.posts = [];
    this.comments = [];
    if (this.selectedUserId) {
      this.apiService.getPosts(this.selectedUserId)
        .subscribe(data => {
          this.posts = data;
        });
    }
  }

  onPostChange() {
    this.comments = [];
    if (this.selectedPostId) {
      this.apiService.getComments(this.selectedPostId)
        .subscribe(data => {
          this.comments = data;
        });
    }
  }

//   selectedRole:string='';

// Parentmessagetochild = 'Hello from parent component';

// message2:string = '';
// parentMessage :string='';

// receiveMessage(msg: string) {
//   this.message2 = msg;
// }

// receiveparentMessage( value:string){
//   this.parentMessage = value;
// }


// onRolechange($event: any) {
// throw new Error('Method not implemented.');
// }


//  marks:number=80;
//      myclass:string="";

//      constructor(){
//          if(this.marks >=35 ){
//            this.myclass="class1";
//          }else{
//            this.myclass="class2";
//          }
//      }
}
