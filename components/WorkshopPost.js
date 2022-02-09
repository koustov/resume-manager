import Link from "next/link";

const WorkshopPost = ({workshop}) =>{
  return(
    <Link href={`workshop/${workshop.slug}`}>
      {workshop.short_name}
    </Link>
  );

}

export default WorkshopPost;