import RemoveBtn from "./RemoveBtn";
import Link from "next/link";
import {HiPencilAlt} from "react-icons/hi" 
import Topic from "@/models/topic";


// const getTopics = async() => {
  
//     try {
//       const res = await fetch(
//         "http://localhost:3000/api/topics",
//         {
//           cache : "no-store",
//         }
//        );

//       if(!res.ok){
//         throw new Error("falied to fetch new errors");
//       }

//       //console.log(res.json());
//       return res.json();

//      } catch(error) {
//         console.log("Error loading topics :", error);
//     }
// };

const getTopics = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/topics", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading topics: ", error);
  }
};

export default async function TopicsList(){

  //const topics = {};
  
  const { topics } = await getTopics();
  // console.log("TOPICS PRINTED HERE")
  // console.log(topics);


  return(
    <>
        {topics.map( (t) => (
          <div className="p-4 border border-slate-400 my-3
            flex justify-between gap-5 items-start">
            <div>
              <h2 className="font-bold text-2xl">{t.title}</h2>
              <div>{t.description}</div>
            </div>

            <div className="flex gap-2">

              <RemoveBtn id={t._id} />
              {/* Remember to use backticks */}
              <Link href={`/editTopic/${t._id}`}>
                <HiPencilAlt size={24} />
              </Link>
            </div>

          </div>
        ))}
    </>
  )
}