$('#app').delegate('.img-pop', 'click', function (e) {
  var href = $(e.currentTarget).data('url');
  $.fancybox({
    href: href,
  });
});

var clipboard = new Clipboard('.btn');
clipboard.on('success', function(e) {
  alert('复制成功');
});

