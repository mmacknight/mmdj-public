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

module.exports = "<div class=\"example-container\">\r\n\r\n  <h1>Welcome to MMDJ</h1>\r\n\r\n  <div class=\"btn-group buttons\">\r\n    <button class=\"btn buttons\" [class.btn-primary]=\"!registerClicked\" [class.btn-outline-primary]=\"registerClicked\" (click)=\"onLoginClick()\">Login</button>\r\n    <button class=\"btn buttons\" [class.btn-primary]=\"registerClicked\" [class.btn-outline-primary]=\"!registerClicked\" (click)=\"onRegisterClick()\">Register</button>\r\n  </div>\r\n\r\n  <form *ngIf=\"loginClicked\" class=\"form-container text-center\" [formGroup]=\"loginForm\" (ngSubmit)=\"login()\">\r\n    <mat-form-field>\r\n      <input matInput formControlName=\"username\" placeholder=\"Username\">\r\n      <mat-hint *ngIf=\"invalid\">Invalid Login</mat-hint>\r\n    </mat-form-field>\r\n\r\n    <mat-form-field>\r\n      <input matInput formControlName=\"password\" type=\"password\" placeholder=\"Password\">\r\n    </mat-form-field>\r\n    <button class=\"btn btn-primary\" type=\"submit\">Login</button>\r\n  </form>\r\n\r\n  <form *ngIf=\"registerClicked\" class=\"form-container text-center\" [formGroup]=\"registerForm\" (ngSubmit)=\"register()\">\r\n    <mat-form-field>\r\n      <input matInput formControlName=\"username\" placeholder=\"Username\">\r\n      <mat-hint *ngIf=\"invalid\">Choose a new username</mat-hint>\r\n    </mat-form-field>\r\n\r\n    <mat-form-field>\r\n      <input matInput formControlName=\"password\" type=\"password\" placeholder=\"Password\">\r\n    </mat-form-field>\r\n    <button class=\"btn btn-primary\" type=\"submit\">Create an Account</button>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/callback/callback.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/callback/callback.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>callback works!</p>\r\n<p>{{this.router.url.split('#')[1]}}</p>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/current-song/current-song.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/current-song/current-song.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"current-song\" [style.z-index]=\"width > 600 ? -1 : 1\">\r\n  <!-- <app-youtube-player></app-youtube-player> -->\r\n  <!-- <app-spotify [inp]=\"song\" (myEvent)='skipSong()'></app-spotify> -->\r\n  <div class=\"song\" [style.padding-top]=\"song_padding\" [style.padding-bottom]=\"song_padding\">\r\n    <div *ngIf=\"width > 600 || song_padding != '0%'\" class=\"normal\">{{song.title}}<br>{{song.artist}}</div>\r\n    <div *ngIf=\"width <= 600 && song_padding == '0%'\"class=\"banner\">{{song.title}} - {{song.artist}}</div>\r\n    <!-- <p>{{window.pageYoffset}}</p> -->\r\n  </div>\r\n</div>\r\n<button (click)='skipSong()' style=\"float: left\">SKIP</button>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboard/dashboard.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboard/dashboard.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Users</h1>\r\n<div>\r\n\r\n  <table border='1' width='100%' style='border-collapse: collapse;'>\r\n    <tr>\r\n      <th>ID</th>\r\n      <th>Username</th>\r\n      <th>Password</th>\r\n      <th>Operations</th>\r\n\r\n    </tr>\r\n\r\n    <tr *ngFor=\"let user of users\">\r\n      <td>{{ user.user_id }}</td>\r\n      <td>{{ user.username }}</td>\r\n      <td>{{ user.password }}</td>\r\n      <td>\r\n        <button (click)=\"deleteUser(user.user_id)\">Delete</button>\r\n        <button (click)=\"selectUser(user)\">Update</button>\r\n      </td>\r\n    </tr>\r\n  </table>\r\n  <br>\r\n  <form #f = \"ngForm\">\r\n    <label>Username</label>\r\n    <input type=\"text\" name=\"username\" [(ngModel)] = \"selectedUser.username\">\r\n    <br>\r\n    <label>Password</label>\r\n    <input type=\"text\" name=\"password\" [(ngModel)] = \"selectedUser.password\">\r\n    <br>\r\n    <input type=\"button\" (click)=\"createOrUpdateUser(f)\" value=\"Create or Update User\">\r\n  </form>\r\n</div>\r\n"

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

module.exports = "<div class=\"example-container\">\r\n\r\n  <h1>Create a Party</h1>\r\n  <form class=\"form-container text-center\" [formGroup]=\"partyForm\" (ngSubmit)=\"createParty()\">\r\n    <mat-form-field>\r\n      <input matInput formControlName=\"name\" placeholder=\"Party Name\">\r\n    </mat-form-field>\r\n\r\n    <mat-form-field>\r\n      <input matInput formControlName=\"description\" placeholder=\"Description\">\r\n    </mat-form-field>\r\n\r\n    <mat-form-field>\r\n      <mat-select formControlName=\"genre\" placeholder=\"Genre\">\r\n        <mat-option value=\"option\">Option</mat-option>\r\n        <mat-option value=\"option2\">Option2</mat-option>\r\n      </mat-select>\r\n    </mat-form-field>\r\n    <button class=\"btn btn-primary\" type=\"submit\">Start Party!</button>\r\n  </form>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/join/join.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/join/join.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"example-container\">\r\n\r\n  <form class=\"form-container text-center\" [formGroup]=\"joinForm\" (ngSubmit)=\"joinParty()\">\r\n    <mat-form-field>\r\n      <input matInput formControlName=\"eventID\" placeholder=\"Enter Event ID\">\r\n      <mat-hint *ngIf=\"invalid\">Cannot join party.</mat-hint>\r\n    </mat-form-field>\r\n    <button class=\"btn btn-primary\" type=\"submit\">Join Party!</button>\r\n  </form>\r\n</div>\r\n"

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

module.exports = "<app-current-song [inp]=event.event_id></app-current-song>\r\n<button class=\"btn btn-outline-danger end-party-button\" (click)=\"onEndPartyClick()\" *ngIf=\"event.user_id==user.user_id\">End Party</button>\r\n\r\n<div class='party-container rounded'>\r\n    <h4>{{event.event_name}}</h4>\r\n    <h6>Party Code: {{event.event_id}}</h6>\r\n    <p>{{event.description | lowercase}}</p>\r\n    <button class=\"btn btn-primary\" (click)=\"loginSpotify()\">Refresh Spotify token</button>\r\n\r\n    <app-song-search [inp]=event.event_id></app-song-search>\r\n\r\n    <table mat-table [dataSource]=\"queuedSongs$ | async\" class=\"mat-elevation-z8\">\r\n\r\n        <ng-container matColumnDef=\"score\">\r\n          <th mat-header-cell *matHeaderCellDef> Score </th>\r\n          <td mat-cell *matCellDef=\"let element\"> {{element.popularity}} </td>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"artist\">\r\n          <th mat-header-cell *matHeaderCellDef> Artist </th>\r\n          <td mat-cell *matCellDef=\"let element\"> {{element.artist}} </td>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"title\">\r\n          <th mat-header-cell *matHeaderCellDef> Title </th>\r\n          <td mat-cell *matCellDef=\"let element\"> {{element.title}} </td>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"vote\" >\r\n            <th mat-header-cell *matHeaderCellDef> Vote </th>\r\n            <td mat-cell *matCellDef=\"let element\" class='buttons-right'>\r\n              <div class=\"arrow-button arrow-button-up\" [class.arrow-button-up-voted]=\"userVotes[element.order_num] == 1\" (click)=\"upvote(element.order_num, element.song_id, element.platform)\">\r\n                <mat-icon aria-hidden=\"false\">add_circle</mat-icon>\r\n              </div>\r\n              <div class=\"arrow-button arrow-button-down\" [class.arrow-button-down-voted]=\"userVotes[element.order_num] == -1\" (click)=\"downvote(element.order_num, element.song_id, element.platform)\">\r\n                  <mat-icon aria-hidden=\"false\">remove_circle</mat-icon>\r\n              </div>\r\n            </td>\r\n        </ng-container>\r\n\r\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n      </table>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/song-search/song-search.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/song-search/song-search.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"search-component\">\r\n  <!-- <h4><label for=\"search-box\">Find Songs</label></h4> -->\r\n  <div class=\"btn-group buttons\">\r\n    <button class=\"btn buttons\" [class.btn-primary]=\"searchOptions[0]\" [class.btn-outline-primary]=\"!searchOptions[0]\" (click)=\"onButtonClick(0)\">Spotify</button>\r\n    <button class=\"btn buttons\" [class.btn-primary]=\"searchOptions[1]\" [class.btn-outline-primary]=\"!searchOptions[1]\" (click)=\"onButtonClick(1)\">Soundcloud</button>\r\n    <button class=\"btn buttons\" [class.btn-primary]=\"searchOptions[2]\" [class.btn-outline-primary]=\"!searchOptions[2]\" (click)=\"onButtonClick(2)\">Youtube</button>\r\n  </div>\r\n\r\n  <div *ngIf=\"searchOptions[0]\">\r\n\r\n      <input class=\"input-field\" [class.input-field-active]=\"searchBox.value\" #searchBox (keyup)=\"search_spotify(searchBox.value)\" placeholder=\"Add a song to the queue\">\r\n    <table *ngIf=\"searchBox.value\" mat-table [dataSource]=\"songs\" class=\"mat-elevation-z8\">\r\n      <ng-container matColumnDef=\"artist\">\r\n        <th mat-header-cell *matHeaderCellDef> Artist </th>\r\n        <td mat-cell *matCellDef=\"let element\" (click)=\"addSong(element)\" (click)=\"searchBox.value = ''\"> {{element.title}} </td>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"title\">\r\n        <th mat-header-cell *matHeaderCellDef> Title </th>\r\n        <td mat-cell *matCellDef=\"let element\" (click)=\"addSong(element)\" (click)=\"searchBox.value = ''\"> {{element.artist}} </td>\r\n      </ng-container>\r\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n    </table>\r\n  </div>\r\n\r\n  <div *ngIf=\"searchOptions[1]\">\r\n\r\n    <input class=\"input-field\" [class.input-field-active]=\"searchBoxSoundcloud.value\" #searchBoxSoundcloud (input)=\"searchSoundcloud(searchBoxSoundcloud.value)\" placeholder=\"Add a song to the queue\">\r\n\r\n    <table *ngIf=\"searchBoxSoundcloud.value\" class=\"soundcloud\" mat-table [dataSource]=\"soundcloud$ | async\" class=\"mat-elevation-z8\">\r\n      <ng-container matColumnDef=\"artwork\">\r\n        <th mat-header-cell *matHeaderCellDef></th>\r\n        <td  style=\"padding:0\" mat-cell *matCellDef=\"let element\" (click)=\"addSong(element.song_id)\" (click)=\"searchBoxSoundcloud.value = ''\"><img src={{element.artwork_url}}></td>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"artist\">\r\n        <th mat-header-cell *matHeaderCellDef> Artist </th>\r\n        <td  mat-cell *matCellDef=\"let element\" style=\"padding-left: 0\" (click)=\"addSong(element.song_id)\" (click)=\"searchBoxSoundcloud.value = ''\"> {{element.user.username}} </td>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"title\">\r\n        <th mat-header-cell *matHeaderCellDef> Title </th>\r\n        <td mat-cell *matCellDef=\"let element\" (click)=\"addSong(element.song_id)\" (click)=\"searchBoxSoundcloud.value = ''\"> {{element.title}} </td>\r\n      </ng-container>\r\n\r\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumnsSoundcloud;\"></tr>\r\n    </table>\r\n  </div>\r\n\r\n  <div *ngIf=\"searchOptions[2]\">\r\n\r\n      <input class=\"input-field\" [class.input-field-active]=\"searchBoxYoutube.value\" #searchBoxYoutube (input)=\"searchYoutube(searchBoxYoutube.value)\" placeholder=\"Add a song to the queue\">\r\n\r\n    <table *ngIf=\"searchBoxYoutube.value\" mat-table [dataSource]=\"youtubes$ | async\" class=\"mat-elevation-z8\">\r\n      <ng-container matColumnDef=\"title\">\r\n        <th mat-header-cell *matHeaderCellDef> Title </th>\r\n        <td class=\"youtube-td\" style=\"padding-left: 0\" mat-cell *matCellDef=\"let element\" (click)=\"addSong(element.song_id)\" (click)=\"searchBoxYoutube.value = ''\"> <img *ngIf=\"element.thumb\" src={{element.thumb}}> <img *ngIf=\"!element.thumb\" src=\"assets/media/youtube.png\"> <div class=\"youtube-title\">{{element.title}}</div> </td>\r\n      </ng-container>\r\n\r\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumnsYoutube\"></tr>\r\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumnsYoutube;\"></tr>\r\n    </table>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/soundcloud/soundcloud.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/soundcloud/soundcloud.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<iframe width=\"100%\" height=\"166\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay\"\r\n  src=\"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/{{track_id}}&amp;auto_play=true\">\r\n</iframe>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/spotify/spotify.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/spotify/spotify.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "   "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/youtube-player/youtube-player.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/youtube-player/youtube-player.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <youtube-player\r\n   [videoId]=\"id\"\r\n   [width]=\"width\"\r\n   [height]=\"height\"\r\n   (ready)=\"savePlayer($event)\"\r\n   (change)=\"onStateChange($event)\"\r\n >\r\n </youtube-player>\r\n"

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
    function ApiService(httpClient) {
        this.httpClient = httpClient;
        this.PHP_API_SERVER = "http://db.cse.nd.edu/cse30246/mmdj/backend";
    }
    // Starter Code
    ApiService.prototype.readPolicies = function () {
        return this.httpClient.get(this.PHP_API_SERVER + "/api/read.php").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    };
    ApiService.prototype.createPolicy = function (policy) {
        return this.httpClient.post(this.PHP_API_SERVER + "/api/create.php", policy).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    };
    ApiService.prototype.updatePolicy = function (policy) {
        return this.httpClient.put(this.PHP_API_SERVER + "/api/update.php", policy).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    };
    ApiService.prototype.deletePolicy = function (id) {
        return this.httpClient.delete(this.PHP_API_SERVER + "/api/delete.php/?id=" + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    };
    ApiService.prototype.readUsers = function () {
        return this.httpClient.get(this.PHP_API_SERVER + "/api/readUser.php").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    };
    ApiService.prototype.createUser = function (user) {
        return this.httpClient.post(this.PHP_API_SERVER + "/api/createUser.php", user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    };
    ApiService.prototype.updateUser = function (user) {
        return this.httpClient.put(this.PHP_API_SERVER + "/api/updateUser.php", user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    };
    ApiService.prototype.deleteUser = function (id) {
        return this.httpClient.delete(this.PHP_API_SERVER + "/api/deleteUser.php/?id=" + id + "&?table=").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    };
    // Get
    // Spotify API
    ApiService.prototype.get_spotify_login = function () {
        /*  PARAMS: from https://developer.spotify.com/documentation/general/guides/authorization-guide/
        * req: client_id - provided by spotify when we register app
        * req: response_type - "Set to code"
        * req: redirect_uri, state, scope
        * opt: state - for security
        * opt: scope - if no scope specified, we get only normally visible things (not all api data)
        *   https://developer.spotify.com/documentation/general/guides/scopes/
        * opt: show_dialog - keep default of false to avoid relogins
        */
    };
    // events Table
    ApiService.prototype.get_event = function (id) {
        return this.httpClient.get(this.PHP_API_SERVER + "/api/get_event.php/?id=" + id + "\"").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    };
    ApiService.prototype.get_events_by_user = function (user_id) {
        return this.httpClient.get(this.PHP_API_SERVER + "/api/get_events_by_user.php/?id=" + user_id + "\"").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    };
    ApiService.prototype.get_event_current_song = function (event_id) {
        return this.httpClient.get(this.PHP_API_SERVER + "/api/get_event_current_song.php/?id=" + event_id + "\"").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    };
    // queuedSongs Table
    // get all songs in queue for an event, in order
    ApiService.prototype.get_queuedSongs = function (event_id) {
        return this.httpClient.get(this.PHP_API_SERVER + "/api/get_queuedSongs.php/?id=" + event_id + "\"").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    };
    // songs Table
    // for a search by name
    ApiService.prototype.get_songs = function (query) {
        return this.httpClient.get(this.PHP_API_SERVER + "/api/get_songs.php/?query=" + query).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    };
    ApiService.prototype.get_song = function (song_id, platform) {
        return this.httpClient.get(this.PHP_API_SERVER + "/api/get_song.php/?song_id=" + song_id + "&platform=" + platform).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    };
    // Search Bar
    ApiService.prototype.gethelper_Searchbar_Artist = function (search) {
        throw new Error("Method not implemented.");
    };
    ApiService.prototype.gethelper_Searchbar_Songs = function (search) {
        return this.httpClient.get(this.PHP_API_SERVER + "/api/gethelper_Searchbar_Songs.php/?search=" + search).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
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
        return this.httpClient.get(this.PHP_API_SERVER + "/api/get_votes_single_user.php/?user_id=" + user_id + "&event_id=" + event_id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    };
    // tokens Table
    //Spotify
    ApiService.prototype.get_OriginalToken = function () {
        throw new Error("Method not implemented.");
    };
    ApiService.prototype.get_UpdatedToken = function () {
        throw new Error("Method not implemented.");
    };
    // users Table
    ApiService.prototype.get_all_Users = function () {
        return this.httpClient.get(this.PHP_API_SERVER + "/api/get_all_users.php");
    };
    ApiService.prototype.get_user = function (username, password) {
        return this.httpClient.get(this.PHP_API_SERVER + "/api/get_single_user.php/?username=" + username + "&password=" + password + "&table=\"users\"").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    };
    // Post
    // events Table
    ApiService.prototype.post_Event = function (event) {
        return this.httpClient.post(this.PHP_API_SERVER + "/api/post_event.php/?table=events", event);
    };
    // queuedSongs Table
    ApiService.prototype.post_QueuedSong = function (queuedSong) {
        return this.httpClient.post(this.PHP_API_SERVER + "/api/post_queuedSong.php/?table=queuedSongs", queuedSong);
    };
    // songs Table
    ApiService.prototype.post_Song = function (song) {
        return this.httpClient.post(this.PHP_API_SERVER + "/api/post_song.php/", song).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    };
    ApiService.prototype.post_vote = function (vote) {
        return this.httpClient.post(this.PHP_API_SERVER + "/api/post_working.php/?table=vote", vote).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    };
    // tokens Table
    ApiService.prototype.post_Token = function (token) {
        return this.httpClient.post(this.PHP_API_SERVER + "/api/post_single_item.php", token).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    };
    // users Table
    ApiService.prototype.post_User = function (user) {
        return this.httpClient.post(this.PHP_API_SERVER + "/api/post_user.php/?table=" + "users", user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    };
    //Put
    // events Table
    ApiService.prototype.put_Event = function (event) {
        return this.httpClient.put(this.PHP_API_SERVER + "/api/put_Event.php", event).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    };
    ApiService.prototype.put_current_song = function (event_id, order_num) {
        return this.httpClient.put(this.PHP_API_SERVER + "/api/put_current_song.php", { "event_id": event_id, "order_num": order_num }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    };
    // queuedSongs Table
    ApiService.prototype.put_QueuedSong = function (queuedSong) {
        return this.httpClient.put(this.PHP_API_SERVER + "/api/put_queuedSong.php", queuedSong).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    };
    // songs Table
    ApiService.prototype.put_Song = function (song) {
        return this.httpClient.put(this.PHP_API_SERVER + "/api/put_song.php", song).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    };
    // tokens Table
    // users Table
    ApiService.prototype.put_User = function (user) {
        return this.httpClient.put(this.PHP_API_SERVER + "/api/put_user.php", user);
    };
    ApiService.prototype.put_vote = function (vote) {
        return this.httpClient.put(this.PHP_API_SERVER + "/api/put_vote.php", vote).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    };
    // Delete
    // events Table
    ApiService.prototype.delete_Event = function (event_id) {
        return this.httpClient.delete(this.PHP_API_SERVER + "/api/delete_event.php/?id=" + event_id + "&?table=\"event\"").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    };
    // queuedSongs Table
    ApiService.prototype.delete_QueuedSong = function (song_id) {
        return this.httpClient.delete(this.PHP_API_SERVER + "/api/delete_single_item.php/?id=" + song_id + "&?table=\"queuedSong\"").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    };
    // songs Table
    ApiService.prototype.delete_Song = function (song_id) {
        return this.httpClient.delete(this.PHP_API_SERVER + "/api/delete_single_item.php/?id=" + song_id + "&?table=\"song\"").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    };
    // tokens Table
    // users Table
    ApiService.prototype.delete_User = function (user_id) {
        return this.httpClient.delete(this.PHP_API_SERVER + "/api/deleteUser.php/?id=" + user_id + "&?table=\"users\"").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
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
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./homepage/homepage.component */ "./src/app/homepage/homepage.component.ts");
/* harmony import */ var _auth_auth_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth/auth.component */ "./src/app/auth/auth.component.ts");
/* harmony import */ var _join_join_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./join/join.component */ "./src/app/join/join.component.ts");
/* harmony import */ var _host_host_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./host/host.component */ "./src/app/host/host.component.ts");
/* harmony import */ var _party_party_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./party/party.component */ "./src/app/party/party.component.ts");
/* harmony import */ var _spotify_spotify_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./spotify/spotify.component */ "./src/app/spotify/spotify.component.ts");
/* harmony import */ var _soundcloud_soundcloud_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./soundcloud/soundcloud.component */ "./src/app/soundcloud/soundcloud.component.ts");
/* harmony import */ var _callback_callback_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./callback/callback.component */ "./src/app/callback/callback.component.ts");












var routes = [
    { path: '', component: _auth_auth_component__WEBPACK_IMPORTED_MODULE_5__["AuthComponent"] },
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"] },
    { path: 'login', component: _auth_auth_component__WEBPACK_IMPORTED_MODULE_5__["AuthComponent"] },
    { path: 'join', component: _join_join_component__WEBPACK_IMPORTED_MODULE_6__["JoinComponent"] },
    { path: 'host', component: _host_host_component__WEBPACK_IMPORTED_MODULE_7__["HostComponent"] },
    { path: 'party/:id', component: _party_party_component__WEBPACK_IMPORTED_MODULE_8__["PartyComponent"] },
    { path: '*', component: _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_4__["HomepageComponent"] },
    { path: 'spotify', component: _spotify_spotify_component__WEBPACK_IMPORTED_MODULE_9__["SpotifyComponent"] },
    { path: 'soundcloud', component: _soundcloud_soundcloud_component__WEBPACK_IMPORTED_MODULE_10__["SoundcloudComponent"] },
    { path: 'callback', component: _callback_callback_component__WEBPACK_IMPORTED_MODULE_11__["CallbackComponent"] }
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

module.exports = ".class1 {\r\n   text-align: center;\r\n   height: 100%;\r\n   padding-top: 25%;\r\n   padding-bottom: 25%;\r\n   background-color: teal;\r\n   font-size: 5vw;\r\n   color: lightgray;\r\n   -webkit-text-stroke-width: 0.2vw;\r\n   -webkit-text-stroke-color: gray;\r\n}\r\n\r\n.body {\r\n  margin-top: 70px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7R0FDRyxrQkFBa0I7R0FDbEIsWUFBWTtHQUNaLGdCQUFnQjtHQUNoQixtQkFBbUI7R0FDbkIsc0JBQXNCO0dBQ3RCLGNBQWM7R0FDZCxnQkFBZ0I7R0FDaEIsZ0NBQWdDO0dBQ2hDLCtCQUErQjtBQUNsQzs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNsYXNzMSB7XHJcbiAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgaGVpZ2h0OiAxMDAlO1xyXG4gICBwYWRkaW5nLXRvcDogMjUlO1xyXG4gICBwYWRkaW5nLWJvdHRvbTogMjUlO1xyXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiB0ZWFsO1xyXG4gICBmb250LXNpemU6IDV2dztcclxuICAgY29sb3I6IGxpZ2h0Z3JheTtcclxuICAgLXdlYmtpdC10ZXh0LXN0cm9rZS13aWR0aDogMC4ydnc7XHJcbiAgIC13ZWJraXQtdGV4dC1zdHJva2UtY29sb3I6IGdyYXk7XHJcbn1cclxuXHJcbi5ib2R5IHtcclxuICBtYXJnaW4tdG9wOiA3MHB4O1xyXG59XHJcbiJdfQ== */"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AppComponent = /** @class */ (function () {
    function AppComponent(userService, router) {
        var _this = this;
        this.userService = userService;
        this.router = router;
        this.title = 'frontend';
        this.userService.currentUser.subscribe(function (user) { return user ? _this.user = user : _this.router.navigate(['']); });
    }
    AppComponent.prototype.logout = function () {
        this.user = null;
    };
    AppComponent.ctorParameters = function () { return [
        { type: _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
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
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./homepage/homepage.component */ "./src/app/homepage/homepage.component.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _auth_auth_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./auth/auth.component */ "./src/app/auth/auth.component.ts");
/* harmony import */ var _join_join_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./join/join.component */ "./src/app/join/join.component.ts");
/* harmony import */ var _host_host_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./host/host.component */ "./src/app/host/host.component.ts");
/* harmony import */ var _party_party_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./party/party.component */ "./src/app/party/party.component.ts");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _song_search_song_search_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./song-search/song-search.component */ "./src/app/song-search/song-search.component.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _spotify_spotify_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./spotify/spotify.component */ "./src/app/spotify/spotify.component.ts");
/* harmony import */ var _current_song_current_song_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./current-song/current-song.component */ "./src/app/current-song/current-song.component.ts");
/* harmony import */ var _youtube_player_youtube_player_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./youtube-player/youtube-player.component */ "./src/app/youtube-player/youtube-player.component.ts");
/* harmony import */ var ngx_youtube_player__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ngx-youtube-player */ "./node_modules/ngx-youtube-player/fesm5/ngx-youtube-player.js");
/* harmony import */ var _soundcloud_soundcloud_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./soundcloud/soundcloud.component */ "./src/app/soundcloud/soundcloud.component.ts");
/* harmony import */ var _callback_callback_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./callback/callback.component */ "./src/app/callback/callback.component.ts");



























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"],
                _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_7__["HomepageComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_12__["NavbarComponent"],
                _auth_auth_component__WEBPACK_IMPORTED_MODULE_13__["AuthComponent"],
                _join_join_component__WEBPACK_IMPORTED_MODULE_14__["JoinComponent"],
                _host_host_component__WEBPACK_IMPORTED_MODULE_15__["HostComponent"],
                _party_party_component__WEBPACK_IMPORTED_MODULE_16__["PartyComponent"],
                _song_search_song_search_component__WEBPACK_IMPORTED_MODULE_19__["SongSearchComponent"],
                _spotify_spotify_component__WEBPACK_IMPORTED_MODULE_21__["SpotifyComponent"],
                _current_song_current_song_component__WEBPACK_IMPORTED_MODULE_22__["CurrentSongComponent"],
                _youtube_player_youtube_player_component__WEBPACK_IMPORTED_MODULE_23__["YoutubePlayerComponent"],
                _soundcloud_soundcloud_component__WEBPACK_IMPORTED_MODULE_25__["SoundcloudComponent"],
                _callback_callback_component__WEBPACK_IMPORTED_MODULE_26__["CallbackComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatOptionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_17__["MatTableModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__["MatIconModule"],
                // ToastrModule.forRoot(),
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_20__["MatSnackBarModule"],
                ngx_youtube_player__WEBPACK_IMPORTED_MODULE_24__["NgxYoutubePlayerModule"]
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

module.exports = ".example-container {\r\n  width: 40%;\r\n  margin-left: 30%;\r\n  text-align: center;\r\n}\r\n\r\n.buttons {\r\n  width: 75%;\r\n}\r\n\r\n.form-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.form-container > * {\r\n  width: 100%;\r\n}\r\n\r\n@media only screen and (max-width: 600px) {\r\n  .example-container {\r\n    width: 90%;\r\n    margin-left: 5%;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9hdXRoLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRTtJQUNFLFVBQVU7SUFDVixlQUFlO0VBQ2pCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hdXRoL2F1dGguY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDQwJTtcclxuICBtYXJnaW4tbGVmdDogMzAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmJ1dHRvbnMge1xyXG4gIHdpZHRoOiA3NSU7XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4uZm9ybS1jb250YWluZXIgPiAqIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gIC5leGFtcGxlLWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xyXG4gIH1cclxufVxyXG4iXX0= */"

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







var AuthComponent = /** @class */ (function () {
    function AuthComponent(fb, apiService, userService, router) {
        this.apiService = apiService;
        this.userService = userService;
        this.router = router;
        this.loginClicked = true;
        this.registerClicked = false;
        this.nextPage = window.innerWidth > 600 ? 'host' : 'join';
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
    AuthComponent.prototype.onLoginClick = function () {
        console.log("login");
        this.registerClicked = false;
        this.loginClicked = !this.loginClicked;
    };
    AuthComponent.prototype.onRegisterClick = function () {
        this.loginClicked = false;
        this.registerClicked = !this.registerClicked;
    };
    AuthComponent.prototype.login = function () {
        var _this = this;
        this.apiService.get_user(this.loginForm.controls.username.value, this.loginForm.controls.password.value).subscribe(function (user) {
            console.log("Login, ", user);
            _this.router.navigate([_this.nextPage]);
            _this.userService.login(user);
            _this.invalid = false;
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
        if (window.innerWidth > 600) {
            this.nextPage = 'host';
        }
        else {
            this.nextPage = 'join';
        }
    };
    AuthComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
        { type: _user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
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
        var e_1, _a;
        this.router = router;
        this.tokenService = tokenService;
        // this.route.queryParams.subscribe(
        //   data => console.log(data)
        // )
        var params = this.router.url.split('#')[1].split('&');
        var paramsJSON = {};
        try {
            for (var params_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](params), params_1_1 = params_1.next(); !params_1_1.done; params_1_1 = params_1.next()) {
                var p = params_1_1.value;
                var k = p.split('=')[0];
                var v = p.split('=')[1];
                paramsJSON[k] = v;
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (params_1_1 && !params_1_1.done && (_a = params_1.return)) _a.call(params_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        this.tokenService.setToken(paramsJSON['access_token']);
        this.router.navigate(['party', '30']);
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

module.exports = ".current-song {\r\n  width: 100%;\r\n  position: fixed;\r\n  top: 0px;\r\n  z-index: -1;\r\n  background-color: black;\r\n  color: white;\r\n  text-align: center\r\n}\r\n\r\n.song {\r\n  padding-top: 20%;\r\n  padding-bottom: 20%;\r\n  width: 100%;\r\n}\r\n\r\n.normal {\r\n  font-size: 3.5vw;\r\n}\r\n\r\n.banner {\r\n  font-size: 3.25vw;\r\n  padding-top: 3%;\r\n  padding-bottom: 3%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3VycmVudC1zb25nL2N1cnJlbnQtc29uZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLGVBQWU7RUFDZixRQUFRO0VBQ1IsV0FBVztFQUNYLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1o7QUFDRjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsV0FBVztBQUNiOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9jdXJyZW50LXNvbmcvY3VycmVudC1zb25nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3VycmVudC1zb25nIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwcHg7XHJcbiAgei1pbmRleDogLTE7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlclxyXG59XHJcblxyXG4uc29uZyB7XHJcbiAgcGFkZGluZy10b3A6IDIwJTtcclxuICBwYWRkaW5nLWJvdHRvbTogMjAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ubm9ybWFsIHtcclxuICBmb250LXNpemU6IDMuNXZ3O1xyXG59XHJcblxyXG4uYmFubmVyIHtcclxuICBmb250LXNpemU6IDMuMjV2dztcclxuICBwYWRkaW5nLXRvcDogMyU7XHJcbiAgcGFkZGluZy1ib3R0b206IDMlO1xyXG59XHJcbiJdfQ== */"

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
/* harmony import */ var _classes_song__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @classes/song */ "./src/app/Classes/song.ts");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");




var CurrentSongComponent = /** @class */ (function () {
    function CurrentSongComponent(apiService) {
        this.apiService = apiService;
        this.song = new _classes_song__WEBPACK_IMPORTED_MODULE_2__["Song"]();
        this.width = window.innerWidth;
        this.yoffset = window.pageYOffset;
        this.song_padding = this.width <= 600 ? String(Math.max(20 - 100 * this.yoffset / window.innerHeight, 0)) + '%' : '20%';
    }
    Object.defineProperty(CurrentSongComponent.prototype, "inp", {
        set: function (input) {
            this.event_id = input;
            if (this.event_id) {
                this.setCurrentSong();
            }
        },
        enumerable: true,
        configurable: true
    });
    CurrentSongComponent.prototype.ngOnInit = function () {
    };
    CurrentSongComponent.prototype.setCurrentSong = function () {
        var _this = this;
        this.apiService.get_event_current_song(this.event_id).subscribe(function (data) {
            _this.song = data,
                _this.track_id = _this.song.song_id,
                _this.platform = _this.song.platform;
        }, function (error) { return console.log(error); });
    };
    CurrentSongComponent.prototype.skipSong = function () {
        var _this = this;
        this.apiService.get_queuedSongs(this.event_id).subscribe(function (data) {
            if (data[0]) {
                _this.apiService.put_current_song(_this.event_id, data[0]['order_num']).subscribe(function (data) {
                    _this.setCurrentSong();
                });
            }
        });
    };
    CurrentSongComponent.prototype.onResize = function (event) {
        this.width = window.innerWidth;
        this.yoffset = window.pageYOffset;
        this.song_padding = this.width <= 600 ? String(Math.max(20 - 100 * this.yoffset / window.innerHeight, 0)) + '%' : '20%';
    };
    CurrentSongComponent.ctorParameters = function () { return [
        { type: _api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], CurrentSongComponent.prototype, "inp", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:scroll', ['$event'])
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

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input {\r\n  width: 100%;\r\n  padding: 2px 5px;\r\n  margin: 2px 0;\r\n  border: 1px solid red;\r\n  border-radius: 4px;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbutton, input[type=button]{\r\n  background-color: #4CAF50;\r\n  border: none;\r\n  color: white;\r\n  padding: 4px 7px;\r\n  text-decoration: none;\r\n  margin: 2px 1px;\r\n  cursor: pointer;\r\n}\r\n\r\nth, td {\r\n  padding: 1px;\r\n  text-align: left;\r\n  border-bottom: 1px solid #ddd;\r\n\r\n}\r\n\r\ntr:hover {background-color: #f5f5f5;}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixlQUFlO0FBQ2pCOztBQUNBO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQiw2QkFBNkI7O0FBRS9COztBQUNBLFVBQVUseUJBQXlCLENBQUMiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbnB1dCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMnB4IDVweDtcclxuICBtYXJnaW46IDJweCAwO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuYnV0dG9uLCBpbnB1dFt0eXBlPWJ1dHRvbl17XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRDQUY1MDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDRweCA3cHg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIG1hcmdpbjogMnB4IDFweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxudGgsIHRkIHtcclxuICBwYWRkaW5nOiAxcHg7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcclxuXHJcbn1cclxudHI6aG92ZXIge2JhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7fVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");

// Node Imports

// Service Imports

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(apiService) {
        this.apiService = apiService;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.readUsers();
    };
    DashboardComponent.prototype.readPolicies = function () {
        var _this = this;
        this.apiService.readPolicies().subscribe(function (policies) {
            _this.policies = policies;
            console.log(_this.policies);
        });
    };
    DashboardComponent.prototype.readUsers = function () {
        var _this = this;
        this.apiService.readUsers().subscribe(function (users) {
            _this.users = users;
            console.log(_this.users);
        });
    };
    DashboardComponent.prototype.createOrUpdateUser = function (form) {
        var _this = this;
        console.log("User update ", this.selectedUser);
        if (this.selectedUser && this.selectedUser.user_id) {
            console.log("updating");
            form.value.id = this.selectedUser.user_id;
            this.apiService.updateUser(form.value).subscribe(function (user) {
                console.log("User updated", user);
                _this.readUsers();
            });
        }
        else {
            console.log("creating");
            this.apiService.createUser(form.value).subscribe(function (user) {
                console.log("User created, ", user);
                _this.readUsers();
            });
        }
        this.selectedUser = { user_id: null, username: null, password: null };
    };
    DashboardComponent.prototype.selectUser = function (user) {
        this.selectedUser = user;
        console.log("selected user is ", user);
    };
    DashboardComponent.prototype.deleteUser = function (id) {
        var _this = this;
        this.apiService.deleteUser(id).subscribe(function (user) {
            console.log("User deleted, ", user);
            _this.readUsers();
        });
    };
    /*
    createOrUpdatePolicy(form){
      if(this.selectedPolicy && this.selectedPolicy.id){
        form.value.id = this.selectedPolicy.id;
        this.apiService.updatePolicy(form.value).subscribe((policy: Policy)=>{
          console.log("Policy updated" , policy);
          this.readPolicies();
        });
      }
      else{
  
        this.apiService.createPolicy(form.value).subscribe((policy: Policy)=>{
          console.log("Policy created, ", policy);
          this.readPolicies();
        });
      }
    }*/
    DashboardComponent.prototype.selectPolicy = function (policy) {
        this.selectedPolicy = policy;
    };
    DashboardComponent.prototype.deletePolicy = function (id) {
        var _this = this;
        this.apiService.deletePolicy(id).subscribe(function (policy) {
            console.log("Policy deleted, ", policy);
            _this.readPolicies();
        });
    };
    DashboardComponent.ctorParameters = function () { return [
        { type: _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }
    ]; };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-dashboard",
            template: __webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        })
    ], DashboardComponent);
    return DashboardComponent;
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

module.exports = ".example-container {\r\n  width: 40%;\r\n  margin-left: 30%;\r\n  text-align: center;\r\n}\r\n\r\n.buttons {\r\n  margin-left: 10%;\r\n  margin-right: 10%;\r\n}\r\n\r\n.form-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.form-container > * {\r\n  width: 100%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9zdC9ob3N0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsV0FBVztBQUNiIiwiZmlsZSI6InNyYy9hcHAvaG9zdC9ob3N0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1jb250YWluZXIge1xyXG4gIHdpZHRoOiA0MCU7XHJcbiAgbWFyZ2luLWxlZnQ6IDMwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5idXR0b25zIHtcclxuICBtYXJnaW4tbGVmdDogMTAlO1xyXG4gIG1hcmdpbi1yaWdodDogMTAlO1xyXG59XHJcblxyXG4uZm9ybS1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLmZvcm0tY29udGFpbmVyID4gKiB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuIl19 */"

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
        this.partyForm = fb.group({
            name: '',
            description: '',
            genre: ''
        });
        this.userService.currentUser.subscribe(function (user) { return _this.currentUser = user; });
    }
    HostComponent.prototype.ngOnInit = function () {
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

module.exports = ".example-container {\r\n  width: 40%;\r\n  margin-left: 30%;\r\n  text-align: center;\r\n}\r\n\r\n.buttons {\r\n  margin-left: 10%;\r\n  margin-right: 10%;\r\n}\r\n\r\n.form-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.form-container > * {\r\n  width: 100%;\r\n}\r\n\r\n.hint {\r\n  color: red;\r\n}\r\n\r\n@media only screen and (max-width: 600px) {\r\n  .example-container {\r\n    margin-top: 80%;\r\n    width: 80%;\r\n    margin-left: 10%;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvam9pbi9qb2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0U7SUFDRSxlQUFlO0lBQ2YsVUFBVTtJQUNWLGdCQUFnQjtFQUNsQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvam9pbi9qb2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1jb250YWluZXIge1xyXG4gIHdpZHRoOiA0MCU7XHJcbiAgbWFyZ2luLWxlZnQ6IDMwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5idXR0b25zIHtcclxuICBtYXJnaW4tbGVmdDogMTAlO1xyXG4gIG1hcmdpbi1yaWdodDogMTAlO1xyXG59XHJcblxyXG4uZm9ybS1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLmZvcm0tY29udGFpbmVyID4gKiB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5oaW50IHtcclxuICBjb2xvcjogcmVkO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgLmV4YW1wbGUtY29udGFpbmVyIHtcclxuICAgIG1hcmdpbi10b3A6IDgwJTtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBtYXJnaW4tbGVmdDogMTAlO1xyXG4gIH1cclxufVxyXG4iXX0= */"

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





var JoinComponent = /** @class */ (function () {
    function JoinComponent(fb, apiService, router) {
        this.apiService = apiService;
        this.router = router;
        this.invalid = false;
        console.log(window);
        this.joinForm = fb.group({
            eventID: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
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
    JoinComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
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

module.exports = ".party-container {\r\n    width: 50%;\r\n    margin-left: 25%;\r\n    margin-top: 70%;\r\n    text-align: center;\r\n    background-color: white;\r\n    padding-top: 2%;\r\n  }\r\n\r\ntable {\r\n    width: 100%;\r\n    text-align: left;\r\n}\r\n\r\n.buttons-right {\r\n    text-align: right;\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\n.arrow-button {\r\n  /* background-color: #4285F4; */\r\n  /* border-style: solid; */\r\n  /* border-color: #4285F4; */\r\n  margin: 0%;\r\n  width: 100%;\r\n  color: #4285F4;\r\n  cursor: pointer;\r\n  text-align: center;\r\n}\r\n\r\n.arrow-button-up:hover {\r\n  /* background-color: white; */\r\n  color: #00C851;\r\n}\r\n\r\n.arrow-button-up-voted {\r\n  /* background-color: white; */\r\n  color: #00C851;\r\n}\r\n\r\n.arrow-button-down:hover {\r\n  /* background-color: white; */\r\n  color: #ff4444;\r\n}\r\n\r\n.arrow-button-down-voted {\r\n  /* background-color: white; */\r\n  color: #ff4444;\r\n}\r\n\r\n@media only screen and (max-width: 600px) {\r\n   .party-container {\r\n     width: 100%;\r\n     margin-left: 0%;\r\n   }\r\n}\r\n\r\n.end-party-button {\r\n  float: right;\r\n  border: 0;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFydHkvcGFydHkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsZUFBZTtFQUNqQjs7QUFFRjtJQUNJLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsVUFBVTtJQUNWLFNBQVM7QUFDYjs7QUFFQTtFQUNFLCtCQUErQjtFQUMvQix5QkFBeUI7RUFDekIsMkJBQTJCO0VBQzNCLFVBQVU7RUFDVixXQUFXO0VBQ1gsY0FBYztFQUNkLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsY0FBYztBQUNoQjs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsY0FBYztBQUNoQjs7QUFFQTtHQUNHO0tBQ0UsV0FBVztLQUNYLGVBQWU7R0FDakI7QUFDSDs7QUFFQTtFQUNFLFlBQVk7RUFDWixTQUFTO0FBQ1giLCJmaWxlIjoic3JjL2FwcC9wYXJ0eS9wYXJ0eS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhcnR5LWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDI1JTtcclxuICAgIG1hcmdpbi10b3A6IDcwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZy10b3A6IDIlO1xyXG4gIH1cclxuXHJcbnRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuLmJ1dHRvbnMtcmlnaHQge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4uYXJyb3ctYnV0dG9uIHtcclxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjNDI4NUY0OyAqL1xyXG4gIC8qIGJvcmRlci1zdHlsZTogc29saWQ7ICovXHJcbiAgLyogYm9yZGVyLWNvbG9yOiAjNDI4NUY0OyAqL1xyXG4gIG1hcmdpbjogMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgY29sb3I6ICM0Mjg1RjQ7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmFycm93LWJ1dHRvbi11cDpob3ZlciB7XHJcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7ICovXHJcbiAgY29sb3I6ICMwMEM4NTE7XHJcbn1cclxuXHJcbi5hcnJvdy1idXR0b24tdXAtdm90ZWQge1xyXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IHdoaXRlOyAqL1xyXG4gIGNvbG9yOiAjMDBDODUxO1xyXG59XHJcblxyXG4uYXJyb3ctYnV0dG9uLWRvd246aG92ZXIge1xyXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IHdoaXRlOyAqL1xyXG4gIGNvbG9yOiAjZmY0NDQ0O1xyXG59XHJcblxyXG4uYXJyb3ctYnV0dG9uLWRvd24tdm90ZWQge1xyXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IHdoaXRlOyAqL1xyXG4gIGNvbG9yOiAjZmY0NDQ0O1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgIC5wYXJ0eS1jb250YWluZXIge1xyXG4gICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgIG1hcmdpbi1sZWZ0OiAwJTtcclxuICAgfVxyXG59XHJcblxyXG4uZW5kLXBhcnR5LWJ1dHRvbiB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIGJvcmRlcjogMDtcclxufVxyXG4iXX0= */"

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














var PartyComponent = /** @class */ (function () {
    function PartyComponent(songSearchService, apiService, router, route, snackBar, userService, tokenService) {
        var _this = this;
        this.songSearchService = songSearchService;
        this.apiService = apiService;
        this.router = router;
        this.route = route;
        this.snackBar = snackBar;
        this.userService = userService;
        this.tokenService = tokenService;
        this.event = new _classes_event__WEBPACK_IMPORTED_MODULE_2__["Event"]();
        this.queuedSongs = [];
        this.displayedColumns = ['score', 'artist', 'title', 'vote'];
        this.results = [];
        this.userVotes = {};
        this.id = route.snapshot.paramMap.get('id');
        this.userService.currentUser.subscribe(function (user) { return user ? _this.user = user : _this.router.navigate(['']); });
        this.apiService.get_event(parseInt(this.id)).subscribe(function (data) {
            if (data) {
                _this.event = data[0];
                _this.refreshVotes();
                console.log(data);
                // this.refresh();
            }
        }, function (error) {
            if (error.status >= 400) {
                // this.invalid = true,
                console.log(error);
            }
        });
    }
    // refresh() {
    //   this.apiService.get_queuedSongs(this.event.event_id).subscribe(
    //     data => {
    //       this.queuedSongs = data;
    //       console.log(this.queuedSongs);
    //     },
    //     error => {
    //       if ( error.status >= 400) {
    //         // this.invalid = true,
    //         console.log(error)
    //       }
    //     }
    //   )
    // }
    PartyComponent.prototype.refreshVotes = function () {
        var _this = this;
        this.apiService.get_user_votes(this.user.user_id, this.event.event_id).subscribe(function (data) {
            for (var i in data) {
                var vote = data[i];
                _this.userVotes[vote.order_num] = vote.vote;
            }
            //console.log(this.userVotes);
        }, function (error) {
            if (error.status >= 400) {
                console.log(error);
            }
        });
    };
    PartyComponent.prototype.upvote = function (order_num, song_id, platform) {
        var _this = this;
        this.queuedSong = new _classes_queuedSong__WEBPACK_IMPORTED_MODULE_4__["QueuedSong"];
        this.queuedSong.event_id = this.event.event_id;
        this.queuedSong.order_num = order_num;
        var vote_amount = [2, 1, -1];
        this.queuedSong.popularity = order_num in this.userVotes ? vote_amount[parseInt(this.userVotes[order_num]) + 1] : 1;
        this.apiService.put_QueuedSong(this.queuedSong).subscribe(function (data) {
            var vote = new _classes_vote__WEBPACK_IMPORTED_MODULE_3__["Vote"]();
            vote.user_id = _this.user.user_id;
            vote.event_id = _this.event.event_id;
            vote.vote = order_num in _this.userVotes && _this.userVotes[order_num] == 1 ? 0 : 1;
            vote.song_id = song_id;
            vote.platform = platform;
            vote.order_num = parseInt(order_num);
            if (order_num in _this.userVotes) {
                _this.apiService.put_vote(vote).subscribe(function (data) { return _this.refreshVotes(); }, function (error) { return error.status == 204 ? _this.refreshVotes() : console.log(error); });
            }
            else {
                _this.apiService.post_vote(vote).subscribe(function (data) { return _this.refreshVotes(); }, function (error) { return error.status == 204 ? _this.refreshVotes() : console.log(error); });
            }
        }, function (error) {
            if (error.status >= 400) {
                console.log(error);
            }
        });
    };
    PartyComponent.prototype.downvote = function (order_num, song_id, platform) {
        var _this = this;
        this.queuedSong = new _classes_queuedSong__WEBPACK_IMPORTED_MODULE_4__["QueuedSong"];
        this.queuedSong.event_id = this.event.event_id;
        this.queuedSong.order_num = order_num;
        var vote_amount = [1, -1, -2];
        this.queuedSong.popularity = order_num in this.userVotes ? vote_amount[parseInt(this.userVotes[order_num]) + 1] : -1;
        this.apiService.put_QueuedSong(this.queuedSong).subscribe(function (data) {
            var vote = new _classes_vote__WEBPACK_IMPORTED_MODULE_3__["Vote"]();
            vote.user_id = _this.user.user_id;
            vote.event_id = _this.event.event_id;
            vote.vote = order_num in _this.userVotes && _this.userVotes[order_num] == -1 ? 0 : -1;
            vote.song_id = song_id;
            vote.platform = platform;
            vote.order_num = parseInt(order_num);
            console.log(vote);
            if (order_num in _this.userVotes) {
                _this.apiService.put_vote(vote).subscribe(function (data) { return _this.refreshVotes(); }, function (error) { return error.status == 204 ? _this.refreshVotes() : console.log(error); });
            }
            else {
                _this.apiService.post_vote(vote).subscribe(function (data) { return _this.refreshVotes(); }, function (error) { return error.status == 204 ? _this.refreshVotes() : console.log(error); });
            }
        }, function (error) {
            if (error.status >= 400) {
                // this.invalid = true,
                console.log(error);
            }
        });
    };
    PartyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.queuedSongs$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_10__["interval"])(1000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["switchMap"])(function () { return _this.apiService.get_queuedSongs(_this.event.event_id); }));
    };
    PartyComponent.prototype.onEndPartyClick = function () {
        var _this = this;
        this.apiService.delete_Event(this.event.event_id).subscribe(function (data) {
            var snackBarRef = _this.snackBar.open('Your event was successfully deleted', 'Start a new party');
            snackBarRef.onAction().subscribe(function () {
                _this.router.navigate(['/host']);
            });
        }, function (error) {
            console.log(error);
        });
    };
    PartyComponent.prototype.loginSpotify = function () {
        this.tokenService.getSpotifyToken(String(this.event.event_id));
    };
    PartyComponent.ctorParameters = function () { return [
        { type: _song_search_service__WEBPACK_IMPORTED_MODULE_5__["SongSearchService"] },
        { type: _api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] },
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__["MatSnackBar"] },
        { type: _user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"] },
        { type: _token_service__WEBPACK_IMPORTED_MODULE_12__["TokenService"] }
    ]; };
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
        this.CLIENT_ID = 'BeGVhOrGmfboy1LtiHTQF6Ejpt9ULJCI';
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
        return this.httpClient.get(this.SPOTIFY_API + "?q=" + search_term + "&type=track", headers).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
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

module.exports = ".search-component {\r\n  overflow: visible;\r\n  height: 20%;\r\n  width: 100%;\r\n}\r\n\r\n.input-field {\r\n  width: 95%;\r\n  border-radius: 15px;\r\n  margin-top: 2%;\r\n  margin-bottom: 4%;\r\n  border: 0;\r\n  padding: 1% 3% 1% 3%;\r\n  background-color: gainsboro;\r\n  color: black;\r\n  outline: 0;\r\n}\r\n\r\n.input-field-active {\r\n  background-color: whitesmoke;\r\n}\r\n\r\nmat-form-field {\r\n  width: 90%;\r\n}\r\n\r\ntable {\r\n  width: 100%;\r\n}\r\n\r\ntd {\r\n    width: 100%;\r\n    cursor: pointer;\r\n    /* text-align: left; */\r\n}\r\n\r\n.youtube-td {\r\n  display: flex;\r\n}\r\n\r\n.youtube-title {\r\n  width: 70%;\r\n}\r\n\r\n.youtube-td > img {\r\n  width: 25%;\r\n  margin-right: 5%;\r\n}\r\n\r\n.soundcloud {\r\n  text-align: left;\r\n}\r\n\r\n.soundcloud > img {\r\n  width: 100%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc29uZy1zZWFyY2gvc29uZy1zZWFyY2guY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsV0FBVztBQUNiOztBQUVBO0VBQ0UsVUFBVTtFQUNWLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLFNBQVM7RUFDVCxvQkFBb0I7RUFDcEIsMkJBQTJCO0VBQzNCLFlBQVk7RUFDWixVQUFVO0FBQ1o7O0FBRUE7RUFDRSw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsZUFBZTtJQUNmLHNCQUFzQjtBQUMxQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFVBQVU7RUFDVixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9zb25nLXNlYXJjaC9zb25nLXNlYXJjaC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlYXJjaC1jb21wb25lbnQge1xyXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xyXG4gIGhlaWdodDogMjAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uaW5wdXQtZmllbGQge1xyXG4gIHdpZHRoOiA5NSU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICBtYXJnaW4tdG9wOiAyJTtcclxuICBtYXJnaW4tYm90dG9tOiA0JTtcclxuICBib3JkZXI6IDA7XHJcbiAgcGFkZGluZzogMSUgMyUgMSUgMyU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ2FpbnNib3JvO1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBvdXRsaW5lOiAwO1xyXG59XHJcblxyXG4uaW5wdXQtZmllbGQtYWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xyXG59XHJcblxyXG5tYXQtZm9ybS1maWVsZCB7XHJcbiAgd2lkdGg6IDkwJTtcclxufVxyXG5cclxudGFibGUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG50ZCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIC8qIHRleHQtYWxpZ246IGxlZnQ7ICovXHJcbn1cclxuXHJcbi55b3V0dWJlLXRkIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4ueW91dHViZS10aXRsZSB7XHJcbiAgd2lkdGg6IDcwJTtcclxufVxyXG5cclxuLnlvdXR1YmUtdGQgPiBpbWcge1xyXG4gIHdpZHRoOiAyNSU7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1JTtcclxufVxyXG5cclxuLnNvdW5kY2xvdWQge1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbi5zb3VuZGNsb3VkID4gaW1nIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4iXX0= */"

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
/* harmony import */ var _token_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../token.service */ "./src/app/token.service.ts");
/* harmony import */ var _classes_song__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @classes/song */ "./src/app/Classes/song.ts");
/* harmony import */ var _classes_queuedSong__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @classes/queuedSong */ "./src/app/Classes/queuedSong.ts");









// import { platform } from 'os';
var SongSearchComponent = /** @class */ (function () {
    function SongSearchComponent(songSearchService, apiService, tokenService) {
        this.songSearchService = songSearchService;
        this.apiService = apiService;
        this.tokenService = tokenService;
        this.event_id = 1;
        this.searchOptions = [1, 0, 0];
        this.songs = [];
        this.searchTerms = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.displayedColumns = ['artist', 'title'];
        this.searchTermsSoundcloud = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.displayedColumnsSoundcloud = ['artwork', 'artist', 'title'];
        this.searchTermsYoutube = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.displayedColumnsYoutube = ['title'];
        this.myEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        // this.songSearchService.searchSpotify('kesha').subscribe(
        //   data => {
        //     console.log('here');
        //     console.log(data);
        //   }
        // )
        // this.search_spotify('kesha');
    }
    Object.defineProperty(SongSearchComponent.prototype, "inp", {
        set: function (input) {
            this.event_id = input;
        },
        enumerable: true,
        configurable: true
    });
    // Push a search term into the observable stream.
    SongSearchComponent.prototype.search = function (term) {
        this.searchTerms.next(term);
    };
    SongSearchComponent.prototype.searchYoutube = function (term) {
        this.searchTermsYoutube.next(term);
    };
    SongSearchComponent.prototype.searchSoundcloud = function (term) {
        this.searchTermsSoundcloud.next(term);
    };
    SongSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.songs$ = this.searchTerms.pipe(
        // wait 300ms after each keystroke before considering the term
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(300), 
        // ignore new term if same as previous term
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])());
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
    SongSearchComponent.prototype.addSong = function (newSong) {
        var _this = this;
        // add to Songs table
        console.log(newSong);
        this.apiService.get_song(newSong.song_id, newSong.platform).subscribe(function (data) {
            if (data) { // song exists
                // call put
                _this.addSongToQueue(newSong.song_id, newSong.platform);
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
        this.qs = new _classes_queuedSong__WEBPACK_IMPORTED_MODULE_8__["QueuedSong"]();
        this.qs.event_id = this.event_id;
        console.log(this.event_id);
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
    SongSearchComponent.prototype.onButtonClick = function (index) {
        this.searchOptions = [0, 0, 0];
        this.searchOptions[index] = 1;
    };
    SongSearchComponent.prototype.search_spotify = function (search_term) {
        var _this = this;
        if (search_term) {
            this.tokenService.token.subscribe(function (token) {
                _this.songSearchService.searchSpotify(search_term, token).subscribe(function (data) {
                    _this.songs = [];
                    for (var item in data['tracks']['items']) {
                        var mySong = new _classes_song__WEBPACK_IMPORTED_MODULE_7__["Song"]();
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
                        _this.songs.push(mySong);
                    }
                }, function (error) {
                    console.log(error);
                });
            });
        }
    };
    SongSearchComponent.ctorParameters = function () { return [
        { type: _song_search_service__WEBPACK_IMPORTED_MODULE_4__["SongSearchService"] },
        { type: _api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"] },
        { type: _token_service__WEBPACK_IMPORTED_MODULE_6__["TokenService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], SongSearchComponent.prototype, "inp", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], SongSearchComponent.prototype, "myEvent", void 0);
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


var SoundcloudComponent = /** @class */ (function () {
    function SoundcloudComponent() {
    }
    Object.defineProperty(SoundcloudComponent.prototype, "inp", {
        set: function (input) {
            this.track_id = input[0];
        },
        enumerable: true,
        configurable: true
    });
    SoundcloudComponent.prototype.ngOnInit = function () { };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], SoundcloudComponent.prototype, "inp", null);
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

/***/ "./src/app/spotify/spotify.component.css":
/*!***********************************************!*\
  !*** ./src/app/spotify/spotify.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Nwb3RpZnkvc3BvdGlmeS5jb21wb25lbnQuY3NzIn0= */"

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


// import '@types/spotify-web-playback-sdk';
// import * as Spotify from '@classes/index.d';
var SpotifyComponent = /** @class */ (function () {
    function SpotifyComponent() {
    }
    // public token: string;
    // public track_id: string;
    // public device_id: string;
    // public song: Song;
    //
    //
    // @Input()
    // set inp(input) {
    //    this.track_id = input['song_id'];
    //    this.song = input;
    //    console.log("track_id", this.track_id);
    //
    //     if(this.track_id && this.device_id ){
    //       this.play(this.device_id, this.track_id);
    //   }
    // }
    //
    SpotifyComponent.prototype.ngOnInit = function () {
    };
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
    function TokenService() {
        this.CLIENT_ID = "c7d322da32444b989421f7cc942c64a3";
        this.REDIRECT_URI = "http://localhost:4200/callback";
        this.tokenSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](localStorage.getItem('token'));
        this.token = this.tokenSubject.asObservable();
    }
    TokenService.prototype.getSpotifyToken = function (party) {
        var LINK = "https://accounts.spotify.com/authorize?client_id=" + this.CLIENT_ID + "&response_type=token&redirect_uri=" + this.REDIRECT_URI + "&scope=streaming&state=" + party;
        window.location.href = LINK;
        // return this.httpClient.get(`https://accounts.spotify.com/authorize?client_id=${this.CLIENT_ID}&response_type=code&redirect_uri=${this.REDIRECT_URI}&scope=user-read-private%20user-read-email&state=34fFs29kd09`,headers).pipe(catchError(this.errorHandler));
    };
    Object.defineProperty(TokenService.prototype, "tokenValue", {
        get: function () {
            return this.tokenSubject.value;
        },
        enumerable: true,
        configurable: true
    });
    TokenService.prototype.setToken = function (token) {
        console.log(token);
        localStorage.setItem('token', token);
        this.tokenSubject.next(token);
    };
    TokenService.prototype.updateToken = function (token) {
        localStorage.setItem('token', token);
        this.tokenSubject.next(token);
    };
    TokenService.prototype.removeToken = function () {
        // remove user from local storage to log user out
        localStorage.removeItem('token');
        this.tokenSubject.next(null);
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
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var UserService = /** @class */ (function () {
    function UserService() {
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }
    Object.defineProperty(UserService.prototype, "currentUserValue", {
        get: function () {
            return this.currentUserSubject.value;
        },
        enumerable: true,
        configurable: true
    });
    UserService.prototype.login = function (user) {
        user.authdata = window.btoa(user.username + ':' + user.password);
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
    };
    UserService.prototype.updateUser = function (user) {
        user.authdata = window.btoa(user.username + ':' + user.password);
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
    };
    UserService.prototype.logout = function () {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    };
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


var YoutubePlayerComponent = /** @class */ (function () {
    function YoutubePlayerComponent() {
        this.id = 'FM7MFYoylVs';
        this.onResize();
    }
    YoutubePlayerComponent.prototype.ngOnInit = function () {
    };
    YoutubePlayerComponent.prototype.onResize = function (event) {
        this.width = window.innerWidth;
        this.height = this.width * 9 / 16;
        console.log(this.width);
    };
    YoutubePlayerComponent.prototype.onStateChange = function (event) {
        this.ytEvent = event.data;
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
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize', ['$event'])
    ], YoutubePlayerComponent.prototype, "onResize", null);
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