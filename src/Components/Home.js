import React, { useState, useEffect } from 'react';
import './Home.css';
import 'animate.css';
import Typewriter from 'typewriter-effect';

function Home() {
  const [currentEvent, setCurrentEvent] = useState(0);
  const [animationClass, setAnimationClass] = useState('animate__slideInRight');

  const events = [
    // Example event (add or remove as needed)
    // {
    //   title: "Sample Event",
    //   poster: "event-poster.png",
    //   description: "This is a sample event.",
    //   date: "25th June 2025",
    //   speaker: "Dr. Sample",
    //   time: "4:00 PM",
    //   link: "https://example.com"
    // }
  ];

  const notifications = [
    {
      poster: "25_EVENTS/notification posters/notification1.jpg",
      title: "IEEEXtreme 19.0 Student Ambassador Announcement",
      message:
        "We’re proud to share that Nitin Mutayala has been selected as the IEEEXtreme 19.0 Student Ambassador from our Student Chapter, representing all four VIT campuses in India— VIT Vellore, VIT Chennai, VIT Bhopal, and VIT-AP (Amaravati).",
      date: "21st June 2025",
    }
  ];

  useEffect(() => {
    if (events.length === 0) return;

    const interval = setInterval(() => {
      setAnimationClass('animate__slideOutLeft');
      setTimeout(() => {
        setCurrentEvent((prev) => (prev + 1) % events.length);
        setAnimationClass('animate__slideInRight');
      }, 400);
    }, 6000);

    return () => clearInterval(interval);
  }, [events.length]);

  const event = events[currentEvent];

  return (
    <div className='Home animate__animated animate__fadeIn'>
      <div className="homesec1">
        <div className="homechapname">
          <p className="homewelcome">Welcome to,</p>
          <p className="homechaptername">IEEE POWER ELECTRONICS SOCIETY</p>
          <p className="homeclgname">
            <Typewriter
              onInit={(typewriter) => {
                typewriter.pauseFor(1000)
                  .typeString("VELLORE INSTITUTE OF TECHNOLOGY, VELLORE")
                  .start();
              }}
            />
          </p>
        </div>

        <div className="homeintro">
          <p className="homeintrotitle">Introduction</p>
          <p className="homeintrodetail">
            The Power Electronics Society (PELS) is one of the fastest-growing technical societies of IEEE.
            For over 30 years, PELS has facilitated and guided development and innovation in power electronics technology.
          </p>
        </div>

        <div className="homebranchvision">
          <p className="homebranchvisiontitle">Student Branch Vision</p>
          <p className="homebranchvisiondetail">
            The primary purpose of the IEEE student branch is to Inspire, Enable, Empower, and Energize student members
            by providing a platform to showcase their skills.
          </p>
        </div>

        <div className="homebranchmission">
          <p className="homebranchmissiontitle">Student Branch Mission</p>
          <ul className="homebranchmissiondetail">
            <li>Inspire more students to become members</li>
            <li>Increase membership retention</li>
            <li>Organize technical awareness programs</li>
            <li>Form Special Interest Groups</li>
            <li>Encourage new papers and projects</li>
            <li>Strive for IEEE-sponsored awards</li>
          </ul>
        </div>
      </div>

      <div className="homesec2">
        <div className="homechapterlogosec2" />

        <div className="homePromoVideo">
          <video
            src="Ready to power your future withIEEEPELS.mp4"
            controls
            autoPlay
            loop
            muted
          />
        </div>

        {(events.length > 0 || notifications.length > 0) && (
          <div className="eventNotificationSection">
            <div className="upcomingEventsTitle">
              <h2>📢 Upcoming Events & Notifications</h2>
            </div>

            {events.length > 0 && (
              <div className={`upcomingEventCard animate__animated ${animationClass}`}>
                <img src={event.poster} alt={event.title} className="eventPoster" />
                <h3>{event.title}</h3>
                <p><strong>Description:</strong> {event.description}</p>
                <p><strong>Date:</strong> {event.date}</p>
                <p><strong>Speaker:</strong> {event.speaker}</p>
                <p><strong>Time:</strong> {event.time}</p>
                {event.link && (
                  <a
                    href={event.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="registerBtn"
                  >
                    Register Now
                  </a>
                )}
              </div>
            )}

            {notifications.length > 0 && (
              <div className="notificationCard">
                {notifications.map((note, index) => (
                  <div key={index} className="singleNotification">
                    <img src={note.poster} alt={note.title} className="notificationPoster" />
                    <h4>{note.title}</h4>
                    <p>{note.message}</p>
                    <p><strong>Date:</strong> {note.date}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

          <div className="newsletterSection">
          <div className="newsletterContent">
            <h2>📰 IEEE PELS NEWSLETTER 2025</h2>
            <p>Stay updated with our latest news, events, and announcements</p>
            <a href="Newsletter.pdf" download className="downloadNewsletterBtn">
              📥 Download Newsletter PDF
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
