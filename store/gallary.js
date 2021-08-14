export const state = () => ({
    skillsets: [
        {
            id: "1",
            name: 'Docker',
            description: 'Dockerを使ったことをタラタラと記述していくよ',
            imgfile: '/icons/docker.svg',
            clid: "cl-blue"
        },
        {
            id: "2",
            name: 'PyTorch',
            description: 'PyTorchを使ったことをタラタラと記述していくよ',
            imgfile: '/icons/pytorch.svg',
            clid: "cl-red"
        },
        {
            id: "3",
            name: 'React',
            description: 'Reactを使ったことをタラタラと記述していくよ',
            imgfile: '/icons/react.svg',
            clid: 'cl-blue'
        },
        {
            id: "4",
            name: 'Vue',
            description: 'Vueを使ったことをタラタラと記述していくよ',
            imgfile: '/icons/vue.svg',
            clid: 'cl-green'
        }

    ],

    main_skill: [
        {
            id: "1",
            title: "Service Planning",
            main_sentence: "モックアップ / プロトタイピングを用いたサービス企画",
            things: [
                'Prototyping',
                'Customer Journey Map'
            ],
            tools: [
                'Adobe XD',
                'Sketch',
                'Miro'
            ]
        },
        {
            id: "2",
            title: "Machine Learning",
            main_sentence: "データ分析 / 機械学習モデル構築によるAIサービス開発",
            things: [
                'Data Science',
                'Develop Machine Learning'
            ],
            tools: [
                'PyTorch',
                'Scikit-Learn',
                'Jupyter',
                'streamlit',
                'MySQL / NoSQL'
            ]
        },
        {
            id: "3",
            title: "Infrastructure",
            main_sentence: "分析ツール運用 / サービス運用のための基盤設計・運用",
            things: [
                'Container',
                'Cloud Infrastructure'
            ],
            tools: [
                'Docker',
                'GCP / AWS',
                'Kubernetes'
            ]
        }
    ]
})