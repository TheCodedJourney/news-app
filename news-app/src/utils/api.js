import axios from "axios"
// import { generatePath } from "react-router-dom";

const readersAPI = axios.create({
    baseURL: "https://news-db-hosting.onrender.com/api"
});

export const getArticles = (topic) => {
    return readersAPI.get(`/articles`, {params: {topic: topic}} ).then((res) => {
        return res.data
    });
}

export const getArticle = (article_id) => {
    return readersAPI.get(`/articles/${article_id}`).then((res) => {
        return res.data
    });
}

export const getArticleComments = (article_id) => {
    return readersAPI.get(`/articles/${article_id}/comments`).then((res) => {
        return res.data
    });
}

export const getUsers = () => {
    return readersAPI.get("/users").then((res) => {
        return res.data
    })
}

export const getTopics = () => {
    return readersAPI.get("/topics").then((res) => {
        return res.data
    })
}

export const patchArticleByArticleID = (article_id, increment) => {

    return readersAPI.patch(`/articles/${article_id}`, {
        inc_votes: increment
    })
    .then((res) => {
        console.log(res)

})}