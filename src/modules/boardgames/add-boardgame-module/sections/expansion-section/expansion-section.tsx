import React from "react";

import { CardContainer } from "@/components";

import { ExpansionInput } from "../../components";
import { useAddBoardgameForm } from "../../providers";

export const ExpansionSection = () => {
  const { form, control, expansion } = useAddBoardgameForm();

  return (
    <CardContainer>
      <ExpansionInput control={control} options={expansion.for} isLoading={form.loading} />
    </CardContainer>
  );
};
