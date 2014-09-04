app.factory 'currUTCdate', () ->
  currDate = new Date()
  return [
    currDate.getUTCFullYear(),
    currDate.getUTCMonth(),
    currDate.getUTCDate()
  ].join '-'

