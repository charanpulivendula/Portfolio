import React,{useEffect} from 'react'
import TagCloud from 'TagCloud'
import './About.scss';
const Skills = ()=>{
    // useEffect(() => {
    //     const container = ".tagcloud";
    //     const texts = [
    //       "Data Structures and Algorithms", "Web Development", "Computer Networks", "Linux", "OS",
    //       "Python", "Java", "C++", "C", "JavaScript",
    //       "Node JS", "Express JS", "HTML", "CSS", "React JS", "MongoDB", "Firebase Database", "MySQL", "GitHub",
    //       "React-Native"
    //     ];
      
    //     let tagCloudInstance = null; // Variable to store the TagCloud instance
      
    //     const updateTagCloud = () => {
    //       const screenWidth = window.innerWidth;
    //       const radius = screenWidth >= 768 ? 400 : 220; // Adjust the breakpoint as needed
      
    //       const options = {
    //         radius: radius,
    //         maxSpeed: "normal",
    //         initSpeed: "normal",
    //         keep: true,
    //       };
      
    //       if (tagCloudInstance) {
    //         // tagCloudInstance.destroy(); // Destroy the previous instance
    //       }
      
    //       tagCloudInstance = TagCloud(container, texts, options);
    //     };
      
    //     updateTagCloud(); // Initial setup
      
    //     window.addEventListener("resize", updateTagCloud); // Update on window resize
      
    //     return () => {
    //       window.removeEventListener("resize", updateTagCloud);
    //       if (tagCloudInstance) {
    //         tagCloudInstance.destroy(); // Cleanup the TagCloud instance
    //       }
    //     };
    //   }, []);
    return(
        <div className='aboutc container mx-auto grid md:grid-cols-2 justify-center md:justify-between' id='skills'>
                <div className='text-shpere mr-auto md:mr-28 mt-0 md:-mt-16 '>
                  <span className="tagcloud"></span>
                  <p>hiiiiiiii</p>
                </div>
        </div>
    );
}

export default Skills