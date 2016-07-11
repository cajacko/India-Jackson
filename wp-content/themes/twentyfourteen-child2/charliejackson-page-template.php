<?php
/**
 * Template Name: Charlie Jackson
 *
 * @package WordPress
 * @subpackage Twenty_Fourteen
 * @since Twenty Fourteen 1.0
 */

get_header(); ?>

<div id="page" class="black">
<div class="wrap">

	
		<div id="content" class="black">

			<?php
				// Start the Loop.
				while ( have_posts() ) : the_post();

					// Include the page content template.
					get_template_part( 'content', 'page' );

					
				endwhile;
			?>

		</div><!-- #content -->
	

</div>
</div>

<?php
get_footer();

