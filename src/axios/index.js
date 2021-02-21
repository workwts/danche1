import { Modal } from 'antd';
import axios from 'axios';
import JsonP from 'jsonp';

export default class Axios{
    static jsonp(options){
        return new Promise((resolve,reject)=>{
            JsonP(options.url,{param:"callback"},function (response){
                if(response.code=='200'){
                    resolve(response);
                }else{
                    reject(response.code);
                }
            })
        })
    }

    static ajax(options){
        let loading;
        if(options.data && options.data.isShowLoading !== false){
            loading = document.getElementById('ajaxLoading');
            loading.style.display = 'block'
        }
        let baseApi = "https://www.fastmock.site/mock/e07e0114640b799e1e545ba34e6d8cc7/mockapi";
        return new Promise((resolve,reject)=>{
            axios({
                url:options.url,
                method:'get',
                baseURL:baseApi,
                timeout:5000,
                params:(options.data && options.data.params) || ''
            }).then((response)=>{
                if(options.data && options.data.isShowLoading !== false){
                    loading = document.getElementById('ajaxLoading');
                    loading.style.display = 'none'
                }
                if(response.status === 200){
                    let res=response.data;
                    if(res.code === 0){
                        resolve(res);
                    }else{
                        Modal.info({
                            title:"提示", 
                            content:res.msg
                        })
                    }
                }else{
                    reject(response.data)
                }
            })
        })
    }
}