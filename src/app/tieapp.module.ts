import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './tieapp.component';
import { TieappService } from './tieapp.service';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MessagelistComponent } from './body/messagelist/messagelist.component';
import { SearchcriteriaComponent } from './body/searchcriteria/searchcriteria.component';
import { MessagedetailComponent } from './body/messagelist/messagedetail/messagedetail.component';
import { EntitylistComponent } from './body/messagelist/messagedetail/entitylist/entitylist.component';
import { DoclistComponent } from './body/messagelist/messagedetail/doclist/doclist.component';
import { CbcrComponent } from './body/messagelist/messagedetail/cbcr/cbcr.component';
import { Cbcrtable1Component } from './body/messagelist/messagedetail/cbcr/cbcrtable1/cbcrtable1.component';
import { Cbcrtable2Component } from './body/messagelist/messagedetail/cbcr/cbcrtable2/cbcrtable2.component';
import { Cbcrtable3Component } from './body/messagelist/messagedetail/cbcr/cbcrtable3/cbcrtable3.component';
import { MessageComponent } from './body/messagelist/messagedetail/message/message.component';

import { SearchDetailComponent } from './body/searchcriteria/search-detail/search-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    FooterComponent,
    HeaderComponent,
    MessagelistComponent,
    SearchcriteriaComponent,
    MessagedetailComponent,
    EntitylistComponent,
    DoclistComponent,
    CbcrComponent,
    Cbcrtable1Component,
    Cbcrtable2Component,
    Cbcrtable3Component,
    MessageComponent,
    SearchDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [TieappService],
  bootstrap: [AppComponent]
})
export class AppModule { }
