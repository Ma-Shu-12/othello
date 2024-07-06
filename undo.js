const Un = document.getElementById("undo")
Un.addEventListener("click",function(){
    let P=[];
    if(past.length>1){
        if(player==0){
                P = past[past.length-2];
            for(let i=0; i<P.length-1; i++){
                stone[i].st = P[i];
            }
            turn = P[P.length-1];
            past.pop();
        }else{
            let a;
            let b=past.length-2;
            while(true){
                a=past[b][past[b].length-1];
                if(a==player){
                    P=past[b];
                    for(let j=0; j<P.length-1;j++){
                        stone[j].st = P[j];
                    }
                    turn=player;
                    past.pop();
                    break;
                }else{
                    past.pop();
                    b=b-1;
                }
            }
        }
        setup();
    }
})
