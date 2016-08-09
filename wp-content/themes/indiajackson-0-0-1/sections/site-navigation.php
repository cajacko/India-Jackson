<nav class="navbar navbar-default">
  <div class="container-fluid">
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a id="navbar-brand" class="navbar-brand" href="/"><?php echo get_bloginfo('name'); ?> <small>| <?php echo get_bloginfo( 'description' ); ?></small></a>
    </div>

    <?php 
	
	wp_nav_menu( array(
        'menu'              => 'primary',
        'theme_location'    => 'primary',
        'depth'             => 2,
        'container'         => 'div',
        'container_class'   => 'collapse navbar-collapse',
		'container_id'      => 'bs-example-navbar-collapse-1',
        'menu_class'        => 'nav navbar-nav navbar-right',
        'fallback_cb'       => 'wp_bootstrap_navwalker::fallback',
        'walker'            => new wp_bootstrap_navwalker())
    );
            
    ?>
    
  </div><!-- /.container-fluid -->
</nav>