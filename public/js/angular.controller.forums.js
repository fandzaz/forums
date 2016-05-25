app.controller('test',['$scope',function($scope){
    $scope.num1 = 'xxxx';
}]);
app.controller('forums.controller', ['$scope','$http', function($scope,$http) {

  $scope.title = [
    {title:"ทั่วไป",story_num:20,title_view:23},
    {title:"บันเทิง",story_num:4,title_view:10},
    {title:"กีฬา",story_num:5,title_view:15},
    {title:"ชีวิต ความรัก สุขภาพ",story_num:24,title_view:53},
    {title:"เทคโนโลยี",story_num:32,title_view:23}
  ];
  console.log($scope.title);
  http_data($http,'/users/me',{},'post',function(data){
    $scope.user_profile = data;
    console.log(data);
  });
}]);
