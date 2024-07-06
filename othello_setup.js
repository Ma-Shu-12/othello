function setup() {
    black_p = 0;
    white_p = 0;
    for(let i=0; i<stone.length; i++){
        switch(stone[i].st){
            case 0://何もない
                stone[i].style.opacity = 0;
                stone[i].style.width = stone_no_size +"px";
                stone[i].style.height = stone_no_size +"px";
                stone[i].style.fontsize = 0 +"px";
                stone[i].style.color = "transparent";
                stone[i].disabled = true;
                break;
            case 1://黒
                stone[i].style.opacity=1;
                stone[i].style.width = stone_size +"px";
                stone[i].style.height = stone_size +"px";
                stone[i].style.fontsize = sq_size +"px";
                stone[i].style.backgroundColor = "#000";
                stone[i].style.color = "transparent";
                stone[i].disabled = true;
                black_p+=1;
                break;
            case 2://白
                stone[i].style.opacity=1;
                stone[i].style.width = stone_size +"px";
                stone[i].style.height = stone_size +"px";
                stone[i].style.fontsize = sq_size +"px";
                stone[i].style.backgroundColor = "#fff";
                stone[i].style.color = "transparent";
                stone[i].disabled = true;
                white_p+=1;
                break;
            case 3://置ける場所
                stone[i].style.opacity=0.3;
                stone[i].style.width = stone_no_size +"px";
                stone[i].style.height = stone_no_size +"px";
                stone[i].style.fontsize = 0 +"px";
                stone[i].style.backgroundColor = "#fff";
                stone[i].style.color = "transparent";
                stone[i].disabled = false;
                break;
        }
    }
    B_point.innerText=black_p;
    W_point.innerText=white_p;
}

setup();
