import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SheltersComponent } from './shelters/shelters.component';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';
import { MainService } from './shared/main.service';
import { RegistrationShelterComponent } from './registration-shelter/registration-shelter.component';
import { RegistrationUserComponent } from './registration-user/registration-user.component';
import { NeedsComponent } from './needs/needs.component';
import { SearchComponent } from './search/search.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientJsonpModule } from '@angular/common/http';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MatCardModule } from '@angular/material/card';
import { EventEmitterService } from './event-emitter.service';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    SheltersComponent,
    LoginComponent,
    UsersComponent,
    RegistrationShelterComponent,
    RegistrationUserComponent,
    NeedsComponent,
    SearchComponent
  ],
  imports: [
    MatCardModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule,
    HttpClientJsonpModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [MainService, EventEmitterService],
  bootstrap: [AppComponent]
})
export class AppModule {}