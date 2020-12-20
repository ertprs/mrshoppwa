import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { DataService } from '@app/services/database/data.service';
import { SpeakersService } from '../speakers.service';
import { appTitle } from 'config/config';
import { AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import { MenuController, ViewWillEnter } from '@ionic/angular';

@Component({
  selector: 'app-speakers-list',
  templateUrl: './speakers-list.component.html',
  styleUrls: ['./speakers-list.component.scss'],
})
export class SpeakersListComponent implements OnInit, ViewWillEnter {

  queryText = '';
  speakers: any[] = [];

  @ViewChild('barCanvas', { static: false }) private barCanvas: ElementRef;
  @ViewChild('doughnutCanvas', { static: false }) private doughnutCanvas: ElementRef;
  @ViewChild('lineCanvas', { static: false }) private lineCanvas: ElementRef;

  barChart: any;
  doughnutChart: any;
  lineChart: any;

  constructor(
    private dataService: DataService,
    private router: Router,
    private route: ActivatedRoute,
    private speakersService: SpeakersService,
    private titleService: Title,
    public menuCtrl: MenuController
  ) { }

  ngOnInit() {
    this.updateSpeakers();
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(true);
    this.titleService.setTitle(appTitle + ' - Speakers');
  }

  goToSpeakerDetail(speaker: any) {
    this.speakersService.setCurrent(speaker);
    this.router.navigate([`${speaker.$key}`], { relativeTo: this.route });
  }

  updateSpeakers() {
    this.dataService.getSpeakers().then((speakers: any[]) => {
      this.speakers = Object.keys(speakers)
        .map((key) => speakers[key])
        .sort((a, b) => {
          if (a.fullname.toLowerCase() < b.fullname.toLowerCase()) {
            return -1;
          }
        });

      if (this.queryText) {
        this.speakers = this.speakers.filter((speaker) => {
          return speaker.fullname.toLowerCase().indexOf(this.queryText.toLowerCase()) !== -1;
        });
      }
    });
  }

  ngAfterViewInit() {
    this.barChartMethod();
    this.doughnutChartMethod();
    this.lineChartMethod();
  }

  barChartMethod() {
    this.barChart = new Chart(this.barCanvas.nativeElement, {
      type: 'bar',
      data: {
        labels: ['BJP', 'INC', 'AAP', 'CPI', 'CPI-M', 'NCP'],
        datasets: [{
          label: '# of Votes',
          data: [200, 50, 30, 15, 20, 34],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }

  doughnutChartMethod() {
    this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
      type: 'doughnut',
      data: {
        labels: ['BJP', 'Congress', 'AAP', 'CPM', 'SP'],
        datasets: [{
          label: '# of Votes',
          data: [50, 29, 15, 10, 7],
          backgroundColor: [
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)'
          ],
          hoverBackgroundColor: [
            '#FFCE56',
            '#FF6384',
            '#36A2EB',
            '#FFCE56',
            '#FF6384'
          ]
        }]
      }
    });
  }

  lineChartMethod() {
    this.lineChart = new Chart(this.lineCanvas.nativeElement, {
      type: 'line',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'November', 'December'],
        datasets: [
          {
            label: 'Sell per week',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [65, 59, 80, 81, 56, 55, 40, 10, 5, 50, 10, 15],
            spanGaps: false,
          }
        ]
      }
    });
  }


}
