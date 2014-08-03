app.factory('currUTCdate', function currUTCdateFactory() {
  var currDate = new Date();
  return [
    currDate.getUTCFullYear(),
    currDate.getUTCMonth(),
    currDate.getUTCDate()
  ].join('-');
});

