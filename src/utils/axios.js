import axios from "axios";

const BaseClient = axios.create({
    baseURL: "http://localhost:9001",
});

export default BaseClient;
