function generateNumbers() 
{
    var lottoNums = [];

    for(var i = 0;i<1 ; i++)
    {
        var temp = Math.floor(Math.random()*26)+1;

        if(lottoNums.indexOf(temp) == -1)
        {
            lottoNums.push(temp);

            document.getElementById("pball"+i).innerHTML = lottoNums[i];
        }

        else
        {
            i--;
        }
    }

}