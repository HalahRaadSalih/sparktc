var app = angular.module('sparktc');

app.directive("fileread", [function () {
    return {
        scope: {
            fileread: "="
        },
        link: function (scope, element, attributes) {
          var imageLoader = document.getElementById('logoLoader');
          imageLoader.addEventListener('change', handleImage, false);
          var canvas = document.getElementById('logoCanvas');
          var ctx = canvas.getContext('2d');
            element.bind("change", function (changeEvent) {
                var reader = new FileReader();
                reader.onload = function (loadEvent) {
                    scope.$apply(function () {
                      var img = new Image();
                              img.onload = function(){
                                var ratio = 1;
                                var height = img.naturalHeight;
                                var width = img.naturalWidth;
                                //Adjust the ratio of the image to fit the canvas
                                if (height > 500 || width > 500) {
                                    ratio = 450 / Math.max(height, width);
                                }
                                canvas.width = width * ratio;
                                canvas.height = height * ratio;

                                  ctx.drawImage(img,0,0,(width * ratio), (height * ratio));
                              }
                          img.src = event.target.result;

                        scope.fileread = loadEvent.target.result;
                    });
                }
                reader.readAsDataURL(changeEvent.target.files[0]);
            });
        }
    }
}]);
