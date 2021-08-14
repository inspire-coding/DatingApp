import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class BusyService {
  busyRequestCount = 0;

  constructor(private spnnerService: NgxSpinnerService) { }

  busy() {
    this.busyRequestCount++;
    this.spnnerService.show(undefined, {
      type: 'line-scale-party',
      bdColor: 'rgba(240,240,240,0)',
      color: '#333333'
    })
  }

  idle() {
    this.busyRequestCount--;
    if(this.busyRequestCount <= 0) {
      this.busyRequestCount = 0;
      this.spnnerService.hide();
    }
  }
}
