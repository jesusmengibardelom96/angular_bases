import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from './pages/main-page.component';
import { ListDbzComponent } from './components/list/list.component';
import { AddCharactersComponent } from './components/add-characters/add-characters.component';



@NgModule({
  declarations: [
    MainPageComponent,
    ListDbzComponent,
    AddCharactersComponent
  ],
  exports: [
    MainPageComponent,
    AddCharactersComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DbzModule { }
