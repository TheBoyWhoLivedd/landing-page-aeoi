import * as z from "zod";

const nameRegex = /^[a-zA-Z\s\-'.()[\]]+$/;
const phoneRegex = /^[0-9\s\-()+]+$/;

const ContactSchema = z.object({
  contactTin: z
    .string()
    .regex(
      /^\d{10}$/,
      "TIN must be a 10-digit number without special characters."
    ),
  contactFirstName: z
    .string()
    .min(1, "First Name is required.")
    .regex(
      nameRegex,
      "First Name can only contain alphanumeric characters, spaces, hyphens, and apostrophes."
    ),
  contactOtherNames: z
    .string()
    .min(1, "Other Names are required.")
    .regex(
      nameRegex,
      "Other Names can only contain alphanumeric characters, spaces, hyphens, and apostrophes."
    ),
  contactPosition: z
    .string()
    .min(1, "Position is required.")
    .regex(
      nameRegex,
      "Position can only contain alphanumeric characters, spaces, hyphens, and apostrophes."
    ),
  contactEmail: z.string().email("Invalid email format."),
  contactTel: z
    .string()
    .min(1, "Telephone is required.")
    .regex(
      phoneRegex,
      "Telephone can only contain digits, spaces, hyphens, parentheses, and plus signs."
    ),
});

export const RegistrationSchema = z.object({
  institutionName: z
    .string()
    .min(1, "Reporting Entity Name is required.")
    .regex(
      nameRegex,
      "Reporting Entity Name can only contain alphanumeric characters, spaces, hyphens, and apostrophes."
    ),
  tin: z
    .string()
    .regex(
      /^\d{10}$/,
      "TIN must be a 10-digit number without special characters."
    ),
  institutionType: z.string().min(1, "Entity Type is required."),
  companyEmail: z.string().email("Invalid email format."),
  address: z
    .string()
    .min(1, "Address is required.")
    .regex(
      nameRegex,
      "Address can only contain alphanumeric characters, spaces, hyphens, and apostrophes."
    ),
  contactPersons: z.array(ContactSchema),
  declaration: z.boolean(),
});

export type FormValues = z.infer<typeof RegistrationSchema>;
