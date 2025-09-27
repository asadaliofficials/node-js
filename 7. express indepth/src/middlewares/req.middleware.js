function reqMiddeware(req, res, next){
  console.log(`req recieved at ${req.url}`);
  next();
}

export default reqMiddeware;