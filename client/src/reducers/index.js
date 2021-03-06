import { combineReducers } from 'redux';
import {toggleModal} from './reducer-modal.js';
import {updateUserToyProblemModal} from './reducer-update-user-toy-problem-modal.js';
import {newUserToyProblemModal} from './reducer-new-user-toy-problem-modal.js';
import {toggleNav} from './reducer-nav.js';
import {updatePrompt} from './reducer-prompt';
import {updateCode} from './reducer-code';
import {updateOnlineUsers} from './reducer-online-users';
import {updateCurrentSession} from './reducer-current-session';
import {updateRoomId} from './reducer-room-id';
import {updateButtonStatus} from './reducer-button-status';
import {updateTestResults} from './reducer-test-results';
import {updateSessionsData} from './reducer-session';
import {updateUserProfileData} from './reducer-profile';
import {updateUsersFriends} from './reducer-friends';
import {toggleDashboard} from './reducer-dashboard';
import {userToyProblems} from './reducer-user-toy-problems';
import {currentUserToyProblem} from './reducer-current-user-toy-problem';
import {populateLeaderboard} from './reducer-leaderboard';
import {updateCurrentTime} from './reducer-current-time';
import {updateSkeletonCode} from './reducer-skeleton';
import {updateSolutionCode} from './reducer-solution';
import {setNewSkeletonCode} from './reducer-new-skeleton';
import {setNewSolutionCode} from './reducer-new-solution';
import {updateCurrentQuestion} from './reducer-current-question';
import {updateSearch} from './reducer-updateSearch';
import {updatePartnerData} from './reducer-partner-data';

export default combineReducers({
  partnerData: updatePartnerData,
  currentQuestion: updateCurrentQuestion,
  modal: toggleModal,
  nav: toggleNav,
  prompt: updatePrompt,
  currentTime: updateCurrentTime,
  code: updateCode,
  onlineUsers: updateOnlineUsers,
  currentSession: updateCurrentSession,
  roomId: updateRoomId,
  buttonStatus: updateButtonStatus,
  testResults: updateTestResults,
  sessionData: updateSessionsData,
  userProfileData: updateUserProfileData,
  testResults: updateTestResults,
  userFriendData: updateUsersFriends,
  isDashboard: toggleDashboard,
  userToyProblems: userToyProblems,
  updateUserToyProblemModal: updateUserToyProblemModal,
  newUserToyProblemModal: newUserToyProblemModal,
  currentUserToyProblem: currentUserToyProblem,
  leaderboard: populateLeaderboard,
  skeletonCode: updateSkeletonCode,
  solutionCode: updateSolutionCode,
  newSkeletonCode: setNewSkeletonCode,
  newSolutionCode: setNewSolutionCode,
  leaderboard: populateLeaderboard,
  searchResults: updateSearch,
});
