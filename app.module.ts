import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/* Module */
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';

/* Component */
import { AppComponent } from './app.component';

import { ApplicationComponent } from './pages/common/my/application/application.component';
import { SnsloginComponent } from './pages/common/my/snslogin/snslogin.component';
import { ResetpwdComponent } from './pages/common/my/resetpwd/resetpwd.component';
import { ParticipateComponent } from './pages/common/my/participate/participate.component';
import { EbookComponent } from './pages/common/my/ebook/ebook.component';
import { AnswerComponent } from './pages/common/my/answer/answer.component';


@NgModule({
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    BrowserAnimationsModule, HttpClientModule, MatDialogModule, MatSnackBarModule,NgxPaginationModule,
    FormsModule, ReactiveFormsModule, MatRadioModule
  ],
  declarations: [
    AppComponent,
    ApplicationComponent,
    SnsloginComponent,
    ResetpwdComponent,
    ParticipateComponent,
    EbookComponent,
    AnswerComponent,

  ],
  providers: [
    { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { hasBackdrop: false } }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
