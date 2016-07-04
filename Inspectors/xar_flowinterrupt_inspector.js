// Inspector code for flow interruption tags -> xar:break, xar:continue
//
// ******************** API ****************************

function canInspectSelection()
{
  return true;
}

function inspectSelection()
{
    var idText = findObject("id");
    var depthText = findObject("depth");

    // get the currently selected tag
    var theObj = dw.getDocumentDOM().getSelectedNode();

	if ( theObj.nodeType != Node.ELEMENT_NODE )
	{
		theObj = theObj.parentNode;
	}
	
    if(idText) {
        if (theObj.getAttribute("id"))
            idText.value=theObj.getAttribute("id");
        else
            idText.value = "";
    }

    if(depthText) {
        if (theObj.getAttribute("depth"))
            depthText.value=theObj.getAttribute("depth");
        else
            depthText.value="";
    }
}

// ******************** LOCAL FUNCTIONS ****************************

// updateTag() is the function that gets triggered whenever one of the
// form controls changes value. Extract the data from the form controls
// and store them in the attributes of the selected tag.
function updateTag(attrib)
{
    var theObj = dw.getDocumentDOM().getSelectedNode();

	if ( theObj.nodeType != Node.ELEMENT_NODE )
	{
		theObj = theObj.parentNode;
	}

    var idText = findObject("id");
    var depthText = findObject("depth");

    if (theObj && idText && idText.value != "") {
        theObj.setAttribute("id",idText.value);
    } else {
        theObj.removeAttribute("id");
    }

    if (depthText && depthText.value != "") {
		if (depthText.value.match(/\D/))
		{
			alert("'Depth' must be an integer number.");
			depthText.focus();
		}
		else
	        theObj.setAttribute("depth",depthText.value);
    } else {
        theObj.removeAttribute("depth");
    }

} //END updateTag

