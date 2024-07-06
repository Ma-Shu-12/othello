for(let i=0; i<stone.length;i++){
    stone[i].addEventListener('click',function(){
        let en,me;
        if(turn==1){
            en=2;
            me=1;
        }else if(turn==2){
            en=1;
            me=2;
        }
        reverse(i,en,me);
        turn_change(i);
        if(player!=0){
            while(turn!=player && turn!=0){
                CP();
            }
        }
    })
}
