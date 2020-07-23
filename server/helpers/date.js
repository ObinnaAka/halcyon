

exports.dateToTime = date => new Date(date).getHours() + ":" + new Date(date).getMinutes();
exports.dateToDate = date => new Date(date).getDay()  + " " + new Date(date).getDate();