import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './components/todo/list/list.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { EditComponent } from './components/todo/edit/edit.component';
const appRoutes: Routes = [
  { path: 'todolist/edit', component: EditComponent },
  // { path: 'hero/:id',      component: HeroDetailComponent },
  {
    path: 'todolist',
    component: ListComponent
  },
  {
    path: '',
    redirectTo: '/todolist',
    pathMatch: 'full'
  },
];
@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
