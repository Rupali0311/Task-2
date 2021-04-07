import logo from './logo.svg';
import './DashBoard.css';

function DashBoard() {
  return (
    <div className="DashBoard">
     <p className="head"> DashBoard 2<br/>
      Saturday, January 30, 2021   11:47 AM</p>
      <div className="navbar">
        <div className="navbar-content" >LOGO</div> 
        <div className="navbar-content">HOME</div> 
        <div className="navbar-content">DASHBOARD</div> 
        <div className="navbar-content">MY COURSES</div> 
        <div className="navbar-content">ACHIEVEMENTS</div> 
        <div className="navbar-content">FORUM</div> 
      </div>
      <div className="body">
        <div className="up">
          <div className="upcoming_lessons">UPCOMING LESSONS
          <div className="innerBox1">
            <p className="content-left">June 10<br/>4:00 PM</p>
            <p className="content-middle">ALGEBRA - II <br/>MATHS</p>
            <div className="pic">PIC</div>
          </div>
          <div className="innerBox2"></div>
          <div className="innerBox3"></div>
          </div>
          <div className="tasks_to_do">TASKS TO DO</div>
          <div className="leaderboard">LEADERBOARD</div>
      </div>
      <div className="down">
          <div className="my_courses"><p className="para-left">MY COURSES</p>
          <p className="para-right">SEE ALL</p>
          <div className="maths">
            <div className="smallBox"></div>
            <p className="sub">MATHS<br/>30 LESSONS</p>
            <div className="bigBox"></div>
          </div>
          <div className="physics">
          <div className="smallBox"></div>
            <p className="sub">PHYSICS<br/>32 LESSONS</p>
            <div className="bigBox"></div>

          </div>
          </div>
          <div className="homework_progress">HOMEWORK PROGRESS</div>
          <div className="graph">GRAPH</div>
      </div>
    </div>
    </div>
  );
}


export default DashBoard;
