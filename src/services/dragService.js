// import keepService from './keep-services.js'

function setNotesPos(notes) {
    let arrNotes = Array.from(notes)
    let notesPos = arrNotes.map((note, idx) => {
        return {
            l: note.offsetLeft, t: note.offsetTop,
            w: note.offsetWidth, h: note.offsetHeight, idx
        }
    })
    console.log(notesPos)
    return notesPos
}

function reOrganizeNotes(currIdx, dirIdx) {
    // let tempNote = notes.splice(currIdx, 1)
    // notes.splice(dirIdx, 0, tempNote[0])
}

function dragElement(elmnt, notesPos) {
    var posLeft = 0,
        posTop = 0;
    // elmnt = elmnt.path[2]

    elmnt.onmousedown = dragMouseDown;


    function dragMouseDown(e) {
        if (!notesPos) return
        
        document.onmousemove = elementDrag;
        document.onmouseup = closeDragElement;
    }

    function elementDrag(e) {
        posLeft = e.clientX;
        posTop = window.pageYOffset + e.clientY;
        elmnt.style.left = (posLeft) + "px";
        elmnt.style.top = (posTop) + "px";        
    }

    function closeDragElement() {
        notesPos.forEach(note => {
            if (posLeft >= note.l && posLeft <= note.l + note.w &&
                posTop >= note.t && posTop <= note.t + note.h &&
                note.idx !== elmnt.style.order) {
                // elmnt.style.position = ''
                elmnt.style.left = note.l
                elmnt.style.top = note.t
                console.log('this is my order: ', elmnt.parentNode.style.order)
                // reOrganizeNotes(elmnt.parentNode.style.order, note.idx)     
                elmnt.parentNode.style.order = note.idx + 1

            } else {
                // elmnt.style.position = ''
                elmnt.style.left = 0;
                elmnt.style.top = 0;
            }
        });
        notesPos = null;
        elmnt.style.position = ''
        document.onmouseup = null;
        document.onmousemove = null;
        document.querySelector('html').classList.remove('cursor-move')
        // document.onmousedown = null;

    }
}

export default {
    dragElement,
    setNotesPos
}