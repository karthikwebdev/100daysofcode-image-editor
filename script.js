function fun(n) {
    if (n===1) {
        var x = document.getElementById('brightness').value;
        document.getElementById('img').style.filter = `brightness(${x}%)`
    } else if (n===2) {
        var x = document.getElementById('saturate').value;
        document.getElementById('img').style.filter = `saturate(${x}%)`
    }
    else if (n===3) {
        var x = document.getElementById('blur').value;
        document.getElementById('img').style.filter = `blur(${x}px)`
        console.log(x)
    }
    else if (n===4) {
        var x = document.getElementById('contrast').value;
        document.getElementById('img').style.filter = `contrast(${x}%)`
        console.log(x)
    }
    else if (n===5) {
        var x = document.getElementById('height').value;
        document.getElementById('img').style.height = `${x}vh`;
        console.log(x)
    }
    else if (n===6) {
        var x = document.getElementById('width').value;
        document.getElementById('img').style.width = `${x}%`;
        console.log(x)
    }
    else if (n===7) {
        var x = document.getElementById('border').value;
        document.getElementById('img').style.border = `${x}px solid white`;
        console.log(x)
    }
    else if(n===8){
        var x = document.getElementById('borderradius').value;
        document.getElementById('img').style.borderRadius = `${x}%`;
        console.log(x)
    }
}