type Jobs = {
  developer: 'developer',
  manager: 'manager',
  designer: 'designer'
}

export interface Person {
  firstName: string;
  lastName: string;
  job: keyof Jobs;
}

export interface Payable {
  pay(amount:number): void;
}

type PartialPerson = Partial<Person>;

type DeveloperPerson = Omit<Person, 'job'> & { job: 'developer' };

type PersonWithoutJob = Omit<Person, 'job'>

type PayablePerson = Person & Payable;

type PersonFields = keyof Person;

export function payPerson(person:PayablePerson) {
  person.pay(100)
}