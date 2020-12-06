<template>
    <div class="modal-content">
        <div class="title">
            <div class="icon" id="cl-blue">
                <img src="/icons/react.svg">
            </div>
            <div class="title-text">
                <h3 class="name">React</h3>
                <div class="subname">JavaScript Library</div>
            </div>
        </div>

        <div class="body">
            <div class="abstract">
                Reactで、PoCやサービスのプロトタイプを作成しています。
            </div>
            <div class="case">
                <h2 class="case-tag">Case 1</h2>
                <div class="description">
                    音声認識で遊ぶサンプルプログラム
                </div>
                <div class="figure"><img src="/gallary/docker/Argo_development.png" width="80%"/></div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.modal-content {
    margin: 0 15vw;

}

.title {

    display: flex;
    align-items: center;
    margin-top: 4rem;

    .icon {
        width: 5rem;
        height: 5rem;
        border-radius: 25%;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
            width: 70%;
        }
    }

    .title-text {
        margin-left: 1rem;

    }
}

.body {
    margin: 3rem 0;
    .case{
        margin: 2rem 0;

        .case-tag {
            margin-top: 1rem;
            border-bottom: solid 2px #e4286d;
        }

        .description {
            margin-top: 2rem;
        }

        .figure {
            text-align: center;
            margin: 2rem 0;
        }
    }
}

#cl-blue {
    background-color: #4f4ca6;
}

</style>