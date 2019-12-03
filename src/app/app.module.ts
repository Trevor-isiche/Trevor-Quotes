import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { QuoteComponent } from './quote/quote.component';
import { QuoteDetailsComponent} from './quote-details/quote-details.component'

import { QuoteFormsComponent } from './quote-forms/quote-forms.component';
import { DateCountPipe } from './date-count.pipe';





@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    QuoteFormsComponent,
    
    QuoteDetailsComponent,
    
    DateCountPipe,

  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
