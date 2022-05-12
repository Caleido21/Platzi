
for  (i = 1; i <= 10000; i++)
{
        var x = i % 3;
        var y = i % 5;

        if (x == 0)
        {
            if (y == 0)
            {
                document.write(i + " FizzBuzz <br>");
            }
            else
            {
                document.write(i + " Fizz <br>");
            }
        }
        else if (y == 0)
            {
                document.write(i + " Buzz <br>");
            }
        else 
        {
            document.write(i + "<br>");
        }
}