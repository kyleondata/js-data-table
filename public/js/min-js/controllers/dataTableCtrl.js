app.controller("dataCtrl",function(e,t,o){t.get("http://jsonplaceholder.typicode.com/posts").success(function(t){e.users=t}),e.colName="userId",e.reverseCol=!1,e.show=function(t){e.divShow=t}}),app.directive("myPanel",function(){return{transclude:!0,scope:{title:"@"},templateUrl:"../../views/my-panel.html"}});