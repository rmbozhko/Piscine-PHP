<?php
function    ft_is_sort($arr)
{
    $len = count($arr);
    if ($len > 1)
    {
        $counter = 0;
        while ($counter < ($len - 1))
        {
            if (strcmp($arr[$counter], $arr[$counter + 1]) > 0)
                return (FALSE);
            else
                $counter++;
        }
        return (TRUE);
    }
    return (FALSE);
}
?>
