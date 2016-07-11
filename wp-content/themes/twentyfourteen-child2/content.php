<?php
/**
 * The template for displaying posts in the Aside post format
 *
 * @package WordPress
 * @subpackage Twenty_Fourteen
 * @since Twenty Fourteen 1.0
 */
?>

<article id="post-<?php the_ID(); ?>" >

<div id="blog-title" class="post-header border">
<?php echo get_the_title(); ?> 
</div>

<div id="blog-content" class="border no-border-top post-content">
<?php the_content('Read more...'); ?>
</div>

<div id="post-meta" class="border no-border-top">


<?php echo human_time_diff2( get_the_time('U'), current_time('timestamp') ); ?>

status

<?php
$categories = get_the_category();
$separator = ' ';
$output = '';
if($categories){
foreach($categories as $category) {
$output .= '<a id="'.$category->cat_name.'" href="'.get_category_link( $category->term_id ).'" title="' . esc_attr( sprintf( __( "View all posts in %s" ), $category->name ) ) . '">#'.$category->cat_name.'</a>'.$separator;
}
echo trim($output, $separator);
}
?>
</div>

</article>
