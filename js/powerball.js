function generateNumbers() 
{
    var lottoNums = [];

    for(var i = 0;i<5 ; i++)
    {
        var temp = Math.floor(Math.random()*69)+1;

        if(lottoNums.indexOf(temp) == -1)
        {
            lottoNums.push(temp);

            document.getElementById("ball"+i).innerHTML = lottoNums[i];
        }

        else
        {
            i--;
        }
    }

}