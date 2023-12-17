import axios from "axios";
export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'93685a5b63b640dfb72a204b769f5dcb'
    }
})