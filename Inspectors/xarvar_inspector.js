// Inspector code for xar:var tag
//
// ******************** API ****************************

function canInspectSelection()
{
    return true;
}

function inspectSelection()
{
    var idText = findObject("id");
    var scopeObj = findObject("scope");
    var nameText = findObject("name");

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

    if(scopeObj) {
        if (theObj.getAttribute("scope") != "")
            selectMenuItem(scopeObj,theObj.getAttribute("scope"));
        else
            scopeObj.selectedIndex=0;
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
    var scopeObj = findObject("scope");
    var nameText = findObject("name");

    if (idText && idText.value != "") {
        theObj.setAttribute("id",idText.value);
    } else {
        theObj.removeAttribute("id");
    }

    if (scopeObj && scopeObj.selectedIndex > 0) {
        theObj.setAttribute("scope",scopeObj.options[scopeObj.selectedIndex].value);
    } else {
        theObj.removeAttribute("scope");
    }

    if (nameText && nameText.value != "") {
        theObj.setAttribute("name",nameText.value);
    } else {
        theObj.removeAttribute("name");
    }

} //END updateTag

