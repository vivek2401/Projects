webpackJsonp([0],{0:function(e,exports,t){t(1),e.exports=t(327)},327:function(e,exports,t){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}var n=t(328),s=a(n),i=t(330),r=a(i),o=t(403),l=a(o),c=t(445),u=a(c),d=t(464),f=a(d),m=t(473),p=a(m),h=t(477),v=a(h);t(478),t(479);t(481);s.default.module("app",[r.default,l.default,u.default,f.default,"ngStorage"]).config(["$locationProvider","$httpProvider","$sessionStorageProvider",function(e,t,a){"ngInject";e.html5Mode(!0).hashPrefix("!"),a.setKeyPrefix("csva")}]).component("app",p.default).constant("appConstants",v.default)},403:function(e,exports,t){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var n=t(328),s=a(n),i=t(404),r=a(i),o=t(438),l=a(o),c=t(439),u=a(c),d=s.default.module("app.common",[r.default,l.default,u.default]).name;exports.default=d},404:function(e,exports,t){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var n=t(328),s=a(n),i=t(330),r=a(i),o=t(405),l=a(o),c=s.default.module("timesheets",[r.default]).component("timesheets",l.default).name;exports.default=c},405:function(e,exports,t){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var n=t(406),s=a(n),i=t(407),r=a(i);t(436);var o={bindings:{},template:s.default,controller:r.default,controllerAs:"vm"};exports.default=o},406:function(e,exports){e.exports='\n<div class="card-panel teal lighten-2 margin timehead"><i class=" material-icons">access_time</i>Time Sheets</div>\n\n<div class="card-panel deep-orange accent-1 margin">\n  <div class="">\n    <div class="row">\n      <div class="col s12 m12">\n        <ul class="tabs ">\n          <li class="tab col s3 m3"><a class="active" href="#download">\n            <i class="small material-icons">cloud_download</i>\n            <span class="deep-orange-text text-accent-1">DOWNLOAD</span>\n          </a></li>\n          <li class="tab col s3 m3"><a href="#reports">\n              <i class="small material-icons">cloud</i>\n              <span class="deep-orange-text text-accent-1">REPORTS</span>\n          </a></li>\n          <li class="tab col s3 m3"><a  href="#hours">\n              <i class="small material-icons">timelapse</i>\n              <span class="deep-orange-text text-accent-1">HOURS</span>\n          </a></li>\n          <li class="tab col s3 m3"><a href="#payments">\n              <i class="small material-icons">monetization_on</i>\n              <span class="deep-orange-text text-accent-1">PAYMENTS</span>\n          </a></li>\n        </ul>\n        </div>\n        <div id="download" class="col s12">\n          <div class="card-panel teal lighten-2 margin ">\n            <div class="center-align">\n              <a ng-click="vm.downloadcsv()" class="waves-effect waves-light deep-orange accent-1 btn"><i class="material-icons left">cloud</i>Click Here To Download CSV File</a>\n            </div>\n          </div>\n        </div>\n        <div id="reports" class="col s12">\n          <div class="card-panel teal lighten-2 margin ">\n            <table class="striped highlight centered table">\n              <tbody>\n                <tr>\n                  <td>Total Hours</td>\n                <td>{{vm.hours_hours_sum}}</td>\n              </tr>\n              <tr>\n                <td>Total Hours Pay</td>\n                <td>$ {{vm.hours_hours_sum * 35}}</td>\n              </tr>\n              <tr>\n                <td>Total Payments Paid</td>\n                <td>$ {{vm.payments_amount_sum + vm.miscellaneous_amount_sum}}</td>\n              </tr>\n              <tr>\n                <td>Balance Payment</td>\n                <td>$ {{(vm.hours_hours_sum * 35) - (vm.payments_amount_sum + vm.miscellaneous_amount_sum)}}</td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n      <div id="hours" class="col s12">\n        <datatable\n        table-data = "vm.hours.tableGetData"\n        table-headers = "vm.hours.tableHeaders"\n        table-record-keys = "vm.hours.tableRecordKeys"\n        table-types-classes = "vm.hours.tableTypesClasses"\n        on-get-page = "vm.onGetPage(page)"\n        ></datatable>\n      </div>\n      <div id="payments" class="col s12">\n          <datatable\n          table-data = "vm.payments.tableGetData"\n          table-headers = "vm.payments.tableHeaders"\n          table-record-keys = "vm.payments.tableRecordKeys"\n          table-types-classes = "vm.payments.tableTypesClasses"\n          on-get-page = "vm.onGetPage(page)"\n          ></datatable>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n\n'},407:function(e,exports,t){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var n=t(408),s=a(n),i=t(409),r=a(i),o=t(429),l=(a(o),function(){function e(t,a){var n=this;(0,s.default)(this,e),this.downloadcsv=function(){var e=[];_.forEach(n.appConstants.sums,function(t){e.push({table:{name:t.name,column_name:t.name+"_id",limit:n.appConstants.completeRows,offset:0}})}),n.timesheetsService.getData(e).then(function(e){n.csvaData=e.data,n.workhours=n.csvaData[0].data,n.paymentsData=n.csvaData[1].data,n.miscellaneous=n.csvaData[2].data;var t="Period,Hours\n    ";n.workhours.forEach(function(e){t+=e.hours_start_date+" - "+e.hours_end_date+", "+e.hours_hours+"\n      "}),t+="\n\n    Total Hours, "+n.hours_hours_sum+"\n\n    ";var a="\n    \n    Cheque Period, Cheque Amount, Cheque Date\n    ";n.paymentsData.forEach(function(e){a+=e.payments_start_date+" - "+e.payments_end_date+", "+e.payments_amount+", "+e.payments_date+"\n      "}),a+="\n    \n    Total Paid, "+n.payments_amount_sum+"\n    \n    ";var s="\n    \n    Miscellaneous Charges, Miscellaneous Amount\n    ";n.miscellaneous.forEach(function(e){s+=e.miscellaneous_description+" , "+e.miscellaneous_amount+"\n      "}),s+="\n    \n    Total Miscellaneous Charges, "+n.miscellaneous_amount_sum+"\n    \n    ";var i=t+a+s,r=document.createElement("a");r.setAttribute("href","data:attachment/csv;charset=utf-8,"+encodeURI(i)),r.setAttribute("target","_blank"),r.setAttribute("download","timesheets.csv"),r.id="someid",document.body.appendChild(r),document.getElementById("someid").click(),document.getElementById("someid").remove()},function(e){var t=e.data&&e.data.reason?e.data.reason:"Unexpected Error Occurred";M.toast({html:t})})},this.name="timesheets",this.appConstants=t,this.timesheetsService=a,this.hours=this.appConstants.hours,this.payments=this.appConstants.payments}return e.$inject=["appConstants","timesheetsService"],(0,r.default)(e,[{key:"$onInit",value:function(){this.getSums()}},{key:"onGetPage",value:function(e){var t=e.name+"_id",a=(e.page-1)*this.appConstants.limit;this[e.name].tableGetData={table:{name:e.name,column_name:t,limit:this.appConstants.limit,offset:a}}}},{key:"getSums",value:function(){var e=this,t=[],a=[];_.forEach(this.appConstants.sums,function(n){t.push({table:{name:n.name,column_name:n.column,limit:e.appConstants.completeRows,offset:0}}),a.push(n.column+"_sum")}),this.timesheetsService.sumData(t).then(function(t){_.forEach(t.data,function(t,n){e[a[n]]=parseInt(t.sum)},function(e){var t=e.data&&e.data.reason?e.data.reason:"Unexpected Error Occurred";M.toast({html:t})})})}}]),e}());exports.default=l},429:function(e,exports,t){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var n=t(430),s=a(n),i=t(431),r=a(i);t(432);var o={bindings:{tableData:"<",tableHeaders:"=",tableRecordKeys:"=",tableTypesClasses:"=",onGetPage:"&"},template:s.default,controller:r.default,controllerAs:"vm"};exports.default=o},430:function(e,exports){e.exports='<div class="card-panel teal lighten-2 margin ">\n    <table class="striped highlight centered table" ng-if="vm.tableRecords">\n      <thead>\n        <tr>\n          <th ng-repeat="header in vm.tableHeaders track by $index">{{header}}</th>\n          <th style="width: 50px;"></th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td ng-repeat="type in vm.tableTypesClasses"><input ng-required="required" name="{{type.name}}" type="{{type.type}}" class="{{type.class}}" ></td>\n          <td style="width: 50px;">\n              <a class="btn-floating btn-medium waves-effect waves-light " ng-click="vm.insertData()" ng-type="submit"><i class="material-icons">add</i></a>\n          </td>\n        </tr>\n        <tr ng-repeat="record in vm.tableRecords.data">\n          <td ng-repeat="header in vm.tableRecordKeys">{{record[header]}}</td>\n          <td style="width: 50px;"></td>\n        </tr>\n        <tr>\n      </tbody>\n    </table>\n    <ul class="pagination  center-align">\n        <li class="waves-effect"><a ><i class="material-icons" ng-click="vm.previousPage()">chevron_left</i></a></li>\n        <li class="waves-effect" ng-repeat="page in vm.pages track by $index" ng-class=\'{active:page == vm.currentPage}\'>\n          <a ng-click="vm.getPage(page)">{{page}}</a></li>\n        <li class="waves-effect"><a ><i class="material-icons" ng-click="vm.nextPage()">chevron_right</i></a></li>\n    </ul>\n    <div class="progress" ng-if="vm.showProgress">\n        <div class="indeterminate"></div>\n    </div>\n  </div>\n\n\n  <div class="modal alertError">\n    <div class="modal-content card-panel amber accent-1 margin ">\n      <div class="center-align"><i class="material-icons medium ">error</i></div><br>\n      <h4 class="center-align">Please Fill All Fields</h4>\n    </div>\n  </div>'},431:function(e,exports,t){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var n=t(408),s=a(n),i=t(409),r=a(i),o=function(){function e(t,a,n,i){(0,s.default)(this,e),this.name="datatable",this.appConstants=a,this.$scope=n,this.$timeout=i,this.timesheetsService=t,this.currentPage=1,this.showProgress=!1}return e.$inject=["timesheetsService","appConstants","$scope","$timeout"],(0,r.default)(e,[{key:"$onChanges",value:function(e){e.tableData&&e.tableData.currentValue&&this.getData(e.tableData.currentValue)}},{key:"getData",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.tableData;this.timesheetsService.getData(t).then(function(t){e.tableRecords=t.data[0],e.$timeout(function(){var t={format:"yyyy-mm-dd",autoClose:!0},a=".datepicker."+e.tableData.table.name,n=".numberpicker."+e.tableData.table.name;e.dateElements=document.querySelectorAll(a),e.numberElements=document.querySelectorAll(n),M.Datepicker.init(e.dateElements,t)}),e.pagination()},function(e){var t=e.data&&e.data.reason?e.data.reason:"Unexpected Error Occurred";M.toast({html:t})})}},{key:"insertData",value:function(){var e=this.transformData();_.isNull(e)?this.alertFillDetails():this.insertRecordInDb(e)}},{key:"insertRecordInDb",value:function(e){var t=this;this.showProgress=!0,this.timesheetsService.insertData(e).then(function(e){t.tableRecords=e.data[0],t.pagination()},function(e){var t=e.data&&e.data.reason?e.data.reason:"Unexpected Error Occurred";M.toast({html:t})})}},{key:"alertFillDetails",value:function(){M.Modal.init(document.querySelectorAll(".alertError")),M.Modal.getInstance(document.querySelectorAll(".alertError")[0]).open()}},{key:"transformData",value:function(){var e="",t=",",a="'",n=!1,s=(new Date).getFullYear();return _.forEach(this.dateElements,function(s){var i=M.Datepicker.getInstance(s).toString();n=_.isEmpty(i),e=e+a+i+a+t}),_.forEach(this.numberElements,function(s){var i=s.value;n=_.isEmpty(i),e=e+a+i+a+t}),e=e+a+s+a,n?null:{table:{name:this.tableData.table.name,values:e,column_name:this.tableData.table.column_name,limit:this.appConstants.limit,offset:0}}}},{key:"pagination",value:function(){this.showProgress=!1,this.pagesCount=_.ceil(this.tableRecords.count/this.appConstants.limit),this.pages=_.range(1,this.pagesCount+1)}},{key:"getPage",value:function(e){this.showProgress=!0,this.currentPage=e,this.onGetPage({page:{page:e,name:this.tableData.table.name}})}},{key:"previousPage",value:function(){this.getPage(this.currentPage=_.indexOf(this.pages,this.currentPage)>0?_.indexOf(this.pages,this.currentPage):1)}},{key:"nextPage",value:function(){this.getPage(this.currentPage=_.indexOf(this.pages,this.currentPage)<_.last(this.pages)-1?_.indexOf(this.pages,this.currentPage)+2:_.last(this.pages))}}]),e}();exports.default=o},432:function(e,exports,t){var a=t(433);"string"==typeof a&&(a=[[e.id,a,""]]);t(435)(a,{});a.locals&&(e.exports=a.locals)},433:function(e,exports,t){exports=e.exports=t(434)(),exports.push([e.id,"body{padding:0;margin:0;width:100%;height:100%;font:14px Bree Serif,serif;background:#ff9e80}.material-icons{font-size:inherit;line-height:inherit;display:inline-block;padding-left:5px;padding-right:5px;vertical-align:middle}td{padding:10px 5px!important}th{padding:20px 5px!important;background:#ff9e80}.margin{margin:0!important}.timehead{font-family:Bree Serif,cursive;color:#fff;min-height:100px;font-size:35px;line-height:52px;text-align:center}.timehead hrt{margin-top:30px;color:#fff;font:18px Bree Serif,serif;line-height:25px;display:block}.table{color:#37474f}.datatable{color:red}",""])},436:function(e,exports,t){var a=t(437);"string"==typeof a&&(a=[[e.id,a,""]]);t(435)(a,{});a.locals&&(e.exports=a.locals)},437:function(e,exports,t){exports=e.exports=t(434)(),exports.push([e.id,"body{padding:0;margin:0;width:100%;height:100%;font:14px Bree Serif,serif;background:#ff9e80}.material-icons{font-size:inherit;line-height:inherit;display:inline-block;padding-left:5px;padding-right:5px;vertical-align:middle}td{padding:10px 5px!important}th{padding:20px 5px!important;background:#ff9e80}.margin{margin:0!important}.timehead{font-family:Bree Serif,cursive;color:#fff;min-height:100px;font-size:35px;line-height:52px;text-align:center}.timehead hrt{margin-top:30px;color:#fff;font:18px Bree Serif,serif;line-height:25px;display:block}.table{color:#37474f}.timesheets{color:red}",""])},438:function(e,exports,t){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var n=t(328),s=a(n),i=t(330),r=a(i),o=t(429),l=a(o),c=s.default.module("datatable",[r.default]).component("datatable",l.default).name;exports.default=c},439:function(e,exports,t){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var n=t(328),s=a(n),i=t(330),r=a(i),o=t(440),l=a(o),c=s.default.module("navbar",[r.default]).component("navbar",l.default).name;exports.default=c},440:function(e,exports,t){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var n=t(441),s=a(n),i=t(442),r=a(i);t(443);var o={bindings:{},template:s.default,controller:r.default,controllerAs:"vm"};exports.default=o},441:function(e,exports){e.exports='<div class="card-panel teal lighten-2 margin row">\n    <div class="center-align  col s6">\n        <a ng-click="vm.$state.go(\'home\')" class="waves-effect waves-light deep-orange accent-1 btn">\n            <i class="material-icons left">home</i>HOME</a>\n    </div>\n    <div class="center-align col s6" ng-if="vm.$sessionStorage.user">\n        <a ng-click="vm.$state.go(\'csva\')"  class="waves-effect waves-light deep-orange accent-1 btn">\n            <i class="material-icons left">assignment</i>CSVA</a>\n    </div>\n    <div class="center-align  col s6" ng-if="!vm.$sessionStorage.user" >\n        <a ng-click="vm.$state.go(\'login\')" class="waves-effect waves-light deep-orange accent-1 btn">\n            <i class="material-icons left">launch</i>login</a>\n    </div>\n</div>'},442:function(e,exports,t){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var n=t(408),s=a(n),i=["$sessionStorage","$state",function e(t,a){(0,s.default)(this,e),this.$state=a,this.$sessionStorage=t}];exports.default=i},443:function(e,exports,t){var a=t(444);"string"==typeof a&&(a=[[e.id,a,""]]);t(435)(a,{});a.locals&&(e.exports=a.locals)},444:function(e,exports,t){exports=e.exports=t(434)(),exports.push([e.id,"body{padding:0;margin:0;width:100%;height:100%;font:14px Bree Serif,serif;background:#ff9e80}.material-icons{font-size:inherit;line-height:inherit;display:inline-block;padding-left:5px;padding-right:5px;vertical-align:middle}td{padding:10px 5px!important}th{padding:20px 5px!important;background:#ff9e80}.margin{margin:0!important}.timehead{font-family:Bree Serif,cursive;color:#fff;min-height:100px;font-size:35px;line-height:52px;text-align:center}.timehead hrt{margin-top:30px;color:#fff;font:18px Bree Serif,serif;line-height:25px;display:block}.table{color:#37474f}.navbar{color:red}",""])},445:function(e,exports,t){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var n=t(328),s=a(n),i=t(446),r=a(i),o=t(452),l=a(o),c=t(458),u=a(c),d=s.default.module("app.components",[r.default,l.default,u.default]).name;exports.default=d},446:function(e,exports,t){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var n=t(328),s=a(n),i=t(330),r=a(i),o=t(447),l=a(o),c=s.default.module("home",[r.default]).config(["$stateProvider","$urlRouterProvider",function(e,t){"ngInject";t.otherwise("/"),e.state("home",{url:"/",component:"home"})}]).component("home",l.default).name;exports.default=c},447:function(e,exports,t){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var n=t(448),s=a(n),i=t(449),r=a(i);t(450);var o={bindings:{},template:s.default,controller:r.default,controllerAs:"vm"};exports.default=o},448:function(e,exports){e.exports="<navbar></navbar>"},449:function(e,exports,t){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var n=t(408),s=a(n),i=["$sessionStorage","$state",function e(t,a){(0,s.default)(this,e),this.$state=a}];exports.default=i},450:function(e,exports,t){var a=t(451);"string"==typeof a&&(a=[[e.id,a,""]]);t(435)(a,{});a.locals&&(e.exports=a.locals)},451:function(e,exports,t){exports=e.exports=t(434)(),exports.push([e.id,".home{color:red}",""])},452:function(e,exports,t){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var n=t(328),s=a(n),i=t(330),r=a(i),o=t(453),l=a(o),c=s.default.module("csva",[r.default]).config(["$stateProvider",function(e){"ngInject";e.state("csva",{url:"/csva",component:"csva",onEnter:["$state","$rootScope","$localStorage","$sessionStorage","appConstants",function(e,t,a,n,s){if(n.user&&n.user.token){var i=function(){n.$reset(),e.go("login")},r=_.debounce(i,s.resetTime);r()}else e.go("login")}],onExit:function(){}})}]).component("csva",l.default).name;exports.default=c},453:function(e,exports,t){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var n=t(454),s=a(n),i=t(455),r=a(i);t(456);var o={bindings:{},template:s.default,controller:r.default};exports.default=o},454:function(e,exports){e.exports="<navbar></navbar>\n<timesheets></timesheets>\n"},455:function(e,exports,t){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var n=t(408),s=a(n),i=function e(){(0,s.default)(this,e),this.name="csva",M.AutoInit()};exports.default=i},456:function(e,exports,t){var a=t(457);"string"==typeof a&&(a=[[e.id,a,""]]);t(435)(a,{});a.locals&&(e.exports=a.locals)},457:function(e,exports,t){exports=e.exports=t(434)(),exports.push([e.id,".csva{color:red}",""])},458:function(e,exports,t){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var n=t(328),s=a(n),i=t(330),r=a(i),o=t(459),l=a(o),c=s.default.module("login",[r.default]).config(["$stateProvider","$urlRouterProvider",function(e,t){"ngInject";e.state("login",{url:"/login",component:"login",onEnter:["$sessionStorage",function(e){e.$reset()}]})}]).component("login",l.default).name;exports.default=c},459:function(e,exports,t){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var n=t(460),s=a(n),i=t(461),r=a(i);t(462);var o={bindings:{},template:s.default,controller:r.default,controllerAs:"vm"};exports.default=o},460:function(e,exports){e.exports='<navbar></navbar>\n\n<div class="row login valign-wrapper">\n  <div class="col s6 offset-s3 ">\n    <div class="card-panel teal lighten-2 margin timehead ">\n      Account Login\n      <hrt>\n        <div class="row">\n          <div class="col s12">\n            <div class="row deep-orange accent-1">\n              <div class="input-field  col s12">\n                <input id="Username" ng-model="vm.userName" type="text" class="validate">\n                <label class="white-text text-white" for="Username">Username</label>\n              </div>\n            </div>\n            <div class="row deep-orange accent-1">\n              <div class="input-field  col s12">\n                <input id="password" ng-model="vm.password" type="password" class="validate">\n                <label class="white-text text-white" for="password">Password</label>\n              </div>\n            </div>\n            <div class="center-align  row">\n              <a ng-click="vm.login()" class="waves-effect waves-light deep-orange accent-1 btn ">\n                <i class="material-icons left">launch</i>login</a>\n            </div>\n          </div>\n        </div>\n      </hrt>\n    </div>\n  </div>\n</div>'},461:function(e,exports,t){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var n=t(408),s=a(n),i=t(409),r=a(i),o=function(){function e(t,a,n,i,r,o){(0,s.default)(this,e),this.appConstants=a,this.$state=t,this.$http=i,this.usersService=r,this.$sessionStorage=o}return e.$inject=["$state","appConstants","servicesTransform","$http","usersService","$sessionStorage"],(0,r.default)(e,[{key:"login",value:function(){var e=this;if(this.userName&&this.password){var t=[{action:"loginUser",table:{name:"user",column_name:"user_username",userName:this.userName.trim(),password:btoa(btoa(this.password))}}];this.usersService.loginUser(t).then(function(t){var a=function(){e.$sessionStorage.$reset(),e.$state.go("login")},n=_.debounce(a,e.appConstants.resetTime);"Sucess"===t.data.data&&(e.$sessionStorage.$default({user:t.data}),e.$state.go("csva")),n()},function(e){var t=e.data&&e.data.reason?e.data.reason:"Unexpected Error Occurred";M.toast({html:t})})}}}]),e}();exports.default=o},462:function(e,exports,t){var a=t(463);"string"==typeof a&&(a=[[e.id,a,""]]);t(435)(a,{});a.locals&&(e.exports=a.locals)},463:function(e,exports,t){exports=e.exports=t(434)(),exports.push([e.id,".login{height:calc(100vh - 200px)}",""])},464:function(e,exports,t){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var n=t(328),s=a(n),i=t(465),r=a(i),o=t(468),l=a(o),c=t(469),u=a(c),d=t(471),f=a(d),m=s.default.module("app.services",[r.default,u.default,f.default]).service("servicesTransform",l.default).name;exports.default=m},465:function(e,exports,t){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var n=t(328),s=a(n),i=t(330),r=a(i),o=t(466),l=a(o),c=t(467),u=a(c),d=s.default.module("timesheetsservices",[r.default]).service("timesheetsService",l.default).service("timesheetsServiceTransform",u.default).name;exports.default=d},466:function(e,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=function(e,t,a,n,s){var i=t.url,r=t.config;t.transformRequest;t.config.headers.token=s.user.token;var o=function(r){return t.config.headers.token=s.user.token,e({url:i+"?action=getData",method:"POST",data:r,headers:t.config.headers,transformRequest:n.generate(a.getdataTransform)})},l=function(r){return t.config.headers.token=s.user.token,e({url:i+"?action=getSums",method:"POST",data:r,headers:t.config.headers,transformRequest:n.generate(a.getSumsDataTransform)})},c=function(r){return t.config.headers.token=s.user.token,e({url:i+"?action=insertData",method:"POST",data:r,headers:t.config.headers,transformRequest:n.generate(a.insertDataTransform)})},u=function(a){return t.config.headers.token=s.user.token,a.action="delete",e.post(i+"?action=deleteData",[a],r)};return{getData:o,insertData:c,deleteData:u,sumData:l}};t.$inject=["$http","appConstants","timesheetsServiceTransform","servicesTransform","$sessionStorage"],exports.default=t},467:function(e,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=function(e,t){var a=function(e){var a=t[e.table.name].tableRegEx;return e.table.values=a[0]+e.table.values+a[1],e},n=function(e,t){return e=_.isArray(e)?e:[e],_.map(e,function(e){return{table:e.table,action:t}})},s=function(e){return e=n(e,t.actions.selectAction)},i=function(e){return e=n(e,t.actions.selectSumAction)},r=function(e){return e=a(e),e=n(e,t.actions.insertAction)},o=function(e){return e=n(e,t.actions.deleteAction)};return{getdataTransform:s,getSumsDataTransform:i,insertDataTransform:r,deleteDataTransform:o}};t.$inject=["$http","appConstants"],exports.default=t},468:function(e,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=function(e){var t=function(t){var a=e.defaults.transformRequest;return a=_.isArray(a)?a:[a],t=_.isArray(t)?t:[t],t.concat(a)};return{generate:t}};t.$inject=["$http"],exports.default=t},469:function(e,exports,t){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var n=t(328),s=a(n),i=t(330),r=a(i),o=t(470),l=a(o),c=s.default.module("users",[r.default]).service("usersService",l.default).name;exports.default=c},470:function(e,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=function(e,t,a){var n=t.url,s=(t.config,function(s){return e({url:n+"?action=userLogin",method:"POST",data:s,headers:t.config.headers,transformRequest:a.generate([])})});return{loginUser:s}};t.$inject=["$http","appConstants","servicesTransform"],exports.default=t},471:function(e,exports,t){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var n=t(328),s=a(n),i=t(330),r=a(i),o=t(472),l=a(o),c=s.default.module("session",[r.default]).service("sessionService",l.default).name;exports.default=c},472:function(e,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=function(){};exports.default=t},473:function(e,exports,t){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var n=t(474),s=a(n);t(475);var i={template:s.default};exports.default=i},474:function(e,exports){e.exports='<div class="app">\n  <div ui-view></div>\n</div>\n'},475:function(e,exports,t){var a=t(476);"string"==typeof a&&(a=[[e.id,a,""]]);t(435)(a,{});a.locals&&(e.exports=a.locals)},476:function(e,exports,t){exports=e.exports=t(434)(),exports.push([e.id,'body{padding:0;margin:0;width:100%;height:100%;font:14px Bree Serif,serif;background:#ff9e80}.material-icons{font-size:inherit;line-height:inherit;padding-left:5px;padding-right:5px;vertical-align:middle}td{padding:10px 5px!important}th{padding:20px 5px!important;background:#ff9e80}.margin{margin:0!important}.timehead{font-family:Bree Serif,cursive;color:#fff;min-height:100px;font-size:35px;line-height:52px;text-align:center}.timehead hrt{margin-top:30px;color:#fff;font:18px Bree Serif,serif;line-height:25px;display:block}.table{color:#37474f}.app{padding:0;margin:0;width:100%;height:100%;font:14px Bree Serif,serif;background:#ff9e80}@font-face{font-family:Material Icons;font-style:normal;font-weight:400;src:url(https://fonts.gstatic.com/s/materialicons/v38/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.woff2) format("woff2")}.material-icons{font-family:Material Icons;font-weight:400;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-feature-settings:"liga";-webkit-font-smoothing:antialiased}',""])},477:function(e,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=20,a=1e17,n=18e5,s="/backend/index.php",i="http://911100.xyz/backend/login.php",r={headers:{}},o={limit:t,resetTime:n,completeRows:a,url:s,loginUrl:i,config:r,actions:{selectAction:"select",selectSumAction:"selectSum",insertAction:"insert",deleteAction:"delete"},sums:[{name:"hours",column:"hours_hours"},{name:"payments",column:"payments_amount"},{name:"miscellaneous",column:"miscellaneous_amount"}],hours:{tableHeaders:["StartDate","EndDate","Hours"],tableRecordKeys:["hours_start_date","hours_end_date","hours_hours"],tableTypesClasses:[{type:"text",class:"datepicker hours",name:"StartDate"},{type:"text",class:"datepicker hours",name:"EndDate"},{type:"number",class:"numberpicker hours validate",name:"Hours"}],tableGetData:{table:{name:"hours",column_name:"hours_id",limit:t,offset:0}},tableRegEx:["'',",",''"]},payments:{tableHeaders:["PayStartDate","PayEndDate","PayDate","Payment"],tableRecordKeys:["payments_start_date","payments_end_date","payments_date","payments_amount"],tableTypesClasses:[{type:"text",class:"datepicker payments",name:"PayStartDate"},{type:"text",class:"datepicker payments",name:"PayEndDate"},{type:"text",class:"datepicker payments",name:"PayDate"},{type:"number",class:"numberpicker payments validate",name:"Payment"}],tableGetData:{table:{name:"payments",column_name:"payments_id",limit:t,offset:0}},tableRegEx:["'',",",''"]}};exports.default=o}});
//# sourceMappingURL=app.bundle.js.map