import { Routes } from '@angular/router';
import { CreateComponent } from 'src/app/create/create.component';
import { EditComponent } from 'src/app/edit/edit.component';
import { IndexComponent } from 'src/app/index/index.component';
import {AuthComponent} from 'src/app/auth/auth.component'

export const appRoutes: Routes = [
  { path: 'create', 
    component: CreateComponent 
  },
  {
    path: 'edit/:id',
    component: EditComponent
  },
  { path: 'index',
    component: IndexComponent
  }
];