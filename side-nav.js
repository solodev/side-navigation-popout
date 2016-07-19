window.onload=function(){
 $('.sidenav-toggle').on('click', function() {
      var $sidenav, $this;
      $this = $(this);
      $sidenav = $('.ct-sidenav');
      if ($this.hasClass('active')) {
        $this.removeClass('active');
        return $sidenav.removeClass('active');
      } else {
        $this.addClass('active');
        return $sidenav.addClass('active');
      }
    });
    $('#sidenav-toggle').on('click', function() {
      var $sidenav, $this;
      $this = $(this);
      $sidenav = $('.ct-sidenav');
      if ($this.hasClass('open')) {
        $this.removeClass('open');
        return $sidenav.removeClass('open');
      } else {
        $this.addClass('open');
        return $sidenav.addClass('open');
      }
    });
    $('.ct-sidenav').find('button.close').on('click', function() {
      $(this).parent().removeClass('open');
      return $('#sidenav-toggle').removeClass('open');
    });

}