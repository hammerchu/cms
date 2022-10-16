import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  showAddChannel=false;
  constructor(public modal:ModalController) {}

  addChannel(){
    this.showAddChannel = true;
    console.log("add new screen logic");
  }
  onWillDismiss($event){
    this.showAddChannel = false;
    this.modal.dismiss();
    console.log("close modal");
  }
}
