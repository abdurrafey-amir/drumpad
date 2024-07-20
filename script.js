function play(link) {
    let audio = new Audio(link);
    audio.load();
    audio.play();
}

document.onkeydown = function (e) {
    e = e || window.event
    var key = e.which || e.keyCode
    if (key === 65) {
        play('https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/SD0025.mp3')
        // var button = document.getElementById('A');
        // button.classList.toggle('active');
        
    }
    else if (key === 66) {
        play('https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/SD0010.mp3')
        // var button = document.getElementById('B');
        // button.classList.toggle('active');
    }
    else if (key === 67) {
        play('https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/SD0000.mp3')
        // var button = document.getElementById('C');
        // button.classList.toggle('active');
    }
    else if (key === 68) {
        play('https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/RS.mp3')
        // var button = document.getElementById('D');
        // button.classList.toggle('active');
    }
    else if (key === 69) {
        play('https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/OH25.mp3')
        // var button = document.getElementById('E');
        // button.classList.toggle('active');
    }
    else if (key === 70) {
        play('https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/MA.mp3')
        // var button = document.getElementById('F');
        // button.classList.toggle('active');
    }
    else if (key === 71) {
        play('https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/CY0010.mp3')
        // var button = document.getElementById('G');
        // button.classList.toggle('active');
    }
    else if (key === 72) {
        play('https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/CH.mp3')
        // var button = document.getElementById('H');
        // button.classList.toggle('active');
    }
    else if (key === 73) {
        play('https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/CB.mp3')
        // var button = document.getElementById('I');
        // button.classList.toggle('active');
    }
    else if (key === 74) {
        play('https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/BD0010.mp3')
        // var button = document.getElementById('J');
        // button.classList.toggle('active');
    }
    else if (key === 75) {
        play('https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/BD0000.mp3')
        // var button = document.getElementById('K');
        // button.classList.toggle('active');
    }
    else if (key === 76) {
        play('https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/CP.mp3')
        // var button = document.getElementById('L');
        // button.classList.toggle('active');
    }
}



// co-pilot generated (still didnt work)

// document.onkeyup = function (e) {
//     e = e || window.event;
//     var key = e.which || e.keyCode;
//     var button;
//     if (key === 65) {
//         button = document.getElementById('A');
//     }
//     else if (key === 66) {
//         button = document.getElementById('B');
//     }
//     else if (key === 67) {
//         button = document.getElementById('C');
//     }
//     else if (key === 68) {
//         button = document.getElementById('D');
//     }
//     else if (key === 69) {
//         button = document.getElementById('E');
//     }
//     else if (key === 70) {
//         button = document.getElementById('F');
//     }
//     else if (key === 71) {
//         button = document.getElementById('G');
//     }
//     else if (key === 72) {
//         button = document.getElementById('H');
//     }
//     else if (key === 73) {
//         button = document.getElementById('I');
//     }
//     else if (key === 74) {
//         button = document.getElementById('J');
//     }
//     else if (key === 75) {
//         button = document.getElementById('K');
//     }
//     else if (key === 76) {
//         button = document.getElementById('L');
//     }
//     if (button) {
//         button.classList.toggle('active');
//     }
// }