const hackathon_data = {
  name: "I ❤️ Hackathon Bangalore",
  date: "December 15-17, 2024",
  venue: "Tech Park, Bangalore",
  format: {
    offline: {
      available: true,
      criteria: [
        "Must bring own laptop",
        "Valid ID proof required",
        "Confirmation email must be shown at entry"
      ]
    },
    online: {
      available: true,
      criteria: [
        "Stable internet connection required",
        "Must join Discord server",
        "Camera should be on during key sessions"
      ]
    }
  },
  prizePool: {
    total: "₹1,00,000",
    breakdown: [
      { position: "1st Prize", prize: "₹50,000" },
      { position: "2nd Prize", prize: "₹30,000" },
      { position: "3rd Prize", prize: "₹20,000" }
    ]
  },
  timeline: [
    { event: "Registration Deadline", date: "Dec 10, 2024" },
    { event: "Opening Ceremony", date: "Dec 15, 9:00 AM" },
    { event: "Hacking Begins", date: "Dec 15, 10:00 AM" },
    { event: "Project Submission", date: "Dec 17, 3:00 PM" }
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
export default hackathon_data;