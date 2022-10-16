import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  showMain = true;
  showSub = false;

  constructor() {}

  ngOnInit() {

  }

  clickFolder($event){
    console.log($event.target.id);
    if (this.showMain){
      this.showMain = false;
      this.showSub = true;
    }
    else{
      this.showMain = true;
      this.showSub = false;
    }
  }

}
