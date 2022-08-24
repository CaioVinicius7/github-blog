import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as zod from "zod";

import { SearchFormContainer } from "./styles";

interface SearchFormProps {
  issuesQuantity: number;
}

const searchFormSchema = zod.object({
  query: zod.string()
});

type SearchFormInputs = zod.infer<typeof searchFormSchema>;

function SearchForm({ issuesQuantity }: SearchFormProps) {
  const { register } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema)
  });

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
      />
    </SearchFormContainer>
  );
}

export { SearchForm };
