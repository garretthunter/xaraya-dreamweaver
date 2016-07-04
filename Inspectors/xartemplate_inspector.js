// Inspector code for xar:template tag
//
// ******************** API ****************************

function canInspectSelection()
{
    return true;
}

function inspectSelection()
{
    var idText = findObject("id");
    var fileText = findObject("file");
    var typeObj = findObject("type");
    var compileObj = findObject("compile");
    var subdataText = findObject("subdata");

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

    if(fileText) {
        if (theObj.getAttribute("file"))
            fileText.value=theObj.getAttribute("file");
        else
            fileText.value="";
    }

    if(typeObj) {
        if (theObj.getAttribute("type") != "")
            selectMenuItem(typeObj,theObj.getAttribute("type"));
        else
            typeObj.selectedIndex=0;
    }
	
    if(compileObj) {
        if (theObj.getAttribute("compile") != "")
            selectMenuItem(compileObj,theObj.getAttribute("compile"));
        else
            compileObj.selectedIndex=0;
    }

    if(subdataText) {
        if (theObj.getAttribute("subdata"))
            subdataText.value=theObj.getAttribute("subdata");
        else
            subdataText.value="";
    }
}

// selectMenuItem is a helper function that will set the selected
// item in a given select list when also given the value to look for
// in that select list. If the value is not found, then the first
// item in the select list is selected.
function selectMenuItem(menuObj, optionVal)
{
    var numOptions = menuObj.options.length;
    var i;

    for (i=0; i<numOptions; i++)
    {
        if (optionVal == menuObj.options[i].value)
        {
            menuObj.selectedIndex = i;
            return;
        }
    }
    menuObj.selectedIndex = 0;
}

// selectMultiple is a helper function that will set one or more
// items in a multiple-select list.
// menuObj is the select list to operate on, followed by one or
// more parameters that identify the option values of the items
// to select in the list.
function selectMultiple(menuObj, optionValArray)
{
    if (optionValArray.length == 0)
    {
        menuObj.selectedIndex = 0;
        return;
    }

    var i,j;

    for (j=0; j < menuObj.options.length; j++)
    {
        menuObj.options[j].selected = false;
    }

    // For each argument, find the corresponding option in the select list
    // and select it.
    for (i=0; i<optionValArray.length;i++)
    {
        for (j=0; j < menuObj.options.length; j++)
        {
            if (optionValArray[i] == menuObj.options[j].value)
            {
                menuObj.options[j].selected = true;
                break;
            }
        }
    }
}

// getMultipleSelection returns a string in the form of
// 'str1,str2,...strN" for each selected option in a given multiple
// select list.
function getMultipleSelection(menuObj)
{
    var selStr='';
    var selArray = new Array();
    var i;
    for (i=0; i<menuObj.options.length; i++)
    {
        if (menuObj.options[i].selected)
            selArray.push(menuObj.options[i].value);
    }
    selStr = selArray.toString();
    return selStr;
}
// ******************** LOCAL FUNCTIONS ****************************

// setSetTag() is the function that gets triggered whenever one of the
// form controls changes value. Extract the data from the form controls
// and store them in the attributes of the selected tag.
function updateTag(attrib)
{
    var theObj = dw.getDocumentDOM().getSelectedNode();

    var idText = findObject("id");
    var fileText = findObject("file");
    var typeObj = findObject("type");
    var compileObj = findObject("compile");
    var subdataText = findObject("subdata");

    if (idText && idText.value != "") {
        theObj.setAttribute("id",idText.value);
    } else {
        theObj.removeAttribute("id");
    }

    if (fileText && fileText.value != "") {
        theObj.setAttribute("file",fileText.value);
    } else {
        theObj.removeAttribute("file");
    }

    if (typeObj && typeObj.selectedIndex > 0) {
        theObj.setAttribute("type",typeObj.options[typeObj.selectedIndex].value);
    } else {
        theObj.removeAttribute("type");
    }

    if (compileObj && compileObj.selectedIndex > 0) {
        theObj.setAttribute("compile",compileObj.options[compileObj.selectedIndex].value);
    } else {
        theObj.removeAttribute("compile");
    }

    if (subdataText && subdataText.value != "") {
        theObj.setAttribute("subdata",subdataText.value);
    } else {
        theObj.removeAttribute("subdata");
    }

} //END updateTag

