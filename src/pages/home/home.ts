import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage{

  searchQuery: string = '';
  btns: any;

  constructor(private http: HttpClient,
      navParams: NavParams,
      public navCtrl: NavController,) {
    this.getAllPages();
    
  }

  getAllPages() {
    this.http.get('http://www.porteirinha.com.br/wp-json/wp/v2/pages?per_page=100&status=publish&parent=0').subscribe(data => {
      this.btns = data;
      console.log(this.btns);
    });
  }

  getPage(btn){
    console.log(btn)
    this.http.get('http://www.porteirinha.com.br/wp-json/wp/v2/pages?per_page=100&status=publish&parent=0').subscribe(data => {
      this.btns = data;
      console.log(this.btns);
    });
  }

  getBtns(ev: any) {
    this.getAllPages();
    let val = ev.target.value;
    if (val && val.trim() != '') {
      var btns =  this.btns.filter(function(item){
        if(item.title.rendered.indexOf(val) > -1)
          return item.title.rendered;
      });
      this.btns = btns;
    }
  }
}
