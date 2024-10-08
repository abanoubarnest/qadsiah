import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotFoundRoutingModule } from './not-found-routing.module';

// Modules
import { SharedModule } from '@app/shared/shared.module';

// PAGES
import { NotFoundComponent } from './pages';

const PAGES = [NotFoundComponent];

@NgModule({
  declarations: [...PAGES],
  imports: [CommonModule, NotFoundRoutingModule, SharedModule],
})
export class NotFoundModule {}
