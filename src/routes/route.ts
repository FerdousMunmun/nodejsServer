import type { IncomingMessage, ServerResponse } from "http";
import productController from "../controllers/product.controller";

const routeHandler =(req : IncomingMessage, res : ServerResponse ) => {

    const url = req.url; // "/", "/products"
         const method =req.method; // "GET", "POST"

         if(url === "/" && method === "GET"){
            //console.log("This is root route");
            res.writeHead(200,{"Content-type" : "application/json"});
            res.end(JSON.stringify({message:"This is roote route!!"}))
        }

else if(url?.startsWith("/products")){
    //product -> GET, PUT, POST
     productController(req,res);
}
        else{
    //console.log("This route is not defned");
    res.writeHead(200,{"Content-type" : "application/json"});
            res.end(JSON.stringify({message:"This route is not defned!!"}))
}

}

export default routeHandler