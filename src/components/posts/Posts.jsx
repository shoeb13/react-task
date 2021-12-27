import Post from "../post/Post";
import "./posts.css";

export default function Posts(props) {
  return (
    <div className="posts">
       {props.blogs.map((newBlog,index)=>{
             
             return(

      <Post img="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" 
      
      key={index}
             id={index}
             title={newBlog.title}
             post={newBlog.post}
      
      />
      )

    })
 }


     
    </div>
  );
}
