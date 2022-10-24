const apiUrl = "http://localhost:3000/";

// get data
const getData = async () => {
    const response = await fetch(apiUrl, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });
    const data = await response.json();
    return data;
};

// post data
const postData = async (data) => {
    await fetch(apiUrl, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
        },
    });
};

// delete data
const deleteData = async (id) => {
    await fetch(apiUrl + "" + id, {
        method: "DELETE",
    });
};







