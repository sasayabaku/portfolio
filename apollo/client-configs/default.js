export default ({ $config }) => {
    const accessToken = $config.githubURL;

    return {
        httpEndpoint: "https://api.github.com/graphql",
        getAuth: () => `Bearer ${accessToken}`
    };
}