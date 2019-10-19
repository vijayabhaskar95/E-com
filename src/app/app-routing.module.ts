import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ElectronicsComponent } from './electronics/electronics.component';
import { CarouselComponent } from './carousel/carousel.component';
import { BooksComponent } from './books/books.component';


const routes: Routes = [

  {
    path:'',
    component:CarouselComponent
  },
  {
    path:'electronics',
    component:ElectronicsComponent
  },
  {
    path:'books',
    component:BooksComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
