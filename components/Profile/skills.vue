<script>
export default {

}
</script>
<template>
    <div class="container">
        <h2 class="text-xl font-bold text-prim-yellow">Coding Skills</h2>
        <br />
        <div class="skills">
            <div class="details">
                <span>Web</span>
                <span>Lv.5</span>
            </div> 
            <div class="bar">
                <div id="web-bar"></div>
            </div>
        </div>
        <div class="skills">
            <div class="details">
                <span>Machine Learning</span>
                <span>Lv.4</span>
            </div>
            <div class="bar">
                <div id="ml-bar"></div>
            </div>
        </div>
        <div class="skills">
            <div class="details">
                <span>Data Science</span>
                <span>Lv.3</span>
            </div>
            <div class="bar">
                <div id="ds-bar"></div>
            </div>
        </div>
        <div class="skills">
            <div class="details">
                <span>Infrastructure</span>
                <span>Lv.2</span>
            </div>
            <div class="bar">
                <div id="if-bar"></div>
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
    background-color: #fac60a;
    border: 1px solid #fac60a;
    box-shadow: 0 0 5px rgba(28, 151, 252, 0.06);
}

#web-bar {
    animation: web-fill 2s forwards;
}

@keyframes web-fill {
    100% {
        width: 50%;
    }
}

#ml-bar {
    animation: ml-fill 2s forwards;
}

@keyframes ml-fill {
    100% {
        width: 40%;
    }
}

#ds-bar {
    animation: ds-fill 2s forwards;
}

@keyframes ds-fill {
    100% {
        width: 30%;
    }
}

#if-bar {
    animation: if-fill 2s forwards;
}

@keyframes if-fill {
    100% {
        width: 20%;
    }
}

</style>