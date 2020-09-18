let {list}=require('./Mock/index')
module.exports={
    devServer:{
        before(app){
            app.get('/api/list',(req,res)=>{
                res.json({
                    code: 0,
                    data: list.listdata

                   
                })
            })
        }
    }
}