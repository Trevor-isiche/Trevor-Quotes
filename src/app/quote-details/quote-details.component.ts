import { Component, OnInit, Input } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {
  upvotes:number = -1;
  downvotes:number = -1;
  showUpvotes:string= "";
  showDownVotes:string="";


  @Input() quote:Quote;

  voteUp(){
    this.upvotes = this.upvotes+1;
    this.showUpvotes = "" + this.upvotes;
  }

  voteDown(){
    this.downvotes = this.downvotes+1;
    this.showDownVotes = ""+this.downvotes;
  }

  constructor() { }

  ngOnInit() {
  }

}
