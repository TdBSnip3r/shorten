import * as z from "zod/v4";

export const EditPriceFormSchema = z.object({
    price: z.number().min(-1, "Il prezzo deve essere maggiore o uguale a -1 (per rimuovere dalla vendita)")
});

export const FORM_FIELDS = [
    {
        label: "Sell Price ($)",
        name: "price",
        placeholder: "0.00",
        type: "number",
    },
];
