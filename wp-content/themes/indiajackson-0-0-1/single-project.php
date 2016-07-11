<?php
/**
 * Single Project Page.
 *
 * @package indiajackson
 */

get_header(); 

if ( have_posts() ) :
	while ( have_posts() ) : the_post(); ?>

		<header id="title" class="clearfix">
			<h1><?php echo get_the_title(); ?></h1>
			<div id="image-layout">
				<a href="<?php the_permalink(); ?>?image=1"><i class="fa fa-square"></i></a> / <a href="<?php the_permalink(); ?>"><i class="fa fa-th-large"></i></a>
			</div>
		</header>
		
		<?php if($_GET['image']): ?>
		
			<div id="slideshow" class="carousel slide" data-ride="carousel">
				
				<?php 
			    global $dynamic_featured_image;
			    $featured_images = $dynamic_featured_image->get_featured_images( get_the_ID() );
			    $iterator = 0;
				?>
			
				<ol class="carousel-indicators">
					<?php foreach( $featured_images as $image) : ?>
						<li data-target="#slideshow" data-slide-to="<?php echo $iterator; ?>" <?php if($iterator == 0): echo 'class="active"'; endif; ?>></li>
						<?php $iterator++; ?>
					<?php endforeach; ?>
				</ol>
					
				<div class="carousel-inner" role="listbox">
					<?php
					$iterator = 0;
				
					foreach( $featured_images as $image) : ?>
						
						<?php 
						
						$image_id = $image['attachment_id'];
						
						$image_medium = wp_get_attachment_image_src( $image_id, 'medium' );
						$image_large = wp_get_attachment_image_src( $image_id, 'large' );
						$image_original = wp_get_attachment_url( $image_id );
						?>
					
						<div class="item<?php if($iterator == 0): echo ' active'; endif; ?>">
							<img data-large="<?php echo $image_large[0]; ?>" data-original="<?php echo $image_original; ?>" src="<?php echo $image_medium[0]; ?>">
						</div>
						<?php $iterator++; ?>
					<?php endforeach; ?>
				</div>
				
				<!-- Controls -->
				<a class="left carousel-control" href="#slideshow" role="button" data-slide="prev">
					<span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
					<span class="sr-only">Previous</span>
				</a>
				<a class="right carousel-control" href="#slideshow" role="button" data-slide="next">
					<span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
					<span class="sr-only">Next</span>
				</a>
			</div>
			
			<?php if(get_the_content() != '') : ?>
			
				<div class="project-description-content container project-description-content-single"><h2 class="project-description">Project Description</h2><?php the_content(); ?></div>
				
			<?php endif; ?>
		
		<?php else: ?>
		
			<div class="masonry">
	
				<?php 
				if( class_exists('Dynamic_Featured_Image') ) {
				     global $dynamic_featured_image;
				     $featured_images = $dynamic_featured_image->get_featured_images( get_the_ID() );
				     $iterator = 1;
				
					 foreach($featured_images as $image):
					 	if($iterator == 2) {
						 	if(get_the_content() != '') {
						 		echo '<article class="project-description-content"><h2 class="project-description">Project Description</h2>'.apply_filters('the_content', get_the_content()).'</article>';
						 	}
						}
					 	
					 	$image_id = $image['attachment_id'];
						 
						$image_info = wp_get_attachment_metadata( $image_id );
			
						$ratio = $image_info['width'] / $image_info['height'];
							
						$image_medium = wp_get_attachment_image_src( $image_id, 'medium' );
						$image_large = wp_get_attachment_image_src( $image_id, 'medium' );
						$image_original = wp_get_attachment_url( $image_id );
							
						echo '<article class="masonry-image"><img data-ratio="'.$ratio.'" data-large="'.$image_large[0].'" data-original="'.$image_original.'" src="'.$image_medium[0].'"></article>';
						
						$iterator++;
	
					 endforeach;
				} ?>
				
			</div>		
		<?php endif; ?>		
	<?php endwhile; ?>
<?php endif; ?>
<?php get_footer(); ?>