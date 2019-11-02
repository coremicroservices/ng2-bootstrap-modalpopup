import { Component } from '@angular/core';
import { DialogService } from 'ng2-bootstrap-modal';
import { ModalPopUpComponent } from './modal-pop-up/modal-pop-up.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'modal-popup-example';
  /**
   *
   */
  constructor(private dialogService: DialogService) {

  }
  showConfirm() {
    const disposable = this.dialogService.addDialog(ModalPopUpComponent, {
      title: 'Confirm title',
      message: 'Confirm message'
    })
      .subscribe((isConfirmed) => {
        // We get dialog result
        if (isConfirmed) {
          alert('accepted');
        }  else {
          alert('declined');
        }
      });
    // We can close dialog calling disposable.unsubscribe();
    // If dialog was not closed manually close it by timeout
    setTimeout(() => {
      disposable.unsubscribe();
    }, 10000);
  }
}
