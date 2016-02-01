// JScript File
function Select(objId) {
    fnDeSelect();
    if (document.selection) {
        var range = document.body.createTextRange();
        range.moveToElementText(document.getElementById(objId));
        range.select();
    }
    else if (window.getSelection) {
        var range = document.createRange();
        range.selectNode(document.getElementById(objId));
        window.getSelection().addRange(range);
    }
}
function fnDeSelect() {
    if (document.selection)
        document.selection.empty();
    else if (window.getSelection)
        window.getSelection().removeAllRanges();
}



function Toggle(ElId) {
    var el = document.getElementById(ElId)
    if (el.style.display == "none") { el.style.display = "block"; }
    else { el.style.display = "none"; }
}

// same as Toggle, but deselects everything too
function Toggled(Id) {
    var obj = document.getElementById(Id)
    if (obj.style.display == "none") { obj.style.display = "block"; }
    else { obj.style.display = "none"; }

    // deselect all
    if (document.selection) {
        document.selection.empty();
    } else if (window.getSelection) {
        window.getSelection().removeAllRanges();
    }
}

function DisplaySample(SampleBox) {

    var makevisible = true;

    var boxname = "codefile" + SampleBox;
    var box = document.getElementById(boxname);
    if (box.style.display == "block") makevisible = false;

    try
    {
        var i = 0;
        while(true)
        {
            boxname = "codefile" + i;
            box = document.getElementById(boxname);
            box.style.display = "none";
            i = i + 1;
        }   
    }
    catch(err)
    {
    }

    if (makevisible) {
        box = document.getElementById("codefile" + SampleBox)
        box.style.display = "block"
        Select("codefile" + SampleBox);
    }
}

function DoubleToggle(ElId, OthId) {
    var el = document.getElementById(ElId)
    if (el.style.display == "none") { el.style.display = "block"; }
    else { el.style.display = "none"; }

    var oth = document.getElementById(OthId)
    if (el.style.display == "none") { oth.style.display = "block"; }
    else { oth.style.display = "none"; }
}

function RunFeedback(LessonID) {
    window.open('http://www.directxtutorial.com/feedback/feedback.aspx?' + LessonID, '', 'dependent=1,directories=0,height=480,width=783,location=0');
}

// These functions are used to lighten and darken the lesson lists
function SetLessonLight(DivID)
{
    //document.getElementById(DivID).style.backgroundColor="rgb(16, 16, 16)";
    document.getElementById(DivID).className = "lessonboxhighlighted";
}
function SetLessonDark(DivID)
{
    //document.getElementById(DivID).style.backgroundColor = "rgb(0, 0, 0)";
    document.getElementById(DivID).className = "lessonbox";
}



// Set focus functions
function SetUsernameFocus() {
    ID = document.getElementById("txtUsername");
    ID.focus();
}
function SetPasswordFocus() {
    ID = document.getElementById("txtPassword");
    ID.focus();
}
function SetFeedbackFocus() {
    ID = document.getElementById("txtFeedback");
    ID.focus();
}


// Open feedback form
function RunFeedback() {
    window.open('Feedback.aspx', '', 'dependent=1,directories=0,height=370,width=783,location=0');
}


// Open glossary
function RunGlossary() {
    window.open('Glossary.aspx', '', 'dependent=1,directories=0,height=510,width=783,location=0');
}
function RunGlossarySearch() {
    var name = document.forms['formgloss'].elements['txtGlossSearch'].value;
    if(name != "")
        window.open('Glossary.aspx?def=' + name, '', 'dependent=1,directories=0,height=510,width=783,location=0');
}
// this runs when user presses Enter instead of clicking on search:
function RunGlossarySearchEnter(e) {
    var characterCode
    if(e && e.which){ // NN4 specific code
        e = e
        characterCode = e.which
    }
    else {
        e = event
        characterCode = e.keyCode // IE specific code
    }
    if (characterCode == 13) {
        var name = document.forms['formgloss'].elements['txtGlossSearch'].value;
        if (name != "")
            window.open('Glossary.aspx?def=' + name, '', 'dependent=1,directories=0,height=510,width=783,location=0');
        return false;
    }
    return true;
}



// Open legal
function RunLegal() {
    window.open('Legal.aspx', '', 'dependent=1,directories=0,height=240,width=783,location=0');
}



// lessonlist focus on lessonid
function focusonid(id) {
    document.getElementById(id).scrollIntoView(true);
}