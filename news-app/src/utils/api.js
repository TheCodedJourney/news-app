import axios from "axios"
import { generatePath } from "react-router-dom";

const readersAPI = axios.create({
    baseURL: "https://"
});

export const getArticles = (topic) => {
    return readersAPI.get("/Articles", {params: {topic_slug: topic}}.then((res) => {
        return res.data
    }))
}

export const getUsers = () => {
    return readersAPI.get("/users").then((res) => {
        return res.data
    })
}

export const getTopics = () => {
    return readersAPI.get("/top[ics").then((res) => {
        return res.data
    })
}
