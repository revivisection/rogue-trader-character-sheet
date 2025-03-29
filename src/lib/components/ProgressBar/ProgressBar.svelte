<style lang="scss">
.progressbar {
  counter-reset: step;
  padding: 0;
  width: 100%;
}

.progressbar li {
  float: left;
  list-style: none;
  position: relative;
  text-align: center;
  width: calc(100% / 5);
    
    &:nth-child(even) {
        bottom: 20px;
        &:after {
            background: #979797;
            content: "";
            height: 2px;
            left: -50%;
            position: absolute;
            top: 25px;
            width: 100%;
            z-index: -1;
            transform: rotate(-20deg);
        }
    }
    &:nth-child(odd) {
        &:after {
            background: #979797;
            content: "";
            height: 2px;
            left: -50%;
            position: absolute;
            top: 5px;
            width: 100%;
            z-index: -1;
            transform: rotate(20deg);
        }
    }
    &.active:after,
    &.complete:after {
        background: #6E9846;

        &.heretical {
            background: #814d4d;
        }
    }
    &:first-child:after {
        content: none;
    }
    &:before {
        background: #4f4f4f;
        border: 2px dotted #bebebe;
        border-radius: 50%;
        color: #bebebe;
        content: counters(step, ".", upper-roman)" ";
        counter-increment: step;
        display: block;
        height: 30px;
        line-height: 28px;
        margin: 0 auto 0px;
        text-align: center;
        width: 30px;
    }
}

.progressbar li.active:before,
.progressbar li.complete:before {
  background: #2B4021;
  border-color: #6E9846;
  border-style: solid;
  
}
// .progressbar li.active.heretical:before,
// .progressbar li.complete.heretical:before {
//   background: #814d4d;
//   border-color: #552828;
//   border-style: solid;
// }


.progressbar li.active {
  color: #6E9846;
}

.progressbar li.complete {
  color: #333;
}
.progress__container {
    display: flex;
    width: 100%;
    align-items: center;
    gap: 2px;
}
.label {
    text-transform: uppercase;
    width: 30%;
}
@media screen and (max-width: 1024px) {
    .label {
        font-size: 14px; 
    }
    .progress__container {
        flex-wrap: wrap;
    }
 }
</style>

<script lang="ts">
    export let label:String = ""
    export let level;
    // export let type;
    let arr=[]
    for (let i = 0; i < 5; i++) {

        if (i < level) {
            arr.push("complete");
        }
        else {
            arr.push("");
        }
    }
</script>

<div class="progress__container no-select">
    <p class="cairo-bold label grey">{label}</p>
    <ol type="I" class="progressbar cairo-bold">
        {#each arr as item}
            <li class="{item}"></li>
        {/each}
    </ol>
</div>

