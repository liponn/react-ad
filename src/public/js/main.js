$('#app').delegate('.img-pop', 'click', function (e) {
  console.log(e);
  var href = $(e.currentTarget).data('url');
  console.dir(href);
  $.fancybox({
    href: href,
  });
});