const storedApp = () =>{

    const storedAppStr = localStorage.getItem("appList")
    if (storedAppStr) {
        const storedAppData = JSON.parse(storedAppStr)
        return storedAppData;
    }
    else {
        return []
    }
}


const addToLocal = (id) =>{

    const storedAppData = storedApp()

    if (storedAppData.includes(id)) {
        alert("id already exist")
    }
    else{
        storedAppData.push(id)
        const data = JSON.stringify(storedAppData)
        localStorage.setItem("appList",data)
    }
}

export { addToLocal, storedApp }
