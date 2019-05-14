(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"7yUF":function(n,r){n.exports='<div class = "medium-list">\n    <div class="list-viewer-wrapper">\n      <div class="list-header-title">Log-in</div>\n      \n      <form [formGroup] = "form" (ngSubmit) = "onSubmit()">\n  \n        \x3c!-- Username Field --\x3e\n        <div class="form-container">\n          <mat-form-field>\n  \n              \x3c!-- Associate key from ts file: username --\x3e\n              <input \n                  formControlName = "username"\n                  matInput\n                  id="username" \n                  type="email" \n                  class="form-control"\n                  placeholder="Hunter Email...">\n          </mat-form-field>\n          <div *ngIf="username.touched && username.invalid" \n                class="alert alert-danger">\n                <mat-error *ngIf="username.errors.required">Email is <strong>Required!</strong></mat-error>\n                <mat-error *ngIf="username.errors.email">Invalid <strong>Email!</strong></mat-error>\n          </div>\n        </div>\n        \n        \x3c!-- Password Field --\x3e\n        <div class="form-container">\n            <mat-form-field>\n    \n                \x3c!-- Associate key from ts file: username --\x3e\n                <input \n                    formControlName = "password"\n                    matInput\n                    id="password" \n                    type="text" \n                    class="form-control-password"\n                    placeholder="Password..."\n                    [type] = "hide ? \'password\' : \'text\' "\n                    autocomplete="off">\n                <mat-icon matSuffix (click) = "hide = !hide">{{ hide ? \'visibility_of\' : \'visibility\' }}</mat-icon>\n            </mat-form-field>\n            <div *ngIf="password.touched && password.invalid" \n                  class="alert alert-danger">\n                  <mat-error *ngIf="password.errors.required">Password <strong>Required!</strong></mat-error>\n                  <mat-error *ngIf="password.errors.minlength">Password must be of size {{ password.errors.minlength.requiredLength }}!</mat-error>\n            </div>\n        </div>\n  \n          <div class="form-container">\n              <button class="form-button" mat-raised-button color = "primary" type="submit" [disabled] = "!form.valid">Login</button>\n          </div>      \n  \n      </form>\n          <div class="form-container">\n              <button class="form-button"  mat-raised-button color = "primary" (click) = "register()">Register</button>\n          </div>\n          \n    </div>\n  </div>\n  \n  \n  \n  '},Ofye:function(n,r){n.exports="\n.medium-list{\n  margin: auto;\n  width: auto;\n  padding:10px\n}\n\n.list-viewer-wrapper {\n  border: 1px solid rgba(0, 0, 0, .03);\n  box-shadow: 0 2px 2px rgba(0, 0, 0, .24), 0 0 2px rgba(0, 0, 0, .12);\n  margin: 20px;\n}\n\n.list-header-title {\n  color: rgba(0, 0, 0, .54);\n  background: rgba(0, 0, 0, .03);\n  padding: 8px 20px;\n  font-weight: bold;\n}\n\n.form-container {\n  display: flex;\n  flex-direction: column; \n  padding: 20px;\n  \n}\n\n.form-button {\n  width: 90%;\n  margin-left: auto;\n  margin-right: auto;  \n  \n}\n\ninput.form-control-password::-webkit-outer-spin-button,\ninput.form-control-password::-webkit-inner-spin-button {\n  display: none;\n}\n\ninput.form-control-password {\n  -moz-appearance: textfield;\n}"},X3zk:function(n,r,e){"use strict";e.r(r);var t=e("mrSG"),o=e("gIcY"),i=e("b716"),s=e("UodH"),a=e("SMsm"),u=e("FVSy"),d=e("La40"),m=e("oNRu"),c=e("CcnG"),l=e("ZYCi"),p=function(){return function(){}}(),f=function(){function n(n,r,e){this.formBuilder=n,this.userService=r,this.router=e,this.user=new p,this.hide=!0}return n.prototype.ngOnInit=function(){this.form=this.formBuilder.group({username:[this.user.username,[o.j.required,o.j.email]],password:[this.user.password,[o.j.required,o.j.minLength(6)]]})},n.prototype.onSubmit=function(){var n=this;this.user=Object.assign({},this.form.value),this.userService.userAuthentication(this.user.username,this.user.password).subscribe(function(r){r.success?(localStorage.setItem("accessToken",r.token),n.router.navigate(["/home"])):(alert(r.error),n.router.navigate(["/login"]))})},n.prototype.register=function(){this.router.navigate(["/register"])},Object.defineProperty(n.prototype,"username",{get:function(){return this.form.get("username")},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"password",{get:function(){return this.form.get("password")},enumerable:!0,configurable:!0}),n=t.c([Object(c.n)({selector:"app-name-editor",template:e("7yUF"),styles:[e("Ofye")]}),t.f("design:paramtypes",[o.a,m.a,l.b])],n)}(),g=e("Ip0R"),b=[{path:"",component:f}],h=function(){function n(){}return n=t.c([Object(c.K)({imports:[l.c.forChild(b)],exports:[l.c]})],n)}();e.d(r,"LoginModule",function(){return w});var w=function(){function n(){}return n=t.c([Object(c.K)({declarations:[f],imports:[g.b,h,o.i,d.a,u.a,a.a,s.a,i.b]})],n)}()}}]);