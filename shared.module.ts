import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Module */
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatSelectModule } from '@angular/material/select';
import { NgxPaginationModule } from 'ngx-pagination';
import {MatRadioModule} from '@angular/material/radio';

/* Directive */
import { KeypadDirective } from '../directive/keypad.directive';

/* Component */
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { SideComponent } from './layout/side/side.component';
import { ResearchComponent } from './research/research.component';
import { AlertComponent } from './modal/alert/alert.component';
import { ConfirmComponent } from './modal/confirm/confirm.component';
import { AuthPersonalComponent } from './auth-personal/auth-personal.component';
import { KeypadComponent } from './keypad/keypad.component';
import { SelectDateComponent } from './selectbox/select-date/select-date.component';
import { SelectSingleComponent } from './selectbox/select-single/select-single.component';
import { CustomdatePipe } from '../pipe/customdate.pipe';
import { EducationComponent } from './forms/education/education.component';
import { CareerComponent } from './forms/career/career.component';
import { ScholarshipComponent } from './forms/scholarship/scholarship.component';
import { LicenseComponent } from './forms/license/license.component';
import { SrchLicenseComponent } from './modal/srch-license/srch-license.component';
import { SubPositionComponent } from './layout/sub-position/sub-position.component';
import { ImgSingleComponent } from './file-attach/img-single/img-single.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { MonthpickerComponent } from './monthpicker/monthpicker.component';
import { CommaDirective } from '../directive/comma.directive';
import { CommaPipe } from '../pipe/comma.pipe';
import { FileDropZoneDirective } from '../directive/file-drop-zone.directive';
import { FileMultiComponent } from './file-attach/file-multi/file-multi.component';
import { FilesizePipe } from '../pipe/filesize.pipe';
import { PaginationComponent } from './pagination/pagination.component';
import { QnaListComponent } from '../pages/common/cs/qna-list/qna.component';
import { QnaDetailComponent } from '../pages/common/cs/qna-detail/qna-detail.component';
import { QnaEditComponent } from '../pages/common/cs/qna-edit/qna-edit.component';
import { QaListComponent } from '../pages/common/cs/qa-list/qa.component';
import { NewsListComponent } from '../pages/common/cs/news-list/news.component';
import { NewsDetailComponent } from '../pages/common/cs/news-detail/news-detail.component';
import { NoticeListComponent } from '../pages/common/cs/notice-list/notice.component';
import { ResourceListComponent } from '../pages/common/cs/resource-list/resource.component';
import { ResourceDetailComponent } from '../pages/common/cs/resource-detail/resource-detail.component';
import { NoticeDetailComponent } from '../pages/common/cs/notice-detail/notice-detail.component';
import { FileLegacyComponent } from './file-attach/file-legacy/file-legacy.component';



@NgModule({
  imports: [
    CommonModule, RouterModule, FormsModule, ReactiveFormsModule, MatRippleModule,
    MatDatepickerModule, MatFormFieldModule, MatInputModule, MatMomentDateModule,
    MatSelectModule, NgxPaginationModule,MatRadioModule
  ],
  declarations: [

    /* Directive */
    KeypadDirective, CommaDirective, FileDropZoneDirective,

    /* Pipe */
    CustomdatePipe, CommaPipe, FilesizePipe,

    /* Component */
    HeaderComponent, FooterComponent, SideComponent, ResearchComponent, AlertComponent,
    ConfirmComponent, AuthPersonalComponent, KeypadComponent, SelectDateComponent,
    SelectSingleComponent, EducationComponent, CareerComponent,
    ScholarshipComponent, LicenseComponent, SrchLicenseComponent, SubPositionComponent,
    ImgSingleComponent, DatepickerComponent, MonthpickerComponent,
    FileMultiComponent, PaginationComponent,
    QnaListComponent,
    QnaDetailComponent,
    QnaEditComponent,
    QaListComponent,
    NewsListComponent,
    NewsDetailComponent,
    NoticeListComponent,
    ResourceListComponent,
    ResourceDetailComponent,
    NoticeDetailComponent,
    HeaderComponent, FooterComponent, SideComponent, ResearchComponent, AlertComponent,
    ConfirmComponent, AuthPersonalComponent, KeypadComponent, SelectDateComponent,
    SelectSingleComponent, EducationComponent, CareerComponent,
    ScholarshipComponent, LicenseComponent, SrchLicenseComponent, SubPositionComponent,
    ImgSingleComponent, DatepickerComponent, MonthpickerComponent,
    FileMultiComponent, PaginationComponent, FileLegacyComponent,
  ],
  exports: [
    /* Module */
    FormsModule, ReactiveFormsModule,

    /* Directive */
    KeypadDirective, CommaDirective,

    /* Pipe */
    CustomdatePipe, CommaPipe,

    /* Component */
    HeaderComponent, FooterComponent, SideComponent, ResearchComponent,
    AuthPersonalComponent, SelectDateComponent, SelectSingleComponent,
    EducationComponent, CareerComponent, ScholarshipComponent, LicenseComponent,
    SubPositionComponent, ImgSingleComponent, DatepickerComponent, MonthpickerComponent,
    FileMultiComponent, PaginationComponent,
    HeaderComponent, FooterComponent, SideComponent, ResearchComponent,
    AuthPersonalComponent, SelectDateComponent, SelectSingleComponent,
    EducationComponent, CareerComponent, ScholarshipComponent, LicenseComponent,
    SubPositionComponent, ImgSingleComponent, DatepickerComponent, MonthpickerComponent,
    FileMultiComponent, PaginationComponent, FileLegacyComponent,
  ]
})
export class SharedModule { }
