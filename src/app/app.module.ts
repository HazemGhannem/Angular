import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './Component/nav/nav.component';
import { ContentComponent } from './Component/content/content.component';
import { FooterComponent } from './Component/footer/footer.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FourniseurComponent } from './Component/fourniseur/fourniseur.component';
import { ListFourniseurComponent } from './Component/list-fourniseur/list-fourniseur.component';
import { ListProductComponent } from './Component/list-product/list-product.component';




@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ContentComponent,
    FooterComponent,
    FourniseurComponent,
    ListFourniseurComponent,
    ListProductComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
