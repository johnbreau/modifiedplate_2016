import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'mp-entry-form',
  templateUrl: 'entry-form.component.html',
  styleUrls: ['entry-form.component.css'],
})

export class EntryFormComponent {

  entry: Object = {};

  onSubmitTemplateBased() {
    console.log(this.entry);
  }




}
