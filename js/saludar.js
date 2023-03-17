// document.getElementById('nombre').setAttribute('value', 'Jhoan');


document.getElementById('saludarBtn')
    .addEventListener('click', () => {
        let nombrePersona = document.getElementById('nombre').value;
        // if(nombrePersona== '' || nombrePersona == null){
        if (!nombrePersona) {
            alert('Debe ingresar un nombre');
        } else {
            alert('Hola ' + nombrePersona + '!!!!!')
        }

    });

function saludar() {
    let nombrePersona = document.getElementById('nombre').value;
    // if(nombrePersona== '' || nombrePersona == null){
    if (!nombrePersona) {
        alert('Debe ingresar un nombre');
    } else {
        alert('Hola ' + nombrePersona + '!!')
    }
}

//add.evenlister agregar un evento al inpu
