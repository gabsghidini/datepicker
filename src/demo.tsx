import * as React from "react";
import dayjs, { Dayjs } from "dayjs";
import "dayjs/locale/pt-br";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const locales = ["en", "fr", "de", "ru", "pt-br"] as const;

export default function ViewsDatePicker() {
  const [value, setValue] = React.useState<Dayjs | null>(dayjs(new Date()));
  const [locale] = React.useState<typeof locales[number]>("pt-br");

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={locale}>
      <Stack spacing={3}>
        <DatePicker
          openTo="year"
          views={["year", "month", "day"]}
          label="Dia, Mês e Ano"
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} helperText={null} />}
        />
      </Stack>
    </LocalizationProvider>
  );
}
