import * as z from "zod/v4";

export const ShortUrlSchema = z.object({
    longUrl: z.url("Please enter a valid URL"),
});
