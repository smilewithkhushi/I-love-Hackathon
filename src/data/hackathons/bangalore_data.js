

const bengaluru_data = {
  name: "I ❤️ Hackathon: Bengaluru Web3 Edition",
  date: "21-23 Dec (Online) & 27 Dec (Pitch Day)",
  venue: "Microsoft Office, Bengaluru",
  description: "Get ready to conclude the exciting I ❤️ Hackathon Series 2024 with a bang! In collaboration with Bharat DAO, we're organizing the final hackathon in Bengaluru. This two-phase event offers a unique opportunity for tech enthusiasts to showcase their skills and innovative ideas.",
  onlineModeDesc: "Kickstart your hacking journey from the comfort of your home. Dive into a 48-hour online hacking marathon, where you can collaborate with fellow innovators, brainstorm ideas, and build groundbreaking projects.",
  offlineModeDesc: "The most promising projects will be selected to present their work at Microsoft Office, Bengaluru. A distinguished panel of judges will evaluate your pitch and technical prowess. The winning teams stand a chance to win a prize pool worth over $1000, project grants, and exclusive gifts.",
 
  
  registrationLink: "https://unstop.com/hackathons/i-love-hackathon-bangalore-web3-edition-i-love-hackathon-series-microsoft-students-partners-1234613",
  discordLink: "https://discord.gg/76zRubDkkj",
  demoPPTLink: "https://docs.google.com/presentation/d/1yLWunb7xTJFfsqhmnnoDjl61PaWVaVyYOmpB_8t5834/edit?usp=sharing",
  ideaSubmissionLink: "https://forms.gle/tecAjwyGPYTgMLtc6",

  format: {
    offline: {
      available: true,
      criteria: [
        "Only the shortlisted teams will be eligible to attend offline Pitch day",
        "Teams will be shortlisted on the basis of their Ideas",
        "Shortlisted teams can refine their project after getting shortlisted for offline pitch day",
        "Participants Must bring own laptop",
        "Valid ID proof required for all participants",
        "Confirmation email must be shown at entry",
        "Participants must reach the location on time",
      ]
    },
    online: {
      available: true,
      criteria: [
        "All the registered teams will be eligible to participate in the online hackathon",
        "The online hackathon runs from 21 Dec to 23 Dec, 2024.",
        "The whole team must join Discord server for checkin and updates",
        "Only one submission per team will be eligible for the hackathon",
        "Only the team leader must fill the idea/project submission form",
        "Participants must attend the opening and closing ceremonies",
        "Participants should be active during mentoring sessions",
      ]
    }
  },
  prizePool: {
    total: "$1000+",
    breakdown: [
      { position: "1st Prize", prize: "$300" },
      { position: "2nd Prize", prize: "$200" },
      { position: "3rd Prize", prize: "$100" },
      { position: "Female Participation", prize: "Winning teams with at least one female participant will be eligible for a 20% increase in their base prize." },
    ]
  },
  timeline: [
    { event: "Registration Begins", date: "Nov 20, 2024" },
    { event: "Registration Deadline", date: "Dec 20, 00:00 Am" },
    { event: "Opening Ceremony", date: "Dec 21, 9:00 AM" },
    { event: "Online Hacking Begins", date: "Dec 21, 10:00 AM" },
    { event: "Online Hacking Ends", date: "Dec 23, 10:00 AM" },
    { event: "Project Submission Deadline", date: "Dec 23, 01:00 PM" },
    { event: "Shortlisting of Top 30 Teams", date: "Dec 24, 12:00 PM", },
    { event: "Offline Pitch Day Begns", date: "Dec 27, 9:00 AM", },
    { event: "Offline Pitch Day Ends", date: "Dec 27, 5:00 PM", },
  ],
  eligibility: [
    "Open to all college students",
    "Must be 18 years or older",
    "Valid college ID required"
  ],
  teamSize: {
    min: 2,
    max: 4
  }
};
export default bengaluru_data;