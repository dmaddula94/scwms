export const generateMockData = async (type, update, data) => {
    const worker = new Worker("/mockDataWorker.js");

    // worker.addEventListener("message", (e) => {
    //     const { type, data } = e.data;
      
    //     console.log(data);
    //     return data;
    //   });
  
    return new Promise((resolve, reject) => {
      worker.postMessage({ type, update, prevData: data });
  
      worker.onmessage = (e) => {
        const { data } = e;
        resolve(data);
      };
  
      worker.onerror = (error) => {
        reject(error);
      };
    });
  };
  