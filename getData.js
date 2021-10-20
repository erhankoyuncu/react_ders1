import axios from "axios";

async function getData(user_id){
    const {data : post1} = await  axios("https://jsonplaceholder.typicode.com/users/"+user_id)
    
    const {data : post2 } = await axios("https://jsonplaceholder.typicode.com/posts?userId="+user_id);
    console.log(post1)
    console.log(post2)
}
export default getData;
 

