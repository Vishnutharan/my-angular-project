import { RouterModule, Routes } from '@angular/router';
import { MyPracticeComponent } from './my-practice/my-practice.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    { path: 'my-practice', component: MyPracticeComponent },
    { path: 'home-componant', component: HomeComponent },
    { path: 'about-componant', component: AboutComponent },
    { path: 'contact-componant', component: ContactComponent },
    { path: 'login-componant', component: LoginComponent }

];

@NgModule({
    imports: [[RouterModule.forChild(routes)],],
    exports: [RouterModule],
    // declarations: [MyPracticeComponent],
    // bootstrap: [AppComponent]
})

export class AppRoutingModule { }
