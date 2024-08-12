import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Form } from "../ui/form";
import { Stepper, Step, useStepper } from "@/components/stepper";
import {
  type FormValues,
  RegistrationSchema,
} from "./schemas/RegistrationSchema";
import StepOne from "./components/StepOne";
import StepTwo from "./components/StepTwo";
import StepperFormActions from "./components/StepperFormActions";

const steps = [
  { label: "Step 1", description: "Reporting Institution Information" },
  { label: "Step 2", description: "Contact Person Details for AEOI Matters" },
];

const defaultValues: FormValues = {
  institutionName: "",
  tin: "",
  institutionType: "",
  companyEmail: "",
  address: "",
  contactPersons: [
    {
      contactTin: "",
      contactFirstName: "",
      contactOtherNames: "",
      contactPosition: "",
      contactEmail: "",
      contactTel: "",
    },
  ],
  declaration: false,
};

const RegistrationForm = ({
  onSubmitSuccess,
}: {
  onSubmitSuccess: () => void;
}) => {
  const form = useForm<FormValues>({
    resolver: zodResolver(RegistrationSchema),
    defaultValues,
  });
  const { setStep } = useStepper();

  let toastId: string | number;

  async function onSubmit(data: FormValues) {
    console.log("Data", data);

    if (data.contactPersons.length < 2) {
      toast.error("At least two contacts are required.");
      return;
    }

    toastId = toast.loading("Submitting Registration..", {
      position: "top-center",
    });

    toast(
      <div>
        <div className="font-bold">You submitted the following values:</div>
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      </div>
    );

    form.reset({
      institutionName: "",
      tin: "",
      institutionType: "",
      companyEmail: "",
      address: "",
      contactPersons: [],
      declaration: false,
    });
    setStep(0);
    onSubmitSuccess();
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="lg:px-25 w-full rounded-md bg-background p-2 shadow-md md:p-8"
      >
        <Stepper
          orientation="vertical"
          variant="circle-alt"
          initialStep={0}
          steps={steps}
        >
          {steps.map((stepProps, index) => {
            if (index === 0) {
              return (
                <Step key={stepProps.label} {...stepProps}>
                  <StepOne />
                </Step>
              );
            }

            return (
              <Step key={stepProps.label} {...stepProps}>
                <StepTwo />
              </Step>
            );
          })}
          <StepperFormActions />
        </Stepper>
      </form>
    </Form>
  );
};

export default RegistrationForm;
