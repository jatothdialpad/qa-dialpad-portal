const achievementsData = [
  {
    month: 'January',
    team: 'Automation',
    achievements: [
      {
        id: 1,
        name: 'Test Automation coverage',
        description: (
          <ul>
            <li>Dialpad web automation coverage increased by 3% (39 to 42) including partially automated cases.</li>
            <li>We have automated 3 additional zoho test cases (The total number of Zoho cases are 26 , We are executing them as part of weekly regression) </li>
            <li>We have automated 10 MS dynamics test cases and 1 copper test case. </li>
          </ul>
        ),
        icon: 'novice.png',
      },
      {
        id: 2,
        name: 'New initiatives',
        description: "Test execution time reduction - UI + API integrations - Work In Progress",
        icon: 'explorer.png',
      },
      {
        id: 3,
        name: 'ZTP Automation',
        description: "Implemented logic to run on Stable chrome  or canary chrome. Now this execution is hassle free, so by passing parameters we can execute in stable chrome or canary chrome",
        icon: 'explorer.png',
      },
    ],
  },
  {
    month: 'January',
    team: 'Manual',
    achievements: [
      {
        id: 11,
        name: 'Manual Testing Beginner',
        description: 'You started your journey in manual testing.',
        icon: 'manual-novice.png',
      },
      {
        id: 12,
        name: 'Manual Explorer',
        description: "You've performed 20 manual test cases.",
        icon: 'manual-explorer.png',
      },
    ],
  },
  {
    month: 'February',
    team: 'Automation',
    achievements: [
      {
        id: 4,
        name: 'Scripting Pro',
        description: 'You\'ve written custom test scripts for various platforms.',
        icon: 'scripting-pro.png',
      },
      {
        id: 5,
        name: 'Defect Detective',
        description: 'You\'ve found and reported 5 automation-related defects.',
        icon: 'defect-detective.png',
      },
    ],
  },
  {
    month: 'February',
    team: 'Manual',
    achievements: [
      {
        id: 13,
        name: 'Manual Scripter',
        description: 'You\'ve created manual test scripts for critical scenarios.',
        icon: 'manual-scripter.png',
      },
      {
        id: 14,
        name: 'Manual Quality Champion',
        description: 'You\'ve ensured high-quality manual test execution.',
        icon: 'manual-champion.png',
      },
    ],
  },
];

// import Fetch from '../Fetch/Fetch';
// const achievementsData = Fetch('http://localhost:4000/api/dp-qa/acheivements');
// console.log(achievementsData);

export default achievementsData;
