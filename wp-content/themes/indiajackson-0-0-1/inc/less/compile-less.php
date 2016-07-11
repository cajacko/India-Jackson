<?php
require 'Less.php';

$parser = new Less_Parser();
$parser->parseFile( '../bootstrap/less/bootstrap.less', 'http://indiajackson.co.uk/wp-content/themes/indiajackson-0-0-1/inc/bootstrap/less' );
$css = $parser->getCss();

echo $css;

file_put_contents ( '../bootstrap/css/bootstrap.min.css' , $css);

?>