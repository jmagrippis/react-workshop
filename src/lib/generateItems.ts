import faker from 'faker'
import { TodoItem } from './types'

export const generateItems = (
  count: number = faker.random.number({ min: 5, max: 50 })
): TodoItem[] =>
  [...Array(count).keys()].map(() => ({
    id: faker.random.uuid(),
    title: `Call ${faker.company.companyName()}`,
    address: faker.address.streetAddress(),
  }))
