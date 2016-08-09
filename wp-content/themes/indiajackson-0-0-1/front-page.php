<?php
/**
 * The home page.
 *
 * @package indiajackson
 */

get_header(); ?>
	
<div class="masonry">
	
	<?php
	$args = array(
		'posts_per_page'   => -1,
		'orderby'          => 'menu_order',
		'order'            => 'ASC',
		'post_type'        => 'home-item'
	);
	
	$posts_array = get_posts( $args );
	
	foreach ( $posts_array as $post) {
		if(has_post_thumbnail( $post->ID )) {
			$image_id = get_post_thumbnail_id( $post->ID );
			$image_info = wp_get_attachment_metadata( $image_id );
			
			$ratio = $image_info['width'] / $image_info['height'];
			
			$image_medium = wp_get_attachment_image_src( $image_id, 'medium' );
			$image_large = wp_get_attachment_image_src( $image_id, 'large' );
			$image_original = wp_get_attachment_url( $image_id );
			
		    echo '<article class="masonry-image"><img data-ratio="'.$ratio.'" data-large="'.$image_large[0].'" data-original="'.$image_original.'" src="'.$image_medium[0].'"></article>';
		}
	    
	    if(has_excerpt($post->ID)) {
			echo '<article class="project-description-content project-description-content-single"><h2 class="project-description">'.get_the_title().'</h2><p>'.get_the_excerpt().'</p></article>';
		}
	}
	?>

</div>

<?php get_footer(); ?>