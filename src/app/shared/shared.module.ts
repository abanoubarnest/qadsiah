// Angular
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { RouterModule } from '@angular/router';

// Pipes
import { PreviewLocalImagePipe } from './pipes/preview-local-image.pipe';
import { DMYDatePipe } from './pipes/dmy-date.pipe';
import { SafePipe } from './pipes/safe.pipe';
import { FirstCharacterPipe } from './pipes/first-character.pipe';
@NgModule({
  declarations: [
    PreviewLocalImagePipe,
    DMYDatePipe,
    SafePipe,
    FirstCharacterPipe,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [
    PreviewLocalImagePipe,
    ReactiveFormsModule,
    FormsModule,
    SafePipe,
    DMYDatePipe,
    FirstCharacterPipe,
  ],
  providers: [],
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<any> {
    return {
      ngModule: SharedModule,
      providers: [
        DatePipe,
      ],
    };
  }
}
