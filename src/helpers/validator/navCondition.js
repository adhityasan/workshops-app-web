import { get as _get } from 'lodash/object';
import { STRICT_NAVIGATIONS_CONDITION as strictConditions } from 'constant/navigations';

const StrictNavigationChecker = {
  [strictConditions.authenticated]: states => _get(states, 'auth.authenticated'),
  [strictConditions.unauthenticated]: states => _get(states, 'auth.authenticated') === false,
  [strictConditions.hasOrganizer]: states => _get(states, 'me.organizers') !== undefined && _get(states, 'me.organizers').length > 0,
  [strictConditions.noOrganizer]: () => true,
};

export default function (states, conditions = []) {
  // return true when no strict conditions defined
  if (!conditions.length) return true;

  const result = conditions.reduce((finalResult, currentCondition) => {
    if (finalResult === false) return finalResult;
    return StrictNavigationChecker[currentCondition](states);
  }, true);

  return result;
}
