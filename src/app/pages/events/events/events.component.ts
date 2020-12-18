import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { IonItemSliding, ToastController } from '@ionic/angular';
import { EventsService } from '../events.service';
import { appTitle } from 'src/config';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
})
export class EventsComponent implements OnInit {

  queryText = '';
  segment: 'all' | 'favorites' = 'all';
  events: any[] = [];

  constructor(
    private eventsService: EventsService,
    private router: Router,
    private route: ActivatedRoute,
    private toastCtrl: ToastController,
    private titleService: Title,
  ) { }

  ngOnInit() {
    this.updateList();
  }

  ionViewWillEnter() {
    this.titleService.setTitle(appTitle + ' - Events');
    this.updateList();
  }

  updateList() {
    this.eventsService.fetchEvents(this.queryText, this.segment === 'favorites')
      .then((events) => {
        this.events = events;
      });
  }

  goToEventDetail(event: any) {
    this.eventsService.setCurrent(event);
    this.router.navigate([`${event.$key}`], {relativeTo: this.route});
  }

  async addFavorite(slidingItem: IonItemSliding, id: string) {
    slidingItem.close();

    this.eventsService.toggleFavorites(id);

    const toast = await this.toastCtrl.create({
      message: 'Event added to favorites',
      duration: 3000,
    });
    toast.present();

    this.updateList();
  }

  async removeFavorite(slidingItem: IonItemSliding, id: string) {
    this.eventsService.toggleFavorites(id);
    slidingItem.close();

    const toast = await this.toastCtrl.create({
      message: 'Event removed from favorites',
      duration: 3000,
    });
    toast.present();

    this.updateList();
  }

  isInFavorites(key: string) {
    return this.eventsService.isInFavorites(key);
  }
}
