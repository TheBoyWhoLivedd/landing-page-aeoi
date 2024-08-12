import { useFormContext } from 'react-hook-form'
import { Button } from '../../ui/button'
import { useStepper } from '@/components/stepper'
import type { FormValues } from '../schemas/RegistrationSchema'
import { getStepFields } from '../utils/getStepFields'

const StepperFormActions = () => {
  const form = useFormContext<FormValues>()
  const { nextStep, currentStepIndex, prevStep, isLastStep, isDisabledStep } =
    useStepper()
  const declarationChecked = form.watch('declaration')

  function next() {
    const currentStepFields = getStepFields(currentStepIndex)
    form.trigger(currentStepFields).then((isValid) => {
      if (!isValid) return

      // if (currentStepIndex === 1) {
      //   const contactId = form.getValues('contactId')
      //   if (!contactId || contactId.length < 2) {
      //     form.setError('contactId', {
      //       type: 'manual',
      //       message:
      //         'Please upload at least 2 images (Front and Back) for contact ID.'
      //     })
      //     return
      //   }
      // }

      if (!isLastStep) {
        nextStep()
      }
    })
  }

  return (
    <div className="flex w-full justify-end gap-2">
      <Button
        disabled={isDisabledStep}
        onClick={prevStep}
        size="sm"
        variant="secondary"
        type="button"
      >
        Prev
      </Button>
      {isLastStep && (
        <Button size="sm" type="submit" disabled={!declarationChecked}>
          Finish
        </Button>
      )}
      {!isLastStep && (
        <Button onClick={next} size="sm" type="button">
          Next
        </Button>
      )}
    </div>
  )
}

export default StepperFormActions
