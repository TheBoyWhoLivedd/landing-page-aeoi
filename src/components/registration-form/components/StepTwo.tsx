import { useFormContext, useFieldArray } from "react-hook-form";
import { Plus, Trash2, User } from "lucide-react";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";
import { FormHeading } from "@/components/ui/form-heading";

const StepTwo = () => {
  const form = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "contactPersons",
  });

  const addContact = () => {
    append({
      contactTin: "",
      contactFirstName: "",
      contactOtherNames: "",
      contactPosition: "",
      contactEmail: "",
      contactTel: "",
    });
  };

  return (
    <div className="space-y-6">
      <FormHeading title="Contact Person Details for AEOI Matters" />
      {fields.map((field, index) => (
        <Card
          key={field.id}
          className="overflow-hidden transition-shadow duration-300 hover:shadow-md"
        >
          <CardHeader className="flex items-center justify-between bg-gray-50">
            <h3 className="text-lg flex items-center font-medium text-gray-900">
              <User className="mr-2" size={18} />
              {index === 0 ? "Primary Contact" : `Secondary Contact ${index}`}
            </h3>
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={() => remove(index)}
              className="text-red-500 hover:text-red-700"
            >
              <Trash2 size={18} />
            </Button>
          </CardHeader>
          <CardContent className="mt-2 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <FormField
              name={`contactPersons.${index}.contactTin`}
              control={form.control}
              render={({ field }) => (
                <FormItem className="flex flex-col items-start">
                  <FormLabel>TIN</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Enter TIN"
                      className="w-full"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name={`contactPersons.${index}.contactFirstName`}
              control={form.control}
              render={({ field }) => (
                <FormItem className="flex flex-col items-start">
                  <FormLabel>First Name</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Enter first name"
                      className="w-full"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name={`contactPersons.${index}.contactOtherNames`}
              control={form.control}
              render={({ field }) => (
                <FormItem className="flex flex-col items-start">
                  <FormLabel>Other Names</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Enter other names"
                      className="w-full"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name={`contactPersons.${index}.contactPosition`}
              control={form.control}
              render={({ field }) => (
                <FormItem className="flex flex-col items-start">
                  <FormLabel>Position</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Enter position"
                      className="w-full"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name={`contactPersons.${index}.contactEmail`}
              control={form.control}
              render={({ field }) => (
                <FormItem className="flex flex-col items-start">
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="email"
                      placeholder="Enter email"
                      className="w-full"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name={`contactPersons.${index}.contactTel`}
              control={form.control}
              render={({ field }) => (
                <FormItem className="flex flex-col items-start">
                  <FormLabel>Telephone</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="tel"
                      placeholder="Enter telephone"
                      className="w-full"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
        </Card>
      ))}
      <Button
        type="button"
        variant="outline"
        onClick={addContact}
        className="flex w-full items-center justify-center"
      >
        <Plus className="mr-2" size={18} />
        Add Another Contact Person
      </Button>
      <FormField
        name="declaration"
        control={form.control}
        render={({ field }) => (
          <div className="mt-6 flex items-start space-x-2">
            <Checkbox
              id="declaration"
              checked={field.value}
              onCheckedChange={field.onChange}
              className="mt-1"
            />
            <label htmlFor="declaration" className="text-sm text-gray-700">
              I hereby declare that the above information is correct to the best
              of my knowledge
            </label>
          </div>
        )}
      />
    </div>
  );
};

export default StepTwo;
