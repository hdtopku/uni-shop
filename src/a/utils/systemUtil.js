export const getSystemInfo = ()=>{
  try{
    const systemInfo = uni.getSystemInfoSync()
    let {model, system, platform, deviceId} = systemInfo
    return {model, system, platform, deviceId}
  }catch(e){
    //TODO handle the exception
    console.error(e)
    return null
  }
}