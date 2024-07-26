enum Role {ADMIN = 'admin', AUTHOR = '', SUPERUSER = ''}

const Enumperson = {
    name: 'Maximilian',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  role: Role.ADMIN
}

if(Enumperson.role === Role.ADMIN) {
    console.log("role is admin")
}