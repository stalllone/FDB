<template>
    <div class="star">
        <span v-for="(itemClass,key) in itemClasses" :class="itemClass" class="star-item"></span>
    </div>
</template>
<script>
    const LENGTH = 5;
    const CLS_ON = 'on';
    const CLS_HALF = 'half';
    const CLS_OFF = 'off';
    export default{
        props:{
            // size:{ //尺寸，24,36,48
            //     type: Number
            // },
            score:{
                type: Number
            }
        },
        computed:{
            starSize(){
                return 'star-'+ this.size;
            },
            itemClasses(){
                let result = [];
                let score = Math.floor(this.score*2)/2; //将数值调整为整数及.5的形式，例：4.3 => 4；4.6 => 4.5
                let hasDecimal = score %1 !==0;
                let integer = Math.floor(score);
                for(let i =0;i<integer;i++){
                    result.push(CLS_ON);
                }
                if(hasDecimal){
                    result.push(CLS_HALF);
                }
                while(result.length<LENGTH){
                    result.push(CLS_OFF);
                }
                return result;
            }
        }
    }
</script>
<style scoped>
	.star{
		display: inline-block;
	}
	.star-item {
        display: inline-block;
        background-repeat: no-repeat;
        width: 15px;
        height: 15px;
        margin-right: 5px;
        background-size: 100%;
    }
     .star-item.on{
        background-image: url(on.png);
    }
    .star-item.half{
        background-image: url(half.png);
    }
    /* .star-item.off{
        background-image: url(off.png);
    } */    
</style>