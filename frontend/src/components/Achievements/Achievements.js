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

      <div className="dropdown_month d-mt12">
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
        </div>
        <div className="dropdown_team d-mt12">
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
        </div>
     <div className="button_getdetails d-mt12">
        <button className="d-btn d-btn--primary d-btn--sm" onClick={handleButtonClick}>Get Details</button>
      </div>

      {displayedAchievements && (
        <div class="d-card d-jc-center d-m-auto d-w100p d-m12">
        <div class="d-card__header d-jc-center">
        <div className="displayed-achievements d-ta-center d-bc-magneta-200 d-ba d-jc-center">
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
