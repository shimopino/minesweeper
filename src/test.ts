let a: number;
let b: boolean;
let c: string;

type User = {
  name: string;
  surname: string;
  age: number;
  isAdmin: boolean;
};

let user: User = {
  name: 'shimokawa',
  surname: 'keisuke',
  age: 30,
  isAdmin: true,
};

type MathFunc = (a: number, b: number) => number;

const mul: MathFunc = (a, b) => a * b;

const add = (a: number, b: number) => a * b;

interface BasicUser {
  name: string;
  surname: string;
  age: number;
  isAdmin: boolean;
  //   permissions?: string[]
}

interface UserWithPermissions extends BasicUser {
  permissions: string[];
}

const user2: UserWithPermissions = {
  name: 'shimokawa',
  surname: 'keisuke',
  age: 30,
  isAdmin: true,
  permissions: [],
};

export {};
