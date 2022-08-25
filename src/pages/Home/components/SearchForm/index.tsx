import { zodResolver } from "@hookform/resolvers/zod";
import { ChangeEvent } from "react";
import { useForm } from "react-hook-form";
import * as zod from "zod";

import { SearchFormContainer } from "./styles";

interface SearchFormProps {
  issuesQuantity: number;
  filterIssues: (filter: string) => void;
}

const searchFormSchema = zod.object({
  query: zod.string()
});

type SearchFormInputs = zod.infer<typeof searchFormSchema>;

function SearchForm({ issuesQuantity, filterIssues }: SearchFormProps) {
  const { register } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema)
  });

  function handleSearchIssue(event: ChangeEvent<HTMLInputElement>) {
    filterIssues(event.target.value);
  }

  return (
    <SearchFormContainer>
      <div>
        <strong> Publicações </strong>
        <span> {issuesQuantity} publicações </span>
      </div>
      <input
        type="text"
        placeholder="Buscar conteúdo"
        autoComplete="off"
        {...register("query")}
        onChange={handleSearchIssue}
      />
    </SearchFormContainer>
  );
}

export { SearchForm };
