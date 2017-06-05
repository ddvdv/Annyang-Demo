var template = function(text) {
  return '<p><input type="checkbox"><i class="glyphicon glyphicon-star"></i><span>' + text + '</span><i class="glyphicon glyphicon-remove"></i></p>';
};

var add = function(item) {
  var html = template(item);
  $(html).appendTo('div .list');
  return false;
};


var main = function() {
  $('form').submit(function() {
      var text = $('#todo').val();
      add(text);
    	$('#todo').val(''); 
    return false; 
  });
 	$('.list').on('click', '.glyphicon-star', function(){
    $(this).toggleClass('active');
  });
  $('.list').on('click', '.glyphicon-remove', function(){
    $(this).parent().slideUp('fast', 'swing');
  });
  
  // speech recognition
  if (annyang) {

    var commands = {
      'add *tag': add

    };

    annyang.addCommands(commands);

    annyang.start();
  };
  
};

$(document).ready(main);