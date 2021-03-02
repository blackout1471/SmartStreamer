import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';

import { PageNotFoundComponent, MediumMovieComponent} from './components/';
import { WebviewDirective } from './directives/';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [PageNotFoundComponent, WebviewDirective, MediumMovieComponent],
  imports: [CommonModule, TranslateModule, FormsModule],
  exports: [TranslateModule, WebviewDirective, FormsModule, MediumMovieComponent]
})
export class SharedModule {}
