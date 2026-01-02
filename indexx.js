let x = document.getElementById('x');
let acc = document.querySelector('.logobrand');

x.onclick = function(){
    acc.classList.toggle('hide')
}


const toggleBut = document.querySelector('.toggle-but')
    const toggleButIcon = document.querySelector('.toggle-but i')
    const drowpDownMenu = document.querySelector('.drowpdown-menu')

    toggleBut.onclick = function (){
    drowpDownMenu.classList.toggle('open');
    const isOpen = drowpDownMenu.classList.contains('open')

        toggleButIcon.classList = isOpen
        ?'fa-solid fa-xmark'
        :'fa-solid fa-bars'
    }


