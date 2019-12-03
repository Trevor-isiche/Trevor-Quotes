import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import {Quote} from '../quote';
@Component({
  selector: 'app-quote-forms',
  templateUrl: './quote-forms.component.html',
  styleUrls: ['./quote-forms.component.css']
})
export class QuoteFormsComponent implements OnInit {
  quote:string;
  submittedBy:string;
  author:string;
  id:number;
  date:Date;
  anyType:any;
  @Output() newQuote = new EventEmitter<Quote>();
 
  add(){
    this.anyType = new Quote(this.id,this.author,this.quote,this.submittedBy,this.date);
    this.newQuote.emit(this.anyType);
  }

  outPutQuote:any;


  constructor() { }

  ngOnInit() {
  }

}
