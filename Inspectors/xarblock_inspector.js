// Inspector code for xar:block tag
//
// ******************** API ****************************

function canInspectSelection()
{
    return true;
}

function inspectSelection()
{
    var idText = findObject("id");
    var instanceText = findObject("instance");
    var moduleText = findObject("module");
    var nameText = findObject("name");
    var titleText = findObject("title");
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

    if(instanceText) {
        if (theObj.getAttribute("instance"))
            instanceText.value=theObj.getAttribute("instance");
        else
            instanceText.value="";
    }

    if(moduleText) {
        if (theObj.getAttribute("module"))
            moduleText.value=theObj.getAttribute("module");
        else
            moduleText.value="";
    }

    if(nameText) {
        if (theObj.getAttribute("name"))
            nameText.value=theObj.getAttribute("name");
        else
            nameText.value="";
    }

    if(titleText) {
        if (theObj.getAttribute("title"))
            titleText.value=theObj.getAttribute("title");
        else
            titleText.value="";
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
    var instanceText = findObject("instance");
    var moduleText = findObject("module");
    var nameText = findObject("name");
    var titleText = findObject("title");
    var templateText = findObject("template");

    if (idText && idText.value != "") {
        theObj.setAttribute("id",idText.value);
    } else {
        theObj.removeAttribute("id");
    }

    if (instanceText && instanceText.value != "") {
        theObj.setAttribute("instance",instanceText.value);
    } else {
        theObj.removeAttribute("instance");
    }

    if (moduleText && moduleText.value != "") {
        theObj.setAttribute("module",moduleText.value);
    } else {
        theObj.removeAttribute("module");
    }

    if (nameText && nameText.value != "") {
        theObj.setAttribute("name",nameText.value);
    } else {
        theObj.removeAttribute("name");
    }

    if (titleText && titleText.value != "") {
        theObj.setAttribute("title",titleText.value);
    } else {
        theObj.removeAttribute("title");
    }

    if (templateText && templateText.value != "") {
        theObj.setAttribute("template",templateText.value);
    } else {
        theObj.removeAttribute("template");
    }

} //END updateTag

