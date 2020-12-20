import { Component, AfterViewInit, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { MenuController, NavController } from '@ionic/angular';
import { UserDataService } from '@app/services/common/user-data.service';
import { appTitle } from 'config/config';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements AfterViewInit, OnInit {

  name: string;

  constructor(
    private navCtrl: NavController,
    private titleService: Title,
    public menuCtrl: MenuController,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.name = params['name'];
    });
  }

  ionViewWillEnter() {
    this.titleService.setTitle(appTitle + ' - Welcome to monthlyrepeat.com. Landing Zone');
    this.menuCtrl.enable(false);
  }

  ngAfterViewInit() { }

  goToHome() {
    this.menuCtrl.enable(true);
    this.navCtrl.navigateRoot('tabs/home');
  }
}
