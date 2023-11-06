import React, { useState } from 'react';
import achievementsData from './achievementsData';

function Achievements() {
  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedTeam, setSelectedTeam] = useState('');
  const [displayedAchievements, setDisplayedAchievements] = useState(null);

  // Extract unique months and teams using Set data structure
  const uniqueMonths = [...new Set(achievementsData.map(data => data.month))];
  const uniqueTeams = [...new Set(achievementsData.map(data => data.team))];

  const handleButtonClick = () => {
    const matchingAchievements = achievementsData.find(
      (data) => data.month === selectedMonth && data.team === selectedTeam
    );

    setDisplayedAchievements(matchingAchievements);
  };

  return (
    <div className="achievements-page d-ta-center">
      <h1>Achievements</h1>

      <div className="dropdowns">
        <select
          value={selectedMonth}
          onChange={(e) => setSelectedMonth(e.target.value)}
        >
          <option value="">Select Month</option>
          {uniqueMonths.map((month) => (
            <option key={month} value={month}>
              {month}
            </option>
          ))}
        </select>

        <select
          value={selectedTeam}
          onChange={(e) => setSelectedTeam(e.target.value)}
        >
          <option value="">Select Team</option>
          {uniqueTeams.map((team) => (
            <option key={team} value={team}>
              {team}
            </option>
          ))}
        </select>

        <button className="d-btn d-btn--primary d-btn--sm" onClick={handleButtonClick}>Get Details</button>
      </div>

      {displayedAchievements && (
        <div class="d-card d-w264">
        <div class="d-card__header">
        <div className="displayed-achievements d-ta-center d-bc-magneta-200 d-ba">
          <h2>{displayedAchievements.month} Achievements</h2>
          <ul>
            {displayedAchievements.achievements.map((achievement) => (
              <li key={achievement.id}>
                <h3 className="d-badge d-badge--count d-badge--info">{achievement.name}</h3>
                <p>{achievement.description}</p>
              </li>
            ))}
          </ul>
        </div>
        </div>
        </div>
      )}
    </div>
  );
}

export default Achievements;
