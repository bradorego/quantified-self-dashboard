/// main.js

(function () {
  'use strict';
  var firebase = new Firebase("https://track-me-app.firebaseio.com"),
    data = {},
    YOUR_USER_ID = "04ee8431-81f9-478f-ac6c-651bcbaa698c";

  document.addEventListener('DOMContentLoaded', function () {
    var $button = document.getElementById('loadData'),
      $json = document.getElementById('json');
    $button.addEventListener('click', function () {
      firebase.child(YOUR_USER_ID).once('value', function (snapshot) {
        snapshot.forEach(function (obj) {
          data[obj.key()] = obj.val();
        });
        $json.innerHTML = JSON.stringify(data, null, 2);
      });
    });
  });
}());
