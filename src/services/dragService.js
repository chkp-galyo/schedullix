// import keepService from './keep-services.js'

function setNotesPos(notes) {
    let arrNotes = Array.from(notes)
    let notesPos = arrNotes.map((note, idx) => {
        return {
            l: note.offsetLeft, t: note.offsetTop,
            w: note.offsetWidth, h: note.offsetHeight, idx
        }
    })
    return notesPos
}

function dragElement(elmnt) {
    var posLeft = 0,
        posTop = 0;
    elmnt = elmnt.target
    console.log(elmnt)
    elmnt.onmousedown = dragMouseDown;


    function dragMouseDown(e) {
        // if (!notesPos) return
        
        document.onmousemove = elementDrag;
        document.onmouseup = closeDragElement;
    }

    function elementDrag(e) {
        document.querySelector('html').classList.add('cursor-move')
        posLeft = e.clientX;
        posTop = window.pageYOffset + e.clientY;
        elmnt.style.left = (posLeft) + "px";
        elmnt.style.top = (posTop) + "px";        
    }

    function closeDragElement() {
        notesPos.forEach(note => {
            if (posLeft >= note.l - 50 && posLeft <= note.l + note.w &&
                posTop >= note.t - 50 && posTop <= note.t + note.h &&
                note.idx !== elmnt.style.order) {
                // elmnt.style.position = ''
                elmnt.style.left = note.l
                elmnt.style.top = note.t
                keepService.reOrganizeNotes(elmnt.style.order, note.idx)                
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