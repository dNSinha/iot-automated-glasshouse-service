/**
 * An interface for a User type that we construct from API calls that are protected by Trv-Auth
 */
export interface User {
  userName: string;
  userGroups: Array<string>;
  userRoles: Array<string>;
}
