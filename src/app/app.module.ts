import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { provideHttpClient, withFetch } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,  // ✅ Necesario para ngx-toastr
    ToastrModule.forRoot(),   // ✅ Configuración global de toastr
  ],
  providers: [
    provideHttpClient(withFetch()),  // ✅ Reemplazo moderno
    provideClientHydration(withEventReplay()) // ⚙️ Mantienes SSR con rehidratación
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
