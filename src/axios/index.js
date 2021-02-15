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
}