<?php
/**
 * Remember When functions and definitions.
 *
 * Every version needs this file.
 *
 * @package Remember When
 */

add_filter('show_admin_bar', '__return_false');

	function add_header_clacks($headers) {
	    $headers['X-Clacks-Overhead'] = 'GNU Terry Pratchett';
	    return $headers;
	}
	
	add_filter('wp_headers', 'add_header_clacks');
	
/* -----------------------------
ADD THEME SUPPORT
----------------------------- */	
	add_theme_support( 'post-thumbnails' );
	
	register_nav_menus( array(
	    'primary' => __( 'Primary Menu', 'indiajackson' ),
	) );

/* -----------------------------
REMOVE REDUNDANT FEATURES
----------------------------- */	
	// Disable support for comments and trackbacks in post types
	// function df_disable_comments_post_types_support() {
	// 	$post_types = get_post_types();
	// 	foreach ($post_types as $post_type) {
	// 		if(post_type_supports($post_type, 'comments')) {
	// 			remove_post_type_support($post_type, 'comments');
	// 			remove_post_type_support($post_type, 'trackbacks');
	// 		}
	// 	}
	// }
	// add_action('admin_init', 'df_disable_comments_post_types_support');
	
	// // Close comments on the front-end
	// function df_disable_comments_status() {
	// 	return false;
	// }
	// add_filter('comments_open', 'df_disable_comments_status', 20, 2);
	// add_filter('pings_open', 'df_disable_comments_status', 20, 2);
	
	// // Hide existing comments
	// function df_disable_comments_hide_existing_comments($comments) {
	// 	$comments = array();
	// 	return $comments;
	// }
	// add_filter('comments_array', 'df_disable_comments_hide_existing_comments', 10, 2);
	
	// // Remove comments page in menu
	// function df_disable_comments_admin_menu() {
	// 	remove_menu_page('edit-comments.php');
	// 	remove_menu_page('edit.php?post_type=page');
	// 	remove_menu_page('edit.php');
	// 	remove_menu_page('upload.php');
	// 	remove_menu_page( 'index.php' );
	// 	remove_menu_page( 'tools.php' );
	// 	remove_menu_page( 'users.php' );
	// 	remove_menu_page( 'plugins.php' );
	// 	remove_menu_page( 'themes.php' );
	// 	remove_menu_page( 'options-general.php' );
	// 	remove_submenu_page( 'options-general.php', 'options-writing.php' );
	// 	remove_submenu_page( 'options-general.php', 'options-reading.php' );
	// 	remove_submenu_page( 'options-general.php', 'options-discussion.php' );
	// 	remove_submenu_page( 'options-general.php', 'options-media.php' );
	// 	remove_submenu_page( 'options-general.php', 'options-permalink.php' );
	// 	remove_submenu_page( 'options-general.php', 'options-permalink.php' );
	// }
	// add_action('admin_menu', 'df_disable_comments_admin_menu');
	
	// // Redirect any user trying to access comments page
	// function df_disable_comments_admin_menu_redirect() {
	// 	global $pagenow;
	// 	if ($pagenow === 'edit-comments.php') {
	// 		wp_redirect(admin_url()); exit;
	// 	}
	// }
	// add_action('admin_init', 'df_disable_comments_admin_menu_redirect');
	
	// // Remove comments metabox from dashboard
	// function df_disable_comments_dashboard() {
	// 	remove_meta_box('dashboard_recent_comments', 'dashboard', 'normal');
	// }
	// add_action('admin_init', 'df_disable_comments_dashboard');
	
	// // Remove comments links from admin bar
	// function df_disable_comments_admin_bar() {
	// 	if (is_admin_bar_showing()) {
	// 		remove_action('admin_bar_menu', 'wp_admin_bar_comments_menu', 60);
	// 	}
	// }
	// add_action('init', 'df_disable_comments_admin_bar');
	
	
	// add_action( 'admin_menu', 'register_my_custom_menu_page' );

	// function register_my_custom_menu_page() {
	
	// 	add_menu_page( 'Nav Bar', 'Nav Bar', 'manage_options', 'nav-menus.php' );
	// 	add_menu_page( 'Settings', 'Settings', 'manage_options', 'options-general.php' );
	// 	add_menu_page( 'Your Profile', 'Your Profile', 'manage_options', 'profile.php' );
	// }

/* -----------------------------
ENQUE STYLES AND SCRIPTS
----------------------------- */
	function indiajackson_scripts() {
		
		wp_enqueue_script( 'indiajackson-bootstrap-script', get_template_directory_uri()  . '/inc/bootstrap/js/bootstrap.min.js', array( 'jquery' )); //Add bootstrap script
		
		wp_enqueue_script( 'indiajackson-masonry-script', get_template_directory_uri()  . '/inc/masonry.pkgd.min.js', array( 'jquery' )); //Add bootstrap script
		
		wp_enqueue_script( 'indiajackson-setup-script', get_template_directory_uri()  . '/js/setup.js', array( 'jquery' )); //Add bootstrap script

		wp_enqueue_style( 'indiajackson-bootstrap-style',  get_template_directory_uri()  . '/inc/bootstrap/css/bootstrap.min.css'); //Add bootstrap styl
		
	}
	
	add_action( 'wp_enqueue_scripts', 'indiajackson_scripts' );

/* -----------------------------
REGISTER HOME ITEM
----------------------------- */
	function indiajackson_register_home_item() {
	    $args = array(
	      'public' => true,
	      'label' => 'Home Item',
	      'supports' => array( 'thumbnail', 'page-attributes', 'excerpt', 'title' )
	    );
	    register_post_type( 'home-item', $args );
	}
	
	add_action( 'init', 'indiajackson_register_home_item' );
	
/* -----------------------------
REGISTER PROJECT
----------------------------- */
	function indiajackson_register_project() {
	    $args = array(
	      'public' => true,
	      'label'  => 'Project',
	      'supports' => array( 'title', 'editor' )
	    );
	    register_post_type( 'project', $args );
	    
	    flush_rewrite_rules();
	}
	
	add_action( 'init', 'indiajackson_register_project' );

/* -----------------------------
SHOW FEATURED IMAGES ON ADMIN
----------------------------- */	
	function custom_columns( $columns ) {
	    $columns = array(
	        'cb' => '<input type="checkbox" />',
	        'featured_image' => 'Image',
	        'title' => 'Title'
	     );
	    return $columns;
	}
	
	function custom_columns_data( $column, $post_id ) {
	    switch ( $column ) {
	    case 'featured_image':
	        echo the_post_thumbnail( 'thumbnail' );
	        break;
	    }
	}
	
	function order_home_items( $query ) {
	    $query->set( 'orderby', 'menu_order' );
	    $query->set( 'order', 'ASC' );
	}
	
	function add_order_column($header_text_columns) {
	  $header_text_columns['menu_order'] = "Order";
	  return $header_text_columns;
	}
	
	function show_order_column($name){
	  global $post;
	
	  switch ($name) {
	    case 'menu_order':
	      $order = $post->menu_order;
	      echo $order;
	      break;
	   default:
	      break;
	   }
	}
	
	if($_GET['post_type'] == 'home-item') {
		add_filter('manage_posts_columns' , 'custom_columns');
		add_action( 'manage_posts_custom_column' , 'custom_columns_data', 10, 2 );
		add_action( 'pre_get_posts', 'order_home_items' );
		add_action('manage_posts_columns', 'add_order_column');
		add_action('manage_posts_custom_column','show_order_column');
	}
	
/* -----------------------------
REGISTER CUSTOM NAV WALKER
----------------------------- */		
	require_once('inc/wp_bootstrap_navwalker.php');
	