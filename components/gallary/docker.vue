<template>
    <div class="modal-content">
        <div class="title">
            <div class="icon" id="cl-blue">
                <img src="/icons/docker.svg">
            </div>
            <div class="title-text">
                <h3 class="name">Docker</h3>
                <div class="subname">Container tool</div>
            </div>
        </div>

        <div class="body">
            <div class="abstract">
                APIサーバの実装 / 機械学習モデルの評価 / 各種テスト実行 をコンテナで実装<br />
                色々やってみてます。
            </div>
            <div class="case">
                <h2 class="case-tag">Case 1</h2>
                <div class="description">
                    Argo Projectを用いて、データ整形・モデルの学習・モデルの評価 のワークフローを実装スケジューリングが不要だったことと、既にコンテナとしてまとまっていたため。Apache Airflowではなく Argo を採用。
                </div>
                <div class="figure"><img src="/gallary/sample.png" width="80%"/></div>
            </div>
            <div class="case">
                <h2 class="case-tag">Case 2</h2>
                <div class="description">
                    <pre>GCP / AWSなどのクラウド環境にコンテナをデプロイすることも可能</pre>
                </div>
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

        .case-tag {
            margin-top: 1rem;
        }

        .description {
            margin-top: 1rem;
        }

        .figure {
            text-align: center;
            margin: 1rem 0;
        }
    }
}

#cl-blue {
    background-color: #4f4ca6;
}

</style>