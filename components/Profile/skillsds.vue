<script>
export default {

}
</script>
<template>
    <div class="container">
        <h2 class="text-xl font-bold text-prim-yellow">Data Science Skills</h2>
        <br />
        <div class="skills">
            <div class="details">
                <span>Storategy</span>
                <span>Lv.5</span>
            </div> 
            <div class="bar">
                <div id="storategy-bar"></div>
            </div>
        </div>
        <div class="skills">
            <div class="details">
                <span>Feature Engineering</span>
                <span>Lv.6</span>
            </div> 
            <div class="bar">
                <div id="fe-bar"></div>
            </div>
        </div>
        <div class="skills">
            <div class="details">
                <span>System Architect</span>
                <span>Lv.5</span>
            </div> 
            <div class="bar">
                <div id="sa-bar"></div>
            </div>
        </div>
        <div class="skills">
            <div class="details">
                <span>Visualization</span>
                <span>Lv.3</span>
            </div>
            <div class="bar">
                <div id="visualization-bar"></div>
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
    background-color: #FACC15;
    border: 1px solid #FACC15;
    box-shadow: 0 0 5px rgba(28, 151, 252, 0.06);
}

#storategy-bar {
    animation: storategy-fill 2s forwards;
}

@keyframes storategy-fill {
    100% {
        width: 50%;
    }
}

#fe-bar {
    animation: fe-fill 2s forwards;
}

@keyframes fe-fill {
    100% {
        width: 60%;
    }
}

#sa-bar {
    animation: sa-fill 2s forwards;
}

@keyframes sa-fill {
    100% {
        width: 40%;
    }
}

#visualization-bar {
    animation: visualization-fill 2s forwards;
}

@keyframes visualization-fill {
    100% {
        width: 30%;
    }
}

</style>