import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
// import {Observable} from 'rxjs'

@Component({
  selector: 'app-jokes',
  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.css']
})
export class JokesComponent implements OnInit {
  joker:number = 0;
  mainJoke: any;
  jokeArray = []
  jokeURL:string = 'https://icanhazdadjoke.com/slack'
  // joker:string = 'this is one'
  constructor(private http:HttpClient) { }


  ngOnInit(): void {
  }
 works(){
   console.log("click")
   return this.joker++
 }
 pullingJokes(){
   this.http.get(this.jokeURL).subscribe(Response => {
    this.mainJoke = Response
    this.jokeArray = this.mainJoke.attachments[0].fallback
    console.log(this.jokeArray)

   })
  //  console.log()
  // return this.http.get(this.jokeURL);
 }
}
