function strtotime(date){
  date = date.substring(0,19);
  date = date.replace(/-/g,'/');
  return parseInt(new Date(date).getTime())/1000;
}

function now(){
  return parseInt(new Date().getTime()/1000);
}

export default {
  strtotime: strtotime,
  now: now
}
