//isLoggedIn=>

export const isLoggedIn = () => {
    let data = localStorage.getItem("data")
    if (data == null) {
        return false;
    }
    return true;
}

//doLogin=> data set to local storage

export const doLogin = (data, next) => {
    localStorage.setItem("data", JSON.stringify(data))
    next()
}

//doLogout=> remove from localstorage

export const doLogout = (next) => {
    localStorage.removeItem("data")
    next()
}

//get currentUser

export const getCurrentUserDetail = () => {
    if (isLoggedIn()) {
        return JSON.parse(localStorage.getItem("data")).user
    }
    return undefined;
}

export const getToken = () => {
    if (isLoggedIn()) {
        return JSON.parse(localStorage.getItem("data")).token;
    } else {
        return null;
    }

}