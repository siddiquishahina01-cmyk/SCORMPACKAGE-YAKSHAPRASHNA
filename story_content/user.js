function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6Sn7mn6OI3S":
        Script1();
        break;
  }
}

function Script1()
{
  function FullScreen(element) 
{
    if(element.requestFullScreen) 
    {
      element.requestFullScreen();
    } 
    else if(element.mozRequestFullScreen) 
    {
      element.mozRequestFullScreen();
    } 
    else if(element.webkitRequestFullScreen) 
    {
      element.webkitRequestFullScreen();
    }
}
  
FullScreen(document.documentElement);
}

