window.Ajox = function(data,callback){
    var data = data || 'error';
    typeof callback == 'function' && callback(data);
}