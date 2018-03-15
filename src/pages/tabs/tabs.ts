import { Component } from '@angular/core';

import { AnunciePage } from '../anuncie/anuncie';
import { GuiaPage } from '../guia/guia';
import { AboutPage } from '../about/about';



@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tabAnuncie = AnunciePage;
 
  tabGuia  = GuiaPage;

  tabAbout  = AboutPage;


  constructor() {

  }
}
