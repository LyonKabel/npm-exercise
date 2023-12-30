import faker from '@faker-js/faker';

export function getUsers(xUser) {
  
  
  
  

  for (let i = 0; i < xUser; i++) {
    
    return {
    avatar: faker.image.avatar(),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    birthday: faker.date.birthdate(),
    sex: faker.person.sexType(),
    subscriptionTier: faker.helpers.arrayElement(['free', 'basic', 'business']),
    email: faker.internet.email({ firstName, lastName })
    
   }
  
  

   
  }
  
}

