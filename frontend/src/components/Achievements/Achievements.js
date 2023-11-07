import React, { useState } from 'react';
import achievementsData from './achievementsData';
import staticData from './staticData';

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
      <h1>Achievements
        <svg aria-hidden="true" role="img" data-name="Newspaper" className="d-icon d-icon--newspaper d-icon--size-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" data-qa="dt-icon">
          <g clipPath="url(#dtIcon2002__a)">
            <path fill="currentColor" fillRule="evenodd"
              d="M2.94.94A1.5 1.5 0 0 1 4 .5h6A1.5 1.5 0 0 1 11.5 2v8A1.5 1.5 0 0 1 10 11.5H2A1.5 1.5 0 0 1 .5 10V5.5C.5 4.674 1.174 4 2 4h.5V2c0-.398.158-.78.44-1.06ZM2.5 5H2c-.274 0-.5.226-.5.5V10a.5.5 0 0 0 1 0V5Zm.914 5.5A1.5 1.5 0 0 0 3.5 10V2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5H3.414ZM4.5 3a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H5a.5.5 0 0 1-.5-.5V3ZM4.5 7a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5Zm0 2a.5.5 0 0 1 .5-.5h2.5a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5" clipRule="evenodd"></path>
          </g>
          <defs>
            <clipPath id="dtIcon2002__a">
              <path fill="#fff" d="M0 0h12v12H0z"></path>
            </clipPath>
          </defs>
        </svg>
      </h1>

      <div className="static-cards">
        {staticData.map((achievement) => (
          <div key={achievement.id} className="static-card">
            <h3>{achievement.name}</h3>
            <p>{achievement.description}</p>
          </div>
        ))}
      </div>

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
        <div className="d-card d-w264">
          <div className="d-card__header">
            <div className="displayed-achievements d-ta-center d-bc-magneta-200 d-ba">
              <h2>{displayedAchievements.month} Achievements</h2>
              <div className="achievement-cards">
                {displayedAchievements.achievements.map((achievement) => (
                  <div key={achievement.id} className="achievement-card">
                    <h3 className="d-badge d-badge--count d-badge--info">{achievement.name}</h3>
                    <p>{achievement.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Achievements;
