function fetchData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const data = { name: "John", age: 30 };
        resolve(data);
      }, 2000);
    });
  }
  
  fetchData()
    .then((data) => {
      console.log("Data fetched successfully:", data);
    })
    .catch((error) => {
      console.error("Error occurred while fetching data:", error);
    });
  