
import Experience from "@/components/Experience/Experience";
import Hero from "./hero/page";
import MeetShef from "./meetchef/page";
import Menu from "@/components/MenuItem/Menu";
import BlogPost from "@/components/BlogPost/BlogPost";
import RestaurantProcess from "@/components/Resturant/RestaurantProcess";
import Testimonials from "@/components/Testimonials/Testimonial";


export default function Home() {
  return (
   <div>
    <Hero/>
    <MeetShef/>
    <Experience/>
    <Menu/>
    <Testimonials/>
    <RestaurantProcess/>
    <BlogPost/>
   </div>
  );
}
