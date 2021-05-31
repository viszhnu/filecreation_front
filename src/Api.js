import axios from "axios";

export function getApi(){
    return axios.get("https://filecreationbackend.herokuapp.com/");
}

export function postApi(){
    return axios.post("https://filecreationbackend.herokuapp.com/");
}
