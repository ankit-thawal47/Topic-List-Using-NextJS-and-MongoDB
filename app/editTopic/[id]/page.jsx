import EditTopicForm from "@/components/EditTopicForm";

const getTopicByID = async (id) => {

    try {
      const res = await fetch(`http://localhost:3000/api/topics/${id}`,
      {
        cache : "no-store",
      });

      if(!res.ok){
        throw new Error("Failed to fetch topic");
        return;
      }
      
      return res.json();

    }catch(error) {
      console.log("err ", error)
    }
};

export default async function editTopic({params}){
  const {id} = params;
   console.log(id);

   const {topic} = await getTopicByID(id);
   const {title, description} = topic;
  return (
    <EditTopicForm id={id} title={title} description={description}/>
  )
}

