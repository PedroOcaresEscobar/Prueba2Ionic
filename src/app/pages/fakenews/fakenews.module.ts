import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FakenewsPageRoutingModule } from './fakenews-routing.module';

import { FakenewsPage } from './fakenews.page';
import { CardNoticiasComponent } from './card-noticias/card-noticias.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FakenewsPageRoutingModule
  ],
  declarations: [FakenewsPage, CardNoticiasComponent]
})
export class FakenewsPageModule {}
