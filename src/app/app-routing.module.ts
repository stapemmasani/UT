import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FakeAsyncComponent } from './fake-async/fake-async.component';
import { FormComponent } from './form/form.component';
import { SpyonExampleComponent } from './spyon-example/spyon-example.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { path: 'home', component: FormComponent },
  { path: 'user', component: UserComponent },
  { path: 'spyon', component: SpyonExampleComponent },
  { path: 'fakeasync', component: FakeAsyncComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
