// Inspector code for xar:blockgroup tag
//
// ******************** API ****************************

function canInspectSelection()
{
    return true;
}

function inspectSelection()
{
    var idText = findObject("id");
    var nameText = findObject("name");
    var templateText = findObject("template");
	
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

    if(nameText) {
        if (theObj.getAttribute("name"))
            nameText.value=theObj.getAttribute("name");
        else
            nameText.value="";
    }

    if(templateText) {
        if (theObj.getAttribute("template"))
            templateText.value=theObj.getAttribute("template");
        else
            templateText.value="";
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
    var nameText = findObject("name");
    var templateText = findObject("template");

    if (idText && idText.value != "") {
        theObj.setAttribute("id",idText.value);
    } else {
        theObj.removeAttribute("id");
    }

    if (nameText && nameText.value != "") {
        theObj.setAttribute("name",nameText.value);
    } else {
        theObj.removeAttribute("name");
    }

    if (templateText && templateText.value != "") {
        theObj.setAttribute("template",templateText.value);
    } else {
        theObj.removeAttribute("template");
    }

} //END updateTag

