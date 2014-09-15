function hidemenus()
{
	var menutemp=document.getElementsByName("menu");
	for (var x =0;x < menutemp.length; x++)
	{
		menutemp[x].style.visibility="hidden";
	}
}
function spawntarget(type)
{

}
function spawnsource(type)
{

}


function showmenu(menuname)
{
	hidemenus();
	document.getElementById(menuname).style.visibility='visible';
	document.getElementById("rootmenu").style.visibility='visible';
}