$('#app').delegate('.img-pop', 'click', function (e) {
  var href = $(e.currentTarget).data('url');
  $.fancybox({
    href: href,
  });
});