import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  showAddScreen = false;
  showAddContentLogic = false;
  constructor(public modal:ModalController) {}

  operationHours;

  addScreen(){
    this.showAddScreen = true;
    console.log("add new screen");
  }
  addContentLogic(){
    this.showAddContentLogic = true;
    console.log("add new screen logic");
  }
  onWillDismiss($event){
    this.showAddScreen = false;
    this.showAddContentLogic = false;
    this.modal.dismiss();
    console.log("close modal");
  }
  // operatingHours(){
  //   console.log("operationHours", this.operationHours);
  // }
}
