export interface iUser {
  email: string;
  password: string;
  role: 'admin' | 'user';
}

export const Users: iUser[] = [
  {
    email: 'admin@admin.com',
    role: 'admin',
    password: 'admin1',
  },
  {
    email: 'dboss@gmail.com',
    password: 'user321',
    role: 'user',
  },
];
