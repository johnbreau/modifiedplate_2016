import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { EntryFormComponent } from './entry-form.component';

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [EntryFormComponent],
  exports: [EntryFormComponent],
  providers: []
})

export class EntryFormModule { }
