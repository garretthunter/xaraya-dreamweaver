// Inspector code for xar:else tag
//
// ******************** API ****************************

function displayHelp()
{
    alert("Separates template code within an <xar:if /> tag. When the condition of " +
		  "the <xar:if /> tag is true, the template content preceeding <xar:else /> " +
		  "is executed. Otherwise, the template content after <xar:if /> is executed. " +
		  "When <xar:elseif /> is used within an <xar:if /> block, <xar:else /> must appear last.");
}

function canInspectSelection()
{
  return true;
}

function inspectSelection()
{
    var idText = findObject("id");

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

    if (theObj && idText && idText.value != "") {
        theObj.setAttribute("id",idText.value);
    } else {
        theObj.removeAttribute("id");
    }

} //END updateTag

