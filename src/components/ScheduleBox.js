import React, { useState, useEffect } from 'react';
import './ScheduleBox.css';
import { FaArrowRight } from 'react-icons/fa';

const Schedule = () => {
  // Define state variables for clock timer and date
  const [currentTime, setCurrentTime] = useState('');
  const [currentDate, setCurrentDate] = useState('');
  const [subscribed, setSubscribed] = useState(false);
    // Handle subscription
    const handleSubscribe = (e) => {
      e.preventDefault();
      setSubscribed(true);
    };
  
    // Handle unsubscription
    const handleUnsubscribe = () => {
      setSubscribed(false);
    };
  

  // Update the current time and date every second
  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString());
      setCurrentDate(now.toLocaleDateString('en-GB')); // Date format: ddmmyy
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  // Define the static subjects
  const staticSubjects = ['Physics', 'Chemistry'];

  // Define the dynamic subjects
  const dynamicSubjects = ['Botany', 'Zoology']; // Alternating between Botany and Zoology

  // Get the current day of the week (0 for Sunday, 1 for Monday, ..., 6 for Saturday)
  const currentDayOfWeek = new Date().getDay();

  // Get the day name based on the current day of the week
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const currentDayName = days[currentDayOfWeek];

  // Determine the subject for the current week
  const currentWeekNumber = Math.ceil(new Date().getDate() / 7);
  const currentDynamicSubject = dynamicSubjects[(currentWeekNumber - 1) % dynamicSubjects.length];

  // Concatenate static and dynamic subjects
  const subjects = [...staticSubjects, currentDynamicSubject];

  // Define the start time and end time
  const startTime = '08:00'; // Start time
  const endTime = '12:30'; // End time

  // Define the duration for each class (1 hour and 25 minutes)
  const classDuration = 85; // in minutes

  // Define the gap between classes (5 minutes)
  const gapBetweenClasses = 5; // in minutes

  // Get the current time in minutes
  const currentTimeInMinutes = new Date().getHours() * 60 + new Date().getMinutes();

  // Initialize an array to hold schedules for today
  let todaySchedules = [];

  // Check if today is a class day (excluding Sunday)
  if (currentDayOfWeek !== 0) {
    // Iterate over the subjects
    for (let i = 0; i < subjects.length; i++) {
      // Calculate the start time for the current subject's class today
      let classStartTime = new Date(`2024-02-05T${startTime}`);
      if (subjects[i] === 'Botany' || subjects[i] === 'Zoology') {
        // Skip Botany or Zoology classes on absent class days (Wednesday and Sunday)
        if (currentDayOfWeek !== 3 && currentDayOfWeek !== 7) {
          const daysToAdd = currentDayOfWeek === 1 ? 0 : 7; // If Monday, don't add days; otherwise, add 7 days
          classStartTime = new Date(classStartTime.getTime() + daysToAdd * 24 * 60 * 60 * 1000);
        } else {
          continue; // Skip Botany or Zoology classes on absent class days
        }
      }

      const subjectClassStartTime = new Date(classStartTime.getTime() + (i * (classDuration + gapBetweenClasses)) * 60000);
      const subjectClassEndTime = new Date(subjectClassStartTime.getTime() + classDuration * 60000);

      // Define the status for the current class
      let status;
      if (currentTimeInMinutes < subjectClassStartTime.getHours() * 60 + subjectClassStartTime.getMinutes()) {
        status = 'Upcoming';
      } else if (currentTimeInMinutes >= subjectClassStartTime.getHours() * 60 + subjectClassStartTime.getMinutes() && currentTimeInMinutes <= subjectClassEndTime.getHours() * 60 + subjectClassEndTime.getMinutes()) {
        status = 'Ongoing';
      } else {
        status = 'Over';
      }

      // Create a schedule object for the current subject
      const schedule = {
        subject: subjects[i],
        startTime: subjectClassStartTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        endTime: subjectClassEndTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        status: status
      };

      // Add the schedule to the array
      todaySchedules.push(schedule);
    }
  }



  // Display schedules for today's subjects
  return (
    <>
      <div className="schedule">
        <h2>Schedule for {currentDayName} - {currentDate}</h2>
        <div className='currentTime'>{currentTime}</div> {/* Display current time */}
        {todaySchedules.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th>Subject</th>
                <th>Start Time</th>
                <th>End Time</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {todaySchedules.map((schedule, index) => (
                <tr key={index}>
                  <td>{schedule.subject}</td>
                  <td>{schedule.startTime}</td>
                  <td>{schedule.endTime}</td>
                  <td className={schedule.status === 'Over' ? 'over' : schedule.status === 'Going' ? 'going' : 'upcoming'}>{schedule.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No class today.</p>
        )}
      </div>
      <div className="featured-courses">
        <h2>Featured Courses</h2>
        <ul>
           <li>JEE Crash Course: Ace the Exam in 6 Weeks! <FaArrowRight/></li>
           <li>NEET Foundation Program: Start Your Journey to Medical School <FaArrowRight/></li>
           <li>Online JEE Advanced Prep: Master the Toughest Concepts <FaArrowRight/></li>
        </ul>

      </div>
      <div className="newsletter">
        {subscribed ? (
          <h2 style={{ color: 'green' }}>YOU HAVE SUBSCRIBED!</h2>
        ) : (
          <div>
          <h2>SUBSCRIBE TO OUR NEWSLETTER!</h2>
          <form className='newsletter-form' onSubmit={handleSubscribe}>
            <input type="email" placeholder="Enter your email" className="email-newsletter" />
            <button type="submit">Subscribe</button>
          </form></div>
        )}
        {subscribed && (
          <button onClick={handleUnsubscribe}>Unsubscribe</button>
        )}
      </div>
      <div className="testimonials">
  <h2>Student Testimonials</h2>
  <div className="testimonial">
    <p>"I am incredibly grateful to Allen for helping me achieve AIR 1 in JEE Advanced. The guidance, support, and resources provided by the faculty were instrumental in my success. The comprehensive study materials, regular mock tests, and personalized attention boosted my confidence and helped me excel in the exam. I highly recommend Allen to every aspiring engineering student."</p>
    <p>- Mridul Agarwal</p>
    <div className="testimonial-feedback">
      <button className="like-btn">Like</button>
      <button className="dislike-btn">Dislike</button>
    </div>
  </div>
  <div className="testimonial">
    <p>"Allen has been an integral part of my journey to AIR 1 in NEET. The dedicated faculty, excellent teaching methodology, and conducive learning environment played a significant role in my achievement. The regular doubt-solving sessions and practice tests helped me strengthen my concepts and improve my performance. I'm immensely thankful to Allen for guiding me towards success in NEET."</p>
    <p>- Tanishka Yadav</p>
    <div className="testimonial-feedback">
      <button className="like-btn">Like</button>
      <button className="dislike-btn">Dislike</button>
    </div>
  </div>
</div>

    </>
  );
}

export default Schedule;
