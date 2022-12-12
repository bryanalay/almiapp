import axios from 'axios'


async function getData(setPostData){
    //const { setPostData } = useData()
    try {
       await axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((result) => setPostData(result.data))
    } catch (error) {
        console.log(error)
    }
}

export { getData }