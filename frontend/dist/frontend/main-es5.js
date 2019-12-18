(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <app-navbar *ngIf=\"user\" (myEvent)=\"logout()\"></app-navbar> -->\r\n<div class=\"body\">\r\n  <router-outlet></router-outlet>\r\n<div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/auth/auth.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/auth/auth.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"example-container rounded\">\r\n\r\n  <h1>MMDJ</h1>\r\n\r\n  <div class=\"btn-group buttons\">\r\n    <button class=\"btn buttons\" [class.btn-primary]=\"authButtons[0]\" [class.btn-outline-primary]=\"!authButtons[0]\" (click)=\"onAuthButtonClick(0)\">Login</button>\r\n    <button class=\"btn buttons\" [class.btn-primary]=\"authButtons[1]\" [class.btn-outline-primary]=\"!authButtons[1]\" (click)=\"onAuthButtonClick(1)\">Register</button>\r\n  </div>\r\n\r\n  <form *ngIf=\"authButtons[0]\" class=\"form-container text-center\" [formGroup]=\"loginForm\" (ngSubmit)=\"login()\">\r\n    <mat-form-field>\r\n      <input matInput formControlName=\"username\" placeholder=\"Username\">\r\n      <mat-hint *ngIf=\"invalid\">Invalid Login</mat-hint>\r\n    </mat-form-field>\r\n\r\n    <mat-form-field>\r\n      <input matInput formControlName=\"password\" type=\"password\" placeholder=\"Password\">\r\n    </mat-form-field>\r\n    <button class=\"btn btn-primary\" type=\"submit\">Login</button>\r\n  </form>\r\n\r\n  <form *ngIf=\"authButtons[1]\" class=\"form-container text-center\" [formGroup]=\"registerForm\" (ngSubmit)=\"register()\">\r\n    <mat-form-field>\r\n      <input matInput formControlName=\"username\" placeholder=\"Username\">\r\n      <mat-hint *ngIf=\"invalid\">Choose a new username</mat-hint>\r\n    </mat-form-field>\r\n\r\n    <mat-form-field>\r\n      <input matInput formControlName=\"password\" type=\"password\" placeholder=\"Password\">\r\n    </mat-form-field>\r\n    <button class=\"btn btn-primary\" type=\"submit\">Create an Account</button>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/callback/callback.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/callback/callback.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <p>callback works!</p>\r\n<p>{{this.router.url.split('#')[1]}}</p> -->\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/current-song/current-song.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/current-song/current-song.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=DESKTOP class='current-song-outer-desktop' [style.height]=\"height+'px'\" [style.width]=\"0.8*width+'px'\" >\r\n  <div *ngIf=\"song.song_id\" class=\"current-song-desktop\" [class.soundcloud]=\"song.platform == 'soundcloud'\">\r\n  <!-- <div *ngIf=\"song.song_id\" class=\"current-song-desktop\" [style.backgroundImage]=\"'url('+ song.artwork +')'\"> -->\r\n      <mat-card *ngIf=\"song.platform == 'spotify'\" class='song-info-card'>\r\n        <mat-card-title class=\"album-title\">{{song.title}}</mat-card-title>\r\n        <mat-card-subtitle class=\"album-artist\">{{song.artist}}</mat-card-subtitle>\r\n      </mat-card>\r\n      <img *ngIf=\"song.platform == 'spotify'\" src={{song.artwork}} alt=\"album art\" class=\"album-art\" [style.height]=\"0.88 * height+'px'\" >\r\n\r\n      <app-spotify *ngIf=\"HOST && song.platform == 'spotify'\" [inp]=\"[song, host_id, spotifyPlaybackService.device_id | async]\" (myEvent)='skipSong()'></app-spotify>\r\n      <app-soundcloud *ngIf=\"HOST && song.platform == 'soundcloud'\" [inp]=\"[song.song_id, host_id]\" (endSong)=skipSong()></app-soundcloud>\r\n      <app-youtube-player *ngIf=\"HOST && song.platform == 'youtube'\" [inp]=\"[song.song_id, host_id]\" (endSong)=skipSong()></app-youtube-player>\r\n\r\n    </div>\r\n\r\n</div>\r\n\r\n<div *ngIf=!DESKTOP>\r\n\r\n  <div *ngIf=\"song && song.song_id\" class=\"current-song\" [style.backgroundImage]=\"'url('+ song.artwork +')'\" [style.z-index]=\"0 ? -1 : 1\">\r\n\r\n    <div class=\"song\" [class.song-normal]=\"DESKTOP || song_padding != 0\"  [style.padding-top]=\"DESKTOP || song_padding != 0 ? 2.5 + song_padding+'%' : 0\" [style.padding-bottom]=\"width > 600 || song_padding != 0 ? 27.5 + song_padding+'%' : 0\">\r\n\r\n      <div *ngIf=\"song_padding == 0\" class=\"banner\">\r\n        <img *ngIf=\"song.platform == 'spotify'\" class=\"icon\" src=\"assets/media/spotify.png\">\r\n        <img *ngIf=\"song.platform == 'soundcloud'\" class=\"icon\" src=\"assets/media/soundcloud.png\">\r\n        <img *ngIf=\"song.platform == 'youtube'\" class=\"icon\" src=\"assets/media/youtube.png\">\r\n        <div class=\"text-banner\">\r\n          {{song.title}} - {{song.artist}}\r\n        </div>\r\n        <mat-icon (click)='skipSong()'>skip_next</mat-icon>\r\n      </div>\r\n\r\n      <div *ngIf=\"DESKTOP || song_padding != 0\" class=\"normal\">\r\n          <div class=\"text-normal\">\r\n            <b>{{song.title}}<br>{{song.artist}}</b>\r\n          </div>\r\n        </div>\r\n\r\n    </div>\r\n  </div>\r\n  <div *ngIf=\"!song || !song.song_id\" class=\"current-song current-song-empty\">\r\n\r\n    <div class=\"song\" [class.song-normal]=\"DESKTOP || song_padding != 0\"  [style.padding-top]=\"DESKTOP || song_padding != 0 ? 2.5 + song_padding+'%' : 0\" [style.padding-bottom]=\"width > 600 || song_padding != 0 ? 27.5 + song_padding+'%' : 0\">\r\n\r\n      <div *ngIf=\"song_padding == 0\" class=\"banner\">\r\n        <div class=\"text-banner-empty\">\r\n          Add songs to start!\r\n        </div>\r\n      </div>\r\n\r\n      <div *ngIf=\"DESKTOP || song_padding != 0\" class=\"normal\">\r\n          <div class=\"text-normal\">\r\n            Add songs to start!\r\n          </div>\r\n        </div>\r\n\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/homepage/homepage.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/homepage/homepage.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-join></app-join>\n<app-auth></app-auth>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/host/host.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/host/host.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='profile-div'>\r\n    <button class=\"btn btn-primary\" mat-button (click)=showProfileOptions()>\r\n      <mat-icon>person</mat-icon>\r\n        {{currentUser.username}}\r\n    </button>\r\n    <div>\r\n      <button class=\"btn btn-primary\" mat-button (click)=\"logout()\" *ngIf='showLogout'>log out</button>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"example-container\">\r\n  <button [class.d-none]=\"convertBoolean(has_token$ | async)\" class=\"btn btn-success spotify-button\" (click)=\"authenticate()\">Connect to Spotify</button>\r\n  <h1>Create a Party</h1>\r\n  <form class=\"form-container text-center\" [formGroup]=\"partyForm\" (ngSubmit)=\"createParty()\">\r\n    <mat-form-field>\r\n      <input matInput formControlName=\"name\" placeholder=\"Party Name\">\r\n    </mat-form-field>\r\n\r\n    <mat-form-field>\r\n      <input matInput formControlName=\"description\" placeholder=\"Description\">\r\n    </mat-form-field>\r\n\r\n    <button class=\"btn btn-primary\" type=\"submit\">Start Party!</button>\r\n  </form>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/join/join.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/join/join.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='profile-div'>\r\n  <button class=\"btn btn-primary\" mat-button (click)=showProfileOptions()>\r\n    <mat-icon>person</mat-icon>\r\n      {{user.username}}\r\n  </button>\r\n  <div>\r\n    <button class=\"btn btn-primary\" mat-button (click)=\"logout()\" *ngIf='showLogout'>log out</button>\r\n  </div>\r\n</div>\r\n<div class=\"example-container rounded\">\r\n  <form class=\"form-container text-center\" [formGroup]=\"joinForm\" (ngSubmit)=\"joinParty()\">\r\n    <mat-form-field>\r\n      <input matInput formControlName=\"eventID\" placeholder=\"Enter Event ID\">\r\n      <mat-hint *ngIf=\"invalid\">Cannot join party.</mat-hint>\r\n    </mat-form-field>\r\n    <button class=\"btn btn-primary\" type=\"submit\">Join Party!</button>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/mobile-navbar/mobile-navbar.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/mobile-navbar/mobile-navbar.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf='!DESKTOP' class=\"mobile-navbar\">\r\n  <div class=\"section\" [class.active]=\"display[1]\" (click)=\"toggleValue(1)\"><mat-icon aria-hidden=\"false\">queue</mat-icon></div>\r\n  <div class=\"section\" [class.active]=\"display[0]\" (click)=\"toggleValue(0)\"><mat-icon aria-hidden=\"false\">queue_music</mat-icon></div>\r\n  <div class=\"section\" [class.active]=\"display[2]\" (click)=\"toggleValue(2)\"><mat-icon aria-hidden=\"false\">account_circle</mat-icon></div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/navbar/navbar.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/navbar/navbar.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\r\n  <a class=\"navbar-brand\" style=\"color: white; cursor: pointer\" routerLink=\"/\"><b>MMDJ</b></a>\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"dropdown\" data-target=\"#navbarTogglerDemo03\" aria-controls=\"navbarTogglerDemo03\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n     <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarTogglerDemo03\">\r\n    <ul class=\"navbar-nav mr-auto mt-2 mt-xs-0\">\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"host\">Start a Party</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"join\">Join a Party</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"dashboard\">Dashboard</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" (click)=\"findParty()\">Party</a>\r\n      </li>\r\n    </ul>\r\n    <ul class=\"navbar-nav navbar-right\">\r\n      <li *ngIf=\"!currentUser\" class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"login\">Login</a>\r\n      </li>\r\n      <li *ngIf=\"currentUser\" class=\"nav-item\">\r\n        <a class=\"nav-link\" (click)=\"logout()\">{{currentUser.username}}</a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n\r\n</nav>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/party/party.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/party/party.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf='DESKTOP' class='desktop'>\r\n  <mat-grid-list cols=\"5\" [rowHeight]=\"height/3 + 'px'\">\r\n    <mat-grid-tile colspan='1' rowspan='2'>\r\n      <mat-card  class='left-align-card'>\r\n        <mat-card-title ><h2>{{event.event_name}}</h2></mat-card-title>\r\n        <mat-card-content>\r\n          <h3>event code: <b>{{event.event_id}}</b></h3>\r\n        </mat-card-content>\r\n        <mat-card-subtitle>{{event.description}}</mat-card-subtitle>\r\n        <mat-icon class='arrow-icon-button rounded-circle' (click)='hideText()'>{{matIconArrowLabel}}</mat-icon>\r\n        <mat-card-content>\r\n          <button class=\"btn btn-primary\" mat-button *ngIf='showInfoText' (click)=showProfileOptions()>\r\n            <mat-icon>person</mat-icon>\r\n            {{user.username}}\r\n          </button>\r\n          <button class=\"btn btn-primary tv-button\" mat-button (click)=\"goFullscreen()\" *ngIf='showInfoText'>TV Mode</button>\r\n          <div>\r\n            <button class=\"btn btn-primary\" mat-button (click)=\"logout()\" *ngIf='showProfileInfo && showInfoText'>log out</button>\r\n          </div>\r\n          <button class=\"btn-outline-danger\" mat-button (click)=\"onEndPartyClick()\" *ngIf='showProfileInfo && showInfoText'>end party</button>\r\n\r\n          <div *ngIf='showProfileInfo && showInfoText && showOptions'>\r\n            Are you sure?\r\n            <button class=\"btn-outline-danger\" mat-button (click)=\"onEndPartyYESClick()\" >YES</button>\r\n            <button class=\"btn btn-primary\" mat-button (click)=\"onEndPartyNOClick()\" >NO</button>\r\n          </div>\r\n\r\n        </mat-card-content>\r\n\r\n        <mat-card-content *ngIf='showInfoText'>To add songs to the queue and vote on your favorites,\r\n            go to db.cse.nd.edu/cse30246/mmdj<br>\r\n        </mat-card-content>\r\n        <button class=\"btn btn-primary skip-button\" mat-button (click)=currentSong.skipSong()>\r\n          Skip\r\n          <mat-icon>skip_next</mat-icon>\r\n        </button>\r\n        <mat-card-title class='bottom-text'>Coming up next...</mat-card-title>\r\n\r\n      </mat-card>\r\n\r\n    </mat-grid-tile>\r\n    <mat-grid-tile colspan ='4' rowspan='2' ><app-current-song #currentSong [event]=event></app-current-song></mat-grid-tile>\r\n\r\n    <mat-grid-tile colspan='1' *ngIf='!convertBoolean(queuedSongs$ | async)'>\r\n        <mat-card>\r\n             <div class='card-header-info'>\r\n              <mat-card-title class='my-mat-card-title'></mat-card-title>\r\n              <mat-card-subtitle class='my-mat-card-subtitle'></mat-card-subtitle>\r\n            </div>\r\n\r\n          </mat-card>\r\n      </mat-grid-tile>\r\n\r\n    <div *ngFor='let song of queuedSongs$ | async; let i=index; trackBy: trackByFunction'>\r\n      <div *ngIf='i<5'>\r\n          <mat-grid-tile colspan='1' [style.background]=\"'rgba(0,0,0,0.5)'\">\r\n            <!-- <mat-card [style.background]=\"'url(/assets/media/'+song.platform+'.png)'\"  [style.background-size]=\"'180%'\" [style.backgroundPosition]=\"'center'\"> -->\r\n            <mat-card>\r\n               <div class='card-header-info'>\r\n                <mat-card-title class='my-mat-card-title'>{{song.title}}</mat-card-title>\r\n                <mat-card-subtitle class='my-mat-card-subtitle'>{{song.artist}} </mat-card-subtitle>\r\n              </div>\r\n              <mat-card-content class='votes-card'>\r\n                <div class=\"vote-contain\">\r\n                  <img [src]='song.artwork' style=\"height: 100%\">\r\n                  <div class=\"vote-icon-contain\">\r\n                    <mat-icon class='votes-icon'>favorite</mat-icon>\r\n                    <div class='votes-text'><b>{{song.popularity}}</b></div>\r\n                  </div>\r\n                </div>\r\n              </mat-card-content>\r\n            </mat-card>\r\n          </mat-grid-tile>\r\n\r\n      </div>\r\n    </div>\r\n  </mat-grid-list>\r\n\r\n</div>\r\n\r\n\r\n<div *ngIf='!DESKTOP'>\r\n<app-current-song [event]=event></app-current-song>\r\n\r\n<div class='party-container rounded'>\r\n    <div *ngIf=\"display[1]\">\r\n      <app-song-search [inp]=event (hideRec)=\"showRecommendationsTable = false\" (click)=onSongSearch()></app-song-search>\r\n      <button class=\"btn btn-primary\" mat-button (click)=getRecommendations()>Get Recommendations</button>\r\n      <table *ngIf='showRecommendationsTable' mat-table [dataSource]='recommendations' class=\"mat-elevation-z8\">\r\n         <ng-container matColumnDef=\"Songs\">\r\n             <th mat-header-cell *matHeaderCellDef>Songs</th>\r\n             <td class=\"spotify-td\" style=\"padding-left: 0\" mat-cell *matCellDef=\"let element;\" (click)='addSong(element)'>\r\n\r\n                   <img *ngIf=\"element.artwork\" class=\"spotify-artowrk\" src={{element.artwork}}>\r\n                <img *ngIf=\"!element.artwork\" class=\"spotify-artowrk\" src=\"/assets/media/spotify.png\">\r\n                <div class=\"spotfy-row text-left\" style=\"padding-top: 1%; margin-left: 2.5%;\">\r\n                  <div class=\"spotify-title\">\r\n                    {{element.title}}\r\n                  </div>\r\n                  <div class=\"spotify-artist\">\r\n                    <small>{{element.artist}}</small>\r\n                  </div>\r\n                </div>\r\n              </td>\r\n            </ng-container>\r\n            <tr mat-header-row *matHeaderRowDef=\"displayedColumnsRecommendations\"></tr>\r\n          <tr mat-row *matRowDef=\"let row; columns: displayedColumnsRecommendations;\"></tr>\r\n\r\n      </table>\r\n    </div>\r\n    <div *ngIf=\"display[0]\" class='display-div'>\r\n      <div class=\"queue-table\">\r\n        <div class=\"queue-table-row queue-header\">\r\n          <strong>Up next...</strong>\r\n        </div>\r\n        <div *ngFor='let element of queuedSongs$ | async; let i=index; trackBy: trackByFunction' class=\"queue-table-row\">\r\n          <div class=\"artwork\">\r\n            <img *ngIf=\"element.artwork\" src={{element.artwork}}>\r\n            <img *ngIf=\"!element.artwork\" src=\"/assets/media/spotify.png\">\r\n          </div>\r\n          <div class=\"song-info text-left\">\r\n            <div class=\"spotify-title\">\r\n              <b>{{element.title}}</b>\r\n            </div>\r\n            <div *ngIf=\"element.platform != 'youtube'\" class=\"spotify-artist\">\r\n              <small>{{element.artist}}</small>\r\n            </div>\r\n            <div *ngIf=\"element.platform == 'youtube'\" class=\"spotify-artist\">\r\n              <small>Youtube</small>\r\n            </div>\r\n          </div>\r\n          <div class=\"votes\">\r\n            <div class=\"vote-pop\">\r\n              <mat-icon>favorite</mat-icon>\r\n              <b>{{element.popularity}}</b>\r\n            </div>\r\n            <div class=\"vote-buttons\">\r\n              <mat-icon aria-hidden=\"false\" class=\"arrow-button\" [class.arrow-button-up-voted]=\"element.vote == '1'\" (click)=\"upvote(element.order_num, element.song_id, element.platform, element.vote)\">add_circle</mat-icon>\r\n              <mat-icon aria-hidden=\"false\" class=\"arrow-button\" [class.arrow-button-down-voted]=\"element.vote == '-1'\" (click)=\"downvote(element.order_num, element.song_id, element.platform, element.vote)\">remove_circle</mat-icon>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        </div>\r\n      <!-- <table [class.d-none]=\"!(queuedSongs$ | async)\" mat-table [dataSource]=\"queuedSongs$ | async\" [trackBy]=\"trackByFunction\" class=\"mat-elevation-z8 queue-table\">\r\n        <ng-container matColumnDef=\"Songs\">\r\n          <th mat-header-cell *matHeaderCellDef>Songs</th>\r\n          <td class=\"spotify-td\" style=\"padding-left: 0\" mat-cell *matCellDef=\"let element;\">\r\n            <img *ngIf=\"element.artwork\" class=\"spotify-artowrk\" src={{element.artwork}}>\r\n            <img *ngIf=\"!element.artwork\" class=\"spotify-artowrk\" src=\"/assets/media/spotify.png\">\r\n            <div class=\"spotfy-row text-left\" style=\"padding-top: 1%; margin-left: 2.5%;\">\r\n              <div class=\"spotify-title\">\r\n                {{element.title}}\r\n              </div>\r\n              <div class=\"spotify-artist\">\r\n                <small>{{element.artist}}</small>\r\n              </div>\r\n            </div>\r\n          </td>\r\n        </ng-container>\r\n\r\n          <ng-container matColumnDef=\"Score\">\r\n            <th mat-header-cell *matHeaderCellDef></th>\r\n            <td mat-cell *matCellDef=\"let element\"> <b>{{element.popularity}}</b> </td>\r\n          </ng-container>\r\n\r\n          <ng-container matColumnDef=\"Vote\" >\r\n              <th mat-header-cell *matHeaderCellDef> Vote </th>\r\n              <td *matCellDef=\"let element\" class='buttons-right' style=\"margin: 0; padding-right: 4px;\">\r\n\r\n                  <mat-icon aria-hidden=\"false\" class=\"arrow-button\" [class.arrow-button-up-voted]=\"element.vote == '1'\" (click)=\"upvote(element.order_num, element.song_id, element.platform, element.vote)\">add_circle</mat-icon>\r\n\r\n                  <mat-icon aria-hidden=\"false\" class=\"arrow-button\" [class.arrow-button-down-voted]=\"element.vote == '-1'\" (click)=\"downvote(element.order_num, element.song_id, element.platform, element.vote)\">remove_circle</mat-icon>\r\n\r\n              </td>\r\n          </ng-container>\r\n\r\n          <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n          <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n        </table> -->\r\n\r\n      </div>\r\n      <div *ngIf=\"display[2]\" class=\"account-party\">\r\n        <div class=\"account-box\">\r\n          <div class=\"row account-user\">\r\n            <img *ngIf=\"spotifyUserInfo && spotifyUserInfo.images && spotifyUserInfo.images[0].url\" src={{spotifyUserInfo.images[0].url}} class=\"profile-icon rounded-circle\">\r\n            <img *ngIf=\"!spotifyUserInfo || !spotifyUserInfo.images || !spotifyUserInfo.images[0].url\" src=\"/assets/media/profile.webp\" class=\"profile-icon rounded-circle\">\r\n            <div class=\"username\"><b>{{user.username}}</b></div>\r\n          </div>\r\n          <button class=\"btn btn-primary account-buttons\" (click)=\"logout()\">Log Out</button>\r\n        </div>\r\n        <div class=\"account-box\">\r\n          <h4>{{event.event_name}}</h4>\r\n          <div class=\"account-party-info\">\r\n          Party Code: <b>{{event.event_id}}</b><br>\r\n          {{event.description | lowercase}}\r\n          </div>\r\n          <button class=\"btn btn-primary account-buttons\" (click)=\"leaveParty()\">Leave Party</button>\r\n          <button class=\"btn btn-outline-danger account-buttons\" (click)=\"onEndPartyClick()\" *ngIf=\"HOST\">end party</button>\r\n          <div *ngIf='showOptions'>\r\n            Are you sure?\r\n            <button class=\"btn btn-outline-danger\" mat-button (click)=\"onEndPartyYESClick()\" ><b>YES</b></button>\r\n            <button class=\"btn btn-outline-primary\" mat-button (click)=\"onEndPartyNOClick()\" ><b>NO</b></button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n  </div>\r\n</div>\r\n<app-mobile-navbar [inp]=\"display\" (toggle)=\"toggleDisplay($event)\"></app-mobile-navbar>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/song-search/song-search.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/song-search/song-search.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"search-component\">\r\n  <!-- <h4><label for=\"search-box\">Find Songs</label></h4> -->\r\n  <div [class.add-song]=\"searching_term != ''\">\r\n    <input class=\"input-field\" [(ngModel)]=\"searching_term\" [class.d-none]=\"!searchOptions[0]\" [class.input-field-active]=\"searchBox.value\" #searchBox (input)=\"search_spotify(searching_term)\" placeholder=\"Add a song to the queue\">\r\n    <input class=\"input-field\" [(ngModel)]=\"searching_term\" [class.d-none]=\"!searchOptions[1]\" [class.input-field-active]=\"searchBoxSoundcloud.value\" #searchBoxSoundcloud (input)=\"searchSoundcloud(searching_term)\" placeholder=\"Add a song to the queue\">\r\n    <input class=\"input-field\" [(ngModel)]=\"searching_term\" [class.d-none]=\"!searchOptions[2]\" [class.input-field-active]=\"searchBoxYoutube.value\" #searchBoxYoutube (input)=\"searchYoutube(searching_term)\" placeholder=\"Add a song to the queue\">\r\n\r\n    <div class=\"btn-group buttons\">\r\n      <button class=\"btn platform-button\" [class.btn-primary]=\"searchOptions[0]\" [class.btn-outline-primary]=\"!searchOptions[0]\" (click)=\"onButtonClick(0)\">Spotify</button>\r\n      <button class=\"btn platform-button\" [class.btn-primary]=\"searchOptions[1]\" [class.btn-outline-primary]=\"!searchOptions[1]\" (click)=\"onButtonClick(1)\">Soundcloud</button>\r\n      <button class=\"btn platform-button\" [class.btn-primary]=\"searchOptions[2]\" [class.btn-outline-primary]=\"!searchOptions[2]\" (click)=\"onButtonClick(2)\">Youtube</button>\r\n    </div>\r\n  </div>\r\n  <div *ngIf=\"searchOptions[0]\" [class.search-scroll]=\"searching_term != ''\">\r\n\r\n    <table *ngIf=\"searchBox.value\" mat-table [dataSource]=\"convertJSON(spotifySongs$ | async)\" [trackBy]=\"trackByFunction\" class=\"mat-elevation-z8\">\r\n      <ng-container matColumnDef=\"Results\">\r\n        <!-- <th [class.d-none]=\"1\" mat-header-cell *matHeaderCellDef></th> -->\r\n        <!-- (click)=\"searchBox.value = ''\" -->\r\n        <td class=\"spotify-td\" style=\"padding-left: 0\" mat-cell *matCellDef=\"let element\" (click)=\"addSong(element)\" >\r\n          <img *ngIf=\"element.artwork\" class=\"spotify-artowrk\" src={{element.artwork}}>\r\n          <img *ngIf=\"!element.artwork\" class=\"spotify-artowrk\" src=\"/assets/media/spotify.png\">\r\n          <div class=\"spotfy-row text-left\" style=\"padding-top: 1%; margin-left: 2.5%;\">\r\n            <div class=\"spotify-title\">\r\n              <b>{{element.title}}</b>\r\n            </div>\r\n            <div class=\"spotify-artist\">\r\n              <small>{{element.artist}}</small>\r\n            </div>\r\n          </div>\r\n        </td>\r\n      </ng-container>\r\n      <!-- <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr> -->\r\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n    </table>\r\n  </div>\r\n\r\n  <div *ngIf=\"searchOptions[1]\">\r\n\r\n    <table *ngIf=\"searchBoxSoundcloud.value\" class=\"soundcloud\" mat-table [dataSource]=\"soundcloud$ | async\" class=\"mat-elevation-z8\">\r\n      <ng-container matColumnDef=\"Results\">\r\n        <!-- <th [class.d-none]=\"1\" mat-header-cell *matHeaderCellDef></th> -->\r\n        <!-- (click)=\"searchBoxSoundcloud.value = ''\" -->\r\n        <td class=\"spotify-td\" style=\"padding-left: 0\" mat-cell *matCellDef=\"let element\" (click)=\"addSong(convertSoundcloud(element))\" >\r\n          <img *ngIf=\"element.artwork_url\" class=\"spotify-artowrk\" src={{element.artwork_url}}>\r\n          <img *ngIf=\"!element.artwork_url && element.user.avatar_url\" class=\"spotify-artowrk\" src={{element.user.avatar_url}}>\r\n          <img *ngIf=\"!element.artwork_url && !element.user.avatar_url\" class=\"spotify-artowrk\" src=\"/assets/media/soundcloud.png\">\r\n          <div class=\"spotfy-row text-left\" style=\"padding-top: 1%; margin-left: 2.5%;\">\r\n            <div class=\"spotify-title\">\r\n              <b>{{element.title}}</b>\r\n            </div>\r\n            <div class=\"spotify-artist\">\r\n              <small>{{element.user.username}}</small>\r\n            </div>\r\n          </div>\r\n        </td>\r\n      </ng-container>\r\n      <!-- <tr mat-header-row *matHeaderRowDef=\"displayedColumnsSoundcloud\"></tr> -->\r\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumnsSoundcloud;\"></tr>\r\n    </table>\r\n  </div>\r\n\r\n  <div *ngIf=\"searchOptions[2]\">\r\n\r\n    <table *ngIf=\"searchBoxYoutube.value\" mat-table [dataSource]=\"youtubes$ | async\" class=\"mat-elevation-z8\">\r\n      <ng-container matColumnDef=\"Results\">\r\n        <!-- <th [class.d-none]=\"1\" mat-header-cell *matHeaderCellDef></th> -->\r\n        <!-- (click)=\"searchBoxYoutube.value = ''\" -->\r\n        <td class=\"youtube-td\" style=\"padding-left: 0\" mat-cell *matCellDef=\"let element\" (click)=\"addSong(convertYoutube(element))\" > <img *ngIf=\"element.artwork\" src={{element.artwork}}> <img *ngIf=\"!element.artwork\" src=\"assets/media/youtube.png\"> <div class=\"youtube-title\">{{element.title}}</div> </td>\r\n      </ng-container>\r\n\r\n      <!-- <tr mat-header-row *matHeaderRowDef=\"displayedColumnsYoutube\"></tr> -->\r\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumnsYoutube;\"></tr>\r\n    </table>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/soundcloud/soundcloud.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/soundcloud/soundcloud.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<iframe #id allowtransparency=\"true\" width=\"700\" height=\"166\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay\"\r\n  [src]=\"FRAME\">\r\n</iframe>\r\n<!-- <button class=\"btn btn-primary\" (click)=\"playSong()\">RESIZE</button> -->\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/spotify/spotify.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/spotify/spotify.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/youtube-player/youtube-player.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/youtube-player/youtube-player.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <youtube-player *ngFor=\"let id of videos\"\r\n   [videoId]=\"id\"\r\n   [width]=\"width\"\r\n   [height]=\"height\"\r\n   (ready)=\"savePlayer($event)\"\r\n   (change)=\"onStateChange($event)\"\r\n >\r\n </youtube-player>\r\n"

/***/ }),

/***/ "./src/app/Classes/event.ts":
/*!**********************************!*\
  !*** ./src/app/Classes/event.ts ***!
  \**********************************/
/*! exports provided: Event */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Event", function() { return Event; });
var Event = /** @class */ (function () {
    function Event() {
        this.event_id = 0;
        this.user_id = null;
        this.event_name = null;
        this.description = null;
        this.current_song = 0;
        this.is_active = true;
        this.population = 0;
    }
    return Event;
}());



/***/ }),

/***/ "./src/app/Classes/queuedSong.ts":
/*!***************************************!*\
  !*** ./src/app/Classes/queuedSong.ts ***!
  \***************************************/
/*! exports provided: QueuedSong */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueuedSong", function() { return QueuedSong; });
var QueuedSong = /** @class */ (function () {
    function QueuedSong() {
        this.event_id = 0;
        this.order_num = 0;
        this.queuedSongs_id = 0;
        this.song_id = null;
        this.platform = null;
        this.popularity = 0;
        this.playability = true;
    }
    return QueuedSong;
}());



/***/ }),

/***/ "./src/app/Classes/song.ts":
/*!*********************************!*\
  !*** ./src/app/Classes/song.ts ***!
  \*********************************/
/*! exports provided: Song */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Song", function() { return Song; });
var Song = /** @class */ (function () {
    function Song() {
        this.song_id = null;
        this.platform = null;
        this.artist = null;
        this.title = null;
        this.artwork = null;
        this.popularity = -1;
        this.duration = -1;
        this.order_num = -1;
        this.vote = 0;
    }
    return Song;
}());



/***/ }),

/***/ "./src/app/Classes/user.ts":
/*!*********************************!*\
  !*** ./src/app/Classes/user.ts ***!
  \*********************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User() {
        this.user_id = 0;
        this.username = null;
        this.password = null;
    }
    return User;
}());



/***/ }),

/***/ "./src/app/Classes/vote.ts":
/*!*********************************!*\
  !*** ./src/app/Classes/vote.ts ***!
  \*********************************/
/*! exports provided: Vote */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Vote", function() { return Vote; });
var Vote = /** @class */ (function () {
    function Vote() {
        this.user_id = 0;
        this.event_id = 0;
        this.vote = 0;
        this.song_id = 0;
        this.order_num = 0;
        this.platform = null;
    }
    return Vote;
}());



/***/ }),

/***/ "./src/app/api.service.ts":
/*!********************************!*\
  !*** ./src/app/api.service.ts ***!
  \********************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var ApiService = /** @class */ (function () {
    // PHP_API_SERVER_DOM = "http://db.cse.nd.edu/cse30246/mmdj/backend/api";
    // PHP_API_SERVER_DOM = "http://db.cse.nd.edu/cse30246/tutorial/dom";
    // PHP_API_SERVER = "http://db.cse.nd.edu/cse30246/tutorial/dom";
    function ApiService(httpClient) {
        this.httpClient = httpClient;
        this.PHP_API_SERVER = "http://db.cse.nd.edu/cse30246/mmdj/backend/api";
    }
    // Get
    // Spotify API
    ApiService.prototype.get_spotify_login = function () {
        return this.httpClient.get(this.PHP_API_SERVER + "/auth.php").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    };
    // events Table
    ApiService.prototype.get_event = function (id) {
        return this.httpClient.get(this.PHP_API_SERVER + "/get_event.php/?id=" + id + "\"").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    };
    ApiService.prototype.get_events_by_user = function (user_id) {
        return this.httpClient.get(this.PHP_API_SERVER + "/get_events_by_user.php/?id=" + user_id + "\"").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    };
    ApiService.prototype.get_event_current_song = function (event_id) {
        return this.httpClient.get(this.PHP_API_SERVER + "/get_event_current_song.php/?id=" + event_id + "\"").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    };
    // queuedSongs Table
    // get all songs in queue for an event, in order
    ApiService.prototype.get_queuedSongs = function (event_id) {
        return this.httpClient.get(this.PHP_API_SERVER + "/get_queuedSongs.php/?id=" + event_id + "\"").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    };
    // get all songs in queue for an event, in order with user votes
    ApiService.prototype.get_queuedSongsVotes = function (event_id, user_id) {
        return this.httpClient.get(this.PHP_API_SERVER + "/get_queuedSongsVotes.php/?event_id=" + event_id + "&user_id=" + user_id + "\"").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    };
    // songs Table
    // for a search by name
    ApiService.prototype.get_songs = function (query) {
        return this.httpClient.get(this.PHP_API_SERVER + "/get_songs.php/?query=" + query).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    };
    ApiService.prototype.get_song = function (song_id, platform) {
        return this.httpClient.get(this.PHP_API_SERVER + "/get_song.php/?song_id=" + song_id + "&platform=" + platform).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    };
    // Search Bar
    ApiService.prototype.gethelper_Searchbar_Artist = function (search) {
        throw new Error("Method not implemented.");
    };
    ApiService.prototype.gethelper_Searchbar_Songs = function (search) {
        return this.httpClient.get(this.PHP_API_SERVER + "/gethelper_Searchbar_Songs.php/?search=" + search).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    };
    ApiService.prototype.get_Searchbar = function (search) {
        this.gethelper_Searchbar_Songs(search);
        //TODO
        //this.gethelper_Searchbar_Artists(search);
        //this.gethelper_Searchbar_Albums(search);
    };
    // Play Song
    ApiService.prototype.get_PlayableSong = function () {
        throw new Error("Method not implemented.");
    };
    // Play Song
    ApiService.prototype.get_user_votes = function (user_id, event_id) {
        return this.httpClient.get(this.PHP_API_SERVER + "/get_votes_single_user.php/?user_id=" + user_id + "&event_id=" + event_id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    };
    ApiService.prototype.get_recommendations = function (event_id) {
        return this.httpClient.get(this.PHP_API_SERVER + "/get_recommendations_new.php/?id=" + event_id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    };
    //Spotify Token Handling
    ApiService.prototype.get_token = function (user_id) {
        return this.httpClient.get(this.PHP_API_SERVER + "/get_token.php/?id=" + user_id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    };
    ApiService.prototype.refresh_token = function (user_id) {
        return this.httpClient.get(this.PHP_API_SERVER + "/refresh_user.php/?id=" + user_id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    };
    // users Table
    ApiService.prototype.get_all_Users = function () {
        return this.httpClient.get(this.PHP_API_SERVER + "/get_all_users.php");
    };
    ApiService.prototype.get_user = function (username, password) {
        return this.httpClient.get(this.PHP_API_SERVER + "/get_single_user.php/?username=" + username + "&password=" + password + "&table=\"users\"").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    };
    // Post
    // events Table
    ApiService.prototype.post_Event = function (event) {
        return this.httpClient.post(this.PHP_API_SERVER + "/post_event.php/?table=events", event);
    };
    // queuedSongs Table
    ApiService.prototype.post_QueuedSong = function (queuedSong) {
        return this.httpClient.post(this.PHP_API_SERVER + "/post_queuedSong.php/?table=queuedSongs", queuedSong);
    };
    // songs Table
    ApiService.prototype.post_Song = function (song) {
        return this.httpClient.post(this.PHP_API_SERVER + "/post_song.php/", song).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    };
    ApiService.prototype.post_vote = function (vote) {
        return this.httpClient.post(this.PHP_API_SERVER + "/post_working.php/?table=vote", vote).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    };
    // tokens Table
    ApiService.prototype.post_Token = function (token) {
        return this.httpClient.post(this.PHP_API_SERVER + "/post_single_item.php", token).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    };
    // users Table
    ApiService.prototype.post_User = function (user) {
        return this.httpClient.post(this.PHP_API_SERVER + "/post_user.php/?table=" + "users", user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    };
    //Put
    // events Table
    ApiService.prototype.put_Event = function (event) {
        return this.httpClient.put(this.PHP_API_SERVER + "/put_Event.php", event).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    };
    ApiService.prototype.put_current_song = function (event_id, order_num) {
        return this.httpClient.put(this.PHP_API_SERVER + "/put_current_song.php", { "event_id": event_id, "order_num": order_num }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    };
    // queuedSongs Table
    ApiService.prototype.put_QueuedSong = function (queuedSong) {
        return this.httpClient.put(this.PHP_API_SERVER + "/put_queuedSong.php", queuedSong).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    };
    // songs Table
    ApiService.prototype.put_Song = function (song) {
        return this.httpClient.put(this.PHP_API_SERVER + "/put_song.php", song).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    };
    // tokens Table
    // users Table
    ApiService.prototype.put_User = function (user) {
        return this.httpClient.put(this.PHP_API_SERVER + "/put_user.php", user);
    };
    ApiService.prototype.put_vote = function (vote) {
        return this.httpClient.put(this.PHP_API_SERVER + "/put_vote.php", vote).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    };
    // Delete
    // events Table
    ApiService.prototype.delete_Event = function (event_id) {
        return this.httpClient.delete(this.PHP_API_SERVER + "/delete_event.php/?id=" + event_id + "&?table=\"event\"").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    };
    // queuedSongs Table
    ApiService.prototype.delete_QueuedSong = function (song_id) {
        return this.httpClient.delete(this.PHP_API_SERVER + "/delete_single_item.php/?id=" + song_id + "&?table=\"queuedSong\"").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    };
    // songs Table
    ApiService.prototype.delete_Song = function (song_id) {
        return this.httpClient.delete(this.PHP_API_SERVER + "/delete_single_item.php/?id=" + song_id + "&?table=\"song\"").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    };
    // tokens Table
    // users Table
    ApiService.prototype.delete_User = function (user_id) {
        return this.httpClient.delete(this.PHP_API_SERVER + "/deleteUser.php/?id=" + user_id + "&?table=\"users\"").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    };
    ApiService.prototype.errorHandler = function (error) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
    };
    ApiService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./homepage/homepage.component */ "./src/app/homepage/homepage.component.ts");
/* harmony import */ var _auth_auth_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth/auth.component */ "./src/app/auth/auth.component.ts");
/* harmony import */ var _join_join_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./join/join.component */ "./src/app/join/join.component.ts");
/* harmony import */ var _host_host_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./host/host.component */ "./src/app/host/host.component.ts");
/* harmony import */ var _party_party_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./party/party.component */ "./src/app/party/party.component.ts");
/* harmony import */ var _spotify_spotify_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./spotify/spotify.component */ "./src/app/spotify/spotify.component.ts");
/* harmony import */ var _soundcloud_soundcloud_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./soundcloud/soundcloud.component */ "./src/app/soundcloud/soundcloud.component.ts");
/* harmony import */ var _callback_callback_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./callback/callback.component */ "./src/app/callback/callback.component.ts");











var routes = [
    { path: '', component: _auth_auth_component__WEBPACK_IMPORTED_MODULE_4__["AuthComponent"] },
    { path: 'login', component: _auth_auth_component__WEBPACK_IMPORTED_MODULE_4__["AuthComponent"] },
    { path: 'join', component: _join_join_component__WEBPACK_IMPORTED_MODULE_5__["JoinComponent"] },
    { path: 'host', component: _host_host_component__WEBPACK_IMPORTED_MODULE_6__["HostComponent"] },
    { path: 'party/:id', component: _party_party_component__WEBPACK_IMPORTED_MODULE_7__["PartyComponent"] },
    { path: '*', component: _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_3__["HomepageComponent"] },
    { path: 'spotify', component: _spotify_spotify_component__WEBPACK_IMPORTED_MODULE_8__["SpotifyComponent"] },
    { path: 'soundcloud', component: _soundcloud_soundcloud_component__WEBPACK_IMPORTED_MODULE_9__["SoundcloudComponent"] },
    { path: 'callback', component: _callback_callback_component__WEBPACK_IMPORTED_MODULE_10__["CallbackComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".class1 {\r\n   text-align: center;\r\n   height: 100%;\r\n   padding-top: 25%;\r\n   padding-bottom: 25%;\r\n   background-color: teal;\r\n   font-size: 5vw;\r\n   color: lightgray;\r\n   -webkit-text-stroke-width: 0.2vw;\r\n   -webkit-text-stroke-color: gray;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7R0FDRyxrQkFBa0I7R0FDbEIsWUFBWTtHQUNaLGdCQUFnQjtHQUNoQixtQkFBbUI7R0FDbkIsc0JBQXNCO0dBQ3RCLGNBQWM7R0FDZCxnQkFBZ0I7R0FDaEIsZ0NBQWdDO0dBQ2hDLCtCQUErQjtBQUNsQyIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNsYXNzMSB7XHJcbiAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgaGVpZ2h0OiAxMDAlO1xyXG4gICBwYWRkaW5nLXRvcDogMjUlO1xyXG4gICBwYWRkaW5nLWJvdHRvbTogMjUlO1xyXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiB0ZWFsO1xyXG4gICBmb250LXNpemU6IDV2dztcclxuICAgY29sb3I6IGxpZ2h0Z3JheTtcclxuICAgLXdlYmtpdC10ZXh0LXN0cm9rZS13aWR0aDogMC4ydnc7XHJcbiAgIC13ZWJraXQtdGV4dC1zdHJva2UtY29sb3I6IGdyYXk7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.service */ "./src/app/user.service.ts");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api.service */ "./src/app/api.service.ts");
/* harmony import */ var _spotify_playback_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./spotify-playback.service */ "./src/app/spotify-playback.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-device-detector */ "./node_modules/ngx-device-detector/fesm5/ngx-device-detector.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");









var AppComponent = /** @class */ (function () {
    function AppComponent(deviceDetectorService, userService, router, apiService, spotifyPlaybackService) {
        var _this = this;
        this.deviceDetectorService = deviceDetectorService;
        this.userService = userService;
        this.router = router;
        this.apiService = apiService;
        this.spotifyPlaybackService = spotifyPlaybackService;
        this.started = false;
        this.user = null;
        this.no_spotify = false;
        this.current_track = '';
        this.old_track = '';
        this.title = 'frontend';
        this.redirect_uri = '';
        this.REFRESH_MINUTES = 30;
        this.REFRESH_SECONDS = 0;
        this.REFRESH_TIME = 0;
        this.device_id = null;
        this.DESKTOP = true;
        console.log("Desktop", this.deviceDetectorService.isDesktop());
        this.DESKTOP = this.deviceDetectorService.isDesktop();
        this.REFRESH_TIME = (this.REFRESH_MINUTES * 60 + this.REFRESH_SECONDS) * 1000;
        this.tokenRefreshSubject = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"](null);
        this.tokenRefresh$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["timer"])(0, this.REFRESH_TIME).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["switchMap"])(function () {
            return _this.tokenRefreshSubject.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["switchMap"])(function (user_id) { return _this.apiService.refresh_token(user_id); }));
        }));
        this.userService.tokenRefreshSubject = this.tokenRefreshSubject;
        this.userService.tokenRefresh$ = this.tokenRefresh$;
        if (this.user) {
            this.userService.updateTokenUser(this.user.user_id);
        }
        this.userService.currentUser.subscribe(function (user) {
            user ? _this.user = user : _this.router.navigate(['']),
                _this.tokenRefresh$.subscribe();
            if (_this.DESKTOP) {
                _this.initializeSpotifyPlayer(user.user_id);
            }
            // if (this.DESKTOP) {
            // }
            _this.userService.updateTokenUser(_this.user.user_id);
            // this.redirect_uri = `http://db.cse.nd.edu/cse30246/mmdj/backend/api/auth.php/?id=${user.user_id}`;
            // this.tokenService.updateUser(this.user.user_id);
            // this.tokenService.getToken().subscribe(
            //     token => {
            //     console.log(token);
            //     if (token.length) {
            //       this.tokenService.setToken(token[0]["spotify_access"]);
            //     } else {
            //       this.no_spotify = true;
            //     }
            //   }
            // )
            // this.apiService.get_token(user.user_id).subscribe(
            //   token => {
            //     console.log(token);
            //     if (token.length) {
            //       this.tokenService.setToken(token[0]["spotify_access"]);
            //     } else {
            //       this.no_spotify = true;
            //     }
            //   }
            // )
        });
        // Play a specified track on the Web Playback SDK's device ID
    }
    AppComponent.prototype.initializeSpotifyPlayer = function (user_id) {
        var _this = this;
        console.log("GOT this", user_id);
        this.apiService.get_token(user_id).subscribe(function (token) {
            window['onSpotifyWebPlaybackSDKReady'] = function () {
                console.log('2', token);
                var player = new Spotify.Player({
                    name: 'Web Playback SDK Quick Start Player',
                    getOAuthToken: function (cb) { cb(token[0]['spotify_access']); }
                });
                // Error handling
                player.addListener('initialization_error', function (_a) {
                    var message = _a.message;
                    console.error(message);
                });
                player.addListener('authentication_error', function (_a) {
                    var message = _a.message;
                    console.error(message);
                });
                player.addListener('account_error', function (_a) {
                    var message = _a.message;
                    console.error(message);
                });
                player.addListener('playback_error', function (_a) {
                    var message = _a.message;
                    console.error(message);
                });
                // Playback status updates
                // player.addListener('player_state_changed', (state) => {
                //   console.log(state);
                //   if (state.position === 0 && state.duration > 0 && state.paused === false) {
                //     this.started = true;
                //   }
                //   if (this.started && state.position === 0 && state.paused === true) {
                //     this.started = false;
                //     this.spotifyPlaybackService.nextOn();
                //   }
                // this.current_track = state.track_window.current_track.id;
                // if (this.current_track == this.old_track) {
                //   this.spotifyPlaybackService.nextOff();
                // }
                //
                // if (!this.track || this.track && this.track != state.track_window.current_track['id'])
                // {
                //   this.track = state.track_window.current_track['id'];
                //   this.started = false;
                //   console.log("morgan");
                // }
                //
                // if (
                //   state
                //   && state.track_window.previous_tracks.find(x => x.id === state.track_window.current_track.id)
                //   && state.paused
                //   && state.position == 0
                //   && this.started){
                //     console.log("ended");
                //     this.spotifyPlaybackService.nextSong.subscribe(
                //       nextSong => {
                //         console.log("PPPPL", nextSong, this.current_track, this.old_track);
                //         if (nextSong == 0 && this.current_track != this.old_track) {
                //           console.log("WE DOOING IN");
                //           this.old_track = this.current_track;
                //           this.spotifyPlaybackService.nextOn();
                //         }
                //       }
                //     )
                //   }
                //
                // if (this.started == false && state.position >= 0){
                //   console.log("set flag");
                //   this.started = true;
                // }
                // });
                // Ready
                player.addListener('ready', function (_a) {
                    var device_id = _a.device_id;
                    if (!_this.device_id) {
                        _this.device_id = device_id;
                        console.log('Ready with Device ID', device_id);
                        _this.spotifyPlaybackService.setDeviceID(device_id);
                        _this.spotifyPlaybackService.player = player;
                        console.log('here', device_id);
                    }
                    // while (!this.track_id){
                    //}
                    //this.play(device_id, this.track_id);
                    //this.play(device_id, '0jdny0dhgjUwoIp5GkqEaA');
                });
                if (_this.deviceDetectorService.isDesktop()) {
                    console.log("INNNN");
                    player.connect();
                    player.disconnect();
                }
                else {
                    console.log("OUTTTTT");
                }
                // player.connect();
                // Not Ready
                player.addListener('not_ready', function (_a) {
                    var device_id = _a.device_id;
                    console.log('Device ID has gone offline', device_id);
                });
                // console.log(window);
            };
        });
    };
    AppComponent.prototype.logout = function () {
        this.user = null;
    };
    AppComponent.prototype.disconnectPlayer = function ($event) {
        this.spotifyPlaybackService.player.disconnect();
    };
    AppComponent.ctorParameters = function () { return [
        { type: ngx_device_detector__WEBPACK_IMPORTED_MODULE_6__["DeviceDetectorService"] },
        { type: _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
        { type: _spotify_playback_service__WEBPACK_IMPORTED_MODULE_4__["SpotifyPlaybackService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:beforeunload', ['$event'])
    ], AppComponent.prototype, "disconnectPlayer", null);
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./homepage/homepage.component */ "./src/app/homepage/homepage.component.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _auth_auth_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./auth/auth.component */ "./src/app/auth/auth.component.ts");
/* harmony import */ var _join_join_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./join/join.component */ "./src/app/join/join.component.ts");
/* harmony import */ var _host_host_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./host/host.component */ "./src/app/host/host.component.ts");
/* harmony import */ var _party_party_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./party/party.component */ "./src/app/party/party.component.ts");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _song_search_song_search_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./song-search/song-search.component */ "./src/app/song-search/song-search.component.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _spotify_spotify_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./spotify/spotify.component */ "./src/app/spotify/spotify.component.ts");
/* harmony import */ var _current_song_current_song_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./current-song/current-song.component */ "./src/app/current-song/current-song.component.ts");
/* harmony import */ var _youtube_player_youtube_player_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./youtube-player/youtube-player.component */ "./src/app/youtube-player/youtube-player.component.ts");
/* harmony import */ var ngx_youtube_player__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ngx-youtube-player */ "./node_modules/ngx-youtube-player/fesm5/ngx-youtube-player.js");
/* harmony import */ var _soundcloud_soundcloud_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./soundcloud/soundcloud.component */ "./src/app/soundcloud/soundcloud.component.ts");
/* harmony import */ var _callback_callback_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./callback/callback.component */ "./src/app/callback/callback.component.ts");
/* harmony import */ var _mobile_navbar_mobile_navbar_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./mobile-navbar/mobile-navbar.component */ "./src/app/mobile-navbar/mobile-navbar.component.ts");
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ngx-device-detector */ "./node_modules/ngx-device-detector/fesm5/ngx-device-detector.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm5/grid-list.es5.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_6__["HomepageComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_11__["NavbarComponent"],
                _auth_auth_component__WEBPACK_IMPORTED_MODULE_12__["AuthComponent"],
                _join_join_component__WEBPACK_IMPORTED_MODULE_13__["JoinComponent"],
                _host_host_component__WEBPACK_IMPORTED_MODULE_14__["HostComponent"],
                _party_party_component__WEBPACK_IMPORTED_MODULE_15__["PartyComponent"],
                _song_search_song_search_component__WEBPACK_IMPORTED_MODULE_18__["SongSearchComponent"],
                _spotify_spotify_component__WEBPACK_IMPORTED_MODULE_20__["SpotifyComponent"],
                _current_song_current_song_component__WEBPACK_IMPORTED_MODULE_21__["CurrentSongComponent"],
                _youtube_player_youtube_player_component__WEBPACK_IMPORTED_MODULE_22__["YoutubePlayerComponent"],
                _soundcloud_soundcloud_component__WEBPACK_IMPORTED_MODULE_24__["SoundcloudComponent"],
                _callback_callback_component__WEBPACK_IMPORTED_MODULE_25__["CallbackComponent"],
                _mobile_navbar_mobile_navbar_component__WEBPACK_IMPORTED_MODULE_26__["MobileNavbarComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatOptionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_16__["MatTableModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__["MatIconModule"],
                // ToastrModule.forRoot(),
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_19__["MatSnackBarModule"],
                ngx_youtube_player__WEBPACK_IMPORTED_MODULE_23__["NgxYoutubePlayerModule"],
                ngx_device_detector__WEBPACK_IMPORTED_MODULE_27__["DeviceDetectorModule"].forRoot(),
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_28__["MatGridListModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_29__["FlexLayoutModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_30__["MatCardModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_31__["MatButtonModule"]
            ],
            providers: [
                { provide: Window, useValue: window }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.component.css":
/*!*****************************************!*\
  !*** ./src/app/auth/auth.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\r\n  width: 40%;\r\n  margin-left: 30%;\r\n  padding: 2%;\r\n  text-align: center;\r\n}\r\n\r\nh1 {\r\n  margin: 0;\r\n  padding-top: 10%;\r\n}\r\n\r\n.buttons {\r\n  width: 75%;\r\n}\r\n\r\n.form-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.form-container > * {\r\n  width: 100%;\r\n}\r\n\r\n@media only screen and (max-width: 600px) {\r\n  .example-container {\r\n    width: 90%;\r\n    margin-left: 5%;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9hdXRoLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFO0lBQ0UsVUFBVTtJQUNWLGVBQWU7RUFDakI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvYXV0aC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtY29udGFpbmVyIHtcclxuICB3aWR0aDogNDAlO1xyXG4gIG1hcmdpbi1sZWZ0OiAzMCU7XHJcbiAgcGFkZGluZzogMiU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5oMSB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmctdG9wOiAxMCU7XHJcbn1cclxuXHJcbi5idXR0b25zIHtcclxuICB3aWR0aDogNzUlO1xyXG59XHJcblxyXG4uZm9ybS1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLmZvcm0tY29udGFpbmVyID4gKiB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAuZXhhbXBsZS1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiA1JTtcclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/auth/auth.component.ts":
/*!****************************************!*\
  !*** ./src/app/auth/auth.component.ts ***!
  \****************************************/
/*! exports provided: AuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthComponent", function() { return AuthComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _classes_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @classes/user */ "./src/app/Classes/user.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-device-detector */ "./node_modules/ngx-device-detector/fesm5/ngx-device-detector.js");








var AuthComponent = /** @class */ (function () {
    function AuthComponent(fb, apiService, userService, router, deviceService) {
        var _this = this;
        this.apiService = apiService;
        this.userService = userService;
        this.router = router;
        this.deviceService = deviceService;
        this.authButtons = [1, 0];
        this.DESKTOP = false;
        this.homepage = window.location.href;
        this.DESKTOP = deviceService.isDesktop();
        this.nextPage = this.DESKTOP ? 'host' : 'join';
        this.userService.currentUser.subscribe(function (user) {
            if (user) {
                _this.apiService.get_events_by_user(user.user_id).subscribe(function (data) {
                    if (data.length) {
                        _this.router.navigate(['party', data[0].event_id]);
                    }
                    else {
                        _this.router.navigate([_this.nextPage]);
                    }
                });
            }
        });
        this.loginForm = fb.group({
            username: '',
            password: ''
        });
        this.registerForm = fb.group({
            username: '',
            password: ''
        });
    }
    AuthComponent.prototype.ngOnInit = function () {
    };
    AuthComponent.prototype.onAuthButtonClick = function (index) {
        this.authButtons = [0, 0];
        this.authButtons[index] = 1;
    };
    AuthComponent.prototype.login = function () {
        var _this = this;
        this.apiService.get_user(this.loginForm.controls.username.value, this.loginForm.controls.password.value).subscribe(function (user) {
            _this.userService.login(user),
                _this.invalid = false,
                _this.userService.updateTokenUser(user.user_id),
                _this.apiService.get_events_by_user(user.user_id).subscribe(function (data) {
                    if (_this.DESKTOP) {
                        window.location.href = _this.homepage;
                    }
                    else {
                        if (data.length) {
                            _this.router.navigate(['party', data[0].event_id]);
                        }
                        else {
                            _this.router.navigate([_this.nextPage]);
                        }
                    }
                    // window.location.href = window.location.href.split('login')[0];
                });
        }, function (error) {
            _this.invalid = true,
                console.log(error);
        });
    };
    AuthComponent.prototype.register = function () {
        var _this = this;
        this.user = new _classes_user__WEBPACK_IMPORTED_MODULE_5__["User"]();
        this.user.user_id = 0;
        this.user.username = this.registerForm.controls.username.value;
        this.user.password = this.registerForm.controls.password.value;
        this.apiService.post_User(this.user).subscribe(function (user) {
            console.log("User created, ", user),
                _this.userService.login(user);
            _this.router.navigate([_this.nextPage]);
            _this.invalid = false;
        }, function (error) {
            if (error.status > 400) {
                _this.invalid = true,
                    console.log(error);
            }
        });
    };
    AuthComponent.prototype.onResize = function (event) {
        this.nextPage = this.DESKTOP ? 'host' : 'join';
    };
    AuthComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
        { type: _user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: ngx_device_detector__WEBPACK_IMPORTED_MODULE_7__["DeviceDetectorService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize', ['$event'])
    ], AuthComponent.prototype, "onResize", null);
    AuthComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-auth',
            template: __webpack_require__(/*! raw-loader!./auth.component.html */ "./node_modules/raw-loader/index.js!./src/app/auth/auth.component.html"),
            styles: [__webpack_require__(/*! ./auth.component.css */ "./src/app/auth/auth.component.css")]
        })
    ], AuthComponent);
    return AuthComponent;
}());



/***/ }),

/***/ "./src/app/callback/callback.component.css":
/*!*************************************************!*\
  !*** ./src/app/callback/callback.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhbGxiYWNrL2NhbGxiYWNrLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/callback/callback.component.ts":
/*!************************************************!*\
  !*** ./src/app/callback/callback.component.ts ***!
  \************************************************/
/*! exports provided: CallbackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CallbackComponent", function() { return CallbackComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _token_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../token.service */ "./src/app/token.service.ts");




var CallbackComponent = /** @class */ (function () {
    function CallbackComponent(router, tokenService) {
        this.router = router;
        this.tokenService = tokenService;
        //   // this.route.queryParams.subscribe(
        //   //   data => console.log(data)
        //   // )
        //   var params = this.router.url.split('#')[1].split('&');
        //   var paramsJSON = {};
        //   for (let p of params) {
        //     var k = p.split('=')[0];
        //     var v = p.split('=')[1];
        //     paramsJSON[k] = v;
        //   }
        //   this.tokenService.setToken(paramsJSON['access_token']);
        //   this.router.navigate(['party','30']);
    }
    CallbackComponent.prototype.ngOnInit = function () {
    };
    CallbackComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _token_service__WEBPACK_IMPORTED_MODULE_3__["TokenService"] }
    ]; };
    CallbackComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-callback',
            template: __webpack_require__(/*! raw-loader!./callback.component.html */ "./node_modules/raw-loader/index.js!./src/app/callback/callback.component.html"),
            styles: [__webpack_require__(/*! ./callback.component.css */ "./src/app/callback/callback.component.css")]
        })
    ], CallbackComponent);
    return CallbackComponent;
}());



/***/ }),

/***/ "./src/app/current-song/current-song.component.css":
/*!*********************************************************!*\
  !*** ./src/app/current-song/current-song.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".current-song {\r\n  width: 100%;\r\n  position: fixed;\r\n  top: 0px;\r\n  z-index: -2;\r\n  background-color: black;\r\n  color: white;\r\n  text-align: center;\r\n  background-position: center;\r\n  background-size: cover;\r\n}\r\n\r\n/*\r\n.current-song-desktop {\r\n  width: 100%;\r\n  width: -webkit-fill-avaliable;\r\n  top: 0px;\r\n  z-index: -2;\r\n  background-color: black;\r\n  color: white;\r\n  text-align: center;\r\n  background-position: center;\r\n  background-size: cover;\r\n} */\r\n\r\n.current-song-empty {\r\n  background-color: lightgray;\r\n  background-image: url('apple-touch-icon.png');\r\n}\r\n\r\n.current-song-desktop {\r\n\r\n  /* object-fit: contain; */\r\n  /* height: 66.66%; */\r\n}\r\n\r\n.current-song-outer-desktop {\r\n    background: rgba(0, 0, 0, 0.35);\r\n    text-align: center;\r\n    background-position: center;\r\n    background-size: cover;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n  /* height: 66.666% !important; */\r\n}\r\n\r\n.song {\r\n  /* padding-top: 20%;\r\n  padding-bottom: 20%; */\r\n  width: 100%;\r\n  overflow: hidden\r\n\r\n}\r\n\r\n.song-normal {\r\n  height: 0;\r\n}\r\n\r\n.normal {\r\n  text-align: center;\r\n  margin-left: 25%;\r\n}\r\n\r\n.banner {\r\n\r\n  width: 100%;\r\n  padding-top: 3%;\r\n  padding-bottom: 3%;\r\n  display: inline-flex;\r\n  background: rgba(0, 0, 0, 0.35);\r\n}\r\n\r\nmat-icon {\r\n  font-size: 10vw;\r\n  width: 15%;\r\n  height: 100%;\r\n}\r\n\r\n.icon {\r\n  height: 100%;\r\n  width: 10%;\r\n  margin-left: 3%;\r\n  margin-right: 2%;\r\n}\r\n\r\n.img-container {\r\n  height: 100%;\r\n  width: 100%;\r\n  -o-object-fit: cover;\r\n     object-fit: cover;\r\n  overflow: visible;\r\n  position: fixed;\r\n  z-index: -2;\r\n  top: 0px;\r\n}\r\n\r\n.artwork {\r\n  height: 100%;\r\n  width: 100%;\r\n}\r\n\r\n.text-banner {\r\n  font-size: 4.25vw;\r\n  color: white;\r\n  width: 70%;\r\n  padding: 2.5%;\r\n  /* -webkit-text-stroke-width: 0.01vw;\r\n  -webkit-text-stroke-color: black; */\r\n  /* Required for text-overflow to do anything */\r\n  text-overflow: ellipsis;\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n}\r\n\r\n.text-banner-empty {\r\n  font-size: 4.25vw;\r\n  color: white;\r\n  width: 100%;\r\n  padding: 2.5%;\r\n  text-align: center;\r\n  /* -webkit-text-stroke-width: 0.01vw;\r\n  -webkit-text-stroke-color: black; */\r\n  /* Required for text-overflow to do anything */\r\n  text-overflow: ellipsis;\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n}\r\n\r\n.text-normal {\r\n  font-size: 5vw;\r\n  color: white;\r\n  width: 70%;\r\n  padding: 2.5%;\r\n  background-color: black;\r\n  border-radius: 10px;\r\n  background: rgba(0, 0, 0, 0.5);\r\n\r\n}\r\n\r\n.album-art {\r\n  position: absolute;\r\n  bottom: 0;\r\n  left: 50%;\r\n  transform: translateX(-50%);\r\n  /* padding: 2%; */\r\n  /* width: 30px; */\r\n}\r\n\r\nmat-card {\r\n  background-color: black;\r\n  color: white !important;\r\n  padding: 1%;\r\n  width: 100%;\r\n}\r\n\r\n.song-info-card {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 50%;\r\n  transform: translateX(-50%);\r\n}\r\n\r\n.soundcloud {\r\n  height: 50%;\r\n  width: 70%;\r\n  padding: 5%;\r\n  margin-left: 15%;\r\n  margin-top: 15%;\r\n  border-radius: 15px;\r\n  background-image: linear-gradient(#FF9533, #FF7F34, #FE6D35, #FF5836, #FF4137);\r\n}\r\n\r\n.album-title {\r\n  margin: 0;\r\n}\r\n\r\n.album-artist {\r\n  color: white;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3VycmVudC1zb25nL2N1cnJlbnQtc29uZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLGVBQWU7RUFDZixRQUFRO0VBQ1IsV0FBVztFQUNYLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLDJCQUEyQjtFQUMzQixzQkFBc0I7QUFDeEI7O0FBRUE7Ozs7Ozs7Ozs7O0dBV0c7O0FBRUg7RUFDRSwyQkFBMkI7RUFDM0IsNkNBQW1EO0FBQ3JEOztBQUVBOztFQUVFLHlCQUF5QjtFQUN6QixvQkFBb0I7QUFDdEI7O0FBRUE7SUFDSSwrQkFBK0I7SUFDL0Isa0JBQWtCO0lBQ2xCLDJCQUEyQjtJQUMzQixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0VBQ1QsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0U7d0JBQ3NCO0VBQ3RCLFdBQVc7RUFDWDs7QUFFRjs7QUFHQTtFQUNFLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUE7O0VBRUUsV0FBVztFQUNYLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLGVBQWU7RUFDZixVQUFVO0VBQ1YsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFVBQVU7RUFDVixlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxvQkFBaUI7S0FBakIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsV0FBVztFQUNYLFFBQVE7QUFDVjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsWUFBWTtFQUNaLFVBQVU7RUFDVixhQUFhO0VBQ2I7cUNBQ21DO0VBQ25DLDhDQUE4QztFQUM5Qyx1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osV0FBVztFQUNYLGFBQWE7RUFDYixrQkFBa0I7RUFDbEI7cUNBQ21DO0VBQ25DLDhDQUE4QztFQUM5Qyx1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjs7QUFHQTtFQUNFLGNBQWM7RUFDZCxZQUFZO0VBQ1osVUFBVTtFQUNWLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLDhCQUE4Qjs7QUFFaEM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFNBQVM7RUFDVCwyQkFBMkI7RUFDM0IsaUJBQWlCO0VBQ2pCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2Qix1QkFBdUI7RUFDdkIsV0FBVztFQUNYLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sU0FBUztFQUNULDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxVQUFVO0VBQ1YsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLDhFQUE4RTtBQUNoRjs7QUFFQTtFQUNFLFNBQVM7QUFDWDs7QUFFQTtFQUNFLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2N1cnJlbnQtc29uZy9jdXJyZW50LXNvbmcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jdXJyZW50LXNvbmcge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDBweDtcclxuICB6LWluZGV4OiAtMjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcblxyXG4vKlxyXG4uY3VycmVudC1zb25nLWRlc2t0b3Age1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhbGlhYmxlO1xyXG4gIHRvcDogMHB4O1xyXG4gIHotaW5kZXg6IC0yO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn0gKi9cclxuXHJcbi5jdXJyZW50LXNvbmctZW1wdHkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hcHBsZS10b3VjaC1pY29uLnBuZ1wiKTtcclxufVxyXG5cclxuLmN1cnJlbnQtc29uZy1kZXNrdG9wIHtcclxuXHJcbiAgLyogb2JqZWN0LWZpdDogY29udGFpbjsgKi9cclxuICAvKiBoZWlnaHQ6IDY2LjY2JTsgKi9cclxufVxyXG5cclxuLmN1cnJlbnQtc29uZy1vdXRlci1kZXNrdG9wIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4zNSk7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAvKiBoZWlnaHQ6IDY2LjY2NiUgIWltcG9ydGFudDsgKi9cclxufVxyXG5cclxuLnNvbmcge1xyXG4gIC8qIHBhZGRpbmctdG9wOiAyMCU7XHJcbiAgcGFkZGluZy1ib3R0b206IDIwJTsgKi9cclxuICB3aWR0aDogMTAwJTtcclxuICBvdmVyZmxvdzogaGlkZGVuXHJcblxyXG59XHJcblxyXG5cclxuLnNvbmctbm9ybWFsIHtcclxuICBoZWlnaHQ6IDA7XHJcbn1cclxuXHJcbi5ub3JtYWwge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tbGVmdDogMjUlO1xyXG59XHJcblxyXG4uYmFubmVyIHtcclxuXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZy10b3A6IDMlO1xyXG4gIHBhZGRpbmctYm90dG9tOiAzJTtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMzUpO1xyXG59XHJcblxyXG5tYXQtaWNvbiB7XHJcbiAgZm9udC1zaXplOiAxMHZ3O1xyXG4gIHdpZHRoOiAxNSU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uaWNvbiB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMCU7XHJcbiAgbWFyZ2luLWxlZnQ6IDMlO1xyXG4gIG1hcmdpbi1yaWdodDogMiU7XHJcbn1cclxuXHJcbi5pbWctY29udGFpbmVyIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgb3ZlcmZsb3c6IHZpc2libGU7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHotaW5kZXg6IC0yO1xyXG4gIHRvcDogMHB4O1xyXG59XHJcblxyXG4uYXJ0d29yayB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4udGV4dC1iYW5uZXIge1xyXG4gIGZvbnQtc2l6ZTogNC4yNXZ3O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB3aWR0aDogNzAlO1xyXG4gIHBhZGRpbmc6IDIuNSU7XHJcbiAgLyogLXdlYmtpdC10ZXh0LXN0cm9rZS13aWR0aDogMC4wMXZ3O1xyXG4gIC13ZWJraXQtdGV4dC1zdHJva2UtY29sb3I6IGJsYWNrOyAqL1xyXG4gIC8qIFJlcXVpcmVkIGZvciB0ZXh0LW92ZXJmbG93IHRvIGRvIGFueXRoaW5nICovXHJcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4udGV4dC1iYW5uZXItZW1wdHkge1xyXG4gIGZvbnQtc2l6ZTogNC4yNXZ3O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAyLjUlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAvKiAtd2Via2l0LXRleHQtc3Ryb2tlLXdpZHRoOiAwLjAxdnc7XHJcbiAgLXdlYmtpdC10ZXh0LXN0cm9rZS1jb2xvcjogYmxhY2s7ICovXHJcbiAgLyogUmVxdWlyZWQgZm9yIHRleHQtb3ZlcmZsb3cgdG8gZG8gYW55dGhpbmcgKi9cclxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcblxyXG4udGV4dC1ub3JtYWwge1xyXG4gIGZvbnQtc2l6ZTogNXZ3O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB3aWR0aDogNzAlO1xyXG4gIHBhZGRpbmc6IDIuNSU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcblxyXG59XHJcblxyXG4uYWxidW0tYXJ0IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgLyogcGFkZGluZzogMiU7ICovXHJcbiAgLyogd2lkdGg6IDMwcHg7ICovXHJcbn1cclxuXHJcbm1hdC1jYXJkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICBwYWRkaW5nOiAxJTtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnNvbmctaW5mby1jYXJkIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbn1cclxuXHJcbi5zb3VuZGNsb3VkIHtcclxuICBoZWlnaHQ6IDUwJTtcclxuICB3aWR0aDogNzAlO1xyXG4gIHBhZGRpbmc6IDUlO1xyXG4gIG1hcmdpbi1sZWZ0OiAxNSU7XHJcbiAgbWFyZ2luLXRvcDogMTUlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KCNGRjk1MzMsICNGRjdGMzQsICNGRTZEMzUsICNGRjU4MzYsICNGRjQxMzcpO1xyXG59XHJcblxyXG4uYWxidW0tdGl0bGUge1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuLmFsYnVtLWFydGlzdCB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/current-song/current-song.component.ts":
/*!********************************************************!*\
  !*** ./src/app/current-song/current-song.component.ts ***!
  \********************************************************/
/*! exports provided: CurrentSongComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrentSongComponent", function() { return CurrentSongComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _classes_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @classes/user */ "./src/app/Classes/user.ts");
/* harmony import */ var _classes_song__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @classes/song */ "./src/app/Classes/song.ts");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _spotify_playback_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../spotify-playback.service */ "./src/app/spotify-playback.service.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-device-detector */ "./node_modules/ngx-device-detector/fesm5/ngx-device-detector.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");










var CurrentSongComponent = /** @class */ (function () {
    //
    // @Input()
    // set currentSong(input) {
    //   this.song = input;
    //   this.track_id = input;
    //   this.platform = input;
    // }
    function CurrentSongComponent(apiService, userService, spotifyPlaybackService, deviceService) {
        var _this = this;
        this.apiService = apiService;
        this.userService = userService;
        this.spotifyPlaybackService = spotifyPlaybackService;
        this.deviceService = deviceService;
        this.song = new _classes_song__WEBPACK_IMPORTED_MODULE_3__["Song"]();
        this.user = new _classes_user__WEBPACK_IMPORTED_MODULE_2__["User"]();
        this.event_id = 0;
        this.host_id = 0;
        this.HOST = false;
        this.DESKTOP = false;
        this.width = 0;
        this.height = 0;
        this.yoffset = 0;
        this.song_padding = 0;
        this.empty = true;
        this.DESKTOP = this.deviceService.isDesktop();
        this.spotify_next$ = this.spotifyPlaybackService.nextSong;
        this.userService.currentUser.subscribe(function (user) {
            _this.user = user;
            if (_this.host_id) {
                _this.HOST = _this.user.user_id == _this.host_id;
            }
        });
        this.width = window.innerWidth;
        this.height = window.innerHeight * 2 / 3;
        this.yoffset = window.pageYOffset;
        this.song_padding = !this.DESKTOP ? Math.max(20 - 100 * this.yoffset / window.innerHeight, 0) : 20;
    }
    Object.defineProperty(CurrentSongComponent.prototype, "event", {
        set: function (input) {
            var _this = this;
            this.event_id = parseInt(input.event_id);
            this.host_id = parseInt(input.user_id);
            if (this.user && this.user.user_id) {
                this.HOST = this.user.user_id == this.host_id;
            }
            this.currentSong$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["timer"])(0, 500).pipe(
            // startWith(1000),
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["switchMap"])(function () { return _this.apiService.get_event_current_song(_this.event_id); }));
            this.currentSong$.subscribe(function (data) {
                if (_this.empty) {
                    _this.song = new _classes_song__WEBPACK_IMPORTED_MODULE_3__["Song"]();
                    console.log("SKIPPING FROM SCRAPER");
                    _this.skipSong();
                }
                else if (data && (data.order_num != _this.song.order_num || !_this.song)) {
                    // this.empty = false;
                    _this.setCurrentSong();
                }
            });
        },
        enumerable: true,
        configurable: true
    });
    CurrentSongComponent.prototype.ngOnInit = function () {
    };
    CurrentSongComponent.prototype.setCurrentSong = function () {
        var _this = this;
        // if (this.HOST) {
        //   this.pauseSpotify();
        // }
        // if (!this.empty) {
        this.apiService.get_event_current_song(this.event_id).subscribe(function (data) {
            _this.song = data;
        }, function (error) { return console.log(error); });
        // }
    };
    CurrentSongComponent.prototype.skipSong = function () {
        var _this = this;
        if (this.HOST) {
            // this.pauseSpotify();
            console.log("SKIP");
            this.apiService.get_queuedSongs(this.event_id).subscribe(function (data) {
                // console.log("DATA", data);
                if (data[0]) {
                    // console.log("in here", data[0])
                    _this.empty = false;
                    _this.apiService.put_current_song(_this.event_id, data[0]['order_num']).subscribe();
                }
                else {
                    // console.log("here");
                    _this.empty = true;
                    // this.song = new Song();
                }
            });
        }
    };
    CurrentSongComponent.prototype.pauseSpotify = function () {
        var _this = this;
        console.log("BIG PAUSE");
        this.apiService.get_token(this.host_id).subscribe(function (token) {
            _this.spotifyPlaybackService.pauseSong(token[0]['spotify_access']);
        });
    };
    CurrentSongComponent.prototype.onScroll = function (event) {
        this.DESKTOP = this.deviceService.isDesktop();
        this.width = window.innerWidth;
        this.height = window.innerHeight * 2 / 3;
        this.yoffset = window.pageYOffset;
        this.song_padding = !this.DESKTOP ? Math.max(20 - 100 * this.yoffset / window.innerHeight, 0) : 20;
    };
    CurrentSongComponent.prototype.onResize = function (event) {
        this.DESKTOP = this.deviceService.isDesktop();
        this.width = window.innerWidth;
    };
    CurrentSongComponent.ctorParameters = function () { return [
        { type: _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
        { type: _user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] },
        { type: _spotify_playback_service__WEBPACK_IMPORTED_MODULE_5__["SpotifyPlaybackService"] },
        { type: ngx_device_detector__WEBPACK_IMPORTED_MODULE_7__["DeviceDetectorService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], CurrentSongComponent.prototype, "event", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:scroll', ['$event'])
    ], CurrentSongComponent.prototype, "onScroll", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize', ['$event'])
    ], CurrentSongComponent.prototype, "onResize", null);
    CurrentSongComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-current-song',
            template: __webpack_require__(/*! raw-loader!./current-song.component.html */ "./node_modules/raw-loader/index.js!./src/app/current-song/current-song.component.html"),
            styles: [__webpack_require__(/*! ./current-song.component.css */ "./src/app/current-song/current-song.component.css")]
        })
    ], CurrentSongComponent);
    return CurrentSongComponent;
}());



/***/ }),

/***/ "./src/app/homepage/homepage.component.css":
/*!*************************************************!*\
  !*** ./src/app/homepage/homepage.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\r\n  width: 40%;\r\n  margin-left: 30%;\r\n  text-align: center;\r\n}\r\n\r\n.buttons {\r\n  margin-left: 10%;\r\n  margin-right: 10%;\r\n}\r\n\r\n.form-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.form-container > * {\r\n  width: 100%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZXBhZ2UvaG9tZXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxXQUFXO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9ob21lcGFnZS9ob21lcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtY29udGFpbmVyIHtcclxuICB3aWR0aDogNDAlO1xyXG4gIG1hcmdpbi1sZWZ0OiAzMCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uYnV0dG9ucyB7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcclxuICBtYXJnaW4tcmlnaHQ6IDEwJTtcclxufVxyXG5cclxuLmZvcm0tY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRhaW5lciA+ICoge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/homepage/homepage.component.ts":
/*!************************************************!*\
  !*** ./src/app/homepage/homepage.component.ts ***!
  \************************************************/
/*! exports provided: HomepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageComponent", function() { return HomepageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomepageComponent = /** @class */ (function () {
    function HomepageComponent() {
    }
    HomepageComponent.prototype.ngOnInit = function () { };
    HomepageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-homepage',
            template: __webpack_require__(/*! raw-loader!./homepage.component.html */ "./node_modules/raw-loader/index.js!./src/app/homepage/homepage.component.html"),
            styles: [__webpack_require__(/*! ./homepage.component.css */ "./src/app/homepage/homepage.component.css")]
        })
    ], HomepageComponent);
    return HomepageComponent;
}());



/***/ }),

/***/ "./src/app/host/host.component.css":
/*!*****************************************!*\
  !*** ./src/app/host/host.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\r\n  width: 40%;\r\n  margin-left: 30%;\r\n  text-align: center;\r\n}\r\n\r\n.buttons {\r\n  margin-left: 10%;\r\n  margin-right: 10%;\r\n}\r\n\r\n.form-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.form-container > * {\r\n  width: 100%;\r\n}\r\n\r\n.spotify-button {\r\n  position: fixed;\r\n  z-index: 3;\r\n  top: 10%;\r\n  left: 10px;\r\n  border-radius: 15px;\r\n}\r\n\r\n.profile-div {\r\n  padding-left: 85%;\r\n  padding-top: 3%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9zdC9ob3N0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUdBO0VBQ0UsZUFBZTtFQUNmLFVBQVU7RUFDVixRQUFRO0VBQ1IsVUFBVTtFQUNWLG1CQUFtQjtBQUNyQjs7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvaG9zdC9ob3N0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1jb250YWluZXIge1xyXG4gIHdpZHRoOiA0MCU7XHJcbiAgbWFyZ2luLWxlZnQ6IDMwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5idXR0b25zIHtcclxuICBtYXJnaW4tbGVmdDogMTAlO1xyXG4gIG1hcmdpbi1yaWdodDogMTAlO1xyXG59XHJcblxyXG4uZm9ybS1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLmZvcm0tY29udGFpbmVyID4gKiB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcblxyXG4uc3BvdGlmeS1idXR0b24ge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB6LWluZGV4OiAzO1xyXG4gIHRvcDogMTAlO1xyXG4gIGxlZnQ6IDEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxufVxyXG4ucHJvZmlsZS1kaXYge1xyXG4gIHBhZGRpbmctbGVmdDogODUlO1xyXG4gIHBhZGRpbmctdG9wOiAzJTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/host/host.component.ts":
/*!****************************************!*\
  !*** ./src/app/host/host.component.ts ***!
  \****************************************/
/*! exports provided: HostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HostComponent", function() { return HostComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _classes_event__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @classes/event */ "./src/app/Classes/event.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var HostComponent = /** @class */ (function () {
    function HostComponent(fb, apiService, userService, router) {
        var _this = this;
        this.apiService = apiService;
        this.userService = userService;
        this.router = router;
        this.redirect_uri = '';
        this.showLogout = false;
        this.partyForm = fb.group({
            name: '',
            description: '',
            genre: ''
        });
        this.userService.currentUser.subscribe(function (user) {
            _this.currentUser = user;
            _this.has_token$ = _this.apiService.get_token(user.user_id);
            _this.redirect_uri = "http://db.cse.nd.edu/cse30246/mmdj/backend/api/auth.php/?id=" + user.user_id;
        });
    }
    HostComponent.prototype.ngOnInit = function () {
    };
    HostComponent.prototype.convertBoolean = function (x) {
        if (x) {
            return x.length;
        }
        return 0;
    };
    HostComponent.prototype.createParty = function () {
        var _this = this;
        this.event = new _classes_event__WEBPACK_IMPORTED_MODULE_5__["Event"]();
        this.event.event_name = this.partyForm.controls.name.value;
        this.event.description = this.partyForm.controls.description.value;
        this.event.user_id = this.currentUser.user_id;
        console.log(this.currentUser);
        console.log(this.event);
        this.apiService.post_Event(this.event).subscribe(function (data) {
            console.log(data);
            _this.router.navigate(['party', data.event_id]);
        }, function (error) {
            if (error.status > 400) {
                // this.invalid = true,
                console.log(error);
            }
        });
    };
    HostComponent.prototype.authenticate = function () {
        window.location.href = this.redirect_uri;
    };
    HostComponent.prototype.showProfileOptions = function () {
        if (this.showLogout) {
            this.showLogout = false;
        }
        else {
            this.showLogout = true;
        }
    };
    HostComponent.prototype.logout = function () {
        this.userService.logout();
        this.router.navigate(['']);
    };
    HostComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
        { type: _user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
    ]; };
    HostComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-host',
            template: __webpack_require__(/*! raw-loader!./host.component.html */ "./node_modules/raw-loader/index.js!./src/app/host/host.component.html"),
            styles: [__webpack_require__(/*! ./host.component.css */ "./src/app/host/host.component.css")]
        })
    ], HostComponent);
    return HostComponent;
}());



/***/ }),

/***/ "./src/app/join/join.component.css":
/*!*****************************************!*\
  !*** ./src/app/join/join.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\r\n  /* width: 40%; */\r\n  margin-left: 30%;\r\n  padding: 2%;\r\n  text-align: center;\r\n\r\n}\r\n\r\n.profile-div {\r\n  padding-left: 70%;\r\n  padding-top: 10%;\r\n}\r\n\r\n.buttons {\r\n  margin-left: 10%;\r\n  margin-right: 10%;\r\n}\r\n\r\n.form-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.form-container > * {\r\n  width: 100%;\r\n}\r\n\r\n.hint {\r\n  color: red;\r\n}\r\n\r\n@media only screen and (max-width: 600px) {\r\n  .example-container {\r\n    padding-top: 50%;\r\n    width: 80%;\r\n    margin-left: 10%;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvam9pbi9qb2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxrQkFBa0I7O0FBRXBCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0U7SUFDRSxnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLGdCQUFnQjtFQUNsQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvam9pbi9qb2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1jb250YWluZXIge1xyXG4gIC8qIHdpZHRoOiA0MCU7ICovXHJcbiAgbWFyZ2luLWxlZnQ6IDMwJTtcclxuICBwYWRkaW5nOiAyJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG59XHJcblxyXG4ucHJvZmlsZS1kaXYge1xyXG4gIHBhZGRpbmctbGVmdDogNzAlO1xyXG4gIHBhZGRpbmctdG9wOiAxMCU7XHJcbn1cclxuXHJcbi5idXR0b25zIHtcclxuICBtYXJnaW4tbGVmdDogMTAlO1xyXG4gIG1hcmdpbi1yaWdodDogMTAlO1xyXG59XHJcblxyXG4uZm9ybS1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLmZvcm0tY29udGFpbmVyID4gKiB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5oaW50IHtcclxuICBjb2xvcjogcmVkO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgLmV4YW1wbGUtY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmctdG9wOiA1MCU7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/join/join.component.ts":
/*!****************************************!*\
  !*** ./src/app/join/join.component.ts ***!
  \****************************************/
/*! exports provided: JoinComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JoinComponent", function() { return JoinComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");






var JoinComponent = /** @class */ (function () {
    function JoinComponent(fb, apiService, router, userService) {
        var _this = this;
        this.apiService = apiService;
        this.router = router;
        this.userService = userService;
        this.invalid = false;
        this.showProfileInfo = false;
        console.log(window);
        this.showLogout = false;
        this.joinForm = fb.group({
            eventID: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.userService.currentUser.subscribe(function (user) {
            user ? _this.user = user : _this.router.navigate(['']);
        });
    }
    JoinComponent.prototype.ngOnInit = function () { };
    JoinComponent.prototype.joinParty = function () {
        var _this = this;
        this.apiService.get_event(this.joinForm.controls.eventID.value).subscribe(function (data) {
            _this.apiService.get_event(parseInt(_this.joinForm.controls.eventID.value)).subscribe(function (data) {
                if (data.length) {
                    console.log(data);
                    _this.invalid = false;
                    _this.router.navigate(['party', _this.joinForm.controls.eventID.value]);
                }
                else {
                    _this.invalid = true;
                }
            }, function (error) {
                if (error.status >= 400) {
                    _this.invalid = true,
                        console.log(error);
                }
            });
        }, function (error) {
            if (error.status > 400) {
                _this.invalid = true,
                    console.log(error);
            }
        });
    };
    JoinComponent.prototype.showProfileOptions = function () {
        if (this.showLogout) {
            this.showLogout = false;
        }
        else {
            this.showLogout = true;
        }
    };
    JoinComponent.prototype.logout = function () {
        this.userService.logout();
        this.router.navigate(['']);
    };
    JoinComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] }
    ]; };
    JoinComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-join',
            template: __webpack_require__(/*! raw-loader!./join.component.html */ "./node_modules/raw-loader/index.js!./src/app/join/join.component.html"),
            styles: [__webpack_require__(/*! ./join.component.css */ "./src/app/join/join.component.css")]
        })
    ], JoinComponent);
    return JoinComponent;
}());



/***/ }),

/***/ "./src/app/mobile-navbar/mobile-navbar.component.css":
/*!***********************************************************!*\
  !*** ./src/app/mobile-navbar/mobile-navbar.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mobile-navbar {\r\n  position: fixed;\r\n  z-index: 1;\r\n  bottom: 0;\r\n  left: 0;\r\n  /* border-top-color: lightgray;\r\n  border-top-style: solid; */\r\n  background-color: white;\r\n  width: 100%;\r\n  height: 8%;\r\n  display: inline-flex;\r\n  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);\r\n  color: lightgray;\r\n}\r\n\r\n.section {\r\n  height: 100%;\r\n  padding-top: 7px;\r\n  text-align: center;\r\n  float: bottom;\r\n  width: 33.333333%;\r\n}\r\n\r\nmat-icon {\r\n  font-size: 10vw;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.active {\r\n  color: #0275d8;\r\n  border-bottom-style: solid;\r\n  border-color: #0275d8;\r\n  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);\r\n  transition: all 0.3s cubic-bezier(.25,.8,.25,1);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9iaWxlLW5hdmJhci9tb2JpbGUtbmF2YmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2YsVUFBVTtFQUNWLFNBQVM7RUFDVCxPQUFPO0VBQ1A7NEJBQzBCO0VBQzFCLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsVUFBVTtFQUNWLG9CQUFvQjtFQUNwQixrRUFBa0U7RUFDbEUsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsY0FBYztFQUNkLDBCQUEwQjtFQUMxQixxQkFBcUI7RUFDckIsa0VBQWtFO0VBQ2xFLCtDQUErQztBQUNqRCIsImZpbGUiOiJzcmMvYXBwL21vYmlsZS1uYXZiYXIvbW9iaWxlLW5hdmJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1vYmlsZS1uYXZiYXIge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB6LWluZGV4OiAxO1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG4gIC8qIGJvcmRlci10b3AtY29sb3I6IGxpZ2h0Z3JheTtcclxuICBib3JkZXItdG9wLXN0eWxlOiBzb2xpZDsgKi9cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDglO1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIGJveC1zaGFkb3c6IDAgM3B4IDZweCByZ2JhKDAsMCwwLDAuMTYpLCAwIDNweCA2cHggcmdiYSgwLDAsMCwwLjIzKTtcclxuICBjb2xvcjogbGlnaHRncmF5O1xyXG59XHJcblxyXG4uc2VjdGlvbiB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBhZGRpbmctdG9wOiA3cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZsb2F0OiBib3R0b207XHJcbiAgd2lkdGg6IDMzLjMzMzMzMyU7XHJcbn1cclxuXHJcbm1hdC1pY29uIHtcclxuICBmb250LXNpemU6IDEwdnc7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uYWN0aXZlIHtcclxuICBjb2xvcjogIzAyNzVkODtcclxuICBib3JkZXItYm90dG9tLXN0eWxlOiBzb2xpZDtcclxuICBib3JkZXItY29sb3I6ICMwMjc1ZDg7XHJcbiAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwwLDAsMC4xMiksIDAgMXB4IDJweCByZ2JhKDAsMCwwLDAuMjQpO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGN1YmljLWJlemllciguMjUsLjgsLjI1LDEpO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/mobile-navbar/mobile-navbar.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/mobile-navbar/mobile-navbar.component.ts ***!
  \**********************************************************/
/*! exports provided: MobileNavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobileNavbarComponent", function() { return MobileNavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-device-detector */ "./node_modules/ngx-device-detector/fesm5/ngx-device-detector.js");



var MobileNavbarComponent = /** @class */ (function () {
    function MobileNavbarComponent(deviceService) {
        this.deviceService = deviceService;
        this.display = [];
        this.DESKTOP = false;
        this.toggle = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.DESKTOP = this.deviceService.isDesktop();
    }
    ;
    Object.defineProperty(MobileNavbarComponent.prototype, "inp", {
        set: function (input) {
            console.log("INP", input);
            this.display = input;
        },
        enumerable: true,
        configurable: true
    });
    MobileNavbarComponent.prototype.ngOnInit = function () {
    };
    MobileNavbarComponent.prototype.toggleValue = function (index) {
        this.toggle.emit(index);
    };
    MobileNavbarComponent.ctorParameters = function () { return [
        { type: ngx_device_detector__WEBPACK_IMPORTED_MODULE_2__["DeviceDetectorService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], MobileNavbarComponent.prototype, "inp", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], MobileNavbarComponent.prototype, "toggle", void 0);
    MobileNavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mobile-navbar',
            template: __webpack_require__(/*! raw-loader!./mobile-navbar.component.html */ "./node_modules/raw-loader/index.js!./src/app/mobile-navbar/mobile-navbar.component.html"),
            styles: [__webpack_require__(/*! ./mobile-navbar.component.css */ "./src/app/mobile-navbar/mobile-navbar.component.css")]
        })
    ], MobileNavbarComponent);
    return MobileNavbarComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nav {\r\n  position: fixed;\r\n  z-index: 1;\r\n  width: 100%;\r\n  top: 0%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLFVBQVU7RUFDVixXQUFXO0VBQ1gsT0FBTztBQUNUIiwiZmlsZSI6InNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibmF2IHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgei1pbmRleDogMTtcclxuICB3aWR0aDogMTAwJTtcclxuICB0b3A6IDAlO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");





var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(userService, apiService, router) {
        var _this = this;
        this.userService = userService;
        this.apiService = apiService;
        this.router = router;
        this.myEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.userService.currentUser.subscribe(function (user) { return _this.currentUser = user; });
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.logout = function () {
        this.currentUser = null;
        this.userService.logout();
        this.callParent();
    };
    NavbarComponent.prototype.findParty = function () {
        var _this = this;
        if (this.currentUser) {
            this.apiService.get_events_by_user(this.currentUser.user_id).subscribe(function (data) {
                if (data.length) {
                    console.log(data);
                    _this.router.navigate(['party', data[0].event_id]);
                }
                else {
                    _this.router.navigate(['host']);
                }
                (function (error) {
                    console.log(error);
                });
            });
        }
        else {
            this.router.navigate(['join']);
        }
    };
    NavbarComponent.prototype.callParent = function () {
        this.myEvent.emit('eventDesc');
    };
    NavbarComponent.ctorParameters = function () { return [
        { type: _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
        { type: _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], NavbarComponent.prototype, "myEvent", void 0);
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/index.js!./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
        })
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/party/party.component.css":
/*!*******************************************!*\
  !*** ./src/app/party/party.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".party-container {\r\n    width: 50%;\r\n    margin-left: 25%;\r\n    margin-top: 52%;\r\n    padding-top: 17.5%;\r\n    text-align: center;\r\n    /* background-color: #222222;\r\n    color: #ffffff !important; */\r\n  }\r\n\r\n.display-div {\r\n  height: 100%;\r\n}\r\n\r\ntable {\r\n    width: 100%;\r\n    text-align: left;\r\n}\r\n\r\n.buttons-right {\r\n    text-align: right;\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\n.arrow-button {\r\n  /* background-color: #4285F4; */\r\n  /* border-style: solid; */\r\n  /* border-color: #4285F4; */\r\n  /* font-size: 7vw; */\r\n  padding-top: 15%;\r\n  padding-bottom: 15%;\r\n  /* padding-right: 15%; */\r\n  transform: scale(1.25);\r\n  margin: 0%;\r\n  width: 100%;\r\n  color: #4285F4;\r\n  cursor: pointer;\r\n  text-align: center;\r\n}\r\n\r\n.arrow-button-up-voted {\r\n  /* background-color: white; */\r\n  color: #00C851;\r\n}\r\n\r\n.arrow-button-down-voted {\r\n  /* background-color: white; */\r\n  color: #ff4444;\r\n}\r\n\r\n@media only screen and (max-width: 600px) {\r\n   .party-container {\r\n     width: 100%;\r\n     margin-left: 0%;\r\n   }\r\n}\r\n\r\n.end-party-button {\r\n  float: right;\r\n  border: 0;\r\n}\r\n\r\n.account-party {\r\n  padding-top: 5%;\r\n}\r\n\r\n.spotify-row {\r\n  display: inline-flex;\r\n  width: 80%;\r\n  padding: 0;\r\n}\r\n\r\n.spotify-artowrk {\r\n  width: 20%;\r\n  height: 100%;\r\n}\r\n\r\n.spotify-td {\r\n  display: flex;\r\n}\r\n\r\n.spotify-title {\r\n  color: #606060;\r\n  width: 100%;\r\n  text-overflow: ellipsis;\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n}\r\n\r\n.spotify-artist {\r\n  color: darkgray;\r\n  width: 100%;\r\n  text-overflow: ellipsis;\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n}\r\n\r\n.mat-column-select {\r\n  overflow: initial;\r\n}\r\n\r\n/* .info-text {\r\n  width: -webkit-fill-available;\r\n} */\r\n\r\n.example-card {\r\n  width: -webkit-stretch-avaliable;\r\n  height: -webkit-stretch-avaliable;\r\n}\r\n\r\n.song-card {\r\n  width: 10%;\r\n  height:10%;\r\n}\r\n\r\n.queued-songs{\r\n  height: 300px !important;\r\n}\r\n\r\n.image-text{\r\n  margin-top: 0px;\r\n}\r\n\r\nmat-grid-list {\r\n  background-color: black;\r\n}\r\n\r\nmat-card img{\r\n  -o-object-fit: contain;\r\n     object-fit: contain; /*this makes the image in src fit to the size specified below*/\r\n  height: 75%; /* Here you can use wherever you want to specify the width and also the height of the <img>*/\r\n}\r\n\r\nmat-card {\r\n  justify-content: center;\r\n  height: 100%;\r\n  width: 100%;\r\n  text-align: center;\r\n  background-color: black;\r\n}\r\n\r\nmat-card-title {\r\n  font-size: 2vw;\r\n  color: white;\r\n}\r\n\r\nmat-card-content {\r\n  color: #95a3b3;\r\n}\r\n\r\nmat-card-subtitle {\r\n  color: #95a3b3;\r\n}\r\n\r\n.left-align-card {\r\n  text-align: left;\r\n}\r\n\r\n.my-mat-card-title {\r\n  font-size: 1.25vw;\r\n  margin: 0;\r\n  text-overflow: ellipsis;\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n  color: white;\r\n\r\n}\r\n\r\n.my-mat-card-subtitle {\r\n  margin: 0;\r\n  text-overflow: ellipsis;\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n  color: #95a3b3;\r\n}\r\n\r\n.card-header-info {\r\n  height: 25%;\r\n  width: 100%;\r\n}\r\n\r\n.bottom-text{\r\n  position: absolute;\r\n  bottom: 0;\r\n  font-size: 2vw;\r\n\r\n}\r\n\r\n.arrow-icon-button {\r\n  color: white;\r\n  cursor: pointer;\r\n}\r\n\r\n.arrow-icon-button:hover {\r\n  background-color: gray;\r\n  opacity: 50%;\r\n}\r\n\r\n.votes-card {\r\n  position: absolute;\r\n  top: 20%;\r\n  width: 100%;\r\n  height: 75%;\r\n  left: 0;\r\n  padding: 16px;\r\n}\r\n\r\n.vote-contain {\r\n  /* width: 90%; */\r\n  text-align: center;\r\n  /* margin-left: 25%;\r\n  margin-right: 25%; */\r\n  overflow: visible;\r\n  height: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.vote-icon-contain {\r\n  height: 25%;\r\n  width: 25%;\r\n  position: absolute;\r\n  bottom: 15%;\r\n  left: 15%;\r\n\r\n}\r\n\r\n.votes-contain > img {\r\n  /* width: 90%; */\r\n  height: 100% !important;\r\n}\r\n\r\n.votes-icon {\r\n  transform: scale(4.5);\r\n  color: #ff4081;\r\n  opacity: 75%;\r\n  position: absolute;\r\n  bottom: 20%;\r\n  left: 15%;\r\n}\r\n\r\n.votes-text{\r\n  color: white;\r\n  position: absolute;\r\n  top: 1%;\r\n  left: 15%;\r\n  font-size: 5vh;\r\n}\r\n\r\n.tv-button {\r\n  background-color: primary;\r\n}\r\n\r\n.queue-table {\r\n  margin-bottom: 10%;\r\n  font-family: Roboto;\r\n}\r\n\r\n.skip-button{\r\n  color: white;\r\n  position: absolute;\r\n  bottom: 50px;\r\n  left: 0;\r\n  background-color: #FF4081\r\n}\r\n\r\n.desktop {\r\n  background-color: black;\r\n}\r\n\r\n.account-user {\r\n  margin-left: 2%;\r\n  margin-right: 2%;\r\n}\r\n\r\n.account-buttons {\r\n  margin: 3%;\r\n  width: 75%;\r\n  border-radius: 15px;\r\n}\r\n\r\n.account-party-info {\r\n  text-align: left;\r\n}\r\n\r\n.account-box {\r\n  padding-left: 5%;\r\n  padding-right: 5%;\r\n  padding-bottom: 15%;\r\n  width: 100%;\r\n}\r\n\r\n.profile-icon {\r\n  width: 30%;\r\n  height: 100%;\r\n  border-style: solid;\r\n  border-width: 4px;\r\n  border-color: #95a3b3;\r\n}\r\n\r\n.username {\r\n  font-size: 6vw;\r\n  padding-top: 9%;\r\n  margin-left: 2%;\r\n}\r\n\r\n.queue-table {\r\n  width: 100%;\r\n  display: block;\r\n  padding-bottom: 5%;\r\n}\r\n\r\n.queue-table-row {\r\n  width: 100%;\r\n  display: inline-flex;\r\n  height: 5%;\r\n  border-bottom-style: solid;\r\n  border-bottom-width: 1px;\r\n  border-bottom-color: lightgray;\r\n}\r\n\r\n.artwork {\r\n  /* height: 100%; */\r\n  width: 19%;\r\n  display: block;\r\n  background-color: black;\r\n}\r\n\r\n.artwork > img {\r\n  -o-object-fit: contain;\r\n     object-fit: contain;\r\n  width: 100%;;\r\n  position: relative;\r\n  top: 50%;\r\n  transform: translateY(-50%);\r\n}\r\n\r\n.song-info {\r\n  padding-top: 3%;\r\n  font-size: 3.5vw;\r\n  width: 63%;\r\n  padding-left: 2%;\r\n}\r\n\r\n.votes {\r\n  width: 18%;\r\n  display: inline-flex;\r\n}\r\n\r\n.vote-pop {\r\n  /* position: absolute;\r\n  bottom: 0;\r\n  left: 0;\r\n  height: 25%; */\r\n  width: 40%;\r\n}\r\n\r\n.vote-pop > mat-icon {\r\n  color: #ff4081;\r\n  opacity: 75%;\r\n  position: relative;\r\n  top: 50%;\r\n  transform: translateY(-50%) scale(1.45);\r\n  /* transform: scale(1.25); */\r\n}\r\n\r\n.vote-pop  > b {\r\n  color: white;\r\n  position: relative;\r\n  top: -7%;\r\n  /* transform: translateY(-50%); */\r\n}\r\n\r\n.vote-buttons {\r\n  width: 60%;\r\n  height: 100%;\r\n  display: block;\r\n  overflow: hidden\r\n}\r\n\r\n.vote-buttons > mat-icon {\r\n  width: 100% !important;\r\n}\r\n\r\n.queue-header {\r\n  padding-left: 5%;\r\n  color: #606060;\r\n  /* color: darkgray; */\r\n  padding-top: 2%;\r\n  padding-bottom: 2%;\r\n  font-size: 4vw;\r\n  /* border-bottom-style: none !important; */\r\n}\r\n\r\n.description {\r\n  position: relative;\r\n  bottom: 0;\r\n}\r\n\r\n/* mat-button {\r\n  background-color: black;\r\n  color: white;\r\n} */\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFydHkvcGFydHkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEI7Z0NBQzRCO0VBQzlCOztBQUVGO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0lBQ0ksV0FBVztJQUNYLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixVQUFVO0lBQ1YsU0FBUztBQUNiOztBQUVBO0VBQ0UsK0JBQStCO0VBQy9CLHlCQUF5QjtFQUN6QiwyQkFBMkI7RUFDM0Isb0JBQW9CO0VBQ3BCLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsd0JBQXdCO0VBQ3hCLHNCQUFzQjtFQUN0QixVQUFVO0VBQ1YsV0FBVztFQUNYLGNBQWM7RUFDZCxlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLGNBQWM7QUFDaEI7O0FBR0E7RUFDRSw2QkFBNkI7RUFDN0IsY0FBYztBQUNoQjs7QUFFQTtHQUNHO0tBQ0UsV0FBVztLQUNYLGVBQWU7R0FDakI7QUFDSDs7QUFFQTtFQUNFLFlBQVk7RUFDWixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLFVBQVU7RUFDVixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsY0FBYztFQUNkLFdBQVc7RUFDWCx1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBQ0E7O0dBRUc7O0FBRUg7RUFDRSxnQ0FBZ0M7RUFDaEMsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFVBQVU7QUFDWjs7QUFFQTtFQUNFLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxzQkFBbUI7S0FBbkIsbUJBQW1CLEVBQUUsOERBQThEO0VBQ25GLFdBQVcsRUFBRSw0RkFBNEY7QUFDM0c7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsY0FBYztFQUNkLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLFNBQVM7RUFDVCx1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixZQUFZOztBQUVkOztBQUVBO0VBQ0UsU0FBUztFQUNULHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsV0FBVztBQUNiOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxjQUFjOztBQUVoQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsV0FBVztFQUNYLFdBQVc7RUFDWCxPQUFPO0VBQ1AsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQjtzQkFDb0I7RUFDcEIsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFNBQVM7O0FBRVg7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGNBQWM7RUFDZCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxTQUFTO0VBQ1QsY0FBYztBQUNoQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFHQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBQ0E7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixPQUFPO0VBQ1A7QUFDRjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBQ0E7RUFDRSxVQUFVO0VBQ1YsVUFBVTtFQUNWLG1CQUFtQjtBQUNyQjs7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFVBQVU7RUFDVixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxvQkFBb0I7RUFDcEIsVUFBVTtFQUNWLDBCQUEwQjtFQUMxQix3QkFBd0I7RUFDeEIsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixjQUFjO0VBQ2QsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0Usc0JBQW1CO0tBQW5CLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1Ysb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0U7OztnQkFHYztFQUNkLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUix1Q0FBdUM7RUFDdkMsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsaUNBQWlDO0FBQ25DOztBQUdBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7RUFDWixjQUFjO0VBQ2Q7QUFDRjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLDBDQUEwQztBQUM1Qzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0FBQ1g7O0FBRUE7OztHQUdHIiwiZmlsZSI6InNyYy9hcHAvcGFydHkvcGFydHkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYXJ0eS1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAyNSU7XHJcbiAgICBtYXJnaW4tdG9wOiA1MiU7XHJcbiAgICBwYWRkaW5nLXRvcDogMTcuNSU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyMjIyO1xyXG4gICAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDsgKi9cclxuICB9XHJcblxyXG4uZGlzcGxheS1kaXYge1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxudGFibGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4uYnV0dG9ucy1yaWdodCB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5hcnJvdy1idXR0b24ge1xyXG4gIC8qIGJhY2tncm91bmQtY29sb3I6ICM0Mjg1RjQ7ICovXHJcbiAgLyogYm9yZGVyLXN0eWxlOiBzb2xpZDsgKi9cclxuICAvKiBib3JkZXItY29sb3I6ICM0Mjg1RjQ7ICovXHJcbiAgLyogZm9udC1zaXplOiA3dnc7ICovXHJcbiAgcGFkZGluZy10b3A6IDE1JTtcclxuICBwYWRkaW5nLWJvdHRvbTogMTUlO1xyXG4gIC8qIHBhZGRpbmctcmlnaHQ6IDE1JTsgKi9cclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMjUpO1xyXG4gIG1hcmdpbjogMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgY29sb3I6ICM0Mjg1RjQ7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmFycm93LWJ1dHRvbi11cC12b3RlZCB7XHJcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7ICovXHJcbiAgY29sb3I6ICMwMEM4NTE7XHJcbn1cclxuXHJcblxyXG4uYXJyb3ctYnV0dG9uLWRvd24tdm90ZWQge1xyXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IHdoaXRlOyAqL1xyXG4gIGNvbG9yOiAjZmY0NDQ0O1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgIC5wYXJ0eS1jb250YWluZXIge1xyXG4gICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgIG1hcmdpbi1sZWZ0OiAwJTtcclxuICAgfVxyXG59XHJcblxyXG4uZW5kLXBhcnR5LWJ1dHRvbiB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIGJvcmRlcjogMDtcclxufVxyXG5cclxuLmFjY291bnQtcGFydHkge1xyXG4gIHBhZGRpbmctdG9wOiA1JTtcclxufVxyXG5cclxuLnNwb3RpZnktcm93IHtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICB3aWR0aDogODAlO1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi5zcG90aWZ5LWFydG93cmsge1xyXG4gIHdpZHRoOiAyMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uc3BvdGlmeS10ZCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLnNwb3RpZnktdGl0bGUge1xyXG4gIGNvbG9yOiAjNjA2MDYwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLnNwb3RpZnktYXJ0aXN0IHtcclxuICBjb2xvcjogZGFya2dyYXk7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4ubWF0LWNvbHVtbi1zZWxlY3Qge1xyXG4gIG92ZXJmbG93OiBpbml0aWFsO1xyXG59XHJcbi8qIC5pbmZvLXRleHQge1xyXG4gIHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xyXG59ICovXHJcblxyXG4uZXhhbXBsZS1jYXJkIHtcclxuICB3aWR0aDogLXdlYmtpdC1zdHJldGNoLWF2YWxpYWJsZTtcclxuICBoZWlnaHQ6IC13ZWJraXQtc3RyZXRjaC1hdmFsaWFibGU7XHJcbn1cclxuXHJcbi5zb25nLWNhcmQge1xyXG4gIHdpZHRoOiAxMCU7XHJcbiAgaGVpZ2h0OjEwJTtcclxufVxyXG5cclxuLnF1ZXVlZC1zb25nc3tcclxuICBoZWlnaHQ6IDMwMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5pbWFnZS10ZXh0e1xyXG4gIG1hcmdpbi10b3A6IDBweDtcclxufVxyXG5cclxubWF0LWdyaWQtbGlzdCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbm1hdC1jYXJkIGltZ3tcclxuICBvYmplY3QtZml0OiBjb250YWluOyAvKnRoaXMgbWFrZXMgdGhlIGltYWdlIGluIHNyYyBmaXQgdG8gdGhlIHNpemUgc3BlY2lmaWVkIGJlbG93Ki9cclxuICBoZWlnaHQ6IDc1JTsgLyogSGVyZSB5b3UgY2FuIHVzZSB3aGVyZXZlciB5b3Ugd2FudCB0byBzcGVjaWZ5IHRoZSB3aWR0aCBhbmQgYWxzbyB0aGUgaGVpZ2h0IG9mIHRoZSA8aW1nPiovXHJcbn1cclxuXHJcbm1hdC1jYXJkIHtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG5tYXQtY2FyZC10aXRsZSB7XHJcbiAgZm9udC1zaXplOiAydnc7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5tYXQtY2FyZC1jb250ZW50IHtcclxuICBjb2xvcjogIzk1YTNiMztcclxufVxyXG5cclxubWF0LWNhcmQtc3VidGl0bGUge1xyXG4gIGNvbG9yOiAjOTVhM2IzO1xyXG59XHJcblxyXG4ubGVmdC1hbGlnbi1jYXJkIHtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4ubXktbWF0LWNhcmQtdGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMS4yNXZ3O1xyXG4gIG1hcmdpbjogMDtcclxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgY29sb3I6IHdoaXRlO1xyXG5cclxufVxyXG5cclxuLm15LW1hdC1jYXJkLXN1YnRpdGxlIHtcclxuICBtYXJnaW46IDA7XHJcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGNvbG9yOiAjOTVhM2IzO1xyXG59XHJcblxyXG4uY2FyZC1oZWFkZXItaW5mbyB7XHJcbiAgaGVpZ2h0OiAyNSU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5ib3R0b20tdGV4dHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGZvbnQtc2l6ZTogMnZ3O1xyXG5cclxufVxyXG5cclxuLmFycm93LWljb24tYnV0dG9uIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uYXJyb3ctaWNvbi1idXR0b246aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XHJcbiAgb3BhY2l0eTogNTAlO1xyXG59XHJcblxyXG4udm90ZXMtY2FyZCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMjAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNzUlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcGFkZGluZzogMTZweDtcclxufVxyXG5cclxuLnZvdGUtY29udGFpbiB7XHJcbiAgLyogd2lkdGg6IDkwJTsgKi9cclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgLyogbWFyZ2luLWxlZnQ6IDI1JTtcclxuICBtYXJnaW4tcmlnaHQ6IDI1JTsgKi9cclxuICBvdmVyZmxvdzogdmlzaWJsZTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLnZvdGUtaWNvbi1jb250YWluIHtcclxuICBoZWlnaHQ6IDI1JTtcclxuICB3aWR0aDogMjUlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDE1JTtcclxuICBsZWZ0OiAxNSU7XHJcblxyXG59XHJcblxyXG4udm90ZXMtY29udGFpbiA+IGltZyB7XHJcbiAgLyogd2lkdGg6IDkwJTsgKi9cclxuICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnZvdGVzLWljb24ge1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoNC41KTtcclxuICBjb2xvcjogI2ZmNDA4MTtcclxuICBvcGFjaXR5OiA3NSU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogMjAlO1xyXG4gIGxlZnQ6IDE1JTtcclxufVxyXG5cclxuLnZvdGVzLXRleHR7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDElO1xyXG4gIGxlZnQ6IDE1JTtcclxuICBmb250LXNpemU6IDV2aDtcclxufVxyXG5cclxuLnR2LWJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcHJpbWFyeTtcclxufVxyXG5cclxuXHJcbi5xdWV1ZS10YWJsZSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTAlO1xyXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XHJcbn1cclxuLnNraXAtYnV0dG9ue1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiA1MHB4O1xyXG4gIGxlZnQ6IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGNDA4MVxyXG59XHJcblxyXG4uZGVza3RvcCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5hY2NvdW50LXVzZXIge1xyXG4gIG1hcmdpbi1sZWZ0OiAyJTtcclxuICBtYXJnaW4tcmlnaHQ6IDIlO1xyXG59XHJcbi5hY2NvdW50LWJ1dHRvbnMge1xyXG4gIG1hcmdpbjogMyU7XHJcbiAgd2lkdGg6IDc1JTtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG59XHJcbi5hY2NvdW50LXBhcnR5LWluZm8ge1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuLmFjY291bnQtYm94IHtcclxuICBwYWRkaW5nLWxlZnQ6IDUlO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDUlO1xyXG4gIHBhZGRpbmctYm90dG9tOiAxNSU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5wcm9maWxlLWljb24ge1xyXG4gIHdpZHRoOiAzMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgYm9yZGVyLXdpZHRoOiA0cHg7XHJcbiAgYm9yZGVyLWNvbG9yOiAjOTVhM2IzO1xyXG59XHJcblxyXG4udXNlcm5hbWUge1xyXG4gIGZvbnQtc2l6ZTogNnZ3O1xyXG4gIHBhZGRpbmctdG9wOiA5JTtcclxuICBtYXJnaW4tbGVmdDogMiU7XHJcbn1cclxuXHJcbi5xdWV1ZS10YWJsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcGFkZGluZy1ib3R0b206IDUlO1xyXG59XHJcblxyXG4ucXVldWUtdGFibGUtcm93IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBoZWlnaHQ6IDUlO1xyXG4gIGJvcmRlci1ib3R0b20tc3R5bGU6IHNvbGlkO1xyXG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDFweDtcclxuICBib3JkZXItYm90dG9tLWNvbG9yOiBsaWdodGdyYXk7XHJcbn1cclxuXHJcbi5hcnR3b3JrIHtcclxuICAvKiBoZWlnaHQ6IDEwMCU7ICovXHJcbiAgd2lkdGg6IDE5JTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLmFydHdvcmsgPiBpbWcge1xyXG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XHJcbiAgd2lkdGg6IDEwMCU7O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbn1cclxuXHJcbi5zb25nLWluZm8ge1xyXG4gIHBhZGRpbmctdG9wOiAzJTtcclxuICBmb250LXNpemU6IDMuNXZ3O1xyXG4gIHdpZHRoOiA2MyU7XHJcbiAgcGFkZGluZy1sZWZ0OiAyJTtcclxufVxyXG5cclxuLnZvdGVzIHtcclxuICB3aWR0aDogMTglO1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG59XHJcblxyXG4udm90ZS1wb3Age1xyXG4gIC8qIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDA7XHJcbiAgbGVmdDogMDtcclxuICBoZWlnaHQ6IDI1JTsgKi9cclxuICB3aWR0aDogNDAlO1xyXG59XHJcblxyXG4udm90ZS1wb3AgPiBtYXQtaWNvbiB7XHJcbiAgY29sb3I6ICNmZjQwODE7XHJcbiAgb3BhY2l0eTogNzUlO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSkgc2NhbGUoMS40NSk7XHJcbiAgLyogdHJhbnNmb3JtOiBzY2FsZSgxLjI1KTsgKi9cclxufVxyXG5cclxuLnZvdGUtcG9wICA+IGIge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiAtNyU7XHJcbiAgLyogdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpOyAqL1xyXG59XHJcblxyXG5cclxuLnZvdGUtYnV0dG9ucyB7XHJcbiAgd2lkdGg6IDYwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlblxyXG59XHJcblxyXG4udm90ZS1idXR0b25zID4gbWF0LWljb24ge1xyXG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5xdWV1ZS1oZWFkZXIge1xyXG4gIHBhZGRpbmctbGVmdDogNSU7XHJcbiAgY29sb3I6ICM2MDYwNjA7XHJcbiAgLyogY29sb3I6IGRhcmtncmF5OyAqL1xyXG4gIHBhZGRpbmctdG9wOiAyJTtcclxuICBwYWRkaW5nLWJvdHRvbTogMiU7XHJcbiAgZm9udC1zaXplOiA0dnc7XHJcbiAgLyogYm9yZGVyLWJvdHRvbS1zdHlsZTogbm9uZSAhaW1wb3J0YW50OyAqL1xyXG59XHJcblxyXG4uZGVzY3JpcHRpb24ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBib3R0b206IDA7XHJcbn1cclxuXHJcbi8qIG1hdC1idXR0b24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufSAqL1xyXG4iXX0= */"

/***/ }),

/***/ "./src/app/party/party.component.ts":
/*!******************************************!*\
  !*** ./src/app/party/party.component.ts ***!
  \******************************************/
/*! exports provided: PartyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartyComponent", function() { return PartyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _classes_event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @classes/event */ "./src/app/Classes/event.ts");
/* harmony import */ var _classes_vote__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @classes/vote */ "./src/app/Classes/vote.ts");
/* harmony import */ var _classes_queuedSong__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @classes/queuedSong */ "./src/app/Classes/queuedSong.ts");
/* harmony import */ var _song_search_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../song-search.service */ "./src/app/song-search.service.ts");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _token_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../token.service */ "./src/app/token.service.ts");
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-device-detector */ "./node_modules/ngx-device-detector/fesm5/ngx-device-detector.js");















var PartyComponent = /** @class */ (function () {
    function PartyComponent(songSearchService, apiService, router, route, snackBar, userService, tokenService, deviceService) {
        var _this = this;
        this.songSearchService = songSearchService;
        this.apiService = apiService;
        this.router = router;
        this.route = route;
        this.snackBar = snackBar;
        this.userService = userService;
        this.tokenService = tokenService;
        this.deviceService = deviceService;
        this.event = new _classes_event__WEBPACK_IMPORTED_MODULE_2__["Event"]();
        this.queuedSongs = [];
        this.displayedColumns = ['Songs', 'Score', 'Vote'];
        this.displayedColumnsRecommendations = ['Songs'];
        this.results = [];
        this.display = [1, 0, 0, 0];
        this.spotifyUserInfo = {};
        this.HOST = false;
        this.showInfoText = true;
        this.showOptions = false;
        this.showRecommendationsTable = false;
        this.matIconArrowLabel = 'keyboard_arrow_down';
        this.showProfileInfo = false;
        this.recommendations = [];
        this.DESKTOP = this.deviceService.isDesktop();
        this.width = window.innerWidth;
        this.padding = window.pageYOffset / window.innerHeight;
        this.height = window.innerHeight;
        this.id = route.snapshot.paramMap.get('id');
        this.userService.currentUser.subscribe(function (user) {
            user ? _this.user = user : _this.router.navigate(['']);
            _this.apiService.get_token(_this.user.user_id).subscribe(function (token) {
                _this.userService.getProfile(token[0]['spotify_access']).subscribe(function (data) {
                    console.log(data);
                    _this.spotifyUserInfo = data;
                }, function (error) {
                    console.log(error);
                });
            }, function (error) { return console.log(error); });
            _this.apiService.get_event(parseInt(_this.id)).subscribe(function (data) {
                if (data) {
                    _this.event = data[0];
                    _this.HOST = _this.event.user_id == _this.user.user_id;
                    _this.queuedSongs$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_10__["timer"])(0, 500).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["switchMap"])(function () { return _this.apiService.get_queuedSongsVotes(_this.event.event_id, _this.user.user_id); }));
                }
            }, function (error) {
                if (error.status >= 400) {
                    console.log(error);
                }
            });
        });
    }
    PartyComponent.prototype.upvote = function (order_num, song_id, platform, old_vote) {
        var _this = this;
        var voted = old_vote != null;
        old_vote = parseInt(old_vote);
        this.queuedSong = new _classes_queuedSong__WEBPACK_IMPORTED_MODULE_4__["QueuedSong"];
        this.queuedSong.event_id = this.event.event_id;
        this.queuedSong.order_num = order_num;
        this.queuedSong.song_id = song_id;
        this.queuedSong.platform = platform;
        var vote_amount = [2, 1, -1];
        this.queuedSong.popularity = old_vote ? vote_amount[old_vote + 1] : 1;
        this.apiService.put_QueuedSong(this.queuedSong).subscribe(function (data) {
            var vote = new _classes_vote__WEBPACK_IMPORTED_MODULE_3__["Vote"]();
            vote.user_id = _this.user.user_id;
            vote.event_id = _this.event.event_id;
            vote.vote = old_vote && old_vote == 1 ? 0 : 1;
            vote.song_id = song_id;
            vote.platform = platform;
            vote.order_num = parseInt(order_num);
            console.log(vote);
            if (voted) {
                _this.apiService.put_vote(vote).subscribe(function (data) { return console.log(data); }, function (error) { return console.log(error); });
            }
            else {
                _this.apiService.post_vote(vote).subscribe(function (data) { return console.log(data); }, function (error) { return console.log(error); });
            }
        }, function (error) {
            if (error.status >= 400) {
                console.log(error);
            }
        });
    };
    PartyComponent.prototype.downvote = function (order_num, song_id, platform, old_vote) {
        var _this = this;
        var voted = old_vote != null;
        old_vote = parseInt(old_vote);
        this.queuedSong = new _classes_queuedSong__WEBPACK_IMPORTED_MODULE_4__["QueuedSong"];
        this.queuedSong.event_id = this.event.event_id;
        this.queuedSong.order_num = order_num;
        this.queuedSong.song_id = song_id;
        this.queuedSong.platform = platform;
        var vote_amount = [1, -1, -2];
        this.queuedSong.popularity = old_vote ? vote_amount[old_vote + 1] : -1;
        this.apiService.put_QueuedSong(this.queuedSong).subscribe(function (data) {
            var vote = new _classes_vote__WEBPACK_IMPORTED_MODULE_3__["Vote"]();
            vote.user_id = _this.user.user_id;
            vote.event_id = _this.event.event_id;
            vote.vote = old_vote && old_vote == -1 ? 0 : -1;
            vote.song_id = song_id;
            vote.platform = platform;
            vote.order_num = parseInt(order_num);
            if (voted) {
                _this.apiService.put_vote(vote).subscribe(function (data) { }, function (error) { return console.log(error); });
            }
            else {
                _this.apiService.post_vote(vote).subscribe(function (data) { }, function (error) { return console.log(error); });
            }
        }, function (error) {
            if (error.status >= 400) {
                console.log(error);
            }
        });
    };
    PartyComponent.prototype.ngOnInit = function () {
    };
    PartyComponent.prototype.onEndPartyClick = function () {
        this.showOptions = true;
    };
    PartyComponent.prototype.onEndPartyNOClick = function () {
        this.showOptions = false;
        this.showProfileInfo = false;
    };
    PartyComponent.prototype.onEndPartyYESClick = function () {
        var _this = this;
        this.router.navigate(['/']);
        this.apiService.delete_Event(this.event.event_id).subscribe(function (data) {
            var snackBarRef = _this.snackBar.open('Your event was successfully deleted', 'DISMISS');
            // snackBarRef.onAction().subscribe(() => {
            // });
        }, function (error) {
            console.log(error);
        });
    };
    PartyComponent.prototype.loginSpotify = function () {
        this.tokenService.getSpotifyToken(String(this.event.event_id));
    };
    PartyComponent.prototype.toggleDisplay = function (index) {
        this.display = [0, 0, 0, 0];
        this.display[index] = 1;
    };
    PartyComponent.prototype.trackByFunction = function (index, item) {
        if (!item)
            return null;
        return index;
    };
    PartyComponent.prototype.logout = function () {
        this.userService.logout();
        this.router.navigate(['']);
    };
    PartyComponent.prototype.leaveParty = function () {
        this.router.navigate(['join']);
    };
    PartyComponent.prototype.onResize = function (event) {
        this.width = window.innerWidth;
        this.height = window.innerHeight;
    };
    PartyComponent.prototype.hideText = function () {
        if (this.showInfoText) {
            this.showInfoText = false;
            this.matIconArrowLabel = 'keyboard_arrow_up';
        }
        else {
            this.showInfoText = true;
            this.matIconArrowLabel = 'keyboard_arrow_down';
        }
    };
    PartyComponent.prototype.showProfileOptions = function () {
        if (this.showProfileInfo) {
            this.showProfileInfo = false;
        }
        else {
            this.showProfileInfo = true;
        }
    };
    PartyComponent.prototype.onScroll = function (event) {
        this.padding = window.pageYOffset / window.innerHeight;
    };
    PartyComponent.prototype.goFullscreen = function () {
        // this.openFullscreen();
        console.log(screen.width, window.innerWidth);
        if (window.innerWidth == screen.width && window.innerHeight == screen.height) {
            this.closeFullscreen();
        }
        else {
            this.openFullscreen();
        }
        // document.body.requestFullscreen();
    };
    PartyComponent.prototype.openFullscreen = function () {
        var elem = document.documentElement;
        // console.log(elem);
        if (document.body['requestFullscreen']) {
            document.body.requestFullscreen();
        }
        // else if (elem['mozRequestFullScreen']) {
        //   elem.mozRequestFullScreen();
        // } else if (elem['webkitRequestFullscreen']) {
        //   elem.webkitRequestFullscreen();
        // } else if (elem['msRequestFullscreen']) {
        //   elem.msRequestFullscreen();
        // }
    };
    /* Close fullscreen */
    PartyComponent.prototype.closeFullscreen = function () {
        var elem = document.documentElement;
        if (document['exitFullscreen']) {
            document.exitFullscreen();
        }
        //  else if (elem['mozCancelFullScreen']) {
        //   elem.mozCancelFullScreen();
        // } else if (elem['webkitExitFullscreen']) {
        //   elem.webkitExitFullscreen();
        // } else if (elem['msExitFullscreen']) {
        //   elem.msExitFullscreen();
        // }
    };
    PartyComponent.prototype.getRecommendations = function () {
        var _this = this;
        this.apiService.get_recommendations(this.event.event_id).subscribe(function (recommendations) {
            _this.recommendations = recommendations;
            _this.showRecommendationsTable = true;
        }, function (error) {
            console.log(error);
        });
    };
    PartyComponent.prototype.onSongSearch = function () {
    };
    PartyComponent.prototype.addSong = function (newSong) {
        var _this = this;
        this.apiService.get_song(newSong.song_id, newSong.platform).subscribe(function (data) {
            if (data) {
                _this.addSongToQueue(newSong.song_id, newSong.platform);
                var snackBarRef = _this.snackBar.open('"' + newSong.title + '" ' + 'was added to the queue', 'OK', { duration: 1500 });
            }
            else {
                _this.apiService.post_Song(newSong).subscribe(function (data) { return _this.addSongToQueue(newSong.song_id, newSong.platform); }, function (error) { return console.log(error); });
            }
        }, function (error) {
            console.log(error);
        });
    };
    PartyComponent.prototype.addSongToQueue = function (id, platform) {
        this.qs = new _classes_queuedSong__WEBPACK_IMPORTED_MODULE_4__["QueuedSong"]();
        this.qs.event_id = this.event.event_id;
        this.qs.song_id = id;
        this.qs.platform = platform;
        this.apiService.post_QueuedSong(this.qs).subscribe(function (data) {
        }, function (error) {
            if (error.status >= 400) {
                console.log(error);
            }
        });
    };
    //  skipSong() {
    //   if (this.HOST) {
    //     this.pauseSpotify();
    //     this.apiService.get_queuedSongs(this.event.event_id).subscribe(
    //       data => {
    //         if (data[0]) {
    //           this.empty = false;
    //           this.apiService.put_current_song(this.event.event_id, data[0]['order_num']).subscribe()
    //         } else {
    //           this.empty = true;
    //           this.song = new Song();
    //         }
    //       }
    //     )
    //   }
    // }
    // pauseSpotify() {
    //   this.userService.currentUser.subscribe(
    //     user => {
    //       this.apiService.get_token(user.user_id).subscribe(
    //         token =>  {
    //           this.spotifyPlaybackService.pauseSong(token[0]['spotify_access']);
    //         }
    //       )
    //     }
    //   )
    // }
    PartyComponent.prototype.convertBoolean = function (x) {
        if (x) {
            return x.length;
        }
        return 0;
    };
    PartyComponent.ctorParameters = function () { return [
        { type: _song_search_service__WEBPACK_IMPORTED_MODULE_5__["SongSearchService"] },
        { type: _api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] },
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__["MatSnackBar"] },
        { type: _user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"] },
        { type: _token_service__WEBPACK_IMPORTED_MODULE_12__["TokenService"] },
        { type: ngx_device_detector__WEBPACK_IMPORTED_MODULE_13__["DeviceDetectorService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('currentSong', { static: false })
    ], PartyComponent.prototype, "currentSong", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize', ['$event'])
    ], PartyComponent.prototype, "onResize", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:scroll', ['$event'])
    ], PartyComponent.prototype, "onScroll", null);
    PartyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-party',
            template: __webpack_require__(/*! raw-loader!./party.component.html */ "./node_modules/raw-loader/index.js!./src/app/party/party.component.html"),
            styles: [__webpack_require__(/*! ./party.component.css */ "./src/app/party/party.component.css")]
        })
    ], PartyComponent);
    return PartyComponent;
}());



/***/ }),

/***/ "./src/app/song-search.service.ts":
/*!****************************************!*\
  !*** ./src/app/song-search.service.ts ***!
  \****************************************/
/*! exports provided: SongSearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SongSearchService", function() { return SongSearchService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var SongSearchService = /** @class */ (function () {
    function SongSearchService(httpClient) {
        this.httpClient = httpClient;
        this.ITUNES_API = 'https://itunes.apple.com/search?term=';
        this.PHP_API_SERVER = "http://db.cse.nd.edu/cse30246/mmdj/backend/api";
        this.YOUTUBE_API = this.PHP_API_SERVER + "/youtube.php";
        this.CLIENT_ID = 'UW9ajvMgVdMMW3cdeBi8lPfN6dvOVGji';
        this.SOUNDCLOUD_API = "https://api.soundcloud.com/tracks/?client_id=" + this.CLIENT_ID;
        this.SPOTIFY_API = "https://api.spotify.com/v1/search";
    }
    SongSearchService.prototype.searchItunes = function (search_term) {
        console.log("" + this.ITUNES_API + search_term.split(' ').join('+'));
        return this.httpClient.get("" + this.ITUNES_API + search_term.split(' ').join('+')).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    };
    SongSearchService.prototype.searchDatabase = function (term) {
        // return this.apiService.get_songs(term);
    };
    SongSearchService.prototype.searchYoutube = function (search_term) {
        return this.httpClient.get(this.YOUTUBE_API + "/?query=" + search_term).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    };
    SongSearchService.prototype.searchSoundcloud = function (search_term) {
        return this.httpClient.get(this.SOUNDCLOUD_API + "&q=" + search_term).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    };
    SongSearchService.prototype.searchSpotify = function (search_term, token) {
        var headers = {
            headers: {
                'Authorization': "Bearer " + token
            }
        };
        return this.httpClient.get(this.SPOTIFY_API + "?q=" + search_term + "&type=track&limit=50", headers).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    };
    SongSearchService.prototype.errorHandler = function (error) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
    };
    SongSearchService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    SongSearchService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], SongSearchService);
    return SongSearchService;
}());



/***/ }),

/***/ "./src/app/song-search/song-search.component.css":
/*!*******************************************************!*\
  !*** ./src/app/song-search/song-search.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".search-component {\r\n  overflow: visible;\r\n  height: 20%;\r\n  width: 100%;\r\n}\r\n\r\n.input-field {\r\n  width: 95%;\r\n  border-radius: 15px;\r\n  margin-top: 2%;\r\n  margin-bottom: 2%;\r\n  border: 0;\r\n  padding: 1% 3% 1% 3%;\r\n  background-color: gainsboro;\r\n  color: black;\r\n  outline: 0;\r\n}\r\n\r\n.buttons {\r\n  width: 95%;\r\n  margin: 2%;\r\n  /*\r\n  border-radius: 15px;\r\n  padding: 1% 3% 1% 3%;\r\n  outline: 0;\r\n  width: 95%; */\r\n}\r\n\r\n.platform-button {\r\n  font-size: 3.25vw;\r\n  padding: 1%;\r\n}\r\n\r\n.input-field-active {\r\n  background-color: whitesmoke;\r\n}\r\n\r\nmat-form-field {\r\n  width: 90%;\r\n}\r\n\r\ntable {\r\n  width: 100%;\r\n}\r\n\r\ntd {\r\n    width: 100%;\r\n    cursor: pointer;\r\n    /* text-align: left; */\r\n}\r\n\r\n.youtube-td {\r\n  display: flex;\r\n  text-align: left;\r\n}\r\n\r\n.youtube-title {\r\n  width: 70%;\r\n\r\n}\r\n\r\n.youtube-td > img {\r\n  width: 25%;\r\n  margin-right: 5%;\r\n  height: 100%;\r\n}\r\n\r\n.soundcloud {\r\n  text-align: left;\r\n}\r\n\r\n.soundcloud > img {\r\n  width: 100%;\r\n}\r\n\r\n.spotify-row {\r\n  display: inline-flex;\r\n  width: 80%;\r\n  padding: 0;\r\n}\r\n\r\n.spotify-artowrk {\r\n  width: 20%;\r\n  height: 100%;\r\n}\r\n\r\n.spotify-td {\r\n  display: flex;\r\n}\r\n\r\n.spotify-title {\r\n  color: #606060;\r\n  width: 100%;\r\n}\r\n\r\n.spotify-artist {\r\n  color: darkgray;\r\n  width: 100%;\r\n}\r\n\r\n/*\r\n.add-song {\r\n  position: fixed;\r\n  z-index: 1;\r\n  top: 9%;\r\n  width: 100%;\r\n  background-color: white;\r\n} */\r\n\r\n/* .search-scroll {\r\n  padding-top: 18%;\r\n} */\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc29uZy1zZWFyY2gvc29uZy1zZWFyY2guY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsV0FBVztBQUNiOztBQUVBO0VBQ0UsVUFBVTtFQUNWLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLFNBQVM7RUFDVCxvQkFBb0I7RUFDcEIsMkJBQTJCO0VBQzNCLFlBQVk7RUFDWixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsVUFBVTtFQUNWOzs7O2VBSWE7QUFDZjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsZUFBZTtJQUNmLHNCQUFzQjtBQUMxQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxVQUFVOztBQUVaOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsVUFBVTtFQUNWLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFVBQVU7RUFDVixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsV0FBVztBQUNiOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7QUFDYjs7QUFDQTs7Ozs7OztHQU9HOztBQUVIOztHQUVHIiwiZmlsZSI6InNyYy9hcHAvc29uZy1zZWFyY2gvc29uZy1zZWFyY2guY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWFyY2gtY29tcG9uZW50IHtcclxuICBvdmVyZmxvdzogdmlzaWJsZTtcclxuICBoZWlnaHQ6IDIwJTtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmlucHV0LWZpZWxkIHtcclxuICB3aWR0aDogOTUlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgbWFyZ2luLXRvcDogMiU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMiU7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIHBhZGRpbmc6IDElIDMlIDElIDMlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdhaW5zYm9ybztcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgb3V0bGluZTogMDtcclxufVxyXG5cclxuLmJ1dHRvbnMge1xyXG4gIHdpZHRoOiA5NSU7XHJcbiAgbWFyZ2luOiAyJTtcclxuICAvKlxyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgcGFkZGluZzogMSUgMyUgMSUgMyU7XHJcbiAgb3V0bGluZTogMDtcclxuICB3aWR0aDogOTUlOyAqL1xyXG59XHJcblxyXG4ucGxhdGZvcm0tYnV0dG9uIHtcclxuICBmb250LXNpemU6IDMuMjV2dztcclxuICBwYWRkaW5nOiAxJTtcclxufVxyXG5cclxuLmlucHV0LWZpZWxkLWFjdGl2ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcclxufVxyXG5cclxubWF0LWZvcm0tZmllbGQge1xyXG4gIHdpZHRoOiA5MCU7XHJcbn1cclxuXHJcbnRhYmxlIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxudGQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAvKiB0ZXh0LWFsaWduOiBsZWZ0OyAqL1xyXG59XHJcblxyXG4ueW91dHViZS10ZCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4ueW91dHViZS10aXRsZSB7XHJcbiAgd2lkdGg6IDcwJTtcclxuXHJcbn1cclxuXHJcbi55b3V0dWJlLXRkID4gaW1nIHtcclxuICB3aWR0aDogMjUlO1xyXG4gIG1hcmdpbi1yaWdodDogNSU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uc291bmRjbG91ZCB7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuLnNvdW5kY2xvdWQgPiBpbWcge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uc3BvdGlmeS1yb3cge1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLnNwb3RpZnktYXJ0b3dyayB7XHJcbiAgd2lkdGg6IDIwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5zcG90aWZ5LXRkIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uc3BvdGlmeS10aXRsZSB7XHJcbiAgY29sb3I6ICM2MDYwNjA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5zcG90aWZ5LWFydGlzdCB7XHJcbiAgY29sb3I6IGRhcmtncmF5O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbi8qXHJcbi5hZGQtc29uZyB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgdG9wOiA5JTtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufSAqL1xyXG5cclxuLyogLnNlYXJjaC1zY3JvbGwge1xyXG4gIHBhZGRpbmctdG9wOiAxOCU7XHJcbn0gKi9cclxuIl19 */"

/***/ }),

/***/ "./src/app/song-search/song-search.component.ts":
/*!******************************************************!*\
  !*** ./src/app/song-search/song-search.component.ts ***!
  \******************************************************/
/*! exports provided: SongSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SongSearchComponent", function() { return SongSearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _song_search_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../song-search.service */ "./src/app/song-search.service.ts");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _classes_song__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @classes/song */ "./src/app/Classes/song.ts");
/* harmony import */ var _classes_queuedSong__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @classes/queuedSong */ "./src/app/Classes/queuedSong.ts");
/* harmony import */ var _token_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../token.service */ "./src/app/token.service.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");










// import { platform } from 'os';
var SongSearchComponent = /** @class */ (function () {
    function SongSearchComponent(songSearchService, apiService, tokenService, snackBar) {
        this.songSearchService = songSearchService;
        this.apiService = apiService;
        this.tokenService = tokenService;
        this.snackBar = snackBar;
        this.event_id = null;
        this.host_id = null;
        this.spotifySongs$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]();
        this.searchOptions = [1, 0, 0];
        this.searching_term = '';
        this.songs = [];
        this.searchTermsSpotify = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](['', '']);
        this.displayedColumns = ['Results'];
        this.searchTermsSoundcloud = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]('');
        this.displayedColumnsSoundcloud = ['Results'];
        this.searchTermsYoutube = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]('');
        this.displayedColumnsYoutube = ['Results'];
        this.myEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.hideRec = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        // this.songSearchService.searchSpotify('kesha').subscribe(
        //   data => {
        //     console.log('here');
        //     console.log(data);
        //   }
        // )
        // this.search_spotify('kesha');
        this.padding = window.pageYOffset / window.innerHeight;
    }
    Object.defineProperty(SongSearchComponent.prototype, "inp", {
        set: function (input) {
            this.event_id = input.event_id;
            this.host_id = input.user_id;
        },
        enumerable: true,
        configurable: true
    });
    // Push a search term into the observable stream.
    // search_spotify(term: string): void {
    //   this.searchTermsSpotify.next(term);
    // }
    SongSearchComponent.prototype.searchYoutube = function (term) {
        this.searchTermsYoutube.next(term);
    };
    SongSearchComponent.prototype.searchSoundcloud = function (term) {
        this.searchTermsSoundcloud.next(term);
    };
    SongSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.spotify$ = this.searchTermsSpotify.pipe(
        // wait 300ms after each keystroke before considering the term
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(300), 
        // ignore new term if same as previous term
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])(), 
        // switch to new search observable each time the term changes
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (term) { return _this.songSearchService.searchSpotify(term[0], term[1]); }));
        this.soundcloud$ = this.searchTermsSoundcloud.pipe(
        // wait 300ms after each keystroke before considering the term
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(300), 
        // ignore new term if same as previous term
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])(), 
        // switch to new search observable each time the term changes
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (term) { return _this.songSearchService.searchSoundcloud(term); }));
        this.youtubes$ = this.searchTermsYoutube.pipe(
        // wait 300ms after each keystroke before considering the term
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(300), 
        // ignore new term if same as previous term
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])(), 
        // switch to new search observable each time the term changes
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (term) { return _this.songSearchService.searchYoutube(term); }));
    };
    SongSearchComponent.prototype.callParent = function () {
        this.myEvent.emit('eventDesc');
    };
    SongSearchComponent.prototype.callRec = function () {
        this.hideRec.emit('eventDesc');
    };
    SongSearchComponent.prototype.addSong = function (newSong) {
        var _this = this;
        // this.searching_term = '';
        console.log(newSong);
        this.apiService.get_song(newSong.song_id, newSong.platform).subscribe(function (data) {
            if (data) { // song exists
                // call put
                _this.addSongToQueue(newSong.song_id, newSong.platform);
                // show toast
                var snackBarRef = _this.snackBar.open('"' + newSong.title + '" ' + 'was added to the queue', 'OK', { duration: 1500 });
            }
            else {
                _this.apiService.post_Song(newSong).subscribe(function (data) { return _this.addSongToQueue(newSong.song_id, newSong.platform); }, function (error) { return console.log(error); }
                //this.addSongToQueue(newSong.song_id, newSong.platform);
                );
            }
        }, function (error) {
            console.log(error);
        });
    };
    SongSearchComponent.prototype.addSongToQueue = function (id, platform) {
        var _this = this;
        this.qs = new _classes_queuedSong__WEBPACK_IMPORTED_MODULE_7__["QueuedSong"]();
        this.qs.event_id = this.event_id;
        this.qs.song_id = id;
        this.qs.platform = platform;
        this.apiService.post_QueuedSong(this.qs).subscribe(function (data) {
            _this.callParent();
        }, function (error) {
            if (error.status >= 400) {
                // this.invalid = true,
                console.log(error);
            }
        });
    };
    SongSearchComponent.prototype.convertYoutube = function (youtube) {
        var y_song = new _classes_song__WEBPACK_IMPORTED_MODULE_6__["Song"]();
        y_song.title = youtube.title;
        y_song.artist = '';
        y_song.artwork = youtube.artwork.split('?')[0];
        y_song.song_id = youtube.url.split('v=')[1].split(';')[0];
        y_song.platform = 'youtube';
        y_song.duration = 0;
        return y_song;
    };
    SongSearchComponent.prototype.convertSoundcloud = function (soundcloud) {
        var s_song = new _classes_song__WEBPACK_IMPORTED_MODULE_6__["Song"]();
        s_song.title = soundcloud.title;
        s_song.artist = soundcloud.user.username;
        s_song.song_id = String(soundcloud.id);
        if (soundcloud.artwork_url) {
            s_song.artwork = soundcloud.artwork_url;
        }
        else {
            s_song.artwork = soundcloud.user.avatar_url;
        }
        s_song.platform = 'soundcloud';
        s_song.duration = soundcloud.duration;
        return s_song;
    };
    SongSearchComponent.prototype.onButtonClick = function (index) {
        this.callRec();
        this.searchOptions = [0, 0, 0];
        this.searchOptions[index] = 1;
        if (index == 0) {
            this.search_spotify(this.searching_term);
        }
        else if (index == 1) {
            this.searchSoundcloud(this.searching_term);
        }
        else if (index == 2) {
            this.searchYoutube(this.searching_term);
        }
    };
    SongSearchComponent.prototype.convertJSON = function (data) {
        var songs = [];
        if (data && 'tracks' in data) {
            for (var item in data['tracks']['items']) {
                var mySong = new _classes_song__WEBPACK_IMPORTED_MODULE_6__["Song"]();
                mySong.artist = data['tracks']['items'][item]['artists'][0]['name'];
                mySong.platform = 'spotify';
                mySong.title = data['tracks']['items'][item]['name'];
                mySong.song_id = data['tracks']['items'][item]['id'];
                mySong.duration = data['tracks']['items'][item]['duration_ms'];
                if ('images' in data['tracks']['items'][item]['album']) {
                    if (0 in data['tracks']['items'][item]['album']['images']) {
                        if ('url' in data['tracks']['items'][item]['album']['images'][0]) {
                            mySong.artwork = data['tracks']['items'][item]['album']['images'][0]['url'];
                        }
                    }
                }
                songs.push(mySong);
            }
        }
        return songs;
    };
    SongSearchComponent.prototype.search_spotify = function (search_term) {
        var _this = this;
        if (search_term) {
            this.apiService.get_token(this.host_id).subscribe(function (token) {
                _this.searchTermsSpotify.next([search_term, token[0]['spotify_access']]);
                _this.spotifySongs$ = _this.spotify$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(300));
            });
        }
    };
    SongSearchComponent.prototype.trackByFunction = function (index, item) {
        if (!item)
            return null;
        return index;
    };
    SongSearchComponent.prototype.onScroll = function (event) {
        this.padding = window.pageYOffset / window.innerHeight;
    };
    SongSearchComponent.ctorParameters = function () { return [
        { type: _song_search_service__WEBPACK_IMPORTED_MODULE_4__["SongSearchService"] },
        { type: _api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"] },
        { type: _token_service__WEBPACK_IMPORTED_MODULE_8__["TokenService"] },
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__["MatSnackBar"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], SongSearchComponent.prototype, "inp", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], SongSearchComponent.prototype, "myEvent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], SongSearchComponent.prototype, "hideRec", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:scroll', ['$event'])
    ], SongSearchComponent.prototype, "onScroll", null);
    SongSearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-song-search',
            template: __webpack_require__(/*! raw-loader!./song-search.component.html */ "./node_modules/raw-loader/index.js!./src/app/song-search/song-search.component.html"),
            styles: [__webpack_require__(/*! ./song-search.component.css */ "./src/app/song-search/song-search.component.css")]
        })
    ], SongSearchComponent);
    return SongSearchComponent;
}());



/***/ }),

/***/ "./src/app/soundcloud/api.ts":
/*!***********************************!*\
  !*** ./src/app/soundcloud/api.ts ***!
  \***********************************/
/*! exports provided: SC */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SC", function() { return SC; });
var SC = SC || {};
SC.Widget = (function (n) {
    function t(r) {
        if (e[r])
            return e[r].exports;
        var o = (e[r] = { exports: {}, id: r, loaded: !1 });
        return n[r].call(o.exports, o, o.exports, t), (o.loaded = !0), o.exports;
    }
    var e = {};
    return (t.m = n), (t.c = e), (t.p = ""), t(0);
})([
    function (n, t, e) {
        function r(n) {
            return !!("" === n || (n && n.charCodeAt && n.substr));
        }
        function o(n) {
            return !!(n && n.constructor && n.call && n.apply);
        }
        function i(n) {
            return !(!n || 1 !== n.nodeType || "IFRAME" !== n.nodeName.toUpperCase());
        }
        function a(n) {
            var t, e = !1;
            for (t in b)
                if (b.hasOwnProperty(t) && b[t] === n) {
                    e = !0;
                    break;
                }
            return e;
        }
        function s(n) {
            var t, e, r;
            for (t = 0, e = I.length; t < e && ((r = n(I[t])), r !== !1); t++)
                ;
        }
        function u(n) {
            var t, e, r, o = "";
            for ("//" === n.substr(0, 2) && (n = window.location.protocol + n),
                r = n.split("/"),
                t = 0,
                e = r.length; t < e && t < 3; t++)
                (o += r[t]), t < 2 && (o += "/");
            return o;
        }
        function c(n) {
            return n.contentWindow
                ? n.contentWindow
                : n.contentDocument && "parentWindow" in n.contentDocument
                    ? n.contentDocument.parentWindow
                    : null;
        }
        function l(n) {
            var t, e = [];
            for (t in n)
                n.hasOwnProperty(t) && e.push(n[t]);
            return e;
        }
        function d(n, t, e) {
            (e.callbacks[n] = e.callbacks[n] || []), e.callbacks[n].push(t);
        }
        function E(n, t) {
            var e, r = !0;
            return ((t.callbacks[n] = []),
                s(function (t) {
                    if (((e = t.callbacks[n] || []), e.length))
                        return (r = !1), !1;
                }),
                r);
        }
        function f(n, t, e) {
            var r, o, i = c(e);
            return (!!i.postMessage &&
                ((r = e.getAttribute("src").split("?")[0]),
                    (o = JSON.stringify({ method: n, value: t })),
                    "//" === r.substr(0, 2) && (r = window.location.protocol + r),
                    (r = r.replace(/http:\/\/(w|wt).soundcloud.com/, "https://$1.soundcloud.com")),
                    void i.postMessage(o, r)));
        }
        function p(n) {
            var t;
            return (s(function (e) {
                if (e.instance === n)
                    return (t = e), !1;
            }),
                t);
        }
        function h(n) {
            var t;
            return (s(function (e) {
                if (c(e.element) === n)
                    return (t = e), !1;
            }),
                t);
        }
        function v(n, t) {
            return function (e) {
                var r = o(e), i = p(this), a = !r && t ? e : null, s = r && !t ? e : null;
                return s && d(n, s, i), f(n, a, i.element), this;
            };
        }
        function S(n, t, e) {
            var r, o, i;
            for (r = 0, o = t.length; r < o; r++)
                (i = t[r]), (n[i] = v(i, e));
        }
        function R(n, t, e) {
            return n + "?url=" + t + "&" + g(e);
        }
        function g(n) {
            var t, e, r = [];
            for (t in n)
                n.hasOwnProperty(t) &&
                    ((e = n[t]),
                        r.push(t +
                            "=" +
                            ("start_track" === t ? parseInt(e, 10) : e ? "true" : "false")));
            return r.join("&");
        }
        function m(n, t, e) {
            var r, o, i = n.callbacks[t] || [];
            for (r = 0, o = i.length; r < o; r++)
                i[r].apply(n.instance, e);
            (a(t) || t === L.READY) && (n.callbacks[t] = []);
        }
        function w(n) {
            var t, e, r, o, i;
            try {
                e = JSON.parse(n.data);
            }
            catch (a) {
                return !1;
            }
            return ((t = h(n.source)),
                (r = e.method),
                (o = e.value),
                (!t || A(n.origin) === A(t.domain)) &&
                    (t
                        ? (r === L.READY && ((t.isReady = !0), m(t, C), E(C, t)),
                            r !== L.PLAY || t.playEventFired || (t.playEventFired = !0),
                            r !== L.PLAY_PROGRESS ||
                                t.playEventFired ||
                                ((t.playEventFired = !0), m(t, L.PLAY, [o])),
                            (i = []),
                            void 0 !== o && i.push(o),
                            void m(t, r, i))
                        : (r === L.READY && T.push(n.source), !1)));
        }
        function A(n) {
            return n.replace(Y, "");
        }
        var _, y, O, D = e(1), b = e(2), P = e(3), L = D.api, N = D.bridge, T = [], I = [], C = "__LATE_BINDING__", k = "http://wt.soundcloud.test:9200/", Y = /^http(?:s?)/;
        window.addEventListener
            ? window.addEventListener("message", w, !1)
            : window['attachEvent']("onmessage", w),
            (n.exports = O = function (n, t, e) {
                if ((r(n) && (n = document.getElementById(n)), !i(n)))
                    throw new Error("SC.Widget function should be given either iframe element or a string specifying id attribute of iframe element.");
                t && ((e = e || {}), (n.src = R(k, t, e)));
                var o, a, s = h(c(n));
                return s && s.instance
                    ? s.instance
                    : ((o = T.indexOf(c(n)) > -1),
                        (a = new _(n)),
                        I.push(new y(a, n, o)),
                        a);
            }),
            (O.Events = L),
            (window['SC'] = window['SC'] || {}),
            (window['SC']['Widget'] = O),
            (y = function (n, t, e) {
                (this.instance = n),
                    (this.element = t),
                    (this.domain = u(t.getAttribute("src"))),
                    (this.isReady = !!e),
                    (this.callbacks = {});
            }),
            (_ = function () { }),
            (_.prototype = {
                constructor: _,
                load: function (n, t) {
                    if (n) {
                        t = t || {};
                        var e = this, r = p(this), o = r.element, i = o.src, a = i.substr(0, i.indexOf("?"));
                        (r.isReady = !1),
                            (r.playEventFired = !1),
                            (o.onload = function () {
                                e.bind(L.READY, function () {
                                    var n, e = r.callbacks;
                                    for (n in e)
                                        e.hasOwnProperty(n) &&
                                            n !== L.READY &&
                                            f(N.ADD_LISTENER, n, r.element);
                                    t.callback && t.callback();
                                });
                            }),
                            (o.src = R(a, n, t));
                    }
                },
                bind: function (n, t) {
                    var e = this, r = p(this);
                    return (r &&
                        r.element &&
                        (n === L.READY && r.isReady
                            ? setTimeout(t, 1)
                            : r.isReady
                                ? (d(n, t, r), f(N.ADD_LISTENER, n, r.element))
                                : d(C, function () {
                                    e.bind(n, t);
                                }, r)),
                        this);
                },
                unbind: function (n) {
                    var t, e = p(this);
                    e &&
                        e.element &&
                        ((t = E(n, e)),
                            n !== L.READY && t && f(N.REMOVE_LISTENER, n, e.element));
                }
            }),
            S(_.prototype, l(b)),
            S(_.prototype, l(P), !0);
    },
    function (n, t) {
        (t.api = {
            LOAD_PROGRESS: "loadProgress",
            PLAY_PROGRESS: "playProgress",
            PLAY: "play",
            PAUSE: "pause",
            FINISH: "finish",
            SEEK: "seek",
            READY: "ready",
            OPEN_SHARE_PANEL: "sharePanelOpened",
            CLICK_DOWNLOAD: "downloadClicked",
            CLICK_BUY: "buyClicked",
            ERROR: "error"
        }),
            (t.bridge = {
                REMOVE_LISTENER: "removeEventListener",
                ADD_LISTENER: "addEventListener"
            });
    },
    function (n, t) {
        n.exports = {
            GET_VOLUME: "getVolume",
            GET_DURATION: "getDuration",
            GET_POSITION: "getPosition",
            GET_SOUNDS: "getSounds",
            GET_CURRENT_SOUND: "getCurrentSound",
            GET_CURRENT_SOUND_INDEX: "getCurrentSoundIndex",
            IS_PAUSED: "isPaused"
        };
    },
    function (n, t) {
        n.exports = {
            PLAY: "play",
            PAUSE: "pause",
            TOGGLE: "toggle",
            SEEK_TO: "seekTo",
            SET_VOLUME: "setVolume",
            NEXT: "next",
            PREV: "prev",
            SKIP: "skip"
        };
    }
]);


/***/ }),

/***/ "./src/app/soundcloud/soundcloud.component.css":
/*!*****************************************************!*\
  !*** ./src/app/soundcloud/soundcloud.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NvdW5kY2xvdWQvc291bmRjbG91ZC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/soundcloud/soundcloud.component.ts":
/*!****************************************************!*\
  !*** ./src/app/soundcloud/soundcloud.component.ts ***!
  \****************************************************/
/*! exports provided: SoundcloudComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SoundcloudComponent", function() { return SoundcloudComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _spotify_playback_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../spotify-playback.service */ "./src/app/spotify-playback.service.ts");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./api */ "./src/app/soundcloud/api.ts");



// import  from './api.js';



// namespace SC;
var SoundcloudComponent = /** @class */ (function () {
    // public SC=SC||{};SC.Widget=function(n){function t(r){if(e[r])return e[r].exports;var o=e[r]={exports:{},id:r,loaded:!1};return n[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var e={};return t.m=n,t.c=e,t.p="",t(0)}([function(n,t,e){function r(n){return!!(""===n||n&&n.charCodeAt&&n.substr)}function o(n){return!!(n&&n.constructor&&n.call&&n.apply)}function i(n){return!(!n||1!==n.nodeType||"IFRAME"!==n.nodeName.toUpperCase())}function a(n){var t,e=!1;for(t in b)if(b.hasOwnProperty(t)&&b[t]===n){e=!0;break}return e}function s(n){var t,e,r;for(t=0,e=I.length;t<e&&(r=n(I[t]),r!==!1);t++);}function u(n){var t,e,r,o="";for("//"===n.substr(0,2)&&(n=window.location.protocol+n),r=n.split("/"),t=0,e=r.length;t<e&&t<3;t++)o+=r[t],t<2&&(o+="/");return o}function c(n){return n.contentWindow?n.contentWindow:n.contentDocument&&"parentWindow"in n.contentDocument?n.contentDocument.parentWindow:null}function l(n){var t,e=[];for(t in n)n.hasOwnProperty(t)&&e.push(n[t]);return e}function d(n,t,e){e.callbacks[n]=e.callbacks[n]||[],e.callbacks[n].push(t)}function E(n,t){var e,r=!0;return t.callbacks[n]=[],s(function(t){if(e=t.callbacks[n]||[],e.length)return r=!1,!1}),r}function f(n,t,e){var r,o,i=c(e);return!!i.postMessage&&(r=e.getAttribute("src").split("?")[0],o=JSON.stringify({method:n,value:t}),"//"===r.substr(0,2)&&(r=window.location.protocol+r),r=r.replace(/http:\/\/(w|wt).soundcloud.com/,"https://$1.soundcloud.com"),void i.postMessage(o,r))}function p(n){var t;return s(function(e){if(e.instance===n)return t=e,!1}),t}function h(n){var t;return s(function(e){if(c(e.element)===n)return t=e,!1}),t}function v(n,t){return function(e){var r=o(e),i=p(this),a=!r&&t?e:null,s=r&&!t?e:null;return s&&d(n,s,i),f(n,a,i.element),this}}function S(n,t,e){var r,o,i;for(r=0,o=t.length;r<o;r++)i=t[r],n[i]=v(i,e)}function R(n,t,e){return n+"?url="+t+"&"+g(e)}function g(n){var t,e,r=[];for(t in n)n.hasOwnProperty(t)&&(e=n[t],r.push(t+"="+("start_track"===t?parseInt(e,10):e?"true":"false")));return r.join("&")}function m(n,t,e){var r,o,i=n.callbacks[t]||[];for(r=0,o=i.length;r<o;r++)i[r].apply(n.instance,e);(a(t)||t===L.READY)&&(n.callbacks[t]=[])}function w(n){var t,e,r,o,i;try{e=JSON.parse(n.data)}catch(a){return!1}return t=h(n.source),r=e.method,o=e.value,(!t||A(n.origin)===A(t.domain))&&(t?(r===L.READY&&(t.isReady=!0,m(t,C),E(C,t)),r!==L.PLAY||t.playEventFired||(t.playEventFired=!0),r!==L.PLAY_PROGRESS||t.playEventFired||(t.playEventFired=!0,m(t,L.PLAY,[o])),i=[],void 0!==o&&i.push(o),void m(t,r,i)):(r===L.READY&&T.push(n.source),!1))}function A(n){return n.replace(Y,"")}var _,y,O,D=e(1),b=e(2),P=e(3),L=D.api,N=D.bridge,T=[],I=[],C="__LATE_BINDING__",k="http://wt.soundcloud.test:9200/",Y=/^http(?:s?)/;window.addEventListener?window.addEventListener("message",w,!1):window.attachEvent("onmessage",w),n.exports=O=function(n,t,e){if(r(n)&&(n=document.getElementById(n)),!i(n))throw new Error("SC.Widget function should be given either iframe element or a string specifying id attribute of iframe element.");t&&(e=e||{},n.src=R(k,t,e));var o,a,s=h(c(n));return s&&s.instance?s.instance:(o=T.indexOf(c(n))>-1,a=new _(n),I.push(new y(a,n,o)),a)},O.Events=L,window.SC=window.SC||{},window.SC.Widget=O,y=function(n,t,e){this.instance=n,this.element=t,this.domain=u(t.getAttribute("src")),this.isReady=!!e,this.callbacks={}},_=function(){},_.prototype={constructor:_,load:function(n,t){if(n){t=t||{};var e=this,r=p(this),o=r.element,i=o.src,a=i.substr(0,i.indexOf("?"));r.isReady=!1,r.playEventFired=!1,o.onload=function(){e.bind(L.READY,function(){var n,e=r.callbacks;for(n in e)e.hasOwnProperty(n)&&n!==L.READY&&f(N.ADD_LISTENER,n,r.element);t.callback&&t.callback()})},o.src=R(a,n,t)}},bind:function(n,t){var e=this,r=p(this);return r&&r.element&&(n===L.READY&&r.isReady?setTimeout(t,1):r.isReady?(d(n,t,r),f(N.ADD_LISTENER,n,r.element)):d(C,function(){e.bind(n,t)},r)),this},unbind:function(n){var t,e=p(this);e&&e.element&&(t=E(n,e),n!==L.READY&&t&&f(N.REMOVE_LISTENER,n,e.element))}},S(_.prototype,l(b)),S(_.prototype,l(P),!0)},function(n,t){t.api={LOAD_PROGRESS:"loadProgress",PLAY_PROGRESS:"playProgress",PLAY:"play",PAUSE:"pause",FINISH:"finish",SEEK:"seek",READY:"ready",OPEN_SHARE_PANEL:"sharePanelOpened",CLICK_DOWNLOAD:"downloadClicked",CLICK_BUY:"buyClicked",ERROR:"error"},t.bridge={REMOVE_LISTENER:"removeEventListener",ADD_LISTENER:"addEventListener"}},function(n,t){n.exports={GET_VOLUME:"getVolume",GET_DURATION:"getDuration",GET_POSITION:"getPosition",GET_SOUNDS:"getSounds",GET_CURRENT_SOUND:"getCurrentSound",GET_CURRENT_SOUND_INDEX:"getCurrentSoundIndex",IS_PAUSED:"isPaused"}},function(n,t){n.exports={PLAY:"play",PAUSE:"pause",TOGGLE:"toggle",SEEK_TO:"seekTo",SET_VOLUME:"setVolume",NEXT:"next",PREV:"prev",SKIP:"skip"}}]);
    function SoundcloudComponent(sanitizer, spotifyPlaybackService, apiService) {
        this.sanitizer = sanitizer;
        this.spotifyPlaybackService = spotifyPlaybackService;
        this.apiService = apiService;
        this.track_id = 0;
        this.FRAME = null;
        this.soundclouds = [0];
        this.endSong = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    Object.defineProperty(SoundcloudComponent.prototype, "inp", {
        set: function (input) {
            var _this = this;
            this.apiService.get_token(input[1]).subscribe(function (token) {
                _this.spotifyPlaybackService.pauseSong(token[0]['spotify_access']);
            });
            console.log("HELLO MITCH", input, this.soundclouds[0]);
            if (this.soundclouds[0] && this.soundclouds[0] != input[0]) {
                this.updateWidget(input[0]);
            }
            this.soundclouds[0] = input[0];
            this.track_id = input[0];
            this.FRAME = this.sanitize("https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/" + this.track_id + "&amp;auto_play=true");
        },
        enumerable: true,
        configurable: true
    });
    SoundcloudComponent.prototype.sanitize = function (frame) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(frame);
    };
    SoundcloudComponent.prototype.ngAfterViewInit = function () {
        this.initializeWidget();
        // widget1 === widget2
    };
    SoundcloudComponent.prototype.ngOnInit = function () { };
    SoundcloudComponent.prototype.initializeWidget = function () {
        console.log("BUILLDDDDING Soundcloud");
        var iframeElement = document.querySelector('iframe');
        console.log(iframeElement);
        this.widget = _api__WEBPACK_IMPORTED_MODULE_5__["SC"].Widget(iframeElement);
        // var widget2         = SC.Widget(iframeElementID);
        var self = this;
        this.widget.bind(_api__WEBPACK_IMPORTED_MODULE_5__["SC"].Widget.Events.FINISH, this.end.bind(self));
        this.widget.bind(_api__WEBPACK_IMPORTED_MODULE_5__["SC"].Widget.Events.READY, this.playSong);
        this.widget.play();
        console.log(this.widget);
    };
    SoundcloudComponent.prototype.updateWidget = function (track_id) {
        console.log("UPDDDDDDDDDATAAAAAAAAAAAAAAAAATING");
        var self = this;
        this.widget.load(track_id, {});
        this.widget.bind(_api__WEBPACK_IMPORTED_MODULE_5__["SC"].Widget.Events.READY, this.playSong);
        this.widget.bind(_api__WEBPACK_IMPORTED_MODULE_5__["SC"].Widget.Events.FINISH, this.end.bind(self));
        this.widget.play();
    };
    SoundcloudComponent.prototype.resize = function () {
        this.widget.getDuration(this.printVolume);
        // this.id.nativeElement.width = "300px";
        // console.log(this.iframe.nativeElement.contentWindow);
    };
    SoundcloudComponent.prototype.printVolume = function (volume) {
        console.log(volume);
    };
    SoundcloudComponent.prototype.playSong = function () {
        this.widget.getDuration(this.printVolume);
    };
    SoundcloudComponent.prototype.end = function (input) {
        this.callParent();
    };
    SoundcloudComponent.prototype.callParent = function () {
        console.log("HELLO JAMES");
        this.endSong.emit('eventDesc');
    };
    SoundcloudComponent.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] },
        { type: _spotify_playback_service__WEBPACK_IMPORTED_MODULE_3__["SpotifyPlaybackService"] },
        { type: _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], SoundcloudComponent.prototype, "inp", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('id', { static: false })
    ], SoundcloudComponent.prototype, "iframe", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], SoundcloudComponent.prototype, "endSong", void 0);
    SoundcloudComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-soundcloud',
            template: __webpack_require__(/*! raw-loader!./soundcloud.component.html */ "./node_modules/raw-loader/index.js!./src/app/soundcloud/soundcloud.component.html"),
            styles: [__webpack_require__(/*! ./soundcloud.component.css */ "./src/app/soundcloud/soundcloud.component.css")]
        })
    ], SoundcloudComponent);
    return SoundcloudComponent;
}());



/***/ }),

/***/ "./src/app/spotify-playback.service.ts":
/*!*********************************************!*\
  !*** ./src/app/spotify-playback.service.ts ***!
  \*********************************************/
/*! exports provided: SpotifyPlaybackService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpotifyPlaybackService", function() { return SpotifyPlaybackService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var SpotifyPlaybackService = /** @class */ (function () {
    function SpotifyPlaybackService() {
        this.ready = false;
        this.player = null;
        this.device_id_Subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]('');
        this.device_id = this.device_id_Subject.asObservable();
        this.nextSong_Subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](0);
        this.nextSong = this.nextSong_Subject.asObservable();
    }
    SpotifyPlaybackService.prototype.setDeviceID = function (my_device_id) {
        // console.log("MYYYYY",my_device_id)
        this.ready = true;
        // localStorage.setItem('device_id', my_device_id);
        this.device_id_Subject.next(my_device_id);
    };
    SpotifyPlaybackService.prototype.playSong = function (song_id, token) {
        var _this = this;
        // console.log("IN THE SERVICE", song_id, token, this.ready);
        // setTimeout( () => {
        //   while (1) {
        if (this.ready) {
            this.device_id.subscribe(function (device_id) { return _this.play(device_id, song_id, token); });
        }
        //   }
        // }, 6000);
    };
    SpotifyPlaybackService.prototype.pauseSong = function (token) {
        var _this = this;
        this.device_id.subscribe(function (device_id) { return _this.pause(device_id, token); });
    };
    SpotifyPlaybackService.prototype.play = function (device_id, current_track, token) {
        // console.log('here and PLAAAYIN',token, device_id);
        var spotify_uri = 'spotify:track:' + current_track;
        fetch("https://api.spotify.com/v1/me/player/play?device_id=" + device_id, {
            method: 'PUT',
            body: JSON.stringify({ uris: [spotify_uri] }),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + token
            }
        });
    };
    SpotifyPlaybackService.prototype.pause = function (device_id, token) {
        // console.log('here and PAUSIN',token);
        fetch("https://api.spotify.com/v1/me/player/pause?device_id=" + device_id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + token
            }
        });
    };
    SpotifyPlaybackService.prototype.nextOn = function () {
        console.log("OOOOOOOOOONNNN");
        this.nextSong_Subject.next(1);
    };
    SpotifyPlaybackService.prototype.nextOff = function () {
        console.log("FFFOFFFF");
        this.nextSong_Subject.next(0);
    };
    SpotifyPlaybackService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], SpotifyPlaybackService);
    return SpotifyPlaybackService;
}());



/***/ }),

/***/ "./src/app/spotify/spotify.component.css":
/*!***********************************************!*\
  !*** ./src/app/spotify/spotify.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sp {\r\n  position: fixed;\r\n  top: 10px;\r\n  left: 10px;\r\n  z-index: 10;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3BvdGlmeS9zcG90aWZ5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2YsU0FBUztFQUNULFVBQVU7RUFDVixXQUFXO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9zcG90aWZ5L3Nwb3RpZnkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zcCB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMTBweDtcclxuICBsZWZ0OiAxMHB4O1xyXG4gIHotaW5kZXg6IDEwO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/spotify/spotify.component.ts":
/*!**********************************************!*\
  !*** ./src/app/spotify/spotify.component.ts ***!
  \**********************************************/
/*! exports provided: SpotifyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpotifyComponent", function() { return SpotifyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _spotify_playback_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../spotify-playback.service */ "./src/app/spotify-playback.service.ts");





// import { my_device_id } from '../app.component';
var SpotifyComponent = /** @class */ (function () {
    function SpotifyComponent(apiService, userService, spotifyPlaybackService) {
        this.apiService = apiService;
        this.userService = userService;
        this.spotifyPlaybackService = spotifyPlaybackService;
        this.device_id = '';
        this.player = null;
        this.started = false;
        this.finished = false;
        // play(device_id: any, current_track: string) {
        //   console.log('here');
        //   var spotify_uri:string = 'spotify:track:' + current_track;
        //   //var spotify_uri:string = 'spotify:track:0jdny0dhgjUwoIp5GkqEaA';
        //   fetch(`https://api.spotify.com/v1/me/player/play?device_id=${device_id}`, {
        //       method: 'PUT',
        //        body: JSON.stringify({ uris: [spotify_uri] }),
        //        headers: {
        //          'Content-Type': 'application/json',
        //          'Authorization': `Bearer ${this.token}`
        //        }
        //       });
        // }
        this.myEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        console.log(this.spotifyPlaybackService.player);
        //this.device_id = my_device_id;
        // console.log('1');
        // window['onSpotifyWebPlaybackSDKReady'] = () => {
        //   console.log('2');
        //   const player = new Spotify.Player({
        //     name: 'Web Playback SDK Quick Start Player',
        //     getOAuthToken: cb => { cb(this.token); }
        //   });
        //   // Error handling
        //   player.addListener('initialization_error', ({ message }) => { console.error(message); });
        //   player.addListener('authentication_error', ({ message }) => { console.error(message); });
        //   player.addListener('account_error', ({ message }) => { console.error(message); });
        //   player.addListener('playback_error', ({ message }) => { console.error(message); });
        //   // Playback status updates
        //   player.addListener('player_state_changed', state => {
        //     console.log(state)
        //     if (this.song.duration && ((state.position >= this.song.duration) || (state.position == 0 && state.paused)) ) {
        //     //   this.callParent();
        //     // }
        //   });
        //   // Ready
        //   player.addListener('ready', ({ device_id }) => {
        //     console.log('Ready with Device ID', device_id);
        //     this.device_id = device_id;
        //     console.log('here', this.device_id);
        //     //player.connect();
        //     while (!this.track_id){
        //     }
        //     //this.play(device_id, this.track_id);
        //     //this.play(device_id, '0jdny0dhgjUwoIp5GkqEaA');
        //   });
        //   // Not Ready
        //   player.addListener('not_ready', ({ device_id }) => {
        //     console.log('Device ID has gone offline', device_id);
        //   });
        //   player.connect();
        // };
        // Play a specified track on the Web Playback SDK's device ID
    }
    Object.defineProperty(SpotifyComponent.prototype, "inp", {
        set: function (input) {
            // console.log("SPOT THOSE FISSS",input);
            this.track_id = input[0]['song_id'];
            this.song = input[0];
            this.host_id = input[1];
            if (this.track_id && input[2]) {
                console.log("RESETING START");
                this.started = false;
                this.finished = false;
                if (this.player == null) {
                    this.player = this.spotifyPlaybackService.player;
                    this.initializeSpotifyPlayer();
                }
                // console.log("PLAY");
                // console.log("PLAYYYING", this.track_id);
                this.playSong(this.track_id);
            }
        },
        enumerable: true,
        configurable: true
    });
    // @Input()
    // set nextSong(input) {
    //   console.log("HEYYYYY",input);
    //   if (input[0] != 0 && input[1]) {
    //     console.log("HEYYYOO");
    //     this.spotifyPlaybackService.nextOff();
    //     this.callParent();
    //   }
    // }
    SpotifyComponent.prototype.ngOnInit = function () {
    };
    SpotifyComponent.prototype.playSong = function (track_id) {
        var _this = this;
        // console.log("HHHHOST",parseInt(this.host_id) );
        this.apiService.get_token(parseInt(this.host_id)).subscribe(function (token) {
            // console.log("WE PLAYING", track_id, token[0]['spotify_access']);
            _this.spotifyPlaybackService.playSong(track_id, token[0]['spotify_access']);
        });
    };
    SpotifyComponent.prototype.initializeSpotifyPlayer = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.player.addListener('player_state_changed', function (state) {
                    if (!_this.finished) {
                        if (state.position === 0 && state.duration > 0 && state.paused === false) {
                            _this.started = true;
                            console.log("START is TRUE");
                            // console.log(state);
                        }
                        if (_this.started && state.position === 0 && state.paused === true) {
                            _this.finished = true;
                            console.log("SKIP FROM END SONG");
                            _this.callParent();
                        }
                    }
                });
                return [2 /*return*/];
            });
        });
    };
    SpotifyComponent.prototype.ngOnDestroy = function () {
        var _this = this;
        this.apiService.get_token(parseInt(this.host_id)).subscribe(function (token) {
            _this.spotifyPlaybackService.pauseSong(token[0]['spotify_access']);
        });
    };
    SpotifyComponent.prototype.callParent = function () {
        this.myEvent.emit('eventDesc');
    };
    SpotifyComponent.ctorParameters = function () { return [
        { type: _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
        { type: _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
        { type: _spotify_playback_service__WEBPACK_IMPORTED_MODULE_4__["SpotifyPlaybackService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], SpotifyComponent.prototype, "inp", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], SpotifyComponent.prototype, "myEvent", void 0);
    SpotifyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-spotify',
            template: __webpack_require__(/*! raw-loader!./spotify.component.html */ "./node_modules/raw-loader/index.js!./src/app/spotify/spotify.component.html"),
            styles: [__webpack_require__(/*! ./spotify.component.css */ "./src/app/spotify/spotify.component.css")]
        })
    ], SpotifyComponent);
    return SpotifyComponent;
}());



/***/ }),

/***/ "./src/app/token.service.ts":
/*!**********************************!*\
  !*** ./src/app/token.service.ts ***!
  \**********************************/
/*! exports provided: TokenService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenService", function() { return TokenService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var TokenService = /** @class */ (function () {
    // public token: Observable<string>;
    function TokenService() {
        this.CLIENT_ID = "c7d322da32444b989421f7cc942c64a3";
        this.REDIRECT_URI = "http://localhost:4200/callback";
        this.tokenRefresh$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]();
        // this.tokenSubject = new BehaviorSubject<string>(localStorage.getItem('token'));
        // this.token = this.tokenSubject.asObservable();
    }
    TokenService.prototype.getSpotifyToken = function (party) {
        var LINK = "https://accounts.spotify.com/authorize?client_id=" + this.CLIENT_ID + "&response_type=token&redirect_uri=" + this.REDIRECT_URI + "&scope=streaming&state=" + party;
        window.location.href = LINK;
    };
    // public get tokenValue(): string {
    //   return this.tokenSubject.value;
    // }
    // setToken(token: string) {
    //   console.log(token);
    //   localStorage.setItem('token', token);
    //   this.tokenSubject.next(token);
    // }
    //
    // updateToken(token: string) {
    //   localStorage.setItem('token', token);
    //   this.tokenSubject.next(token);
    //  }
    // removeToken() {
    //   localStorage.removeItem('token');
    //   this.tokenSubject.next(null);
    // }
    TokenService.prototype.updateUser = function (user_id) {
        this.tokenRefreshSubject.next(String(user_id));
    };
    TokenService.prototype.getToken = function () {
        return this.tokenRefresh$;
    };
    TokenService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], TokenService);
    return TokenService;
}());



/***/ }),

/***/ "./src/app/user.service.ts":
/*!*********************************!*\
  !*** ./src/app/user.service.ts ***!
  \*********************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var UserService = /** @class */ (function () {
    function UserService(httpClient) {
        this.httpClient = httpClient;
        this.numb = 0;
        this.SPOTIFY_API = "https://api.spotify.com/v1/me";
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
        this.tokenRefresh$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"]();
    }
    Object.defineProperty(UserService.prototype, "currentUserValue", {
        get: function () {
            return this.currentUserSubject.value;
        },
        enumerable: true,
        configurable: true
    });
    UserService.prototype.login = function (user) {
        this.tokenRefresh$.subscribe();
        // user.authdata = window.btoa(user.username + ':' + user.password);
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
    };
    UserService.prototype.updateUser = function (user) {
        user.authdata = window.btoa(user.username + ':' + user.password);
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
    };
    UserService.prototype.updateTokenUser = function (user_id) {
        this.tokenRefreshSubject.next(String(user_id));
    };
    UserService.prototype.getToken = function () {
        return this.tokenRefresh$;
    };
    UserService.prototype.logout = function () {
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    };
    UserService.prototype.getProfile = function (token) {
        var headers = {
            headers: {
                'Authorization': "Bearer " + token
            }
        };
        return this.httpClient.get("" + this.SPOTIFY_API, headers).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    };
    UserService.prototype.errorHandler = function (error) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
    };
    UserService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/youtube-player/youtube-player.component.css":
/*!*************************************************************!*\
  !*** ./src/app/youtube-player/youtube-player.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3lvdXR1YmUtcGxheWVyL3lvdXR1YmUtcGxheWVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/youtube-player/youtube-player.component.ts":
/*!************************************************************!*\
  !*** ./src/app/youtube-player/youtube-player.component.ts ***!
  \************************************************************/
/*! exports provided: YoutubePlayerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YoutubePlayerComponent", function() { return YoutubePlayerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _spotify_playback_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../spotify-playback.service */ "./src/app/spotify-playback.service.ts");




var YoutubePlayerComponent = /** @class */ (function () {
    function YoutubePlayerComponent(apiService, spotifyPlaybackService) {
        this.apiService = apiService;
        this.spotifyPlaybackService = spotifyPlaybackService;
        this.id = null;
        this.videos = [0];
        this.endSong = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.height = window.innerHeight * 2 / 3;
        this.width = this.height * 16 / 9;
        this.onResize();
    }
    Object.defineProperty(YoutubePlayerComponent.prototype, "inp", {
        set: function (input) {
            var _this = this;
            this.apiService.get_token(input[1]).subscribe(function (token) {
                _this.spotifyPlaybackService.pauseSong(token[0]['spotify_access']);
            });
            if (this.videos[0] && this.videos[0] != input[0]) {
                this.videos[0] = input[0];
            }
            this.videos[0] = input[0];
        },
        enumerable: true,
        configurable: true
    });
    YoutubePlayerComponent.prototype.ngOnInit = function () {
    };
    YoutubePlayerComponent.prototype.onResize = function (event) {
        // this.width = window.innerWidth;
        this.height = window.innerHeight * 2 / 3;
        this.width = this.height * 16 / 9;
        // this.height = this.width*9/16;
        console.log(this.width);
    };
    YoutubePlayerComponent.prototype.onStateChange = function (event) {
        this.ytEvent = event.data;
        if (event.data == 0) {
            this.callParent();
            this.ngOnInit();
        }
        console.log(event.data);
    };
    YoutubePlayerComponent.prototype.savePlayer = function (player) {
        this.player = player;
        this.playVideo();
    };
    YoutubePlayerComponent.prototype.playVideo = function () {
        this.player.playVideo();
    };
    YoutubePlayerComponent.prototype.pauseVideo = function () {
        this.player.pauseVideo();
    };
    YoutubePlayerComponent.prototype.callParent = function () {
        this.endSong.emit('eventDesc');
    };
    YoutubePlayerComponent.ctorParameters = function () { return [
        { type: _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
        { type: _spotify_playback_service__WEBPACK_IMPORTED_MODULE_3__["SpotifyPlaybackService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], YoutubePlayerComponent.prototype, "inp", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize', ['$event'])
    ], YoutubePlayerComponent.prototype, "onResize", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], YoutubePlayerComponent.prototype, "endSong", void 0);
    YoutubePlayerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-youtube-player',
            template: __webpack_require__(/*! raw-loader!./youtube-player.component.html */ "./node_modules/raw-loader/index.js!./src/app/youtube-player/youtube-player.component.html"),
            styles: [__webpack_require__(/*! ./youtube-player.component.css */ "./src/app/youtube-player/youtube-player.component.css")]
        })
    ], YoutubePlayerComponent);
    return YoutubePlayerComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Mitch\mmdj\frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map