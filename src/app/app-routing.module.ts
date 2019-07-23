import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactListComponent } from './contact-list/contact-list.component';
import { CreateContactComponent } from './create-contact/create-contact.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';

const routes: Routes = [
  { path: 'contacts', component: ContactListComponent },
  { path: 'new', component: CreateContactComponent },
  { path: ':contactId', component: ContactDetailComponent },
  { path: '', redirectTo: '/contacts', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
