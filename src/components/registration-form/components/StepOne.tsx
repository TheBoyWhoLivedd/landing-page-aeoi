import { useFormContext } from "react-hook-form";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "../../ui/form";
import { Input } from "../../ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FormHeading } from "../../ui/form-heading";
import type { FormValues } from "../schemas/RegistrationSchema";
import { toast } from "sonner";
import { institutionTypes } from "@/lib/data";

const StepOne = () => {
  const form = useFormContext<FormValues>();

  let toastId: string | number;

  return (
    <div className="mb-8">
      <FormHeading title="Reporting Institution Information" />
      <div className="mt-2 grid grid-cols-1 gap-4 md:grid-cols-2">
        {/* TIN */}
        <FormField
          name="tin"
          control={form.control}
          render={({ field }) => (
            <FormItem className="flex flex-col items-start gap-2">
              <FormLabel>Company TIN</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  onChange={(e) => {
                    field.onChange(e);
                    form.clearErrors("tin");
                  }}
                  placeholder="URA Tax Identification Number of Reporting Institution"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Reporting Entity Name */}
        <FormField
          name="institutionName"
          control={form.control}
          render={({ field }) => (
            <FormItem className="flex flex-col items-start gap-2">
              <FormLabel>Reporting Entity Name</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  onChange={(e) => {
                    field.onChange(e);
                    form.clearErrors("institutionName");
                  }}
                  placeholder="Name as written in URSB"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Entity Type */}
        <FormField
          name="institutionType"
          control={form.control}
          render={({ field }) => (
            <div className="flex flex-col items-start gap-4">
              <FormLabel>Entity Type</FormLabel>
              <Select
                onValueChange={(value) => {
                  field.onChange(value);
                  form.clearErrors("institutionType");
                }}
                value={field.value}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select Type of Reporting Institution" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {Object.entries(institutionTypes).map(([value, label]) => (
                      <SelectItem key={value} value={value}>
                        {label}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
              <FormMessage />
            </div>
          )}
        />
        {/* Company Email ID */}
        <FormField
          name="companyEmail"
          control={form.control}
          render={({ field }) => (
            <FormItem className="flex flex-col items-start gap-2">
              <FormLabel>Company Email</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  onChange={(e) => {
                    field.onChange(e);
                    form.clearErrors("companyEmail");
                  }}
                  placeholder="Email ID of the URA Authorised Contact Person"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Address */}
        <FormField
          name="address"
          control={form.control}
          render={({ field }) => (
            <FormItem className="flex flex-col items-start gap-2">
              <FormLabel>Address</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  onChange={(e) => {
                    field.onChange(e);
                    form.clearErrors("address");
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </div>
  );
};

export default StepOne;
