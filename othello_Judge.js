function rule(a,s){
    switch(a){
        case -1: //左
            return s%8!=0;
        case -8: //上
            return s>7;
        case 1: //右
            return s%8!=7;
        case 8: //下
            return s<56;
        case -7: //右上
            return s%8!=7 && s>7;
        case -9: // 左上
            return s%8!=0 && s>7;
        case 9: //右下
            return s%8!=7 && s<56;
        case 7: //左下
            return s%8!=0 && s<56;
    }
}

function cross(s,En,Me){
    let A=[-1,-8,1,8,-7,-9,7,9];
    for(let k=0;k<A.length;k++){
        a=A[k];
        if(rule(a,s) && stone[s+a].st==En){
            for(let j=s+a;rule(a,j-a);j+=a){
                if(stone[j].st==En){
                    continue;
                }else if(stone[j].st==Me){
                    stone[s].st=3;
                    break;
                }
                break;
            }
        }
    }
}

function Judge(Turn){
    for(let i=0;i<stone.length;i++){
        if(stone[i].st==3){
            stone[i].st=0;
        }
    }
    let en;
    let me;
    if(Turn==1){
        en=2;
        me=1;
    }else if(Turn==2){
        en=1;
        me=2;
    }
    for(let i=0;i<stone.length;i++){
        if(stone[i].st==0){
            cross(i,en,me);
        }
    }
    setup();
}

function reverse(s,En,Me){
    let A=[-1,-8,1,8,-7,-9,7,9];
    for(let k=0;k<A.length;k++){ //八方向分繰り返す
        a=A[k];
        Rev=[s];
        if(rule(a,s) && stone[s+a].st==En){
            for(let j=s+a;rule(a,j-a);j+=a){ //進行方向分繰り返す
                if(stone[j].st==En){
                    Rev.push(j);
                    continue;
                }else if(stone[j].st==Me){
                    for(let i=0; i<Rev.length;i++){
                        stone[Rev[i]].st=Me;
                    }
                    break;
                }
                break;
            }
        }
    }
}

function turn_change(pl){
    let a, Ale;
    let t=turn;
    let Pa=[];

    for(let j=0;j<2;j++){
        a=0;
        switch(turn){
            case 1:
                turn=2;
                break;
            case 2:
                turn=1;
                break;
        }
        Judge(turn);
        for(let i=0;i<stone.length;i++){
            if(stone[i].st==3){
                a=1;
                break;
            }
        }
        if(a==1){
            break;
        }
    }

    for(let j=0;j<stone.length;j++){
        Pa.push(stone[j].st);
    }
    Pa.push(turn);
    past.push(Pa);

    stone[pl].style.color="red";
    if(a==0){
        turn=0;
        if(black_p>white_p){
            setTimeout(function(){alert("黒の勝ちです")},1);
        }else if(black_p<white_p){
            setTimeout(function(){alert("白の勝ちです")},1);
        }else{
            setTimeout(function(){alert("引き分けです")},1);
        }
    }else if(t==turn){
        if(turn==1){
            Ale="白の";
        }else{
            Ale="黒の";
        }
        setTimeout(function(){alert(Ale+"置ける場所がありません")},1);
    }
}


function CP(){
    let cho=[];
    let en,me;
    let Now=past[past.length-1];
    let min=64,counter=0,Now_point,point;
    let co,t_st,y_st,coo;
    let ki=[0,0,0,0];
    let ru=[0,1,2,8,9,10,16,17,18];
    let lu=[5,6,7,13,14,15,21,22,23];
    let rd=[40,41,42,48,49,50,56,57,58];
    let ld=[45,46,47,53,54,55,61,62,63];
    switch(player){
        case 1:
            Now_point=white_p;
            break;
        case 2:
            Now_point=black_p;
            break;
    }
    for(let i=0;i<stone.length;i++){
        if(stone[i].st==3){
            cho.push(i);
        }
    }
    let ans=cho[0];
    switch(player){
        case 1:
            en=1;
            me=2;
            break;
        case 2:
            en=2;
            me=1;
    }
    for(let l=0;l<4;l++){ //奇数法則
        co=0;
        switch(l){
            case 0:
                t_st=3;
                y_st=24;
                ba=0;
                break;
            case 1:
                t_st=4;
                y_st=29;
                ba=5;
                break;
            case 2:
                t_st=35;
                y_st=32;
                ba=40;
                break;
            case 3:
                t_st=36;
                y_st=37;
                ba=45;
                break;
        }
        for(let j=0;j<4;j++){
            if(stone[8*j+t_st].st==1 || stone[8*j+t_st].st==2){
                co+=1;
            }
        }
        for(let j=0;j<3;j++){
            if(stone[j+y_st].st==1 || stone[j+y_st].st==2){
                co+=1;
            }
        }
        if(co==7){
            coo=0;
            for(let k=0;k<3;k++){
                for(let j=0;j<3;j++){
                    if(stone[j+8*k+ba].st==3){
                        coo+=1
                    }
                }
            }
            if(coo==1 || coo==3){
                ki[l]==1;
            }
        }
    }
    for(i=0;i<cho.length;i++){
        counter=0;
        reverse(cho[i],en,me);
        Judge(en);
        for(let j=0;j<stone.length;j++){
            if(stone[j].st==3){
                if(j==0 || j==7 || j==56 || j==63){
                    counter+=5; //相手が角取れるなら避ける
                }else{
                    counter+=1; //相手のうてる場所を減らす
                }
            }
        }
        if(ki[0] && i in ru){
            counter -= 5;
        }else if(ki[1] && i in lu){
            counter -= 5;
        }else if(ki[2] && i in rd){
            counter -= 5;
        }else if(ki[3] && i in ld){
            counter -= 5;
        }
        switch(player){
            case 1:
                point=white_p;
                break;
            case 2:
                point=black_p;
                break;
        }
        if(stone.length<stone.length*0.7){
            counter+=2*(Now_point-point); //序盤はできるだけひっくり返さない
        }
        if(cho[i]==0 || cho[i]==7 || cho[i]==56 || cho[i]==63){
            counter-=5; //角はすこし優先的にとる
        }else if((stone[0].st==0 && stone[9].st==me) || (stone[7].st==0 && stone[14].st==me) || (stone[56].st==0 && stone[49].st==me) || (stone[63].st==0 &&stone[54].st==me)){
            counter+=(stone.length-white_p-black_p)/2 //角斜め前は序盤は置かない
        }else if(stone[9].st==me || stone[14].st==me || stone[49].st==me || stone[54].st==me){
            counter+=(stone.length-white_p-black_p)/5 //角横は序盤は置かない
        }
        if(min>counter){
            ans=i;
            min=counter;
        }
        for(let j=0;j<stone.length;j++){
            stone[j].st=Now[j];
        }
    }
    if(cho.length>=1){
        reverse(cho[ans],en,me);
        turn_change(cho[ans]);
    }
}
