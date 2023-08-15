import "./about.css"
import Award from "../../img/award.png"
import illustration from '../../img/8.jpg'

const About = () => {
  return (
    <div className='a'>
        <div className="a-left">
            <div className="a-card bg"></div>
            <div className="a-card">
                <img src={illustration} className= "a-img" alt="" />
            </div>
        </div>
        <div className="a-right">
            <h1 className="a-title">About Me</h1>
            <p className="a-sub">
            I am a motivated and skilled Third-year student pursuing a B.Tech in Computer Science and Engineering at Uttaranchal University, Dehradun. I am passionate about web development and am actively seeking internship opportunities and projects to enhance my skills and gain practical experience.



            </p>
            {/* <p className="a-desc">
            I am dedicated to delivering high-quality work and am eager to contribute to projects that challenge me to learn and grow. With my strong technical skills and enthusiasm, I am confident that I can make a valuable contribution to any team
            </p> */}
            <div className="a-award">
                <img src= {Award} alt="" className="a-award-img" />
                <div className="a-award-text">
                    <h4 className="a-award-title">Develop My Way</h4>
                    <p className="a-award-desc">
                        Got 3rd Position in Web Development Competition
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About