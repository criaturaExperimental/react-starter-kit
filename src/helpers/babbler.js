import getRandomArbitrary from './randomizer';

const babbling = [
  'Master', 'Comprehend', 'Grasp',
  'Understand', 'Expert', 'Get the knack of',
  'Learn', 'How to'
]

const endBabbling = [
  'in a week', 'in 24 hours', 'in a lifetime', 'in minutes', 'in less than you think', 'swiftly', 'in a year', 'fast', 'for dummies'
]

export default function pluckTitle() {
  return {
    'first': babbling[getRandomArbitrary(0, babbling.length)],
    'second': endBabbling[getRandomArbitrary(0, endBabbling.length)]
  }
}