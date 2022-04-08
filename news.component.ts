import { Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, PLATFORM_ID, SimpleChanges , Inject , ViewChild} from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';
import { DialogService } from 'src/app/service/dialog.service';
import { PostApiService } from 'src/app/service/post-api.service';
import { globalVar, isNullOrEmpty } from 'src/app/global/global-constant';
import { FileTransferService } from 'src/app/service/file-transfer.service';
import { getUrl1, getUrl2, getFileDownloadUrl } from 'src/app/global/global-fn';

interface Lists {
  RNUM : String;
  SEQ: String;
  SUBJECT: String;
  HIT_CNT: String;
  REG_DATE: String;
  JB_URL: String;
  SORT: String;
  JB_SORT_ORDER: String;
  NEW: String;
  JB_ID: String;
  JB_NAME: String;
  JB_QTYPE: String;
  LOGICALFILENMS: String;
  PHYSICALFILENMS: String;
  PHYSICALFOLDERNMS: String;
  Thumbnail:String;
}

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsListComponent implements OnInit {
  lists: Lists[] = [];
  count : number;
  NoticeType = '';
  SearchTypeBox = [];
  @ViewChild('forms') forms: ElementRef;
  SearchType: String;
  SearchValue: String;
  pageConfig: any = {
    itemsPerPage: 10,
    currentPage: 1,
    totalItems: 0
  };
  constructor(
    public dialog: DialogService
    , public router: Router
    , public postApi: PostApiService
    , @Inject(DOCUMENT) private document: Document
    , @Inject(PLATFORM_ID) private platformId: Object
    ) {

    this.SearchTypeBox = [
      {Code : 'All', CodeValue : '전체'},
      {Code : 'Title', CodeValue : '제목'},
      {Code : 'Content', CodeValue : '내용'},
    ];
    const urlType = this.document.location.href;
    this.NoticeType = '';
      //JB_QTYPE = 문의유형 [0:공통, 1:교육, 2: 일자리, 3:컨설팅]
    if (urlType.indexOf('main/cs') > 0) {
      this.NoticeType = ''
    } else if (urlType.indexOf('consult/cs') > 0) {
      this.NoticeType = '3'
    } else if (urlType.indexOf('edu/cs') > 0) {
      this.NoticeType = '1'
    } else {
      this.NoticeType = '2'
    }
    //console.log('NoticeType', NoticeType)
    this.SearchType = this.SearchTypeBox[1].Code;
    this.getList(this.NoticeType);
   }

  ngOnInit(): void {
    this.getList(this.NoticeType);
  }

  getList(NoticeType) {
    const param = {
      mapcode: 'getBBSList',
      bbsType : 'news',
      NoticeType : NoticeType,
      viewSize : this.pageConfig.itemsPerPage,
      page : this.pageConfig.currentPage,
      SearchType : this.SearchType,
      SearchValue : this.SearchValue
    };
    this.getListCnt(NoticeType);
    this.postApi.home(param).then(res=> {
      if(res.header.status === 200) {

        res.body.docs.forEach(function (item) {
          //첨부파일 확장자명 확인
          if (!isNullOrEmpty(item.PHYSICALFILENMS)) {
            var physicalnms = item.PHYSICALFILENMS.split(',');
            var filepaths = item.PHYSICALFOLDERNMS.split(',');
            var logicalnms = item.LOGICALFILENMS.split(',');
            item.PhysicalFileNms = item.PHYSICALFILENMS.split(",");
            item.Thumbnail = getFileDownloadUrl(physicalnms[0]).replace('/temp', '/file').replace('fileName=' + logicalnms[0] + '&', '');
            //item.Thumbnail = getUrl2('/attach/file/' + physicalnms[0] + '/download.do?userkey=' + globalVar.userKey + '&path=' + filepaths[0] + "&fileName=" + logicalnms[0]);
          }

        });
        this.lists = res.body.docs;
      }
    });
    console.log(this.lists);
  }

  getListCnt(NoticeType) {
    const param = {
      mapcode: 'getBBSListCnt',
      bbsType : 'news',
      NoticeType : NoticeType,
      SearchType : this.SearchType,
      SearchValue : this.SearchValue
    };
    this.postApi.home(param).then(res=> {
      if(res.header.status === 200) {
        this.count = res.body.docs[0];
        this.pageConfig.totalItems = res.body.docs[0];
      }
    });
  }

  goDetail(id) {
    //console.log("goDetail")
    //console.log(id)
    //let url = '/cs/notice-detail/' + id;
    //this.router.navigate(url);
    this.router.navigate(['/main/cs/news-detail'], { queryParams: { KeyId: id } });
  }


  setSearchType($event) {
    //console.log($event)
    this.SearchType = $event;
  }

  getSearch() {
    this.getList(this.NoticeType);
  }

}
