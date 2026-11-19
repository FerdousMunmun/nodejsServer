import type { IncomingMessage } from "http";


export const bodyParser =(req : IncomingMessage) : Promise<any> => {
     let body = "";
    return new Promise ( (resolve, reject) => {
        req.on("data", (chunk)=> {
            // body = body + chunk
            body += chunk;
        });
       req.on("end", ()=>{
        try {

             // Check if request body is empty
        if (!body.trim()) {
          resolve({});
          return;
        }
            resolve(JSON.parse(body));
        }
        catch (error){
            reject(error);

        }
       })
    });

}