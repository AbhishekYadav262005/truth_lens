exports.detectMedia = async (req,res)=>{

 const filePath = req.file.path;
 const type = req.body.type;

 const userId = req.user.id;

 const fileHash = hashFile(filePath);

 const existing = await Scan.findOne({
  fileHash,
  user:userId
 });

 if(existing){
  return res.json({
   cached:true,
   result:existing
  });
 }

 const uploadResult = await cloudinary.uploader.upload(filePath,{
  resource_type:"auto"
 });

 const cloudUrl = uploadResult.secure_url;

 await detectionQueue.add("scan-job",{
  cloudUrl,
  type,
  fileHash,
  userId
 });

 res.json({
  status:"processing"
 });

};