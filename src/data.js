export const API_KEY = 'AIzaSyDywZU65vj5jGLePRl85pyrKA8sK91Uh2g'

export const ViewConvertor = (value)=>{
    if(value>=1000000){
        return (value/1000000).toFixed(2)+'M'
    }
    else if(value>=1000){
        return Math.floor(value/1000)+'K'
    }
    else{
        return value
    }
}