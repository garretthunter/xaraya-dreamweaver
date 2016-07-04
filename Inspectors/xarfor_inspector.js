// Inspector code for xar:for tag
//
// ******************** API ****************************

function canInspectSelection()
{
    return true;
}

function inspectSelection()
{
    var idText = findObject("id");
    var startText = findObject("start");
    var testText = findObject("test");
    var iterText = findObject("iter");
    
    // get the currently selected tag
    var theObj = dw.getDocumentDOM().getSelectedNode();

    // For each attribute in the Set tag, get its value and set the
    // corresponding form field in the inspector. For the menu items,
    // if there is no value for a given attribute, select the first
    // option in the menu.

    // Retrieve the textual values from the remaining attributes and
    // populate the inspector's text fields with the values.
    if(idText) {
        if (theObj.getAttribute("id"))
            idText.value=theObj.getAttribute("id");
        else
            idText.value = "";
    }

    if(startText) {
        if (theObj.getAttribute("start"))
            startText.value=theObj.getAttribute("start");
        else
            startText.value="";
    }

    if(testText) {
        if (theObj.getAttribute("test"))
            testText.value=theObj.getAttribute("test");
        else
            testText.value="";
    }

    if(iterText) {
        if (theObj.getAttribute("iter"))
            iterText.value=theObj.getAttribute("iter");
        else
            iterText.value="";
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
    var instanceText = findObject("instance");
    var startText = findObject("start");
    var testText = findObject("test");
    var iterText = findObject("iter");

    if (idText && idText.value != "") {
        theObj.setAttribute("id",idText.value);
    } else {
        theObj.removeAttribute("id");
    }

    if (startText && startText.value != "") {
        theObj.setAttribute("start",startText.value);
    } else {
        theObj.removeAttribute("start");
    }

    if (testText && testText.value != "") {
        theObj.setAttribute("test",testText.value);
    } else {
        theObj.removeAttribute("test");
    }

    if (iterText && iterText.value != "") {
        theObj.setAttribute("iter",iterText.value);
    } else {
        theObj.removeAttribute("iter");
    }

} //END updateTag
