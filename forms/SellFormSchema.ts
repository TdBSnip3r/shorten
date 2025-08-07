import * as z from "zod/v4";

export const SellFormSchema = z.object({
    price: z.number().min(0, "Il prezzo deve essere maggiore o uguale a 0")
});

export const FORM_FIELDS = [
    {
        label: "Sell Price ($)",
        name: "price",
        placeholder: "0.00",
        type: "number",
    },
];
