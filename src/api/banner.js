export const fetchData = async ()=>{
    const responce = await fetch('https://ch19jv3t-8000.inc1.devtunnels.ms/auth/v1/business/banner',
      {
        method:"GET",
        headers:{
          'Content-type':"application/json"
        },
        body:JSON.stringify()
      }
    )
    return await responce.json()
  }