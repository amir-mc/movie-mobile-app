import { Client, Databases, ID, Query } from "react-native-appwrite";

const database_id= process.env.EXPO_PUBLIC_APPWRITE_DATABASE_ID!;
const collection_id= process.env.EXPO_PUBLIC_APPWRITE_COLLECTION_ID!;
const client=new Client()
    .setEndpoint(`${process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT!}`)
    .setProject(process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID!

    )
const databse= new Databases(client)
export const updateserchCount=async (query:string,movie:Movie)=>{
    try{

        const result=await databse.listDocuments(database_id,collection_id,[
            
            Query.equal('searchTerm',query)
        ])
    if(result.documents.length>0){
        const existingMovie= result.documents[0];
        await databse.updateDocument(
            database_id,
            collection_id,
            existingMovie.$id,{
                count:existingMovie.count+1
            }
        )
    }else{
        await databse.createDocument(database_id,collection_id,ID.unique(),{
            searchTerm:query,
            movie_id:movie.id,
            count:1,
            title:movie.title,
            poster_url:`https://image.tmdb.org/t/p/w500${movie.poster_path}`
        })
    }
    //console.log(result)
}catch(error) {
    console.log(error)
    throw error
}

}
export const gettrendMovie = async (): Promise<TrendingMovie[]|undefined>=>{
    try {
        
        const result=await databse.listDocuments(database_id,collection_id,[
            
            Query.limit(5),
            Query.orderDesc('count')
        ])
        return result.documents as unknown as TrendingMovie[]
    } catch (error) {
        if(error){
            console.log(error)
            return undefined
        }
    }
}