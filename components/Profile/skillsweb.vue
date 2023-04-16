<script>
export default {

}
</script>
<template>
    <div class="container">
        <h2 class="text-xl font-bold text-prim-cyan">Web Skills</h2>
        <br />
        <div class="skills">
            <div class="details">
                <span>HTML</span>
                <span>Lv.7</span>
            </div> 
            <div class="bar">
                <div id="html-bar"></div>
            </div>
        </div>
        <div class="skills">
            <div class="details">
                <span>CSS</span>
                <span>Lv.5</span>
            </div> 
            <div class="bar">
                <div id="css-bar"></div>
            </div>
        </div>
        <div class="skills">
            <div class="details">
                <span>React</span>
                <span>Lv.4</span>
            </div> 
            <div class="bar">
                <div id="react-bar"></div>
            </div>
        </div>
        <div class="skills">
            <div class="details">
                <span>Next.js</span>
                <span>Lv.3</span>
            </div>
            <div class="bar">
                <div id="next-bar"></div>
            </div>
        </div>
        <div class="skills">
            <div class="details">
                <span>Vue</span>
                <span>Lv.6</span>
            </div>
            <div class="bar">
                <div id="vue-bar"></div>
            </div>
        </div>
        <div class="skills">
            <div class="details">
                <span>Nuxt.JS</span>
                <span>Lv.5</span>
            </div>
            <div class="bar">
                <div id="nuxt-bar"></div>
            </div>
        </div>
    </div>
</template>

<style lang="css" scoped>
.container {
    width: 100%;
    padding: 50px 30px;
    background-color: rgba(255, 255, 255, 0.06);
    border: 2px solid rgba(255, 255, 255, 0.06);
    border-radius: 10px;
    box-shadow: 0 20px 30px rgba(0,0,0,0.2);
    backdrop-filter: blur(10px);
}

.skills:not(:last-child){
    margin-bottom: 1rem;
}

.skills:hover {

}

.details {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.5rem;
}

.bar {
    position: relative;
    background-color: rgba(155, 155, 155, 0.15);
    border: 1px solid rgba(155, 155, 155, 0.15);
    padding: 3px 5px;
    border-radius: 20px;
    backdrop-filter: blur(10px);
}

.bar div {
    position: relative;
    width: 0;
    height: 5px;
    border-radius: 10px;
    background-color: #0ED3CF;
    border: 1px solid #0ED3CF;
    box-shadow: 0 0 5px rgba(28, 151, 252, 0.06);
}

#html-bar {
    animation: html-fill 2s forwards;
}

@keyframes html-fill {
    100% {
        width: 70%;
    }
}

#css-bar {
    animation: css-fill 2s forwards;
}

@keyframes css-fill {
    100% {
        width: 70%;
    }
}

#react-bar {
    animation: react-fill 2s forwards;
}

@keyframes react-fill {
    100% {
        width: 40%;
    }
}

#next-bar {
    animation: next-fill 2s forwards;
}

@keyframes next-fill {
    100% {
        width: 30%;
    }
}

#vue-bar {
    animation: vue-fill 2s forwards;
}

@keyframes vue-fill {
    100% {
        width: 60%;
    }
}

#nuxt-bar {
    animation: nuxt-fill 2s forwards;
}

@keyframes nuxt-fill {
    100% {
        width: 50%;
    }
}

</style>