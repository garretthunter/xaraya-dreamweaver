// Inspector code for xar:module tag
//
// ******************** API ****************************

function canInspectSelection()
{
    return true;
}

function inspectSelection()
{
    var idText = findObject("id");
    var mainObj = findObject("main");
    var moduleText = findObject("module");
    var typeText = findObject("type");
    var funcText = findObject("func");
    var argsText = findObject("args");

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

    if(mainObj) {
        if (theObj.getAttribute("main") != "")
            selectMenuItem(mainObj,theObj.getAttribute("main"));
        else
            mainObj.selectedIndex=0;
    }

    if(moduleText) {
        if (theObj.getAttribute("module"))
            moduleText.value=theObj.getAttribute("module");
        else
            moduleText.value="";
    }

    if(typeText) {
        if (theObj.getAttribute("type"))
            typeText.value=theObj.getAttribute("type");
        else
            typeText.value="";
    }

    if(funcText) {
        if (theObj.getAttribute("func"))
            funcText.value=theObj.getAttribute("func");
        else
            funcText.value="";
    }

    if(argsText) {
        if (theObj.getAttribute("args"))
            argsText.value=theObj.getAttribute("args");
        else
            argsText.value="";
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
    var mainObj = findObject("main");
    var moduleText = findObject("module");
    var typeText = findObject("type");
    var funcText = findObject("func");
    var argsText = findObject("args");

    if (idText && idText.value != "") {
        theObj.setAttribute("id",idText.value);
    } else {
        theObj.removeAttribute("id");
    }

    if (mainObj && mainObj.selectedIndex > 0) {
        theObj.setAttribute("main",mainObj.options[mainObj.selectedIndex].value);
    } else {
        theObj.removeAttribute("main");
    }

    if (moduleText && moduleText.value != "") {
        theObj.setAttribute("module",moduleText.value);
    } else {
        theObj.removeAttribute("module");
    }

    if (typeText && typeText.value != "") {
        theObj.setAttribute("type",typeText.value);
    } else {
        theObj.removeAttribute("type");
    }

    if (funcText && funcText.value != "") {
        theObj.setAttribute("func",funcText.value);
    } else {
        theObj.removeAttribute("func");
    }

    if (argsText && argsText.value != "") {
        theObj.setAttribute("args",argsText.value);
    } else {
        theObj.removeAttribute("args");
    }

} //END updateTag

