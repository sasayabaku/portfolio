<script>
export default {

}
</script>
<template>
    <div class="container">
        <h2 class="text-xl font-bold text-prim-red">ML Skills</h2>
        <br />
        <div class="skills">
            <div class="details">
                <span>Tensorflow</span>
                <span>Lv.2</span>
            </div> 
            <div class="bar">
                <div id="tf-bar"></div>
            </div>
        </div>
        <div class="skills">
            <div class="details">
                <span>Keras</span>
                <span>Lv.4</span>
            </div> 
            <div class="bar">
                <div id="keras-bar"></div>
            </div>
        </div>
        <div class="skills">
            <div class="details">
                <span>PyTorch</span>
                <span>Lv.6</span>
            </div> 
            <div class="bar">
                <div id="torch-bar"></div>
            </div>
        </div>
        <div class="skills">
            <div class="details">
                <span>Scikit Learn</span>
                <span>Lv.6</span>
            </div>
            <div class="bar">
                <div id="sklearn-bar"></div>
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
    background-color: #fa455a;
    border: 1px solid #fa455a;
    box-shadow: 0 0 5px rgba(28, 151, 252, 0.06);
}

#tf-bar {
    animation: tf-fill 2s forwards;
}

@keyframes tf-fill {
    100% {
        width: 20%;
    }
}

#keras-bar {
    animation: keras-fill 2s forwards;
}

@keyframes keras-fill {
    100% {
        width: 40%;
    }
}

#torch-bar {
    animation: torch-fill 2s forwards;
}

@keyframes torch-fill {
    100% {
        width: 60%;
    }
}

#sklearn-bar {
    animation: sklearn-fill 2s forwards;
}

@keyframes sklearn-fill {
    100% {
        width: 60%;
    }
}

</style>