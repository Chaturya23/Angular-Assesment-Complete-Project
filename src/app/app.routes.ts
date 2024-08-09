import { Routes } from '@angular/router';

// export const routes: Routes = [];

// import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProductsComponent } from './products/products.component';
// import { GalleryComponent } from './gallery/gallery.component';

 export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'products', component: ProductsComponent },
  
  
//   { path: 'gallery', component: GalleryComponent }
];