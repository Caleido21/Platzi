
var c = [];

for (i = 0; i<18; i++)
{

    c.push(aleatorio());
}

function aleatorio()
{
    var R = Math.floor(Math.random()*(5-0+1)+0); 
    R = R*80;
    return R;
}