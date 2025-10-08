import Swal from 'sweetalert2/dist/sweetalert2.js'

const storedApp = () =>{

    const storedAppStr = localStorage.getItem("appList")
    if (storedAppStr) {
        const storedAppData = JSON.parse(storedAppStr).map(id => Number(id))
        return storedAppData;
    }
    else {
        return []
    }
}


const addToLocal = (id) =>{

    const storedAppData = storedApp()

    if (storedAppData.includes(Number(id))) {
        return false; 
    }

    storedAppData.push(Number(id));
    localStorage.setItem("appList", JSON.stringify(storedAppData));
    return true;
}

const removeFromLocal = (id) => {
    const getLocalData = storedApp()

    const removeApp = getLocalData.filter(appId => appId !== id)

    localStorage.setItem("appList", JSON.stringify(removeApp));
}




export { addToLocal, storedApp, removeFromLocal }
