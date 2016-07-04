// Inspector code for xar:foreach tag
//
// ******************** API ****************************

function canInspectSelection()
{
    return true;
}

function inspectSelection()
{
    var idText = findObject("id");
    var inText = findObject("in");
    var keyText = findObject("key");
    var valueText = findObject("value");
    
    // get the currently selected tag
    var theObj = dw.getDocumentDOM().getSelectedNode();

    // Retrieve the textual values from the remaining attributes and
    // populate the inspector's text fields with the values.
    if(idText) {
        if (theObj.getAttribute("id"))
            idText.value=theObj.getAttribute("id");
        else
            idText.value = "";
    }

    if(inText) {
        if (theObj.getAttribute("in"))
            inText.value=theObj.getAttribute("in");
        else
            inText.value="";
    }

    if(keyText) {
        if (theObj.getAttribute("key"))
            keyText.value=theObj.getAttribute("key");
        else
            keyText.value="";
    }

    if(valueText) {
        if (theObj.getAttribute("value"))
            valueText.value=theObj.getAttribute("value");
        else
            valueText.value="";
    }
} // END inspectSelection()

// ******************** LOCAL FUNCTIONS ****************************

// setSetTag() is the function that gets triggered whenever one of the
// form controls changes value. Extract the data from the form controls
// and store them in the attributes of the selected tag.
function updateTag(attrib)
{
    var theObj = dw.getDocumentDOM().getSelectedNode();

    var idText = findObject("id");
    var inText = findObject("in");
    var keyText = findObject("key");
    var valueText = findObject("value");

    if (idText && idText.value != "") {
        theObj.setAttribute("id",idText.value);
    } else {
        theObj.removeAttribute("id");
    }

    if (inText && inText.value != "") {
        theObj.setAttribute("in",inText.value);
    } else {
        theObj.removeAttribute("in");
    }

    if (keyText && keyText.value != "") {
        theObj.setAttribute("key",keyText.value);
    } else {
        theObj.removeAttribute("key");
    }

    if (valueText && valueText.value != "") {
        theObj.setAttribute("value",valueText.value);
    } else {
        theObj.removeAttribute("value");
    }

} //END updateTag
