function make_field(){
    let f_place = document.getElementById("oth_f")

    let a = '<table border = "1" id = "field"><tbody>';
    for (let i=1; i<=8; i++) {
        a += '<tr>';
        for (let j=1; j<=8; j++) {
            a += '<td class="Cell"> <button type="button" class="Stone">■</button></td>';
        }
        a += "</tr>";
    }
    a += "</tbody></table>";
    f_place.innerHTML = a;
}

make_field();

const stone = document.getElementsByClassName("Stone");
const cell = document.getElementsByClassName("Cell");
const stone_size = window.innerWidth/13;
const stone_no_size = stone_size/2;
const cell_size = window.innerWidth*0.09;
const sq_size = stone_size/3;

for (let i=0; i<stone.length; i++){
    stone[i].st=0;
    cell[i].style.width = cell_size + "px";
    cell[i].style.height = cell_size + "px";
}

const B_point = document.getElementById("b_point");
const W_point = document.getElementById("w_point");
let black_p = 0;
let white_p = 0;
let turn = 0;
let past =[];
let P = [];
let player = 0;
