<?php

echo "Enter a number: ";
while ($answer = fgets(STDIN))
{
    $num = trim($answer);
    if (!is_numeric($num))
        echo "'$num'" ," is not a number\n";
    else
    {
        if (($num % 2) == 0)
            echo "The number ", $num, " is even\n";
        else if (($num % 2) == 1)
            echo "The number ", $num, " is odd\n";
    }
    echo "Enter a number: ";
}
echo "\n";
?>
