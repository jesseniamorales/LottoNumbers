function generateNumbers() 
{
    var lottoNums = [];

    for(var i = 0;i<6 ; i++)
    {
        var temp = Math.floor(Math.random()*53)+1;

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