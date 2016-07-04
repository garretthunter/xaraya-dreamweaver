// Inspector code for xar:blocklayout tag
//
// ******************** API ****************************

function canInspectSelection()
{
  return true;
}

function inspectSelection()
{
    var versionText = findObject("version");
    var xmlnsText = findObject("xmlns");
    var contentObj = findObject("content");

    // get the currently selected tag
    var theObj = dw.getDocumentDOM().getSelectedNode();

    if(versionText) {
        if (theObj.getAttribute("version"))
            versionText.value=theObj.getAttribute("version");
        else
            versionText.value = "1.0";
    }

    if(xmlnsText) {
        if (theObj.getAttribute("xmlns"))
            xmlnsText.value=theObj.getAttribute("xmlns:xar");
        else
            xmlnsText.value = "http://xaraya.com/2004/blocklayout";
    }

    if(contentObj) {
        if (theObj.getAttribute("content") != "")
            selectMenuItem(contentObj,theObj.getAttribute("content"));
        else
            contentObj.selectedIndex=1;
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

// updateTag() is the function that gets triggered whenever one of the
// form controls changes value. Extract the data from the form controls
// and store them in the attributes of the selected tag.
function updateTag(attrib)
{
    var theObj = dw.getDocumentDOM().getSelectedNode();

    var versionText = findObject("version");
    var xmlnsText = findObject("xmlns");
    var contentObj = findObject("content");

    if (versionText && versionText.value != "") {
        theObj.setAttribute("version",versionText.value);
    } else {
        theObj.removeAttribute("version");
    }

    if (xmlnsText && xmlnsText.value != "") {
        theObj.setAttribute("xmlns:xar",xmlnsText.value);
    } else {
        theObj.removeAttribute("xmlns:xar");
    }

    if (contentObj && contentObj.selectedIndex > 0) {
        theObj.setAttribute("content",contentObj.options[contentObj.selectedIndex].value);
    } else {
        theObj.removeAttribute("content");
    }

} //END updateTag

