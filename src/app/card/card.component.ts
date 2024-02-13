import { Component,Input,OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { subscribeOn } from 'rxjs';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit{
  @Input() repo:any;
  @Input() user:any;
  langs:any[]=[]


  constructor(
    private apiService: ApiService
  ) {}
 ngOnInit(): void {
   this.apiService.getRepoLanguages(this.user?.login,this.repo.name).subscribe(data=>{
    this.langs=Object.keys(data)
    console.log(this.langs)
   })
 }



}