document.addEventListener('DOMContentLoaded', function() {
  const schedule = {
    "Monday": [
      {"time": "7:15-8:45", "subject": "Weekly Test"},
      {"time": "8:45-10:15", "subject": "Electronics Device And Circuit(PA)"},
      {"time": "11:00-12:30", "subject": "Eng Math III(SS)"},
      {"time": "12:30-2:00", "subject": "OOP(AS)"},
      {"time": "2:00-4:15", "subject": "Electronic Device and Ckt Prac. A1/A2 Alt Week (PA+SS)"}
    ],
    "Tuesday": [
      {"time": "7:15-8:45", "subject": "EX503 Electromagnetics (RK)"},
      {"time": "8:45-10:15", "subject": "TOC (SB)"},
      {"time": "10:00-12:30", "subject": "EX501 Electronics Device and Circuit(PA)"},
      {"time": "12:30-1:15", "subject": "OOP(AS)"},
      {"time": "1:15-3:30", "subject": "Digital Logic Prac. A1 (SS+SB) / OOP Prac. A1 (AS + RK)"}
    ],
    "Wednesday": [
      {"time": "7:15-8:45", "subject": "OOP (AS)"},
      {"time": "8:45-10:15", "subject": "EX502 Digital Logic (SS)"},
      {"time": "10:00-12:30", "subject": "TOC (SB)"},
      {"time": "12:30-1:15", "subject": "EE501 Electric Ckt Theory"},
      {"time": "1:15-2:00", "subject": "Electromagnetics Prac. BCT A1/A2 (PA+Dr.SP) Alt. Week/Electromagnetics Tutorial A2/A1 Alt Week (SS)"}
    ],
    "Thursday": [
      {"time": "7:15-8:45", "subject": "EX503 Electromagnetics (RK)"},
      {"time": "8:45-10:15", "subject": "EE501 Electric C. Th. (MBD)"},
      {"time": "11:00-12:30", "subject": "EX502 Digital Logic (SS)"},
      {"time": "12:30-1:15", "subject": "TOC(SB)"},
      {"time": "1:15-3:30", "subject": "Digital Logic Prac.A2 (SS+RK)/OOP Prac A1(AS+RS)"}
    ],
    "Friday": [
      {"time": "7:15-8:00", "subject": "OOP (AS)"},
      {"time": "8:00-9:30", "subject": "EE501 Electric Circuit Theory (MBD)"},
      {"time": "9:30-10:15", "subject": "EX501 Electronics Device and Circuit (PA)"},
      {"time": "11:00-11:45", "subject": "EX502 Digital Logic (SS)"},
      {"time": "11:45-12:30", "subject": "SH 501 Engg. Maths III (GBJ)"},
      {"time": "12:30-2:00", "subject": "SH 501 Engg. Maths III (MKS)"},
      {"time": "2:00-2:45", "subject": "Elect. Circuit Th. Prac. (KP+RK) A2/A1 Alt. Week (2:00-4:15)/Electromagnetics Tutorial A1/A2 Alt Week (SS) (2:00-2:45)"}
    ]
  };

  function getTodayAndTomorrow() {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const today = new Date().getDay();
    const tomorrow = (today + 1) % 7;
    return { today: days[today], tomorrow: days[tomorrow] };
  }

  function renderSchedule(day) {
    const scheduleContainer = document.getElementById('schedule');
    scheduleContainer.innerHTML = '';
    const daySchedule = schedule[day] || [];

    daySchedule.forEach(item => {
      const div = document.createElement('div');
      div.className = 'schedule-item';
      div.innerHTML = `<strong>${item.time}</strong><p>${item.subject}</p>`;
      scheduleContainer.appendChild(div);
    });
  }

  document.getElementById('today-btn').addEventListener('click', () => {
    const { today } = getTodayAndTomorrow();
    renderSchedule(today);
  });

  document.getElementById('tomorrow-btn').addEventListener('click', () => {
    const { tomorrow } = getTodayAndTomorrow();
    renderSchedule(tomorrow);
  });

  // Render today's schedule by default
  const { today } = getTodayAndTomorrow();
  renderSchedule(today);
});
