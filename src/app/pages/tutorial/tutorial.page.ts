import { Component, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { IonSlides, MenuController, NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { appTitle } from 'src/config';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.page.html',
  styleUrls: ['./tutorial.page.scss'],
})
export class TutorialPage {

  @ViewChild('slides', { static: false }) slides: IonSlides;
  showSkip = true;

  constructor(
    private storage: Storage,
    private menu: MenuController,
    private navCtrl: NavController,
    private titleService: Title,
  ) { }

  startApp() {
    this.navCtrl.navigateRoot('/tabs/schedule').then(() => {
      this.storage.set('hasSeenTutorial', 'true');
    });
  }

  onSlideChangeStart() {
    this.slides.isEnd().then((result) => {
      this.showSkip = !result;
    });
  }

  ionViewWillEnter() {
    this.titleService.setTitle(appTitle + ' - Tutorial');
    this.slides.update();
  }

  ionViewDidEnter() {
    // the root left menu should be disabled on the tutorial page
    this.menu.enable(false);
  }

  ionViewDidLeave() {
    // enable the root left menu when leaving the tutorial page
    this.menu.enable(true);
  }
}
