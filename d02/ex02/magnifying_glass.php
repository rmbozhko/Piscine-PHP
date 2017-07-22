#!/usr/bin/php
<?php

function 		print_single_elem($str, $start, $end)
{
	while ($start < $end)
		echo $str[$start++];
}

function 		ft_in_a_tag($file, &$counter)
{
	if ($file[$counter] === '<' && $file[$counter + 1] === 'a'/* && $file[$counter + 2] === '>'*/)
	{
	    if($file[$counter + 2] === '>')
	        print_single_elem($file, $counter, $counter += 3);
	    else
	        print_single_elem($file, $counter,  $counter += 2);
		return (1);
	}
	return (0);
}

function 		ft_out_a_tag($file, &$counter)
{
	if ($file[$counter] === '<' && $file[$counter + 2] === 'a' &&
		$file[$counter + 3] === '>' && $file[$counter + 1] == '/')
	{
		print_single_elem($file, $counter, $counter += 4);
		return (1);
	}
	return (0);
}

function 		ft_is_title($file, &$counter)
{
		print_single_elem($file, $counter, $counter += 7);
		while ($file[$counter] != '"')
		    echo strtoupper($file[$counter++]);
}

function 		ft_is_descrp($file, &$counter, $a_tag_open)
{
    if ($counter < strlen($file) && $counter + 1 < strlen($file) && $a_tag_open === 1)
	{
	    if ($file[$counter] === '>' && $file[$counter + 1] != '<')
	    {
		    while ($file[$counter] != '<')
		        echo strtoupper($file[$counter++]);
		    return (1);
	    }
	}
	return (0);
}

function        get_if_title($file, $counter)
{
    if ($file[$counter] === 't' && $file[$counter + 1] === 'i' && $file[$counter + 2] === 't'
    && $file[$counter + 3] === 'l' && $file[$counter + 4] === 'e'&& $file[$counter + 5] === '='
    && $file[$counter + 6] === '"')
        return (1);
    return (0);
}

if ($argc === 2)
{
	$a_tag_open = 0;
	$file = trim(file_get_contents($argv[1]));
	$counter = 0;
	while ($counter < strlen($file))
	{
		if (ft_in_a_tag($file, $counter) && !$a_tag_open)
			$a_tag_open = 1;
		else if (get_if_title($file, $counter) && $a_tag_open)
			ft_is_title($file, $counter);
		else if (ft_is_descrp($file, $counter, $a_tag_open))
			;
		else if (ft_out_a_tag($file, $counter) && $a_tag_open)
			$a_tag_open = 0;
		else
		    echo $file[$counter++];
	}
}
?>
