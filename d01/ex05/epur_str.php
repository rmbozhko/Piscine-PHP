#!usr/bin/php
<?php
$str = $argv[1];
echo preg_replace("/\s+/", " ", trim($str)), "\n";
?>
