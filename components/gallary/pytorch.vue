<template>
    <div class="modal-content">
        <div class="title">
            <div class="icon" id="cl-red">
                <img src="/icons/pytorch.svg">
            </div>
            <div class="title-text">
                <h3 class="name">PyTorch</h3>
                <div class="subname">Deep Learning Framework</div>
            </div>
        </div>

        <div class="body">
            <div class="abstract">
                画像処理をメインにたらたらと記述しています。
            </div>
            <div class="case">
                <h2 class="case-tag">Case 1</h2>
                <div class="description">
                    大学院の研究で、fMRI画像をCNNベースモデルで性別などの属性識別・脳腫瘍などの疾患を識別する識別器を作成。また、可視化技術として<a href="https://shunk031.me/paper-survey/summary/cv/Grad-CAM-Why-did-you-say-that" target="_blank">Grad-CAM</a>によって、識別に寄与した領域をマッピング。
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

#cl-red {
    background-color: #d43a59;
}

</style>