import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewThoughtComponent } from './components/thoughts/new-thought/new-thought.component';
import { ListThoughtsComponent } from './components/thoughts/list-thoughts/list-thoughts.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'listThoughts',
    pathMatch: 'prefix'
  },
  {
    path: 'newThought',
    component: NewThoughtComponent,
  },
  {
    path: 'listThoughts',
    component: ListThoughtsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
