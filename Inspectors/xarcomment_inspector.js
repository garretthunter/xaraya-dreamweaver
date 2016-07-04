// Inspector code for xar:comment tag
//
// ******************** API ****************************

function canInspectSelection()
{
  return true;
}

function inspectSelection()
{
    var commentText = findObject("comment");

    // get the currently selected tag
    var theObj = dw.getDocumentDOM().getSelectedNode();

    if ( theObj.nodeType != Node.ELEMENT_NODE )
    {
    theObj = theObj.parentNode;
    }

    if(commentText) {
        if (theObj.innerHTML)
            commentText.value=theObj.innerHTML;
        else
            commentText.value="";
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

    var commentText = findObject("comment");

    if (commentText && commentText.value != "") {
        theObj.innerHTML = commentText.value;
    } else {
        theObj.removeAttribute("comment");
    }

} //END updateTag

