import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule, MatOptionModule, MatSelectModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { AuthComponent } from './auth/auth.component';
import { JoinComponent } from './join/join.component';
import { HostComponent } from './host/host.component';
import { PartyComponent } from './party/party.component';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { SongSearchComponent } from './song-search/song-search.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SpotifyComponent } from './spotify/spotify.component';
import { CurrentSongComponent } from './current-song/current-song.component';
import { YoutubePlayerComponent } from './youtube-player/youtube-player.component';
import { NgxYoutubePlayerModule } from 'ngx-youtube-player';
import { SoundcloudComponent } from './soundcloud/soundcloud.component';
import { CallbackComponent } from './callback/callback.component';
import { MobileNavbarComponent } from './mobile-navbar/mobile-navbar.component';
import { DeviceDetectorModule } from 'ngx-device-detector';
import { MatGridListModule } from '@angular/material/grid-list';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NavbarComponent,
    AuthComponent,
    JoinComponent,
    HostComponent,
    PartyComponent,
    SongSearchComponent,
    SpotifyComponent,
    CurrentSongComponent,
    YoutubePlayerComponent,
    SoundcloudComponent,
    CallbackComponent,
    MobileNavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatOptionModule,
    MatSelectModule,
    MatTableModule,
    MatIconModule,
    // ToastrModule.forRoot(),
    MatSnackBarModule,
    NgxYoutubePlayerModule,
    DeviceDetectorModule.forRoot(),
    MatGridListModule,
    FlexLayoutModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [
    { provide: Window, useValue: window }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
