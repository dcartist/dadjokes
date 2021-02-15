import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'

@Component({
  selector: 'app-jokes',
  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.css']
})
export class JokesComponent implements OnInit {
  joker:number = 0
  // joker:string = 'this is one'
  constructor() { }


  ngOnInit(): void {
  }
 works(){
   console.log("click")
   return this.joker++
 }
}
