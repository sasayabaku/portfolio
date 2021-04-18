---
title: Docker
description: 'Container Platform'
color: '#3D4BBAB0'
img: '/gallary/docker/docker_head.png'
---

* APIサーバの実装
* 機械学習モデルの評価
* 各種テスト実行
をコンテナで実装、色々やってます。

---

# Case 1

### Motivation
機械学習のパイプラインを作成するときに、「データ加工」・「学習」・「評価」をそれぞれ異なる担当者が実装。

* データ加工 : Ruby
* 学習 : Python
* 評価 : C++

と、各種異なる言語で実装されていた。

### Action
言語統一の実装コストを考慮して、各パイプラインタスク雨をDockerコンテナでひとまとめにした。  
パイプラインを自動実行するために、 **Argo Workflow**を採用。  
(コンテナとの親和性を考慮し、Apache AirflowではなくArgoを採用)
    
---

# Case 2

GCP / AWSなどのクラウド環境にコンテナをデプロイ。