import { Component, AfterViewInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { MenuController, NavController } from '@ionic/angular';
import { UserDataService } from '@app/services/common/user-data.service';
import { appTitle } from 'config/config';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements AfterViewInit {

  constructor(
    private navCtrl: NavController,
    private titleService: Title,
    public menuCtrl: MenuController
  ) { }

  ionViewWillEnter() {
    this.titleService.setTitle(appTitle + ' - Welcome to monthlyrepeat.com. Landing Zone');
    this.menuCtrl.enable(false);
  }
    
  ngAfterViewInit() { }

  goToHome() {
    this.menuCtrl.enable(true);
    this.navCtrl.navigateRoot('tabs');
  }
}
