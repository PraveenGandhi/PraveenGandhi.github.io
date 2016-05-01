import {bindable} from 'aurelia-framework';


export class ContactButton {
  @bindable value = null;
  @bindable icon = null;
  @bindable active = false;

  click() {
    this.active = !this.active;
  }
}

