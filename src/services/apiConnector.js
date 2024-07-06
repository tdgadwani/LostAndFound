import axios from "axios";

const axiosInstance = axios.create({
    withCredentials: true,
});

const apiConnector = (method,url,bodyData,headerData,paramsData) => {
    return axiosInstance({
        method: `${method}`,
        withCredentials: true,
        url: `${url}`,
        data: bodyData ? bodyData : null,
        headers: headerData ? headerData : null,
        params: paramsData ? paramsData : null,
    });
};

export {
    apiConnector,
}