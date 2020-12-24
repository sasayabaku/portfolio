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
                <h2 class="subtitle">Motivation</h2>
                <div class="description">
                    機械学習のパイプラインを作成するときに、「データ加工」・「学習」・「評価」をそれぞれ異なる担当者が実装。

                    <ul>
                        <li>データ加工: Ruby</li>
                        <li>学習: Python</li>
                        <li>評価: C++</li>
                    </ul>
                    と、各種異なる言語で実装されていた。
                </div>
                <h2 class="subtitle">Action</h2>
                <div class="description">
                    言語統一の実装コストを考慮して、各パイプラインタスクをDockerコンテナでひとまとめにした。<br />
                    パイプラインを自動実行するために、Argo Workflowを採用。 <br/>
                    (コンテナとの親和性を考慮し、Apache Airflowではなく Argoを採用)
                </div>
                <div class="figure"><img src="/gallary/docker/Argo_development.png" width="80%"/></div>
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
@import "./style.scss";

</style>