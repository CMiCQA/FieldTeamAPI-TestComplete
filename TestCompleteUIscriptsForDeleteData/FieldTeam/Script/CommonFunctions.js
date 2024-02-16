function LaunchURL(strEnvironment)
{
  try{
  let browser = "Chrome"
  if (Sys.WaitBrowser(browser).Exists)       
    {
      Sys.Browser(browser).Close()
    }
  switch (strEnvironment){
    case "QALATEST":
      URL = "https://qalatest.cmicpaas.com/cmiclaunch//cmiclaunch_R12.html";
      break;
    case "QADAILY":
    case "QADAILY2":
      URL = "https://qa.cmicpaas.com/cmiclaunch/cmiclaunch_R12.html";
      break;
  }
  Browsers.Item(browser).Run(URL)
  }
  catch(err)
  {
    Log.Error("Exception: LaunchURL: "+err.description);
  }
}

function Login(strEnvironment)
{
  try{
    switch (strEnvironment){
    case "QALATEST":
      UserName = "raman";
      Password = "raman1";
      break;
    case "QADAILY":
      UserName = "raman2";
      Password = "raman2";
      break;
    case "QADAILY2":
      UserName = "raman2";
      Password = "raman2";
      break;
    }
  Aliases.Browser.pageSignIn.TextBoxUsername.SetText(UserName)
  aqUtils.Delay(3000,"Wait for page to load")
  Aliases.Browser.pageSignIn.TextBoxPassword.SetText(Password)
  Aliases.Browser.pageSignIn.BtnSubmit.Click()
  aqUtils.Delay(5000,"Wait for page to load")
  }
  catch(err)
  {
    Log.Error("Exception: Login: "+err.description);
  }
}

function CloseBrowser(URL)
{
  Sys.Browser("chrome").Close()
}

