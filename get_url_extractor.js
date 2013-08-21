/* MIT license */
function extractURL (paramName)
{
	if (typeof myVar != "string" && !(myVar instanceof String))
		paramName = "url";

	return decodeURIComponent( window.location.href.split("&" + paramName + "=")[1].replace(/\+/g, " ") );
}