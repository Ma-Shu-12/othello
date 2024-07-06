const Sta = document.getElementById("start")
Sta.addEventListener("click",function(){
    for(let i=0; i<stone.length;i++){
        stone[i].st=0;
    }
    player=0;
    stone[27].st=1;
    stone[36].st=1;
    stone[28].st=2;
    stone[35].st=2;
    turn=1;
    Judge(turn);
    let Pa=[];
    past=[];
    for(let i=0; i<stone.length;i++){
        Pa.push(stone[i].st);
    }
    Pa.push(turn);
    past.push(Pa);
})

const Sta_2 = document.getElementById("start_2")
Sta_2.addEventListener("click",function(){
    for(let i=0; i<stone.length;i++){
        stone[i].st=0;
    }
    player=1;
    stone[27].st=1;
    stone[36].st=1;
    stone[28].st=2;
    stone[35].st=2;
    turn=1;
    Judge(turn);
    let Pa=[];
    past=[];
    for(let i=0; i<stone.length;i++){
        Pa.push(stone[i].st);
    }
    Pa.push(turn);
    past.push(Pa);
})

const Sta_1 = document.getElementById("start_1")
Sta_1.addEventListener("click",function(){
    for(let i=0; i<stone.length;i++){
        stone[i].st=0;
    }
    player=2;
    stone[27].st=1;
    stone[36].st=1;
    stone[28].st=2;
    stone[35].st=2;
    turn=1;
    Judge(turn);
    let Pa=[];
    past=[];
    for(let i=0; i<stone.length;i++){
        Pa.push(stone[i].st);
    }
    Pa.push(turn);
    past.push(Pa);
    CP();
})
