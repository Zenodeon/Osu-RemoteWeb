var tcount = 0;
var rcount = 0;

var tCountText:HTMLElement;
var rCountText:HTMLElement;

function BodyLoaded()
{
    SendUDPData("Test Connection Response");
    
    var obj = document.getElementById('touchzone');
    obj.addEventListener('touchstart', TouchStart, false);
    obj.addEventListener('touchend', TouchEnd, false);
    obj.addEventListener('mousedown', TouchStart, false);
    obj.addEventListener('mouseup', TouchEnd, false);

    tCountText = document.getElementById('touchCountID');
    rCountText = document.getElementById('releaseCountID');

    UpdateTCount();
    UpdateRCount();
}

function TouchStart()
{
    UpdateTCount();
    SendUDPData("Touching");
}

function TouchEnd()
{
    UpdateRCount();
    SendUDPData("Un Touch");
}

function UpdateTCount()
{
    tCountText.innerText = "Count : " + tcount++;
}

function UpdateRCount()
{
    rCountText.innerText = "Count : " + rcount++;
}

function SendUDPData(data:string)
{

}