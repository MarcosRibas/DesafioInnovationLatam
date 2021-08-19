
let music_list = [false,false]
let saved = 0
let dialog_lock = document.getElementById('dialog_lock')
let playTitle = document.getElementById('playTitle')
let saveButton = document.getElementById('saveButton')


function play(music){    

    playTitle.innerHTML=music
    dialog_lock.removeAttribute("hidden")
    

}
function closeDialog(){
    dialog_lock.setAttribute("hidden", "hidden")

}

function save(position) {
    let counter = document.getElementById('counter')
    if(music_list[position]){
        saveButton.innerText= `Save`
        saved -= 1
        music_list[position] = false

    }else{

        saved += 1
        music_list[position] = true
        saveButton.innerText= `Saved`

    }

    counter.innerHTML = saved

    
}





