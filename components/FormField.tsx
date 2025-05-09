import React from 'react'
import {FormControl, FormDescription, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Control, Controller, FieldValues} from "react-hook-form";
import * as Path from "node:path";

interface FormFieldProps<T extends FieldValues> {
    control: Control<T>;
    name: Path<T>;
    label: string;
    placeholder?: string;
    type?: 'text' | 'email' | 'password';
}

const FormField = ({control, name, label, placeholder, type =" text"}:FormFieldProps<T>) => (
        <Controller
            control={control}
            name={name}
            render={({field}) => (
            <FormItem>
                <FormLabel className="label">{label}</FormLabel>
                <FormControl>
                <Input className="input" placeholder={placeholder} type={type} {...field} />
                </FormControl>

                <FormMessage />
            </FormItem>

        )}
    />)
export default FormField
