module.exports = {
  checktoken:(req,res,next)=>{
    var decoded = jwt.verify(req.headers.token,'secret')
    let fine = 1000*(new Date(in_date)-(new Date(Number(new Date(out_date))+Number(new Date(days*1000*60*60*24)))))/(1000*60*60*24)
    if(fine<0){
      fine=0
    }
    next()
  }
};