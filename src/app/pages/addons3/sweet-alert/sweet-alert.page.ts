/**
* Ionic Full App  (https://store.enappd.com/product/ionic-full-app)
*
* Copyright © 2020-present Enappd. All rights reserved.
*
* This source code is licensed as per the terms found in the
* LICENSE.md file in the root directory of this source tree.
*/

import { Component } from '@angular/core';
import { environment } from '@env/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sweet-alert',
  templateUrl: './sweet-alert.page.html',
  styleUrls: ['./sweet-alert.page.scss'],
})
export class SweetAlertPage {
  public showAlertData: Array<any>;

  constructor() {
    this.showAlertData = environment.SWEET_ALERT_DATA;
  }

  normalAlert() {
    Swal.fire({
      title: 'Good job!',
      text: 'You clicked the button!',
      icon: 'success',
      heightAuto: false,
    });
  }

  basicMessage() {
    Swal.fire('Welcome To Enappd');

  }

  titleWithText() {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Something went wrong!',
      heightAuto: false,
    });
  }

  errorMessage() {
    Swal.fire({
      title: 'Oops...',
      text: 'Something went wrong!',
      icon: 'error',
      heightAuto: false,
    });
  }
  modalWithTitleError() {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Something went wrong!',
      footer: '<a href>Why do I have this issue?</a>',
      heightAuto: false,
    });
  }

  windowModal() {
    Swal.fire({
      imageUrl: 'http://placekitten.com/300/300',
      imageHeight: 300,
      imageAlt: 'A tall image',
      heightAuto: false,
    });
  }

  customHtml() {
    Swal.fire({
      title: '<strong>HTML <u>example</u></strong>',
      icon: 'info',
      html:
        'You can use <b>bold text</b>, ' +
        '<a href="//sweetalert2.github.io">links</a> ' +
        'and other HTML tags',
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText:
        '<i class="fa fa-thumbs-up"></i> Great!',
      confirmButtonAriaLabel: 'Thumbs up, great!',
      cancelButtonText:
        '<i class="fa fa-thumbs-down"></i> Nope!',
      cancelButtonAriaLabel: 'Thumbs down',
      heightAuto: false,
    });
  }

  customTopEnd() {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Your work has been saved',
      showConfirmButton: false,
      timer: 1500,
      heightAuto: false,
    });
  }

  customCenter() {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Your work has been saved',
      showConfirmButton: true,
      timer: 1500,
      heightAuto: false,
    });
  }
  customBottom() {
    Swal.fire({
      position: 'bottom',
      icon: 'success',
      title: 'Your work has been saved',
      showConfirmButton: false,
      timer: 1500,
      heightAuto: false,
    });
  }

  animationTada() {
    Swal.fire({
      title: 'Custom animation with Animate.css',
      showClass: {
        popup: 'animated fadeInDown faster',
      },
      hideClass: {
        popup: 'animated fadeOutUp faster',
      },
      heightAuto: false,
    });
  }

  animationSwing() {
    Swal.fire({
      title: 'Custom animation with Animate.css using swing Effect',
      animation: false,
      showClass: {
        popup: 'animated fadeInDown faster',
      },
      hideClass: {
        popup: 'animated fadeOutUp faster',
      },
      heightAuto: false,
    });
  }

  animationJello() {
    Swal.fire({
      title: 'Custom animation with Animate.css using jello Effect',
      animation: false,
      showClass: {
        popup: 'animated jello faster',
      },
      hideClass: {
        popup: 'animated jello faster',
      },
      heightAuto: false,
    });
  }
  animationFlip() {
    Swal.fire({
      title: 'Custom animation with Animate.css using flip Effect',
      animation: false,
      showClass: {
        popup: 'animated flip faster',
      },
      hideClass: {
        popup: 'animated flip faster',
      },
      heightAuto: false,
    });
  }

  confirmDialogFunction() {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You won\'t be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      heightAuto: false,
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success',
        );
      }
    });
  }

  confirmDialogPassingparameter() {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger',
      },
      buttonsStyling: true,
    });

    swalWithBootstrapButtons.fire({
      title: 'Are you sure?',
      text: 'You won\'t be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      heightAuto: false,
      reverseButtons: true,
    }).then((result) => {
      if (result.value) {
        swalWithBootstrapButtons.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success',
        );
      } else if (
        // Read more about handling dismissals
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error',
        );
      }
    });
  }

  confirmDialogWithImage() {
    Swal.fire({
      title: 'Sweet!',
      text: 'Modal with a custom image.',
      imageUrl: 'https://unsplash.it/400/200',
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: 'Custom image',
      animation: false,
      heightAuto: false,
    });
  }

  ajaxRequest() {
    Swal.fire({
      title: 'Submit your Github username',
      input: 'text',
      inputAttributes: {
        autocapitalize: 'off',
      },
      showCancelButton: true,
      confirmButtonText: 'Look up',
      heightAuto: false,
      showLoaderOnConfirm: true,
      preConfirm: (login) => {
        return fetch(`//api.github.com/users/${login}`)
          .then((response) => {
            if (!response.ok) {
              throw new Error(response.statusText);
            }
            return response.json();
          })
          .catch((error) => {
            Swal.showValidationMessage(`Request failed: ${error}`);
          });
      },
      allowOutsideClick: () => !Swal.isLoading(),
    }).then((result) => {
      if (result.value) {
        Swal.fire({
          title: `${result.value.login}'s avatar`,
          imageUrl: result.value.avatar_url,
          heightAuto: false,
        });
      }
    });

  }

  dynamicQuery() {
    const ipAPI = 'https://api.ipify.org?format=json';

    Swal.queue([
      {
        title: 'Your public IP',
        confirmButtonText: 'Show my public IP',
        text:
          'Your public IP will be received ' +
          'via AJAX request',
        showLoaderOnConfirm: true,
        heightAuto: false,
        preConfirm: () => {
          return fetch(ipAPI)
            .then((response) => response.json())
            .then((data) => Swal.insertQueueStep(data.ip))
            .catch(() => {
              Swal.insertQueueStep({
                icon: 'error',
                title: 'Unable to get your public IP',
              });
            });
        },
      },
    ]);
  }

  timerFunction() {
    let timerInterval;
    Swal.fire({
      title: 'Auto close alert!',
      html:
        'I will close in <strong></strong> seconds.<br/><br/>' +
        '<button id=\'increase\' class=\'btn btn-warning\'>' +
        'I need 5 more seconds!' +
        '</button><br/>' +
        '<button id=\'stop\' class=\'btn btn-danger\'>' +
        'Please stop the timer!!' +
        '</button><br/>' +
        '<button id=\'resume\' class=\'btn btn-success\' disabled>' +
        'Phew... you can restart now!' +
        '</button><br/>' +
        '<button id=\'toggle\' class=\'btn btn-primary\'>' +
        'Toggle' +
        '</button>',
      timer: 10000,
      onBeforeOpen: () => {
        const content = Swal.getContent();
        const $ = content.querySelector.bind(content);

        const stop = $('#stop');
        const resume = $('#resume');
        const toggle = $('#toggle');
        const increase = $('#increase');

        Swal.showLoading();

        function toggleButtons() {
          stop.disabled = !Swal.isTimerRunning();
          resume.disabled = Swal.isTimerRunning();
        }

        stop.addEventListener('click', () => {
          Swal.stopTimer();
          toggleButtons();
        });

        resume.addEventListener('click', () => {
          Swal.resumeTimer();
          toggleButtons();
        });

        toggle.addEventListener('click', () => {
          Swal.toggleTimer();
          toggleButtons();
        });

        increase.addEventListener('click', () => {
          Swal.increaseTimer(5000);
        });

        timerInterval = setInterval(() => {
          Swal.getContent().querySelector('strong')
            .textContent = (Swal.getTimerLeft() / 1000)
              .toFixed(0);
        }, 100);
      },
      onClose: () => {
        clearInterval(timerInterval);
      },
    });
  }

}
