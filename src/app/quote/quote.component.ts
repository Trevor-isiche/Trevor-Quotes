import { Component, OnInit ,Input} from '@angular/core';
import {Quote} from '../quote'

@Component({
    selector: 'app-quote',
    templateUrl: './quote.component.html',
    styleUrls: ['./quote.component.css']
  })
  export class QuoteComponent implements OnInit {

    quotes = [
      new Quote(1, 'Maya Angelou', 'If you are always trying to be normal you will never know how amazing you can be.', 'admin', new Date(2019, 5, 10)),
      new Quote(2, 'Miles Davis', 'Time isnt the main thing. It is the only thing.', 'admin', new Date(2019, 3, 23)),
      new Quote(3, 'Mahatma Gandhi', 'In a gentle way, you can shake the world', 'admin', new Date(2019, 8, 17)),
      
      ]
      toogleDetails(index){
        this.quotes[index].showDescription =!this.quotes[index].showDescription;
    };
  ngOnInit(){

}
}