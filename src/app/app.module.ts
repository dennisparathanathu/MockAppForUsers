import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CreateMockUserComponent } from './components/create-mock-user/create-mock-user.component';
import { DisplayAllMockUsersComponent } from './components/display-all-mock-users/display-all-mock-users.component';
import { DisplaySinglemockUsersComponent } from './components/display-singlemock-users/display-singlemock-users.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { MockappService } from './service/mockapp.service';
import { HomeComponent } from './components/home/home.component';
import { DeleteConfirmationComponent } from './components/delete-confirmation/delete-confirmation.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CreateMockUserComponent,
    DisplayAllMockUsersComponent,
    DisplaySinglemockUsersComponent,
    HomeComponent,
    DeleteConfirmationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [MockappService],
  bootstrap: [AppComponent]
})
export class AppModule { }
