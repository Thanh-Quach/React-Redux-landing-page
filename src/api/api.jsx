import * as UrlConst from "./UrlConst";
import axios from 'axios';


export default class Api {
//stripe through php api
    static async getPrice(){
        return axios.get(UrlConst.StripeDomain + UrlConst.Prices)
    }


//authentication
    static async login(username, password) {
        return axios.post(UrlConst.AuthDomain + UrlConst.Login,{
            accountId: username,
            password,
        })
      }

    static async getAccountInfo(token) {
        return axios.get(UrlConst.AdminDomain + UrlConst.GetAccountInfo,
        {
            headers: {
            Authorization: `bearer ${token}`,
            },
        }
        );
    }
}