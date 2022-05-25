let bodyScroll = document.getElementsByClassName('sc')[0]

function lockScroll(){
   bodyScroll.style.overflow = 'hidden'
}

function unlockScroll(){
    bodyScroll.style.overflow = 'auto'
}