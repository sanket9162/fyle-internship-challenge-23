import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';
import { subscribeOn } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  user:any={}
  githubUsername:string=""
  repos:any=[]=[]
  languages: any[]=[];
  search:boolean=true
  userData:boolean=false
  userRepo:boolean=false
  page:number=1
  per_page:number=10
  total_repos:number=0
  constructor(
    private apiService: ApiService
  ) {}
  
  getUSerData(){
    this.apiService.getUser(this.githubUsername).subscribe(data=>{
      this.user=data
      // console.log(this.user)
      this.search = false
      this.userData=true
      this.userRepo= true
      this.total_repos=this.user.public_repos
    })
    this.getUserRepo()
  }
  
  getUserRepo(){
    this.apiService.getRepos(this.githubUsername,this.page,this.per_page).subscribe(data=>{
      this.repos=data
      // console.log(this.repos)
    })
    this.getRepoLang()
    

  }

  getRepoLang(){
  
      this.apiService.getRepoLanguages(this.githubUsername, this.repos.name).subscribe((data:any)=>{
        this.languages = Object.keys(data)
        console.log(this.languages)
      })

  }

  change_per_page(){
    this.getUserRepo()

  }

  createRange(){
  
    return new Array(Math.ceil(this.total_repos/this.per_page)).fill(0)
      .map((n, index) => index + 1);
  }

  changePage(page:number){
    this.page=page
    this.getUserRepo()
  }





  ngOnInit() {
    // this.apiService.getUser('sanket9162').subscribe(data=>{
    //   this.user=data
    //   console.log(this.user)
    // });
  }
}
