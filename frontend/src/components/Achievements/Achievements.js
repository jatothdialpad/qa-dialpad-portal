import React, { useState } from 'react';
import achievementsData from './achievementsData';
import staticData from './staticData';
import Accordion from '../Acordion/Acordion';

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
    <div class="customer-stories-cards d-wmx1268 d-m-auto">
      <div className="achievements-page">
        <h1 className='d-headline54 d-my16 d-ta-center'>Achievements</h1>
        <div className="static-cards d-d-grid d-gg16 d-g-cols4 d-ac-center">
          {staticData.map((achievement) => (
            <div key={achievement.id} className="card-details d-ta-center">
              <h3 className='d-headline32'>{achievement.name}</h3>
              <p className='d-headline16'>{achievement.description}</p>
            </div>
          ))}
        </div>
        <div className="dropdown-wrapper d-d-flex d-jc-space-around d-ai-center d-my32 d-wmx512 d-m-auto">
          <div className="dropdown_month d-mt12">
            <select value={selectedMonth} onChange={(e) => setSelectedMonth(e.target.value)}>
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
            <button className="d-btn d-btn--primary d-btn--lg" onClick={handleButtonClick}>Get Details</button>
          </div>
        </div>
        {displayedAchievements && (
          <div className="">
            <div className="">
              <div className="displayed-achievements d-ta-center d-bc-magneta-200">
                <h2 className='d-headline48 d-mb32'>{displayedAchievements.month} Achievements</h2>
              </div>
              <>
                <div className="achievement-cards d-bt d-btw1">
                  {displayedAchievements.achievements.map((achievement) => (
                    <Accordion title={achievement.name} content={achievement.description}/>
                    // <Accordion key={achievement.id} className="achievement-card d-bb d-bbw1 d-p">
                    //   <div onClick={openTab()}  
                    //    onClick={toggleAccordion}
                    //     className={isOpen ? 'd-py16 d-c-pointer achievement-card-header' : 'd-py16 d-c-pointer achievement-card-header active'}>
                    //       <h3 className="d-fs-400">{achievement.name}</h3>
                    //   </div>
                    //   {isOpen &&<div className='d-d-none'>{achievement.descripton}</div>}
                    // </Accordion>
                  ))}
                </div>
              </>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Achievements;
