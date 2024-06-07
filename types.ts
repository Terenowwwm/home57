export interface User {
  id: string;
  name: string;
  email: string;
  active: boolean;
  roles: string;
}

export interface UserMutation {
  id: string;
  name: string;
  email: string;
  active: boolean;
  roles: string;
}