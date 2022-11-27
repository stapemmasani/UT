import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WishPipe } from './pipes/wish.pipe';
import { AppRoutingModule } from './app-routing.module';
import { UserComponent } from './user/user.component';
import { HttpClientModule } from '@angular/common/http';
import { FormComponent } from './form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SpyonExampleComponent } from './spyon-example/spyon-example.component';
import { FakeAsyncComponent } from './fake-async/fake-async.component';

@NgModule({
  declarations: [
    AppComponent,
    WishPipe,
    UserComponent,
    SpyonExampleComponent,
    FakeAsyncComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
