var t=/*#__PURE__*/function(){function t(t){this.textGreeting=void 0,this.textDaysLeft=void 0,this.textDayLeft=void 0,this.textBirthDay=void 0,this.textGreeting=null==t?void 0:t.textGreeting,this.textDaysLeft=null==t?void 0:t.textDaysLeft,this.textDayLeft=null==t?void 0:t.textDayLeft,this.textBirthDay=null==t?void 0:t.textBirthDay}var e=t.prototype;return e.YearsOld=function(t){var e=parseInt(t.split("-")[2]),a=parseInt(t.split("-")[1]),n=parseInt(t.split("-")[0]),i=[];if((e||a||n)&&i.push((new Date).getDate()<e&&(new Date).getMonth()+1<a?(new Date).getFullYear()-n-1:(new Date).getFullYear()-n),i.length)return i},e.DaysToBirthDay=function(t,e,a,n){var i=this,r=parseInt(t.split("-")[2]),s=parseInt(t.split("-")[1]),o=(new Date).getDate(),D=(new Date).getMonth()+1,h=Math.floor((+new Date(s+"-"+r)-+new Date("'"+D+"-"+o+"'"))/864e5);return 0===h?" "+(a?"<"+a+' class="greeting">':"")+" "+(this.textGreeting||"")+" "+(a?"</"+a+">}":""):h<=parseInt(e)&&0<=h?(a?"<"+a+' class="'+n+'">':"")+" "+(this.textBirthDay||"")+" "+function(t){switch(t){case!0:return h+" "+(i.textDayLeft||" ");case!1:return h+" "+(i.textDaysLeft||" ")}}(function(t){switch((new Date).getDate()>=t){case!0:case!1:return""+t}}(h)&&h<=1)+" "+(a?"</"+a+">":""):void 0},t}(),e=/*#__PURE__*/function(){function t(t){this.textDaysGone=void 0,this.textDayGone=void 0,this.textBirthDayGone=void 0,this.textDaysGone=null==t?void 0:t.textDaysGone,this.textDayGone=null==t?void 0:t.textDayGone,this.textBirthDayGone=null==t?void 0:t.textBirthDayGone}return t.prototype.DaysGoneBirthDay=function(t,e,a,n){var i=parseInt(t.split("-")[2]),r=parseInt(t.split("-")[1]),s=(new Date).getDate(),o=(new Date).getMonth()+1,D=-Math.floor((+new Date(r+"-"+i)-+new Date("'"+o+"-"+s+"'"))/864e5);return 1===D?" "+(a?"<"+a+' class="'+n+'">':"")+(this.textBirthDayGone||"")+" "+D+" "+(this.textDayGone||" ")+" "+(a?"</"+a+">":""):D>1&&D<=parseInt(e)?(a?"<"+a+' class="'+n+'">':"")+" "+(this.textBirthDayGone||"")+" "+D+" "+(this.textDaysGone||" ")+" "+(a?"</"+a+">":""):void 0},t}(),a=function(){this.YearJoint=function(t,e){var a=new Date(t).getFullYear(),n=new Date(t).getMonth(),i=new Date(t).getDate(),r=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][new Date(t).getDay()],s=["January","February","March","April","May","June","July","August","September","October","November","December"][n];return"dayName"===e?r+" "+s+" "+a:"dayNumber"===e?i+" "+s+" "+a:""===e||"undefined"===e||void 0===e||e.length||null===e?s+" "+a:void 0}};export{e as DaysGone,t as DaysToCome,a as JointDate};
//# sourceMappingURL=birthday-test.esm.js.map
