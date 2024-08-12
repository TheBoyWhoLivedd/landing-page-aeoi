import type { FormValues } from '../schemas/RegistrationSchema'

export function getStepFields(step: number): (keyof FormValues)[] {
  const stepFields: (keyof FormValues)[][] = [
    ['institutionName', 'tin', 'institutionType', 'companyEmail', 'address'],
    ['declaration', 'contactPersons']
  ]
  return stepFields[step] || []
}
