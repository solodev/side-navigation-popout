# Side Navigation Popout

[Solodev's](https://www.solodev.com/) expandable side navigation, also known as a Hamburger Menu, adds a unique design aesthetic while preparing your site for the need for responsive solutions. Contained in this repository is all of the HTML, CSS, and JavaScript you'll need to get a side navigation up and running within minutes.


## Tutorial

For a detailed tutorial regarding the side navigation, view Solodev's [Adding Side Navigation to your Website](https://www.solodev.com/blog/web-design/adding-side-navigation-to-your-website.stml) article.

## Demo

Check out a working example on [JSFiddle](https://jsfiddle.net/solodev/xyypctoz/).

## HTML

The basic HTML markup for the search form is as follows:
```
<div class="ct-sidenav">
	<button class="close">x</button><img alt="Logo" class="ct-sidenav-logo" src="images/logo.png">
	 <ul class="list-unstyled ct-sidenav-list">
		<li>
			<a href="#">About Us</a>
		</li>
		<li>
			<a href="#">Team</a>
		</li>
		<li>
			<a href="#">Blog</a>
		</li>           
		<li>
			<a href="#">Services</a>
		</li>

		<li>
			<a href="#">Contact Us</a>
		</li>
	</ul>
	<div class="inner">
		<div class="separator"></div>
		<div class="ct-footer-header">
			Get in Touch
		</div>
		<div class="address">
			<span>123 Easy Street</span><span>Orlando, FL 32801</span>
		</div>
		<div class="ct-footer-header">
			Join Us
		</div>
		<ul class="ct-socials list-inline list-unstyled">
			<li class="ct-socials--facebook">
				<a href="//www.facebook.com/"><img alt="Facebook" src="images/facebook.png"></a>
			</li>
			<li class="ct-socials--linkedin">
				<a href="//www.linkedin.com/"><img alt="Linkedin" src="images/linkedin.png"></a>
			</li>
			<li class="ct-socials--twitter">
				<a href="//www.twitter.com/"><img alt="Twitter" src="images/twitter.png"></a>
			</li>
		</ul>
		<div class="ct-u-paddingTop60"></div>
	</div>
</div>  
```

The class "ct-sidenav" is hidden until activated.

## CSS

All CSS is included in side-nav.css.

## JavaScript

All of the necessary JavaScript is contained in "side-nav.js".

The JavaScript details several onclick events which either add or remove css classes depending on the conditions of the event. For example, the event to add the "active" class to the menu is detailed below:
```
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
```

## External Includes

The slider includes the following third-party resources:
```
<link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" rel="stylesheet" type="text/css"/>
	
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js" type="text/javascript"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" type="text/javascript"></script>
```
