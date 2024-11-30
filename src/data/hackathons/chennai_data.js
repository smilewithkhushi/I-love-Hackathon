const chennai_data = {
  name: "I ❤️ Hackathon: Chennai Web3 Edition",
  date: "16-17 December, 2024 (Hybrid)",
  venue: "Vellore Institute of Technology, Chennai",
  description: "Join us for an exhilarating 24-hour hackathon at Vellore Institute of Technology, Chennai, on December 16th and 17th. This hybrid event, organized in collaboration with Hack Club and the DAO community, offers a unique opportunity for tech enthusiasts to innovate, collaborate, and build incredible projects.",

  onlineModeDesc: "",  
  offlineModeDesc: "",

  registrationLink: "https://unstop.com/hackathons/i-love-hackathon-chennai-web3-edition-i-hackathon-series-vit-chennai-1222562 ",
  ideaSubmissionLink: "https://forms.gle/jNDaMwRpkFqGGB7T9",

  discordLink: "https://discord.gg/76zRubDkkj",
  demoPPTLink: "https://docs.google.com/presentation/d/1yLWunb7xTJFfsqhmnnoDjl61PaWVaVyYOmpB_8t5834/edit?usp=sharing",

  format: {
    offline: {
      available: true,
      criteria: [
        "Only the shortlisted teams will be eligible to attend offline hackathon",
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
        "The online hackathon runs during 16-17 Dec, 2024.",
        "The entire team must join Discord server for checkin and updates",
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
    { event: "Registration Deadline", date: "Dec 10, 00:00 AM" },
    { event: "Idea Submission Deadline (for Offline Participation)", date: "Dec 10, 11:59 PM" },
  {event: "Approvals for Offline Participation", date: "Dec 12, 11:59 PM"},
    { event: "Check-in Begins", date: "Dec 16, 8:00 AM" },
    { event: "Opening Ceremony", date: "Dec 16, 9:00 AM" },
    { event: "Hacking Begins", date: "Dec 16, 10:00 AM" },
    { event: "Hacking Ends", date: "Dec 17, 10:00 AM" },
    { event: "Project Submission Deadline", date: "Dec 17, 11:00 AM" },
    { event: "Result Annoucement", date: "Dec 17, 01:00 PM", },
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
export default chennai_data;