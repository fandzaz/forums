function http_data($http,url,data,type,cb){
  $http({
  method: type,
  url: site_url+url,
  data:data
  }).then(function successCallback(response) {
      cb(response.data);
  }, function errorCallback(response) {
      cb(response);
  });

}
